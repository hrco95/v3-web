import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
for (const page of ['index.html', 'vlahe-bukovca.html']) {
  const html = await readFile(new URL(page, root), 'utf8');
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${page}: one H1`);
  assert(!html.includes('noindex'), `${page}: indexable`);
  assert(html.includes('rel="canonical"'), `${page}: canonical`);
  assert(!/<script(?![^>]*application\/ld\+json)/.test(html), `${page}: no client JavaScript`);
  assert(html.includes('srcset='), `${page}: responsive images`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const path = match[1];
    if (path === '/' || path === '/vlahe-bukovca') continue;
    assert((await stat(new URL(`.${path}`, root))).isFile(), `Missing asset: ${path}`);
  }
  for (const match of html.matchAll(/href="#([^\"]+)"/g)) {
    assert(html.includes(`id="${match[1]}"`), `Missing anchor: ${match[1]}`);
  }
  if (page === 'vlahe-bukovca.html') {
    assert.equal((html.match(/class="room-number"/g) || []).length, 16, 'All 16 room rows preserved');
    for (const value of ['63,30', '62,05', '3,90', '2,65', '6,12', '10,27', '9,11', '4,30', '21,46', '0,98', '7,16']) assert(html.includes(value), `Missing floor area: ${value}`);
    assert(html.includes('id="stan-1"') && html.includes('id="stan-2"'));
  }
}
const sitemap = await readFile(new URL('sitemap-0.xml', root), 'utf8');
assert(sitemap.includes('https://www.v-3.hr/vlahe-bukovca'));
assert(!sitemap.includes('404'));
console.log('Build verified: links, SEO, responsive assets, apartment areas, zero client JS.');
