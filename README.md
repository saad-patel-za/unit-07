# Unit 07 — cinematic comic website

Working title and story copy are provisional. The original pencil and color photographs are preserved in the reader. Supplemental scenes are generated concept artwork, not final comic pages.

## Run

```sh
npm run dev
npm run build
```

The development server prints its URL (currently http://localhost:5174). Requires Node 22.13 or newer. On this Windows installation, if the npm shim fails, use `node "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run dev`.

## Edit the comic

- `app/page.tsx`: title, story copy, chapter navigation, page list, fictional dossiers, and interactions.
- `app/globals.css`: layout, comic treatments, responsive rules, and animation.
- `public/art/original-sketch.png` and `original-color.png`: the supplied photographs. Replace these with clean page exports when available; update `pages` in `app/page.tsx` to add more pages.
- `public/art/locker-room.webp`, `boxing-punch.webp`, `military-compound.webp`, `command-page.webp`: replaceable concept illustrations.
- `public/art/fight-page.webp`: an eight-frame storyboard in four columns and two rows, read left to right. Keep that arrangement when replacing it, or change the background positions in the fight section.
- `app/layout.tsx` and `public/favicon.svg`: browser metadata and icon.
- `art-prompts/`: exact prompts used with the built-in image generation tool. Full-resolution source images are also saved in `D:/Comic/art-source`.

## Waitlist

The POST `/api/waitlist` endpoint stores normalized email addresses and consent timestamps in a Cloudflare D1 database bound as `DB`. Duplicate emails are idempotent. Invalid emails, missing consent, and cross-origin submissions are rejected. Storage errors preserve the form input. There is no public subscriber-list endpoint.

Schema is in `db/schema.ts`; the migration is in `drizzle/`. The local test database lives in ignored `.wrangler/state`. Publication must provision the production DB and apply migrations. This website collects launch interest; sending the eventual launch campaign requires an email delivery service and is not implemented.

## Motion and accessibility

GSAP ScrollTrigger controls the eight-beat fight, reveals, and background parallax. The Reduce Motion control switches to manual frames; the operating-system reduced-motion setting is respected on initial load. Dialogs support Escape, focus management, and reader arrow keys. Mobile layout stacks panels vertically.

## Validation

Production build and TypeScript check pass. Browser checks cover menu, dossier overlay, reader zoom and next page, Escape close, mobile overflow, asset loading, and manual fight selection. Local endpoint checks cover success, duplicate submission, invalid email, and missing consent; duplicate test submissions produce one database row.
