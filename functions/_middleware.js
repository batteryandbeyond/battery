export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only intervene for the article detail page
  if (url.pathname !== '/article.html') {
    return next();
  }

  const folder = url.searchParams.get('folder') || 'content/articles';
  const slug = url.searchParams.get('slug');

  const response = await next();
  if (!slug) return response;

  try {
    const listUrl = `https://api.github.com/repos/batteryandbeyond/battery/contents/${folder}?ref=main`;
    const listRes = await fetch(listUrl, { headers: { 'User-Agent': 'batteries-and-beyond-og' } });
    if (!listRes.ok) return response;
    const files = await listRes.json();
    const match = Array.isArray(files) ? files.find(f => f.name === `${slug}.md`) : null;
    if (!match) return response;

    const rawRes = await fetch(match.download_url);
    const rawText = await rawRes.text();
    const fmMatch = rawText.match(/^---\s*([\s\S]*?)\s*---/);

    let title = 'Batteries and Beyond';
    let summary = 'Technical breakdowns, manufacturing deep-dives, and tools for engineers working in energy storage.';
    let image = null;

    if (fmMatch) {
      const yaml = fmMatch[1];
      const titleMatch = yaml.match(/title:\s*(.+)/);
      const summaryMatch = yaml.match(/summary:\s*(.+)/);
      const imageMatch = yaml.match(/image:\s*(.+)/);
      if (titleMatch) title = titleMatch[1].trim().replace(/^["']|["']$/g, '');
      if (summaryMatch) summary = summaryMatch[1].trim().replace(/^["']|["']$/g, '');
      if (imageMatch) image = imageMatch[1].trim().replace(/^["']|["']$/g, '');
    }

    const escape = (s) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    const fullImage = image ? (image.startsWith('http') ? image : `https://batterybeyond.com${image}`) : null;

    const rewriter = new HTMLRewriter()
      .on('title', {
        element(el) { el.setInnerContent(`${title} — Batteries and Beyond`); }
      })
      .on('head', {
        element(el) {
          el.append(`<meta name="description" content="${escape(summary)}">`, { html: true });
          el.append(`<meta property="og:title" content="${escape(title)}">`, { html: true });
          el.append(`<meta property="og:description" content="${escape(summary)}">`, { html: true });
          el.append(`<meta property="og:type" content="article">`, { html: true });
          el.append(`<meta name="twitter:card" content="summary_large_image">`, { html: true });
          if (fullImage) {
            el.append(`<meta property="og:image" content="${fullImage}">`, { html: true });
          }
        }
      });

    return rewriter.transform(response);
  } catch (e) {
    return response;
  }
}
