# Innie World — Nationwide Familiar Mapping Proposal

**Status:** planning proposal only. No nationwide Familiar rollout, new character roster, GPS tracking, backend change, or deployment is authorized by this document.

## Purpose

Create a scalable map plan for future Field Familiars across the United States while preserving the five verified Mississippi zones exactly. A map pin or shaded area is a proposed coverage region, not proof that a Familiar exists there or that a player has unlocked it.

## Existing, verified Mississippi seed zones

| ID | City | Familiar | Epithet | Radius |
|---|---|---|---|---:|
| biloxi | Biloxi, MS | Sin Bin | The Penalty Box Instigator | 12 km |
| kosciusko | Kosciusko, MS | Rouxgarou | Feral Swamp Gremlin King | 12 km |
| orange-grove | Orange Grove, MS | Red Reb | The Extra-Innings Instigator | 5 km |
| gulfport | Gulfport, MS | The Admiral | Commander of the Almost-Sea | 5 km |
| hattiesburg | Hattiesburg, MS | Golden Eagle | The Blitz Coordinator | 8 km |

These five are the only currently verified Familiar territories in the supplied app specification. Preserve their IDs, names, epithets, radii, voices, greetings, prompts, colors, and overlap-choice behavior.

## Nationwide coverage map — proposed planning regions

Use these as **research and coverage-planning regions only**, not as active unlock zones or approved character assignments.

| Planning region | Coverage states | Suggested first research anchors | Status |
|---|---|---|---|
| Northeast | ME, NH, VT, MA, RI, CT, NY, PA, NJ | Boston, New York City, Philadelphia | Unmapped; no Familiar assigned |
| Mid-Atlantic & Capital | DE, MD, DC, VA, WV | Washington, DC; Baltimore; Richmond | Unmapped; no Familiar assigned |
| Southeast | NC, SC, GA, FL, AL | Atlanta, Charlotte, Miami | Unmapped; no Familiar assigned |
| Deep South & Lower Mississippi | MS, LA, AR, TN | Jackson, New Orleans, Memphis | Mississippi seed zones verified; all other zones unapproved |
| Midwest & Great Lakes | OH, MI, IN, IL, WI, MN, IA, MO | Chicago, Detroit, Minneapolis | Unmapped; no Familiar assigned |
| Great Plains | ND, SD, NE, KS, OK | Kansas City, Omaha, Oklahoma City | Unmapped; no Familiar assigned |
| Mountain & Southwest | MT, ID, WY, CO, UT, NV, AZ, NM, TX | Denver, Phoenix, Dallas, Albuquerque | Unmapped; no Familiar assigned |
| Pacific | CA, OR, WA, AK, HI | Los Angeles, San Francisco, Seattle, Honolulu | Unmapped; no Familiar assigned |

These macro-regions are a practical way to plan research. They are not official app geography, and the suggested anchors do not imply that any city has been surveyed, approved, or assigned a Familiar.

## How to turn the planning map into real territories

1. **Research candidate locations.** Start with places that can support a distinctive local voice, story, and safe public-area experience. Do not invent a Familiar name, epithet, greeting, colors, or radius and present it as owner-approved.
2. **Create candidate records off by default.** Each proposal should include a stable ID, city/state, grounded coordinates, proposed radius, Familiar identity fields, provenance, review status, and an explicit enabled flag defaulting to false.
3. **Review geographic coverage and overlap.** Avoid implying that the country is fully covered by sparse city circles. Show gaps honestly. Where multiple eligible zones overlap, return all eligible Familiar choices and ask the player which one to claim; never silently auto-pick.
4. **Keep location private.** Request location only after the player deliberately chooses the Field locate action. Match locally using quantized Haversine logic and discard raw coordinates after matching. Never publish a user's precise position.
5. **Separate unlock from ownership and selection.** A verified visit can unlock a Familiar once. Ownership is permanent; the player can equip an unlocked Familiar anywhere. Store unlocked ownership separately from active selection. Do not require repeated visits to equip.
6. **Do not confuse app records with world state.** Existing Field claims are local-only. Nationwide permanent ownership requires an approved authenticated server contract and must not be faked by a client-side claim button.
7. **Pilot before expanding.** Verify a small approved set, test overlap and denied-permission flows, review accessibility and safety, then request approval before enabling further regions.

## Data shape to consider (not an existing API)

```ts
type FamiliarZoneProposal = {
  id: string;
  city: string;
  state: string;
  center: { lat: number; lng: number };
  radiusKm: number;
  familiarId: string;
  status: "draft" | "review" | "approved";
  enabled: boolean; // false until explicitly approved
  sourceNotes: string[];
};
```

Do not add this schema to the production app until its ownership, review, and API contracts are approved.

## Open decisions for Amber

- Which city or region should be researched first after Mississippi?
- Should future Familiars be city-centered, event-centered, or a mix?
- What criteria make a new Familiar's identity and voice feel genuinely local?
- Who approves new character records and their radii before activation?

## Boundary

This is a map strategy, not a country-wide launch. No new Familiar characters, live zones, GPS unlocks, ownership records, account changes, public pages, or deployments are created by this plan.
