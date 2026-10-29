<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/06bd6c10-3462-4226-a89f-6ed4b31f5496

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies from the lockfile:
   `npm ci`
2. Run the app on your computer:
   `npm run dev -- --host 127.0.0.1`

Vite shows the local address in the terminal (normally http://127.0.0.1:3000). The existing scripts `npm run build` and `npm run lint` build the page and check TypeScript. The current landing does not require a Gemini key to run.
