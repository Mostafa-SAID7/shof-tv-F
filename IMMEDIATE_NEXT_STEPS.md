# CRITICAL NEXT STEPS - Package-Lock.json Regeneration

## ISSUE
`npm ci` fails because package-lock.json was generated on Node 24.18.0 but CI uses Node 20.x.

Transitive dependencies differ:
- Node 24: vite@6.4.2, esbuild@0.28.0
- Node 20: vite@6.4.3, esbuild@0.25.12

GitHub Actions cannot find Node 24-specific packages on Node 20.

## SOLUTION - REGENERATE LOCKFILE ON NODE 20.17.0

### ⚠️ CRITICAL: You must have Node 20.17.0 installed

```bash
# Check current Node
node --version

# If not 20.17.0:
# Option 1: Install nvm (Node Version Manager)
# Option 2: Download Node 20.17.0 from nodejs.org
# Option 3: Use Docker: docker run -it -v $(pwd):/app -w /app node:20.17.0-alpine
```

### Execute these commands IN ORDER:

```bash
cd /path/to/shof-tv-F

# Step 1: Verify you have Node 20.17.0
node --version      # Must be v20.17.0
npm --version       # Should be 10.x

# Step 2: Clean everything
rm -rf node_modules
rm -f package-lock.json

# Step 3: Regenerate lockfile
npm install --legacy-peer-deps

# Step 4: Verify lockfile is correct
npm ci --dry-run
# Should output: "would remove nothing" + "audited X packages"

# Step 5: Test completely clean installation (twice)
rm -rf node_modules
npm ci
# First clean install - should succeed

rm -rf node_modules
npm ci
# Second clean install - must succeed

# Step 6: Verify build pipeline
npm run lint       # ESLint: 0 errors
npm run build      # Development build succeeds
npm run build:prod # Production build succeeds
npm audit --audit-level=moderate

# Step 7: Commit & push
git add package-lock.json
git commit -m "fix(deps): regenerate package-lock.json on Node 20.17.0

This resolves npm ci failures by using the correct Node version
that GitHub Actions runs on.

Transitive dependencies now match:
- vite@6.4.3
- esbuild@0.25.12
- All platform-specific @esbuild/* packages

npm ci now succeeds on Node 20.x"

git push origin main
```

## VERIFICATION CHECKLIST

After running above commands, check:

- [ ] `node --version` shows v20.17.0
- [ ] `npm --version` shows 10.x
- [ ] `rm -rf node_modules && npm ci` completes without error
- [ ] Running it twice both succeed
- [ ] `npm run lint` shows "All files pass linting"
- [ ] `npm run build` completes successfully
- [ ] `dist/shoftv-landing/index.html` exists
- [ ] `git log --oneline -2` shows new commit

## WHAT CHANGED IN WORKFLOWS

1. **build.yml**:
   - Removed `--if-present` from `npm run lint` and `npm run test`
   - Now these are REQUIRED and will fail CI if missing
   - Added build output verification
   - Added permissions, timeouts, environment display

2. **deploy.yml**:
   - Simplified to build + Vercel deploy
   - Added verification of build output before deploy

## GITHUB ACTIONS EXPECTATION

After you push the regenerated package-lock.json:

1. GitHub Actions build.yml will trigger
2. It will:
   - Checkout code
   - Setup Node 20.x
   - Run `npm ci` (NOW SUCCEEDS because lockfile is on Node 20)
   - Run linting
   - Build project
   - Verify build output
   - Run tests
   - Upload artifact

3. Expected result: ✅ ALL GREEN

4. If build fails, check GitHub Actions logs for:
   - npm ci errors → lockfile still mismatched
   - lint errors → code quality issue (not build issue)
   - build errors → compilation issue

## IF npm install HANGS

If local `npm install` hangs:

```bash
# Kill the process
pkill -f "node npm"

# Clear npm cache
npm cache clean --force

# Try again with flag
npm install --legacy-peer-deps --prefer-offline --no-audit
```

## DO NOT

- Do NOT use Node 22 or Node 24 to regenerate
- Do NOT skip the double-test (`npm ci` twice)
- Do NOT commit without verifying both npm ci runs succeed
- Do NOT use `npm install` in CI (must use `npm ci`)
- Do NOT downgrade Angular or TypeScript (not the root cause)
- Do NOT add random vite/esbuild entries to package.json

## WHAT THIS FIXES

✅ `npm ci` will succeed on GitHub Actions (Node 20)
✅ Transitive dependencies will be consistent
✅ Artifact builds will be deterministic
✅ Deploy pipeline will be reliable
✅ CI/CD will be production-grade

## TIMELINE

- **Immediate**: Regenerate package-lock.json on Node 20.17.0 (you do this now)
- **Commit**: Push updated package-lock.json
- **GitHub Actions**: Will auto-test the new lockfile
- **Verification**: Watch GitHub Actions build.yml run and turn green

---

**This is the critical blocker. After lockfile is regenerated, all CI/CD pipelines will work.**

Questions? Check CI_CD_RECOVERY_PLAN.md for complete details.

