// Vercel Node.js Serverless Function
// Required Vercel environment variables:
//   GENUINEIN_API_KEY  (secret; never expose to browser)
//   GENUINEIN_GPIN     (the profile owner’s authorized 10-character GPIN)

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const apiKey = process.env.GENUINEIN_API_KEY;
  const gpin = process.env.GENUINEIN_GPIN;

  if (!apiKey || !gpin) {
    return res.status(503).json({
      success: false,
      error: "GenuineIn integration is not configured yet."
    });
  }

  // Do not accept a GPIN from the browser: only expose the profile
  // explicitly configured by the site owner.
  if (!/^[A-Za-z0-9]{10}$/.test(gpin)) {
    return res.status(503).json({
      success: false,
      error: "The configured GenuineIn profile identifier is invalid."
    });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const upstream = await fetch(
      `https://genuinein.com/api/v1/profile/${encodeURIComponent(gpin)}`,
      {
        method: "GET",
        headers: {
          "X-API-Key": apiKey,
          "Accept": "application/json"
        },
        signal: controller.signal
      }
    );

    if (!upstream.ok) {
      // Keep upstream details and credentials out of public responses.
      return res.status(upstream.status === 401 || upstream.status === 403 ? 502 : 502)
        .json({
          success: false,
          error: "GenuineIn could not provide the authorized profile. Check the API key, GPIN, and granted scopes."
        });
    }

    const payload = await upstream.json();
    if (payload?.success !== true || !payload?.data) {
      return res.status(502).json({
        success: false,
        error: "GenuineIn returned an unexpected profile response."
      });
    }

    const data = payload.data;
    // Allow-list only the sections intended for the public portfolio.
    // Sections absent from the API response or not granted to the key stay absent.
    const publicProfile = {};
    if (data.profile && typeof data.profile === "object") {
      publicProfile.profile = {
        name: typeof data.profile.name === "string" ? data.profile.name : undefined,
        title: typeof data.profile.title === "string" ? data.profile.title : undefined
      };
    }

    for (const section of [
      "skills",
      "certifications",
      "credentials",
      "recognition",
      "projects"
    ]) {
      if (Array.isArray(data[section])) publicProfile[section] = data[section];
    }

    return res.status(200).json({ success: true, data: publicProfile });
  } catch (error) {
    return res.status(502).json({
      success: false,
      error: error?.name === "AbortError"
        ? "GenuineIn took too long to respond. Please try again."
        : "Unable to reach GenuineIn. Please try again later."
    });
  } finally {
    clearTimeout(timeout);
  }
}
