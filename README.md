# JCI Alabang Member Hub

Phase 1 site for new members. Built with Vite, React and Tailwind.

## Where to edit things
- Everything on the site (text, roadmap, FAQ, officers, dates, links): `src/App.jsx`, in the CONTENT block at the top.
- Links: the `links` part of CONTENT in `src/App.jsx`.
- Page title and sharing preview: `index.html`.
- Logo: put the file in `public/` and set `site.logoUrl` in `src/App.jsx`.

## Deploy on Vercel (no terminal)
1. Create a new GitHub repository and upload the CONTENTS of this folder
   (index.html, package.json, package-lock.json, vite.config.js, src, public),
   not the folder itself.
2. In Vercel: Add New > Project > import the repository.
3. Check the settings show Framework Preset: Vite, Build Command: `npm run build`,
   Output Directory: `dist`. Click Deploy.
Every change pushed to GitHub redeploys automatically. If a change breaks the
build, Vercel keeps the last working version live; check the Deployments tab.

## Deploy from a terminal
    npm install
    npm run dev          # preview at http://localhost:5173
    npx vercel --prod    # deploy
