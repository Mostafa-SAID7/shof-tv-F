# Shof TV landing page

## Run locally on Replit

```bash
npm start -- --host 0.0.0.0 --port 5000
```

The Replit workflow uses port `5000` for the Angular preview.

## Image assets

Project images live in structured folders under `public/` and are served as:
- Home and catalog media: `/home/` (hero, cinema, posters)
- Page-specific artwork: `/pages/<page>/` (with concession category art under `/pages/concessions/`)

Use these public URL paths in Angular templates and component data so images work in both the development preview and production builds. Removed all duplicate images for clean project structure.