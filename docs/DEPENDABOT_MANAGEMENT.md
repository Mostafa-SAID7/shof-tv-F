# Dependabot Management Guide

## Overview

This document explains how Dependabot is configured for ShofTV and how to manage its pull requests safely.

## Configuration

### Current Strategy: Conservative Major Version Updates

The `.github/dependabot.yml` file is configured to **automatically update minor and patch versions only**. Major version upgrades are **NOT** automatically created and must be reviewed manually.

### Why Conservative Approach?

Angular 19 has strict version requirements:
- Must use Angular 19.x (not 22.x)
- Must use TypeScript 5.5.x (not 6.x)
- Must use compatible testing tools
- Must use compatible DevKit versions

Allowing automatic major version upgrades would break the application because:
1. Angular 22 is incompatible with Angular 19 code
2. Breaking changes would require significant refactoring
3. CI/CD would fail automatically
4. Deployment would be blocked

## Managing Dependabot PRs

### Automatic PRs (Safe to Merge)

**These will be created automatically:**
- ✅ Minor and patch version updates
- ✅ Security patches
- ✅ Bug fixes

**Example:** `@angular/forms: 19.2.25 → 19.2.26` (patch)

**How to handle:**
1. Review the PR
2. Verify CI/CD passes
3. Merge if all checks pass

### Manual Review PRs (Requires Discussion)

**These require manual creation and review:**
- ⚠️ Major version updates
- ⚠️ Framework upgrades
- ⚠️ Breaking changes

**Example:** `@angular/forms: 19.2.25 → 22.1.5` (major)

**How to handle:**
1. Create a new branch from `develop`
2. Test the upgrade thoroughly
3. Update all related packages (Angular, TypeScript, etc.) together
4. Create a discussion/issue before PR
5. Review breaking changes
6. Update documentation
7. Only merge after full testing

## Currently Ignored Dependencies

The following packages will NOT have automatic major version PRs created:

### npm Dependencies
```
@angular/*              - Angular framework (keep 19.x)
@angular-devkit/*       - Angular build tools (keep 19.x)
@angular-eslint/*       - Angular linting (keep 19.x)
typescript              - Keep 5.5.x
jasmine-core            - Keep 5.x
karma-jasmine           - Keep 5.x
```

### GitHub Actions
```
actions/checkout        - Keep 4.x
actions/setup-node      - Keep 4.x
actions/github-script   - Keep 7.x
```

## Responding to Old PRs

If you see Dependabot PRs that were created before this configuration:

1. **For breaking changes (major version jumps):**
   - ❌ **DO NOT MERGE**
   - Close with comment: "This PR requires major version coordination. See docs/DEPENDABOT_MANAGEMENT.md"

2. **For safe updates (minor/patch):**
   - ✅ Review and merge if CI passes

## Manual Upgrade Process

When planning a major framework upgrade (Angular 19 → 20, TypeScript 5 → 6):

### Before Starting
1. Create a GitHub Discussion/Issue with title: "Plan: Upgrade Angular from 19 to 20"
2. List all affected packages
3. Document breaking changes
4. Create a migration checklist

### During Upgrade
1. Create new branch: `feature/upgrade-angular-20`
2. Update all Angular packages together
3. Update TypeScript if needed
4. Update DevKit and ESLint packages
5. Run full test suite: `npm run build && npm run lint && npm test`
6. Test build: `npm run build:prod`
7. Test Docker: `docker build -t shof-tv:test .`

### After Upgrade
1. Update documentation
2. Create PR with detailed migration notes
3. Link to the Discussion/Issue
4. Request review from team
5. Run full CI/CD
6. Wait for all checks to pass
7. Merge to `develop` first for staging
8. Verify in staging environment
9. Merge to `main` only after verification

## Monitoring

### Check Dependabot Status
- Go to Repository → Insights → Dependabot
- See current PRs and update history

### Common Issues

**Issue: Dependabot creating major version PRs**
- Solution: Update `.github/dependabot.yml` with new ignore rules
- Re-run Dependabot: Go to Dependabot → Scheduled → Run now

**Issue: CI fails on Dependabot PR**
- Review the error
- If it's a breaking change: Close the PR
- If it's a configuration issue: Fix it
- If it's a legitimate bug: Report upstream

**Issue: Need to manually trigger Dependabot**
- GitHub Actions: Can't manually trigger Dependabot
- Workaround: Edit `dependabot.yml` and push (triggers re-run)

## Security Patches

Security updates are handled specially:
- ✅ Should be applied immediately
- ✅ Usually just patch version updates
- ✅ Dependabot marks them as "security"
- ✅ Prioritize these PRs

## Transition Plan for Future Upgrades

### Phase 1: Plan (Month 1)
- Research new major versions
- Document compatibility matrix
- Identify breaking changes

### Phase 2: Test (Month 2-3)
- Create experimental branch
- Perform upgrades
- Run comprehensive tests

### Phase 3: Prepare (Month 3)
- Update documentation
- Create migration guides
- Prepare team

### Phase 4: Execute (Month 4)
- Release as major version
- Update all dependent projects
- Monitor for issues

## References

- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)
- [Angular Update Guide](https://update.angular.io/)
- [Semantic Versioning](https://semver.org/)

---

**Last Updated:** September 7, 2026
**Configuration Version:** 2
**Status:** Production Ready
