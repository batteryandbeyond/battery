// content.js — fetches published articles/news from the GitHub repo and renders them.
const REPO = 'batteryandbeyond/battery';
const BRANCH = 'main';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const yamlBlock = match[1];
  const body = match[2];
  const data = {};
  let currentKey = null;
  yamlBlock.split('\n').forEach(line => {
    if (/^\s*-\s+/.test(line) && currentKey) {
      const val = line.replace(/^\s*-\s+/, '').trim().replace(/^["']|["']$/g, '');
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(val);
    } else {
      const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (m) {
        currentKey = m[1];
        let val = m[2].trim();
        data[currentKey] = val === '' ? [] : val.replace(/^["']|["']$/g, '');
      }
    }
  });
  return { data, body: body.trim() };
}

async function fetchCollection(folder) {
  const listUrl = `https://api.github.com/repos/${REPO}/contents/${folder}?ref=${BRANCH}`;
  try {
    const res = await fetch(listUrl);
    if (!res.ok) return [];
    const files = await res.json();
    if (!Array.isArray(files)) return [];
    const mdFiles = files.filter(f => f.name && f.name.endsWith('.md'));
    const entries = await Promise.all(mdFiles.map(async f => {
      const rawRes = await fetch(f.download_url);
      const rawText = await rawRes.text();
      const { data, body } = parseFrontmatter(rawText);
      const slug = f.name.replace(/\.md$/, '');
      return { ...data, body, slug, folder };
    }));
    entries.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return entries;
  } catch (e) {
    console.error('Failed to load collection', folder, e);
    return [];
  }
}

function categoriesOf(entry) {
  if (Array.isArray(entry.category)) return entry.category;
  if (entry.category) return [entry.category];
  return [];
}

function cardHTML(entry, folder) {
  const tags = categoriesOf(entry).map(c => `<span class="tag">${c}</span>`).join(' ');
  const img = entry.image ? `<img src="${entry.image}" style="width:100%;border-radius:4px;margin-bottom:8px;display:block;">` : '';
  const title = entry.title || 'Untitled';
  const summary = entry.summary || '';
  return `<div class="card">
    ${img}
    ${tags}
    <h4><a href="article.html?folder=${encodeURIComponent(folder)}&slug=${encodeURIComponent(entry.slug)}" style="color:var(--graphite);">${title}</a></h4>
    <p>${summary}</p>
  </div>`;
}

function emptyHTML(label) {
  return `<div class="article-empty">No articles${label ? ' tagged "' + label + '"' : ''} yet.</div>`;
}
