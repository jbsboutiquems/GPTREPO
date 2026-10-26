# Off*Script Location Game Layer — Innie World Integration Notes

**Status:** Design preserved for future implementation; not implemented in the current V1 prototype.  
**Source:** User-provided *Off*Script Location Game Layer — Design Brief* (consolidated 2026-10-06).

## Product north star

> Pay for privacy and things. Never for play.

The free tier should offer the full core game, not a restricted demo. Paid options may support private play, extra hosting capacity, and physical goods; community play should not require a purchase.

## Core experience

- Atlas-Earth-style territory growth paired with a host-defined travel radius.
- A host places 5–10 task pins within the chosen radius. Only players physically within the eligible zone can participate.
- Completing hunts can grow territory.
- Prompt-bank tasks are anchored to real-world places.
- Innie World’s avatar and Familiar buddy are the identity/companion layer for these experiences.

## Hunt creation and modes

### Host verification
- A host must visit every proposed site within 24 hours after starting verification.
- Each clue needs one GPS check-in and one verification photo.
- The hunt goes live only after every pin is verified; otherwise the draft expires.
- Exactly one hint is allowed per clue.
- Hosts set the hunt duration, such as two hours, 24 hours, or a weekend.

### Guided and community hunts
- **Guided:** small crew, with the host at each point or traveling with the group.
- **Community/open:** free to join; the app checks GPS and photo proof at checkpoints and supports a live leaderboard.
- The host can be at the finish line rather than escorting every player. The finish line is the gathering point for the party, leaderboard reveal, photos, and stories.
- Community event announcements require at least one hour of notice. Private games can start on demand.

## Trinket hide-and-seek

- The object being hidden is a trinket, never a person.
- The hider photographs the trinket in place; that photo is the clue.
- The first seeker to photograph the found trinket wins. The activity is asynchronous and does not require live human-location sharing.
- Private mode is for a host’s trinket and invited friends. One payer can invite free players.

## QR/NFC token system

The design brief favors low-cost QR/NFC tags over expensive live GPS tokens.

- Target physical format: 4×4, QR on reverse, double-laminated, tabbed for hanging.
- A registration ritual uses a base token that a player decorates and seals, then scans to register.
- Five-token product concepts:
  1. **Scavenger hunt:** five checkpoints, sequential clue unlock or free-roam.
  2. **Trinket hide-and-seek:** a token/trinket is hidden and a photo provides the clue.
  3. **Live tag:** scan-to-tag with a laser-tag-like range rule and last-player-standing goal.
- Paid private-mode users may design a token using a doodle, photo, or inside joke and generate a printable sheet with unique QR codes.
- Physical tokens carry their own play access: buy the item, play that item, without requiring an account upgrade.
- Only paid accounts register QR tokens, while anyone can scan a found token to join a game.
- Free players can join community hunts, scan wild tokens, and print at-home tokens. Completing three hunts earns one active free-host slot; paid accounts can have more slots immediately.
- For print-yourself kiosks, save a phone-friendly token image and link to retailer photo-upload pages rather than assuming a third-party print API exists.

## Missing-trinket fallback

1. First choice: find the trinket and scan/tag it.
2. If the trinket is gone: GPS check-in at the pin plus an arrival photo matching the host’s verification photo gives a smaller “spot found” win.
3. A seeker can flag the trinket as missing; the host is notified to confirm, replace it, or convert the clue to location-only.

The host’s verification photo is the reference truth. In community games, the token itself can be the trinket.

## Safety and technical constraints

- Do not allow home addresses as hunt pins.
- Hunt locations need flagging/approval; player visibility is opt-in.
- Foreground-only location is the MVP constraint in the brief.
- GPS spoofing may be tolerable for casual play, but prize-bearing games require stronger verification.
- Radius-gated notifications use opt-in channels: all, hunts only, tag only, or mute.
- Map tile usage is a budget consideration as usage grows.
- Never share a person's live location as part of trinket hide-and-seek.

## Implementation boundary for current V1

The current Innie World V1 is a local, browser-first 2D prototype. It does **not** yet implement GPS, radius checks, maps, territory ownership, hunt hosting, pin/photo verification, QR registration/scanning, NFC, push notifications, leaderboards, prizes, payments, or multiplayer. The current Familiar “I claimed this” action is manual and local, not a real-world location verification.

Before implementation, this design needs a separately approved MVP build spec and a privacy/security review. Location access must be explicit, contextual, foreground-only, and opt-in; do not add GPS collection as a silent background feature. Prize-bearing play requires a defined anti-cheat and dispute policy.


## Related Off*Script app-review guardrail

The separately uploaded *Off*Script Life OS — App Review and Corrections* records that the demo QR token `PACK-DEMO-2027` must only be seeded when `ENABLE_DEMO_TOKEN=1` is explicitly set for local QA, and must not be accepted by a production client. Production token flows should use real server-issued QR tokens. If this location-game layer later reuses that app’s token infrastructure, preserve this guardrail and verify it with tests. The app review also records a TypeScript 5.9.x compatibility correction for the existing Capacitor project; that is specific to the app build and does not require a change to this static Innie World prototype.

These are reference requirements only. No Off*Script app source or repository was modified as part of this integration.
