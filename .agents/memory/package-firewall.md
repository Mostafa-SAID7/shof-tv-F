---
name: Replit npm firewall compatibility
description: Replit's package firewall can block older transitive npm packages during Angular installs.
---

When an npm install is blocked by a transitive package with a security-policy error, prefer a
package-manager override to a safe newer compatible release rather than bypassing the firewall.

**Why:** Angular's build toolchain may resolve older packages that are rejected even though the
application itself does not use them directly.

**How to apply:** Inspect which dependency introduces the blocked package, confirm a newer release
exists, add a narrow npm override, and retry the install before considering broader dependency changes.