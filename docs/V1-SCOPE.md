# Innie World V1 — scope and acceptance checks

## Product goal
A browser-first, single-player companion world where a user can create an Innie identity, move around a small world, and have a selected Familiar accompany them.

## Included in this slice
- Responsive static web app.
- Small explorable 2D garden scene.
- Keyboard and touch movement.
- Avatar appearance controls.
- Required zodiac sign, either manually selected or inferred from optional birthday.
- The five official Mississippi Field Familiars are represented in-world; a selected manually confirmed Familiar follows the avatar and can be swapped permanently within this browser.
- Familiar confirmation is explicitly an honor-system bridge; the app claim is not verified across origins.
- Local save/load in the current browser.
- Three Off*Script portal doors linking to the existing app's main entrance.
- Three locally tracked missions based on Daily OS intention-setting, a micro-dare, and reflection. User confirms completion manually.
- Optional session-only selfie preview, with no upload.
- Familiar roster copied from Off*Script Field data: Sin Bin/Biloxi, Rouxgarou/Kosciusko, Red Reb/Orange Grove, The Admiral/Gulfport, Golden Eagle/Hattiesburg.

## Explicitly not complete / not promised
- Selfie-to-3D avatar generation.
- VRM/GLB export.
- Real GPS-based unlocks or anti-spoofing.
- Verified Off*Script app/account synchronization or deep links into individual app tabs. The Familiar claim button is manual only.
- Cross-device cloud save.
- Multiplayer, social/community, backend, or moderation.
- Production deployment.

## Acceptance checklist
- [ ] Opens in modern desktop and mobile browsers.
- [ ] Movement responds to WASD/arrows and touch controls.
- [ ] Name and color choices visibly change the avatar.
- [ ] Saving without zodiac is blocked with a clear prompt.
- [ ] Birthday selection suggests a sign; user can override it.
- [ ] Selected Familiar is visible beside the avatar.
- [ ] Familiar selection can be changed.
- [ ] Saved identity reloads in the same browser.
- [ ] Each portal door opens the real Off*Script app in a new tab.
- [ ] Mission checkboxes toggle and persist after refresh.
- [ ] Mission progress is clearly labeled as local/manual, not verified app activity.
- [ ] Selfie preview makes no upload/network call.
- [ ] Test on mobile Chrome/Safari and desktop browsers before release.

## Privacy and ownership
Keep selfie images in-memory only in this prototype. Any future image processing must explain where the image goes, what is stored, retention, model/provider use, and how to delete it. Do not claim ownership of exported avatar formats until licensing and export implementation are verified.
