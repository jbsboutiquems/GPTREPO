# Innie World — V1

A browser-first, single-player prototype for Life OS: Off*Script. The first slice is self-contained so it can be reviewed before choosing a larger 3D engine or adding accounts/backend services.

## Run it
Open [index.html](./index.html) in a modern browser, or serve this folder with any static web server. There is no package install or build step.

## Included in this first slice
- Small illustrated world with keyboard movement (WASD/arrows) and touch controls.
- Customizable 2D placeholder avatar: name, skin tone, hair color, outfit color, accent color.
- Required zodiac identity, selectable manually or inferred from an optional birth date.
- Selected Familiar visibly follows the avatar; switching is immediate.
- Local browser persistence for profile choices and world position.
- Optional selfie reference preview that stays in page memory and is neither uploaded nor persisted.
- Mobile-friendly layout and an in-app help panel.

## Honest limitations
This is a working **2D prototype**, not a finished 3D world. It does **not** generate a 3D avatar from a selfie and does not export VRM/GLB. Selfie-to-3D needs a separate technical evaluation and likely a dedicated model/service or a rigged-avatar pipeline.

Familiar entries are demo choices, not proof of a real location unlock. GPS verification, permanent cross-device unlocks, Off*Script app integration, account sync, multiplayer, server storage, and deployment are not implemented. Saved data is local to this browser and can be cleared by browser settings.

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
