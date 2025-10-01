import { NextRequest, NextResponse } from 'next/server';

// Resolve b23.tv short URL to the final bilibili video URL and extract BV id
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  try {
    // First attempt: allow redirects and read final response.url
    const resp = await fetch(targetUrl, { redirect: 'follow' });
    const finalUrl = resp.url || targetUrl;

    // Fallback: if not redirected, try a HEAD/manual redirect to capture Location
    let resolvedUrl = finalUrl;
    if (resolvedUrl === targetUrl) {
      const manual = await fetch(targetUrl, { method: 'GET', redirect: 'manual' as RequestRedirect });
      const location = manual.headers.get('location');
      if (location) {
        resolvedUrl = location.startsWith('http') ? location : new URL(location, targetUrl).toString();
      }
    }

    // Extract BV id
    const bvMatch = resolvedUrl.match(/\/video\/(BV\w+)/i) || resolvedUrl.match(/[?&#]bvid=(BV\w+)/i);
    const bvId = bvMatch ? bvMatch[1] : null;

    return NextResponse.json({ finalUrl: resolvedUrl, bvId });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


