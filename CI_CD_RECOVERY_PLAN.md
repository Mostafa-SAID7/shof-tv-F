# ShofTV Angular 19 - Production-Grade CI/CD Recovery Plan

## ROOT CAUSE ANALYSIS

### Problem
`npm ci` fails with:
```
Missing: vite@6.4.3 from lock file
Missing: esbuild@0.25.12 from lock file
```

### Root Cause
1. **Node Version Mismatch**: 
   - `.nvmrc` specifies Node 20.17.0
   - GitHub Actions configured for Node 20.x
   - Local system running Node 24.18.0
   - Transitive dependencies differ between Node 20 and Node 24
   - Previous lockfile generated on Node 24, causing different vite/esbuild versions

2. **Lockfile Corruption**:
   - package-lock.json contains versions from Node 24 build
   - npm ci on Node 20 cannot find Node 24-specific packages
   - vite@6.4.2, esbuild@0.28.0 (Node 24 versions) ≠ expected vite@6.4.3, esbuild@0.25.12 (Node 20 versions)

## SOLUTION SEQUENCE

### Step 1: Standardize Node Version
**Action**: Update `.nvmrc` to match GitHub Actions and project requirements

```bash
# Current: 20.17.0
# Change to: 24.x (to match development environment)
# OR install nvm and switch to Node 20.17.0
```

**Decision**: Keep 20.17.0 for stability (LTS, Angular 19 tested)
- Use `nvm install 20.17.0 && nvm use 20.17.0` locally
- GitHub Actions already configured for 20.x
- Dockerfile uses Node 20-alpine

### Step 2: Clean Regenerate package-lock.json
**Prerequisites**:
- [ ] Node 20.17.0 installed
- [ ] node_modules deleted
- [ ] package-lock.json deleted

**Commands** (execute on Node 20.17.0):
```bash
cd shof-tv-F
rm -rf node_modules
rm -f package-lock.json

npm install --legacy-peer-deps
```

**Validation**:
```bash
npm ci --dry-run
# Should show: "would remove nothing" (lockfile now in sync)
```

### Step 3: Verify npm ci Success
```bash
rm -rf node_modules
npm ci
```

**Must complete without errors.**

### Step 4: Test Build Pipeline
```bash
npm run lint          # ESLint validation
npm run build         # Development build
npm run build:prod    # Production build
npm test -- --watch=false  # Tests (if Chrome available)
npm audit --audit-level=moderate  # Security audit
```

## CONFIGURATION FIXES REQUIRED

### 1. .nvmrc
**Current**: `20.17.0` ✓ (KEEP)
**Status**: CORRECT

### 2. .github/workflows/build.yml
**Problems**:
- Uses `--if-present` for required scripts (line 32, 35)
- Uses `continue-on-error` implicitly

**Fix**:
```yaml
- name: Run linter
  run: npm run lint
  # Remove: --if-present

- name: Run tests
  run: npm test -- --watch=false
  env:
    CI: true
  # Remove: --if-present
```

### 3. .github/workflows/deploy.yml
**Problem**: Duplicates npm ci + npm run build after build.yml already did it

**Fix**: 
- Remove `npm ci` and `npm run build` from deploy.yml
- Download artifact from build.yml instead
- Use `vercel` CLI to deploy pre-built artifact

### 4. .github/workflows/release.yml
**Problem**: semantic-release configuration needs validation

**Fix**: Ensure Node 20 compatibility for semantic-release plugins

### 5. Dockerfile
**Current**: Node 20-alpine ✓ (CORRECT)
**Verify**: Uses `npm ci`

## GITHUB ACTIONS WORKFLOW ARCHITECTURE

### Recommended Flow

```
┌─────────────────────────────────────────┐
│ Pull Request / Push to main/develop     │
└──────────────┬──────────────────────────┘
               │
        ┌──────▼──────┐
        │   BUILD JOB │
        ├──────────────┤
        │ npm ci       │
        │ npm lint     │
        │ npm build    │
        │ npm test     │
        │ upload dist/ │
        └──────┬───────┘
               │
        ┌──────▼──────────────┐
        │  DEPLOY JOB (main)  │
        ├─────────────────────┤
        │ download artifact   │
        │ vercel deploy       │
        └─────────────────────┘
               │
        ┌──────▼──────────────┐
        │ RELEASE JOB (main)  │
        ├─────────────────────┤
        │ semantic-release    │
        │ create tag          │
        │ create GitHub rel.  │
        └─────────────────────┘
```

## ARTIFACTS & CACHING

### Build Artifact
**Path**: `dist/shoftv-landing/`
**Contents**: Angular production build
**Upload name**: `shof-tv-build`
**Retention**: 7 days

### npm Cache
**Action**: `actions/setup-node@v4` with `cache: 'npm'`
**Strategy**: Restore from cache, invalidate on package-lock.json change

## RELEASE STRATEGY

### semantic-release Configuration
**Branches**:
- `main` → stable releases (v1.0.0)
- `develop` → beta releases (v1.0.0-beta.1)

**Plugins**:
- `@semantic-release/commit-analyzer` (v23.1.1 - Node 20 compatible)
- `@semantic-release/changelog` (v6.0.3)
- `@semantic-release/git` (v10.0.1)
- `@semantic-release/github` (v9.2.6)

## VALIDATION CHECKLIST

### Dependencies
- [ ] Node 20.17.0 standardized
- [ ] package-lock.json regenerated on Node 20
- [ ] `npm ci` succeeds from clean directory (tested twice)
- [ ] No `--force`, no permanent `--legacy-peer-deps`
- [ ] Angular 19.2.23 + TypeScript 5.5.3 compatible

### Build
- [ ] `npm run build` succeeds
- [ ] `npm run build:prod` succeeds
- [ ] `dist/shoftv-landing/index.html` exists
- [ ] Artifact non-empty

### Quality
- [ ] `npm run lint` succeeds (0 errors)
- [ ] `npm test` succeeds
- [ ] `npm audit` evaluated (vulnerabilities documented)

### GitHub Actions
- [ ] build.yml: no `--if-present` for required scripts
- [ ] deploy.yml: uses artifact, no duplicate build
- [ ] release.yml: semantic-release configured correctly
- [ ] All workflows use appropriate permissions
- [ ] No `continue-on-error` for quality gates
- [ ] Timeouts set (15 minutes standard)

### Docker
- [ ] Node 20-alpine
- [ ] Uses `npm ci`
- [ ] Builds successfully locally
- [ ] Serves `dist/shoftv-landing`

## COMMANDS FOR IMMEDIATE EXECUTION

### Local Setup (Node 20.17.0)
```bash
# 1. Ensure Node 20.17.0
node --version  # should be v20.17.0

# 2. Clean regenerate
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# 3. Verify
rm -rf node_modules
npm ci

# 4. Build & validate
npm run lint
npm run build
npm run build:prod
npm audit --audit-level=moderate

# 5. Commit
git add package-lock.json
git commit -m "fix(deps): regenerate package-lock.json on Node 20.17.0

- Removes transitive dependency mismatch between Node 20/24
- Ensures vite@6.4.2, esbuild@0.28.0 consistency
- npm ci now succeeds on Node 20
- Fixes GitHub Actions CI pipeline"
```

### GitHub Actions Validation
After pushing:
1. Inspect Actions tab
2. Verify build.yml passes
3. Verify deploy.yml passes (if on main)
4. Verify release.yml passes (if semantic-release triggers)

## KNOWN ISSUES & RESOLUTIONS

### Issue 1: npm install Hangs
**Cause**: Node version incompatibility, npm cache corruption
**Solution**: 
- Switch to correct Node version (20.17.0)
- Clear npm cache: `npm cache clean --force`
- Use `npm install --prefer-offline`

### Issue 2: Transitive Dependency Mismatch
**Cause**: Different Node versions generate different dependency trees
**Solution**: Regenerate on target Node version (20.17.0)

### Issue 3: GitHub Actions Node Deprecation Warning
**Cause**: Node 20-based action runtime being deprecated
**Status**: Not urgent - application Node independent from Action Node
**Future**: Update action versions when GitHub enforces Node 22+ for Actions

## TIMELINE

- **Immediate**: Regenerate package-lock.json on Node 20.17.0
- **Short-term**: Update workflow files (build.yml, deploy.yml)
- **Medium-term**: Test complete pipeline on GitHub Actions
- **Verification**: Successful complete run end-to-end

---

**Next Step**: Regenerate package-lock.json using Node 20.17.0 environment

