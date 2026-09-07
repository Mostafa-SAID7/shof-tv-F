# Shof TV landing page

## Run locally on Replit

```bash
npm start -- --host 0.0.0.0 --port 5000
```

The Replit workflow uses port `5000` for the Angular preview.

## Image assets

Project images live in page-scoped folders under `public/assets/img/` and are served at
`/assets/img/<folder>/<filename>`. Home and catalog media use `home/`, while page-specific
artwork uses `pages/<page>/` (with concession category art grouped under
`pages/concessions/`). Use these public URL paths in Angular templates and component data so
images work in both the development preview and production builds.