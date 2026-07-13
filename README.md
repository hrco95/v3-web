# V3 — prezentacijska web stranica

Višejezična (HR / EN / DE) prezentacijska stranica tvrtke **V3 d.o.o.** za prodaju nekretnina.
Čisti HTML/CSS/JS — bez build koraka, radi na bilo kojem statičkom hostingu.

## Struktura

```
web/
├── index.html            # naslovnica (projekti, o nama, kontakt)
├── vlahe-bukovca.html    # Projekt 01 — Bjelovar
├── regina.html           # Projekt 02 — Kraljevica
├── css/style.css         # cjelokupan dizajn
├── js/
│   ├── i18n.js           # mehanizam prijevoda
│   ├── floorplan.js      # interaktivni tlocrti (SVG)
│   └── main.js           # navigacija, animacije, forma
├── data/
│   ├── i18n.js           # SVI TEKSTOVI stranice (hr/en/de)
│   └── availability.js   # STATUS STANOVA (dostupno/rezervirano/prodano)
└── assets/img/           # ilustracije (placeholderi do 3D rendera)
```

## Pokretanje lokalno

Dovoljno je otvoriti `index.html` u pregledniku, ili (preporučeno):

```
python -m http.server 8000
```

pa otvoriti http://localhost:8000

## Najčešće izmjene

### 1. Prodan/rezerviran stan
Otvori `data/availability.js` i promijeni vrijednost, npr.:
```js
"regina.s3": "sold",   // ili "reserved" / "available"
```

### 2. Promjena teksta / prijevoda
Svi tekstovi su u `data/i18n.js` — svaki na tri jezika (hr, en, de).

### 3. E-mail adresa za upite  ⚠️
Trenutno je postavljen **placeholder** `info@v3-gradnja.hr`.
Pravu adresu upiši na JEDNOM mjestu: `js/main.js`, varijabla `V3_EMAIL` (vrh datoteke).
Kontakt forma radi preko `mailto:` (otvara e-mail program kupca) — po želji se kasnije
može spojiti na Formspree/EmailJS ili vlastiti backend.

### 4. Zamjena placeholder vizuala pravim renderima
- Hero ilustracije: zamijeni datoteke u `assets/img/` istim imenima
  (`hero-home.svg`, `bjelovar-hero.svg`, `regina-hero.svg`) ili ubaci JPG/PNG
  i ažuriraj `src` u HTML-u.
- Galerija: u `vlahe-bukovca.html` / `regina.html` zamijeni
  `<figure class="ph-card">…</figure>` s `<figure><img src="..." alt="..."></figure>`.

### 5. Telefonski broj
Kad bude poznat, dodaj u kontakt liste (`index.html` i stranice projekata) novi red:
```html
<div><dt>Telefon</dt><dd><a href="tel:+385...">+385 ...</a></dd></div>
```

## Objava (deploy)

Bilo koji statički hosting:
- **Netlify** — drag & drop mape `web/` na app.netlify.com/drop
- **GitHub Pages** — Settings → Pages → deploy s `main` brancha
- **cPanel/FTP** — kopirati sadržaj mape u `public_html`

## Napomene

- Tlocrti su shematski SVG prikazi izrađeni prema projektnoj dokumentaciji
  (iskaz površina preuzet iz nacrta). Uz njih stoji disclaimer.
- Fontovi (Google Fonts) i animacije (GSAP, Lenis) učitavaju se s CDN-a;
  stranica funkcionira i bez njih (bez animacija).
- Podaci tvrtke: V3 d.o.o., Bjelovarska ulica 22, 43212 Rovišće, OIB 75358597096.
