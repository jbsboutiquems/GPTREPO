# GenuineIn profile integration (Vercel)

This folder's companion serverless endpoint is `/api/genuinein-profile`. It is a starter integration for the Life OS: Off*Script site; it is not active on the live site until the code is deployed with the site's frontend.

## What it does

- Calls GenuineIn's REST profile endpoint from a server-side Vercel function.
- Keeps the GenuineIn API key out of browser JavaScript.
- Uses a single, owner-configured GPIN; browsers cannot choose arbitrary GPINs.
- Returns only the public-portfolio sections `profile.name`, `profile.title`, `skills`, `certifications`, `credentials`, `recognition`, and `projects`.
- Does not cache responses and does not return the upstream error body.

GenuineIn only returns sections permitted by the API key's scopes. Missing sections may mean the key does not have permission to read them.

## Required Vercel environment variables

Configure these on the Vercel project that will actually deploy this code:

- `GENUINEIN_API_KEY`: the secret API key from GenuineIn → Settings → Career Data API.
- `GENUINEIN_GPIN`: the 10-character GPIN for the profile owner who has authorized the display.

Never put either value in client-side JavaScript, a `NEXT_PUBLIC_*` variable, source control, or a public issue. Do not use the documentation's example GPIN unless the profile owner has explicitly confirmed it is their own authorized profile.

## Verify before launch

1. Add both environment variables to the intended Vercel project for Production (and Preview only if needed).
2. Deploy this endpoint to a controlled preview first.
3. Request `/api/genuinein-profile`. Confirm it returns only the profile sections intentionally approved for public display.
4. Test missing/invalid credentials and confirm no secret appears in the response or browser bundle.
5. Add a frontend section that renders skills, credentials/certifications, recognition, and projects with loading, empty, and error states.

## Current project limitation

The existing `lifeosoffscript.vercel.app` domain is attached to Vercel project `site-fix`, whose inspected production deployment reports repository `jbsboutiquems/Tabletrepo`. The `jbsboutiquems/GPTREPO` repository is currently a separate, nearly empty repository. This starter code is stored in GPTREPO only; it does not modify the live Vercel project or switch its Git connection.
