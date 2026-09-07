import { NextResponse, type NextRequest } from "next/server";

/**
 * Maintenance mode (fail-safe).
 *
 * Every request receives a branded "back soon" page (HTTP 503) UNLESS the env var
 * SITE_LIVE is exactly "true". Leaving it unset keeps the site in maintenance, so a
 * deploy can never accidentally expose it. Set SITE_LIVE="true" in the Vercel project
 * env (Production) to bring the site back live.
 *
 * Preview the real site while in maintenance: visit any page with
 * ?preview=<MAINTENANCE_BYPASS_KEY> (matching the env var). That sets a cookie so you
 * — and only you — can see the site.
 */

const PREVIEW_COOKIE = "sy_preview";

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>StorYard — back soon</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body {
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #123d30;
    background:
      radial-gradient(60% 55% at 12% 8%, rgba(63,172,131,0.20) 0%, transparent 60%),
      radial-gradient(50% 50% at 92% 0%, rgba(233,165,47,0.18) 0%, transparent 55%),
      radial-gradient(70% 60% at 50% 120%, rgba(19,116,83,0.12) 0%, transparent 60%),
      #faf9f5;
    display: flex; align-items: center; justify-content: center;
    min-height: 100%; padding: 24px; text-align: center;
  }
  .card {
    max-width: 560px; width: 100%;
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(14px) saturate(140%);
    -webkit-backdrop-filter: blur(14px) saturate(140%);
    border: 1px solid rgba(19,116,83,0.12);
    border-radius: 28px;
    box-shadow: 0 2px 6px rgba(16,45,35,0.05), 0 24px 48px -12px rgba(16,45,35,0.18);
    padding: 44px 32px;
  }
  .logo { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 26px; }
  .mark {
    position: relative; width: 46px; height: 46px; border-radius: 14px;
    display: grid; place-items: center; color: #fff;
    background: linear-gradient(135deg, #1f9068, #105c44);
    box-shadow: 0 1px 2px rgba(16,45,35,0.04), 0 8px 20px rgba(16,45,35,0.14);
  }
  .mark span {
    position: absolute; right: -5px; bottom: -5px; width: 18px; height: 18px;
    border-radius: 50%; background: #e9a52f; color: #3e1a09;
    font-size: 11px; font-weight: 800; display: grid; place-items: center;
    border: 2px solid #faf9f5;
  }
  .name { font-size: 26px; font-weight: 800; letter-spacing: -0.02em; color: #124639; }
  .pill {
    display: inline-block; font-size: 13px; font-weight: 700; color: #105c44;
    background: #eef8f3; border: 1px solid rgba(19,116,83,0.15);
    padding: 7px 14px; border-radius: 999px; margin-bottom: 18px;
  }
  h1 { font-size: 30px; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 14px; color: #08231b; }
  p { font-size: 17px; line-height: 1.6; color: #4f4d45; margin: 0 auto 10px; max-width: 44ch; }
  .foot { margin-top: 26px; font-size: 14px; color: #625f55; }
  a { color: #137453; font-weight: 600; text-decoration: none; }
  a:hover { text-decoration: underline; }
  @media (max-width: 480px) { .card { padding: 34px 22px; border-radius: 22px; } h1 { font-size: 25px; } p { font-size: 16px; } }
</style>
</head>
<body>
  <main class="card">
    <div class="logo">
      <span class="mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 10.5 12 4l9 6.5" /><path d="M5 9.6V20h14V9.6" /><path d="M9.5 20v-5.5h5V20" />
        </svg>
        <span>&#10003;</span>
      </span>
      <span class="name">StorYard</span>
    </div>
    <div class="pill">Down for scheduled maintenance</div>
    <h1>We&#39;ll be back very shortly</h1>
    <p>We&#39;re making some improvements to StorYard &mdash; the Isle of Man&#39;s storage marketplace. Thanks for your patience, please check back soon.</p>
    <div class="foot">Need us in the meantime? <a href="mailto:hello@storyard.co.uk">hello@storyard.co.uk</a></div>
  </main>
</body>
</html>`;

export function middleware(req: NextRequest) {
  // Fail-safe: maintenance is ON unless SITE_LIVE is exactly "true".
  if (process.env.SITE_LIVE === "true") {
    return NextResponse.next();
  }

  const { pathname, searchParams } = req.nextUrl;
  const bypassKey = process.env.MAINTENANCE_BYPASS_KEY;

  // Grant a preview cookie when the correct key is supplied, then strip the query.
  if (bypassKey && searchParams.get("preview") === bypassKey) {
    const clean = req.nextUrl.clone();
    clean.searchParams.delete("preview");
    const res = NextResponse.redirect(clean);
    res.cookies.set(PREVIEW_COOKIE, bypassKey, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  }

  const hasPreview = Boolean(bypassKey) && req.cookies.get(PREVIEW_COOKIE)?.value === bypassKey;
  if (hasPreview) {
    return NextResponse.next();
  }

  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export const config = {
  // Gate everything except Next internals and common static files.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
