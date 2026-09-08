# ShofTV Release History

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2](https://github.com/Mostafa-SAID7/shof-tv-F/compare/v1.1.1...v1.1.2) (2026-09-08)


### Bug Fixes

* **ci:** skip vercel pull and create project config directly ([1b95b31](https://github.com/Mostafa-SAID7/shof-tv-F/commit/1b95b31f2af9eaae90d1770a0fa52f562eafb4d4))

## [1.1.1](https://github.com/Mostafa-SAID7/shof-tv-F/compare/v1.1.0...v1.1.1) (2026-09-08)


### Bug Fixes

* **ci:** use Vercel CLI directly instead of vercel-action ([8898cb1](https://github.com/Mostafa-SAID7/shof-tv-F/commit/8898cb16eb30a2ca7958bb3d12e63210d909c7cd))

# [1.1.0](https://github.com/Mostafa-SAID7/shof-tv-F/compare/v1.0.2...v1.1.0) (2026-09-08)


### Features

* **docker:** complete Docker setup with nginx and ESM ([7b2e5f0](https://github.com/Mostafa-SAID7/shof-tv-F/commit/7b2e5f0433831e6b5ec49eb42e7e62302807c6c1))

## [1.0.2](https://github.com/Mostafa-SAID7/shof-tv-F/compare/v1.0.1...v1.0.2) (2026-09-08)


### Bug Fixes

* **ci:** configure Vercel to use prebuilt output ([8d4ced1](https://github.com/Mostafa-SAID7/shof-tv-F/commit/8d4ced13b23eb58e7ae01e3f6b25295383faa222))

## [1.0.1](https://github.com/Mostafa-SAID7/shof-tv-F/compare/v1.0.0...v1.0.1) (2026-09-08)


### Bug Fixes

* **ci:** remove undefined template variables in semantic-release ([3f57468](https://github.com/Mostafa-SAID7/shof-tv-F/commit/3f5746868f4847d86f639e7b2b0dc2c6ac1ba745))

# 1.0.0 (2026-09-08)


### Bug Fixes

* add @angular/build and convert config files to ESM ([9d6d292](https://github.com/Mostafa-SAID7/shof-tv-F/commit/9d6d292b5e46ee4bb141e7b00b8807b5508f9c73))
* add Tailwind directives to styles.css and remove orphaned globals.css ([179fa42](https://github.com/Mostafa-SAID7/shof-tv-F/commit/179fa42dbd4ec9e86cdc3a3b2023f3f13006da7a))
* **ci:** bust cache and force clean install for ESM support ([288ce43](https://github.com/Mostafa-SAID7/shof-tv-F/commit/288ce4362d8c44c62c90d3fd253ba59b0c4054a8))
* **ci:** complete production-grade CI/CD audit and fixes ([2df3fef](https://github.com/Mostafa-SAID7/shof-tv-F/commit/2df3fefde66c7bc108ba60d04f0725fffc973b1d))
* **ci:** production-grade workflow updates per forensic audit ([e2b8c42](https://github.com/Mostafa-SAID7/shof-tv-F/commit/e2b8c42f4f9b46d427abc7af8d74a422cfc830cc))
* configure build and local development setup ([58d058e](https://github.com/Mostafa-SAID7/shof-tv-F/commit/58d058edd50b043323ab67f220060db312975115))
* configure deployment for Vercel with npm registry settings ([d89d254](https://github.com/Mostafa-SAID7/shof-tv-F/commit/d89d2545a7a0607f06c662276e561b2642d19f83))
* configure Karma to use headless Chrome in CI environment ([5d2d728](https://github.com/Mostafa-SAID7/shof-tv-F/commit/5d2d7286dfb1fcf39c6074f14d4d05c9eb0a9941))
* correct all broken image paths from /assets/img/pages to /pages ([096897b](https://github.com/Mostafa-SAID7/shof-tv-F/commit/096897bb980ae4ebca32262b9e4d357c791c6bb8))
* correct ng test flag for CI environment ([ad255cf](https://github.com/Mostafa-SAID7/shof-tv-F/commit/ad255cfb8c98a75dedb76b85f57100607a6aa18c))
* correct Vercel deployment configuration for Angular SPA ([99ca12d](https://github.com/Mostafa-SAID7/shof-tv-F/commit/99ca12d32bd361c8ee2897a198201642816eeb74))
* correct Vercel GitHub Action and add build step ([a39c4b5](https://github.com/Mostafa-SAID7/shof-tv-F/commit/a39c4b571005a08aae5090809d4c8ffc2751e026))
* **deps:** add missing @typescript-eslint/utils dependency ([38d7ae7](https://github.com/Mostafa-SAID7/shof-tv-F/commit/38d7ae7e74fcbb1ce58ea67a2e43809a45a53cf1))
* **deps:** pin TypeScript to 5.5.4 for [@typescript-eslint](https://github.com/typescript-eslint) compatibility ([23ef2f6](https://github.com/Mostafa-SAID7/shof-tv-F/commit/23ef2f6e5568c08e5c0b48c68d5c77c21e06a8b6))
* downgrade TypeScript to 5.5.3 for Angular 19 compatibility ([c6867ae](https://github.com/Mostafa-SAID7/shof-tv-F/commit/c6867ae25f8075f29a6f1c7e07e0cf0274ea2760))
* **husky:** update hooks to v9 format and standardize line endings ([31b5494](https://github.com/Mostafa-SAID7/shof-tv-F/commit/31b549463a15e09dc2e488e12520b478a8ad49de))
* lock Dependabot to security patches only (STRICT MODE) ([7370ca2](https://github.com/Mostafa-SAID7/shof-tv-F/commit/7370ca21a9d46a58c636786113509a75cd2d8e15))
* make Dependabot major version ignore rules more explicit ([3d6291f](https://github.com/Mostafa-SAID7/shof-tv-F/commit/3d6291f2c9f43a22043998052385503c528fa27d))
* prevent Dependabot major version upgrades that break Angular 19 ([4d0e92b](https://github.com/Mostafa-SAID7/shof-tv-F/commit/4d0e92b764b8c74be5b7296e8d18d59d2f11094f))
* regenerate package-lock.json for CI/CD sync ([0539bcd](https://github.com/Mostafa-SAID7/shof-tv-F/commit/0539bcd53e9e329200ee4c6fd75ccd5e5470ea68))
* remove @angular/build to fix ESM conflicts ([38f23ce](https://github.com/Mostafa-SAID7/shof-tv-F/commit/38f23ceb8b7871285010577d1a2d5beb64337fac))
* remove all duplicate images and consolidate paths ([2fed01f](https://github.com/Mostafa-SAID7/shof-tv-F/commit/2fed01f084683e753ec4e9484d7f80bf2be63da9))
* remove invalid Dependabot configuration properties ([93d0515](https://github.com/Mostafa-SAID7/shof-tv-F/commit/93d0515b1d954eb140812b95f91bb31bd4481e6f))
* remove invalid properties from vercel.json schema ([40c1a97](https://github.com/Mostafa-SAID7/shof-tv-F/commit/40c1a9723b1a98a96d4a101e55f6ab881be5b669))
* Remove Tailwind import to allow app to run ([9102d2f](https://github.com/Mostafa-SAID7/shof-tv-F/commit/9102d2f798e4ee0f10edcc9c23d307f63bf68425))
* Remove tailwindcss, keep only @tailwindcss/postcss for v4 ([dfbde77](https://github.com/Mostafa-SAID7/shof-tv-F/commit/dfbde772d6d1b1b206a3c81932001048175a18b4))
* rename output event to avoid DOM event naming conflict ([7375546](https://github.com/Mostafa-SAID7/shof-tv-F/commit/7375546b12292cc30f5b7f03a8b6ca01413b78c1))
* resolve ESLint accessibility and best practice violations ([8f7f40c](https://github.com/Mostafa-SAID7/shof-tv-F/commit/8f7f40c34e210157ef2cc734f6b6cbb9b42593ed))
* resolve GitHub Actions workflow and dependency sync issues ([d9406b3](https://github.com/Mostafa-SAID7/shof-tv-F/commit/d9406b38fb09020fb54d5c535175e73a2ce980cd))
* resolve Vercel deployment npm registry issues - expert-level configuration ([72142f3](https://github.com/Mostafa-SAID7/shof-tv-F/commit/72142f3df87f21b2e8809b192d28d76f04e26898))
* switch from Tailwind v4 to v3 to fix Vercel build error ([0bac233](https://github.com/Mostafa-SAID7/shof-tv-F/commit/0bac233265d6448d6fb12a9c79502a0b741c6c7f))
* Update PostCSS config for Tailwind CSS v4 and install @tailwindcss/postcss ([ae1090a](https://github.com/Mostafa-SAID7/shof-tv-F/commit/ae1090a7f19888b955b82daa0b3785a6176ec452))
* Update styles.css to use Tailwind CSS v4 syntax ([0b0ef90](https://github.com/Mostafa-SAID7/shof-tv-F/commit/0b0ef902163b70f7bc227df43b2fab691114cd47))


### Features

* complete Angular 19 app with routing and documentation\n\nCreate Angular routing, app components, and comprehensive documentation. ([d9a25b3](https://github.com/Mostafa-SAID7/shof-tv-F/commit/d9a25b3d23f5812953a6f44958ea149e2f55ef1e))
* complete pnpm + Vite migration with working build ([c6bbbcb](https://github.com/Mostafa-SAID7/shof-tv-F/commit/c6bbbcb2ba65c393b4e2f2ec0a03cd18d875a537))
* rebuild Angular project to match ShofTV design system ([16afe97](https://github.com/Mostafa-SAID7/shof-tv-F/commit/16afe97329c9a8bf52a2b6746a8992e1b247c541))
* **release:** add semantic versioning and automatic releases ([696a661](https://github.com/Mostafa-SAID7/shof-tv-F/commit/696a66100600fca4cf926d2d16fbb90d56a1b48e))


### Performance Improvements

* optimize LCP, INP, and fix CI workflows ([0e8fc98](https://github.com/Mostafa-SAID7/shof-tv-F/commit/0e8fc9816d9326073bf56198a12866669233ca20))
