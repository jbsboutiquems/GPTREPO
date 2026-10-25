# Innie World — V1

A browser-first, single-player prototype for Life OS: Off*Script. The first slice is self-contained so it can be reviewed before choosing a larger 3D engine or adding accounts/backend services.

## Run it
Open [index.html](./index.html) in a modern browser, or serve this folder with any static web server. There is no package install or build step.

## Included in this first slice
- Small illustrated world with keyboard movement (WASD/arrows) and touch controls.
- Customizable 2D placeholder avatar: name, skin tone, hair color, outfit color, accent color.
- Required zodiac identity, selectable manually or inferred from an optional birth date.
- The five official Mississippi Field Familiars are represented in-world: Sin Bin (Biloxi), Rouxgarou (Kosciusko), Red Reb (Orange Grove), The Admiral (Gulfport), and Golden Eagle (Hattiesburg).
- A selected unlocked Familiar visibly follows the avatar; unlocked companions remain saved and can be swapped. The UI distinguishes an in-world manual confirmation from a verified app claim.
- Local browser persistence for profile choices and world position.
- Optional selfie reference preview that stays in page memory and is neither uploaded nor persisted.
- Mobile-friendly layout and an in-app help panel.

## Honest limitations
This is a working **2D prototype**, not a finished 3D world. It does **not** generate a 3D avatar from a selfie and does not export VRM/GLB. Selfie-to-3D needs a separate technical evaluation and likely a dedicated model/service or a rigged-avatar pipeline.

The five Familiar identities and their city mappings are copied from the existing Off*Script Field data. Innie World currently cannot verify that a Familiar was claimed in Off*Script: the user must manually confirm “I claimed this” after using the app. That confirmation is local and can be faked; it is not GPS proof. Cross-origin account sync, verified unlock exchange, multiplayer, server storage, and deployment are not implemented. Saved data is local to this browser and can be cleared by browser settings.

- **Off*Script portal doors:** three in-world-styled portal cards open the existing Off*Script app in a new tab. They are real links, but currently land at the app's main entrance because the app does not expose supported deep links for Daily OS, Field, or Intent.
- **Khaos Missions:** a small local mission board tracks three user-confirmed tasks (set an intention, try a micro-dare, write a reflection). Progress persists in this browser for the current local day and resets on a new day. Innie World cannot verify that a task was completed inside Off*Script and does not award the app's server-side Khaos Points.
- **Field Familiar bridge:** the world now uses the same five named Mississippi Field Familiars as the app's source data. The chosen companion follows the player; confirmed unlocks are permanent in this browser and swappable. The confirmation is manual, not app-verified.
- **No app repo changes:** these portal, mission, and Familiar bridge features live only in GPTREPO. They do not alter the Off*Script app or connect to its account/data store.

The app does not request location or upload personal images. Do not add geolocation or external image processing without a clear user-facing consent and privacy design.

## Product decisions carried forward
- “Innie” means the user's inner/private self.
- Every Innie must have a zodiac sign; birth date is optional and the sign can be chosen manually.
- Seasonal identity is separate from zodiac and remains a future feature.
- Field Familiars are companions, not decaying inventory. Once genuinely unlocked, they should remain owned and be swappable.
- Brand accents: teal `#2DA2EE`, hot pink `#EA4798`, navy background. User-selectable avatar colors are separate from brand colors.
- Tagline order: **Think · Imagine · Do · Be**.
- Existing Off*Script app source is not modified by this repository.

## Next milestones
1. User review of the interaction and visual direction.
2. Decide on the 3D runtime (for example, Three.js/Babylon.js) and character rig/source.
3. Test selfie-to-avatar approaches for quality, privacy, cost, and export rights before selecting a provider.
4. Replace demo Familiar ownership with a defined shared data contract and location verification.
5. Add automated/manual tests, accessibility pass, and deploy only after explicit deployment approval.
