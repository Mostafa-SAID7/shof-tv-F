# Shof TV landing page

## Run locally on Replit

```bash
npm start -- --host 0.0.0.0 --port 5000
```

The Replit workflow uses port `5000` for the Angular preview.

## Image assets

All project images live in `public/assets/img/` and are served at `/assets/img/<filename>`.
Use that public URL convention in Angular templates and component data so images work in both
the development preview and production builds.