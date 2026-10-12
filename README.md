# Web — stanovi Vlahe Bukovca

Statična stranica na hrvatskom, bez JavaScripta, vanjskih fontova i build koraka.

- `index.html` — početna stranica i popis projekata.
- `vlahe-bukovca.html` — projekt, izvorne tablice stanova, tlocrti i kontakt.
- `assets/styles.css` — zajednički stilovi, stanovi i mobilni prikaz.
- `assets/images/stan-1.webp`, `stan-2.webp` — izresci izvornih tlocrta s listova 03 i 04 dokumenta `Projekt - Nacrti.pdf`.

## Podaci

Površine, raspored, lokacija i građevinske karakteristike preuzeti su iz PDF-a (listopad 2026.). Stan 1: 63,30 m²; stan 2: 62,05 m². Oba zbroja uključuju lođu od 9,55 m² s koeficijentom 0,75, odnosno 7,16 m². Zajednički prostor nije dodan površinama stanova.

Dva parkirna mjesta po stanu i kontakt Luka, 0981609794, info@v-3.hr potvrđeni su korisnikovom uputom. PDF potvrđuje ukupno četiri mjesta dimenzija 3 × 5 m, ali ih ne dodjeljuje pojedinom stanu.

## Lokalni pregled

Iz foldera `web` pokrenuti:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Otvoriti http://127.0.0.1:8080. Hosting treba posluživati sadržaj foldera `web`.

## Prije objave

- Potvrditi konačan sadržaj i domenu; dodati canonical URL, Open Graph podatke i sliku za dijeljenje.
- Dodati sitemap.xml i robots.txt sa stvarnom domenom, postaviti HTTPS.
- Ukloniti privremeni `noindex, nofollow` i provjeriti HTTP zaglavlja hostinga.
- Po potrebi dodati strukturirane podatke koji odgovaraju vidljivom sadržaju.
- Provjeriti brzinu i prijaviti sitemap u Google Search Console.

Aktualni prikazi tlocrta: `assets/images/stan-1-azurirano.png` i `stan-2-azurirano.png`, kopirani bez izmjena iz korisnikovih datoteka u `output/tlocrti/`. Izvorni WebP nacrti ostaju dostupni zasebnim poveznicama radi svih kota i oznaka.

## Predmemorija

Cloudflare `_headers` postavlja `Cache-Control: no-cache`: spremljeni sadržaj mora se provjeriti prije ponovnog korištenja. CSS i ažurirani tlocrti u HTML-u imaju `?v=` s prvih 10 znakova SHA-256 sadržaja. Pri izmjeni tih datoteka ažurirati verziju u svim njihovim HTML poveznicama (uključujući uvećanje slika). Time se zaobilaze ranije spremljene kopije bez ručnog brisanja cachea.
