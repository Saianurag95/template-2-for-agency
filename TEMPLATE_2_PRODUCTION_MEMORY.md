# Template 2 Production Memory

This repo is Template 2: `AG-LOCAL-02`.

Use the central production memory files here:

```text
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-local-growth-01\site-production-memory.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-local-growth-01\client-change-request-format.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-local-growth-01\one-to-two-hour-customization-sop.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-local-growth-01\template-2-complete-code-snapshot.md
```

Quick facts:

- `/` is the main local growth agency website.
- `/intake` is the client information retrieval page.
- Main data file is `src/siteData.ts`.
- Home route is `src/pages/HomePage.tsx`.
- Intake page is `src/pages/IntakePage.tsx`.
- Keep serious CTAs linked to `/intake`.
- Keep Vercel rewrite in `vercel.json`.

Verify after changes:

```text
npm.cmd run typecheck
npm.cmd run build
```

