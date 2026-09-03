---
name: Playwright on Replit Nix
description: Requirements for running project-owned Playwright tests reliably in this Replit environment.
---

Project-owned Playwright tests must install the matching Chromium binary and declare the browser's native Nix runtime libraries rather than relying on a warm workspace cache.

**Why:** A newly installed Playwright runner had no browser binary, then Chromium failed at launch because GLib, GBM, and xkbcommon shared libraries were absent.

**How to apply:** Keep browser installation reproducible in the test command and preserve the validated Nix browser-runtime dependencies when updating Playwright.