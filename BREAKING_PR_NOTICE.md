# Breaking Dependabot PRs - Action Required

## Status

Several Dependabot PRs were created **before** the updated configuration was pushed to GitHub:

- ❌ `@angular/router: 19.2.25 → 22.1.5`
- ❌ `@angular/platform-browser-dynamic: 19.2.25 → 22.1.5`
- ❌ `@angular-eslint/schematics: 19.x → 22.2.0`
- ❌ `jasmine-core: 5.13.0 → 7.0.2`
- ❌ `@angular-devkit/build-angular: 19.x → 22.1.7`
- ❌ `actions/checkout: 4 → 7`
- ❌ `actions/github-script: 7 → 9`

## Action Required

**DO NOT MERGE these PRs.** They will break the application.

### How to Close These PRs

1. Go to each PR listed above
2. Click "Close pull request"
3. Add comment: 
   ```
   This PR contains breaking changes (major version upgrades).
   The Dependabot configuration has been updated to prevent 
   future major version PRs. See docs/DEPENDABOT_MANAGEMENT.md
   ```

## What Changed

The Dependabot configuration (`.github/dependabot.yml`) has been updated to:
- ✅ Explicitly block all major version upgrades for Angular 19.x packages
- ✅ Explicitly block all major version upgrades for TypeScript 5.5.x
- ✅ Explicitly block all major version upgrades for testing tools
- ✅ Explicitly block major version upgrades for GitHub Actions

## Future Dependabot PRs

Going forward, Dependabot will **only** create PRs for:
- ✅ Minor version updates (safe, backward compatible)
- ✅ Patch version updates (bug fixes, security patches)
- ✅ Security updates (critical fixes)

**Major version upgrades will NOT be automatically created.**

## When You're Ready to Upgrade Angular

See `docs/DEPENDABOT_MANAGEMENT.md` for the manual upgrade process.

---

**Updated:** Commit `3d6291f`
**Status:** Configuration locked to Angular 19.x
