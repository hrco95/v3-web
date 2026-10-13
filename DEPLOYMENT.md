# Pokretanje i objava

Koristi Node 24 LTS (`.node-version`).

```sh
npm ci
npm run dev
```

Produkcijska provjera i lokalni pregled:

```sh
npm run build
npm run preview
```

## Cloudflare Pages

Postojeći projekt `v3-web`, repozitorij `hrco95/v3-web`, grana `main`:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: ostaviti prazno (web je korijen repozitorija)
- Node: 24 (datoteka `.node-version`; ukloniti eventualni stariji NODE_VERSION override)

Ove build postavke treba promijeniti u Cloudflareu prije prve objave Astro verzije. Push sam po sebi ne mijenja postojeći build command. Nije potreban Worker ni SSR adapter.

`public/_redirects` čuva stare `.html` URL-ove i preusmjerava `v-3.hr` na `www.v-3.hr`. Obje domene moraju ostati povezane s istim Pages projektom. HTML se revalidira, a datoteke s hashom u `/_astro/` imaju dugotrajni cache. Lokalni Astro preview ne simulira Cloudflare redirect/header pravila.

## Sadržaj

- `src/pages/`: početna i projekt
- `src/components/`: zajednički dijelovi i prikaz stana
- `src/data/apartments.ts`: površine prostorija
- `src/styles/global.css`: postojeći izgled i mobilni raspored
- `src/assets/`: izvorne slike za automatsku optimizaciju
- `public/assets/images/`: puni nacrti za otvaranje i izvorni tehnički nacrti

Astro generira AVIF/WebP/JPEG prikaze pri buildu. Puni nacrti ostaju dostupni bez gubitka detalja. Nema klijentskog JavaScripta.

Glavna domena i canonical URL-ovi su `https://www.v-3.hr`. Sitemap se generira automatski. Javne stranice dopuštaju indeksiranje, 404 ima `noindex`. Ne dodavati izmišljene cijene ili rokove u strukturirane podatke.

Stari HTML, slike i lokalne studije sačuvani su izvan repozitorija u `../output/prije-astro-migracije/` i ne ulaze u produkcijski build.
