# Education Loan - Vite + React Demo

This project is a lightweight demo scaffold created with Vite, React, Tailwind CSS and a small 3D scene using `@react-three/fiber` and `@react-three/drei`.

Features:
- Five pages: Home, About, Services, Gallery, Contact (React Router)
- Tailwind CSS for utility-first styling
- 3D animated component (rotating box) using `three` + `@react-three/fiber`
- HD images loaded from Unsplash in the `Gallery` page (lazy-loaded)

Quick start

1. Install dependencies

```powershell
cd e:\education-loan
npm install
```

2. Run dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Deployment

- Vercel: Connect the repository, set build command `npm run build`, and output directory `dist`. Vercel allows selecting regions for deployments in advanced settings.
- Netlify: Drag-and-drop the `dist` folder or connect repo, set build command `npm run build` and publish directory `dist`. Netlify supports edge and region selection via paid plans.

Notes
- Replace the Unsplash URLs in `src/pages/Gallery.jsx` with your own HD images or place images into `public/` and use local paths.
- To change animation or add models, add GLTF/GLB files to `public/models/` and use `useGLTF` from `@react-three/drei`.
