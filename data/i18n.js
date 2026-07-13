/* ============================================================
   V3 — prijevodi (HR / EN / DE)
   Svi tekstovi stranice na jednom mjestu.
   Ključevi se referenciraju u HTML-u preko data-i18n atributa.
   ============================================================ */

window.I18N = {

  /* ---------------- HRVATSKI ---------------- */
  hr: {
    meta: {
      home:     { title: "V3 — Stambena gradnja | Bjelovar · Kraljevica", desc: "V3 d.o.o. gradi stambene zgrade u kojima svaki kvadrat vrijedi. Aktualni projekti: Vlahe Bukovca u Bjelovaru i Regina u Kraljevici." },
      bjelovar: { title: "Vlahe Bukovca, Bjelovar — V3 | Dva stana s vrtom i parkingom", desc: "Boutique stambena zgrada s dva dvosobna stana od 57,21 m² u mirnoj slijepoj ulici. Dva parkirna mjesta i dio vrta uz svaki stan. Useljenje: listopad 2027." },
      regina:   { title: "Regina, Kraljevica — V3 | Šest stanova s pogledom na more", desc: "Projekt Regina: šest stanova s jugozapadnim pogledom na more, garažom i ostavama u suterenu. Svi sadržaji Kraljevice na 500 metara." }
    },
    nav: { projects: "Projekti", about: "O nama", contact: "Kontakt" },
    brand: { tag: "gradnja" },
    hero: {
      eyebrow: "Stambena gradnja · Bjelovar — Kraljevica",
      title: "Svaki kvadrat <em>vrijedi.</em>",
      sub: "V3 projektira i gradi stambene zgrade u kojima je svaki kvadrat promišljeno iskorišten. Kvaliteta ispred kvantitete — od prve skice do primopredaje ključeva.",
      ctaProjects: "Pogledaj projekte",
      ctaContact: "Kontaktirajte nas"
    },
    marquee: "Svaki kvadrat vrijedi",
    home: {
      projectsEyebrow: "01 · Projekti",
      projectsTitle: "Dva projekta. <em>Jedna filozofija.</em>",
      projectsNote: "Boutique zgrade s malim brojem stanova, promišljeni tlocrti i lokacije provjerene svakodnevnim životom.",
      aboutEyebrow: "02 · O nama",
      aboutTitle: "Kvaliteta ispred <em>kvantitete.</em>",
      contactEyebrow: "03 · Kontakt",
      contactTitle: "Razgovarajmo o <em>vašem novom domu.</em>",
      contactLead: "Zanima vas stan, termin razgovora ili detalj projekta? Javite nam se — odgovaramo brzo i konkretno."
    },
    proj: {
      view: "Pogledaj projekt",
      bjelovar: {
        city: "Bjelovar · Ulica Vlahe Bukovca",
        blurb: "Boutique stambena zgrada s dvije stambene jedinice u mirnoj slijepoj ulici. Svaki stan ima dva parkirna mjesta i pripadajući dio vrta, a škola, vrtić i svi sadržaji nalaze se unutar jednog kilometra.",
        f1: "2 stana", f2: "57,21 m²", f3: "2 parkirna mjesta po stanu", f4: "Pripadajući vrt"
      },
      regina: {
        city: "Kraljevica · Strossmayerova ulica",
        blurb: "Šest stanova s pogledom na more, po dva na etaži, iznad suterena s garažom i ostavama. Jugozapadna orijentacija, a svi sadržaji Kraljevice na 500 metara.",
        f1: "6 stanova", f2: "≈ 57 m²", f3: "Pogled na more", f4: "Garaža + ostava"
      }
    },
    status: { prep: "U pripremi", completion: "Useljenje: listopad 2027." },
    unit: {
      available: "Dostupno", reserved: "Rezervirano", sold: "Prodano",
      layout: "2 spavaće + dnevni boravak",
      inquiry: "Pošalji upit"
    },
    floor: { ground: "Prizemlje", first: "1. kat", second: "2. kat", basement: "Suteren" },
    cols: { unit: "Stan", floor: "Etaža", layout: "Struktura", nkp: "NKP", extras: "Uz stan", status: "Status" },
    about: {
      lead: "Vjerujemo da svaki kvadrat vrijedi — zato projektiramo stanove bez izgubljenih hodnika i mrtvih kutova, samo s prostorom koji svakodnevno radi za vas.",
      p1: "V3 d.o.o. građevinska je tvrtka specijalizirana za gradnju stambenih i nestambenih zgrada. Gradimo boutique projekte s malim brojem stambenih jedinica, jer nam takav opseg omogućuje potpunu kontrolu kvalitete — od izbora materijala do posljednjeg detalja završnih radova.",
      p2: "Svaki naš tlocrt nastaje s istim ciljem: maksimalna iskoristivost svakog kvadrata. Stan od 57 m² može živjeti kao znatno veći — ako je svaki metar na svom mjestu.",
      v1t: "Promišljeni tlocrti", v1d: "Arhitektonska rješenja u kojima svaka prostorija ima svrhu, a prostor prati stvarne navike stanovanja.",
      v2t: "Kvaliteta gradnje", v2d: "Provjereni materijali, suvremena tehnička rješenja i nadzor u svim fazama — gradimo kao da gradimo za sebe.",
      v3t: "Lokacije za život", v3d: "Mirne ulice, blizina sadržaja i dobra povezanost — biramo lokacije koje svaki dan štede vrijeme.",
      s1n: "2", s1l: "aktivna projekta",
      s2n: "8", s2l: "stambenih jedinica",
      s3n: "2027", s3l: "prva useljenja"
    },
    form: {
      name: "Ime i prezime", email: "E-mail adresa", phone: "Telefon (neobavezno)",
      project: "Projekt koji vas zanima",
      optGeneral: "Općenit upit", optBjelovar: "Vlahe Bukovca — Bjelovar", optRegina: "Regina — Kraljevica",
      message: "Poruka", send: "Pošalji upit",
      note: "Slanjem se otvara vaš e-mail program s pripremljenim upitom.",
      success: "Hvala! Vaš e-mail program otvara se s pripremljenim upitom."
    },
    info: { company: "Tvrtka", address: "Adresa", oib: "OIB", email: "E-mail", hq: "Bjelovarska ulica 22, 43212 Rovišće" },
    footer: {
      ctaEyebrow: "Imate pitanje?",
      ctaTitle: "Pronađimo <em>vaš kvadrat.</em>",
      ctaBtn: "Pošalji upit",
      tag: "Gradimo stambene prostore u kojima svaki kvadrat vrijedi.",
      colNav: "Navigacija", colProjects: "Projekti", colContact: "Kontakt",
      rights: "Sva prava pridržana.",
      disclaimer: "Prikazani sadržaji informativnog su karaktera i ne predstavljaju ponudu u pravnom smislu."
    },
    breadcrumb: "Svi projekti",
    plan: {
      eyebrow: "Tlocrti",
      hint: "Prijeđite pokazivačem ili dodirnite prostoriju za detalje.",
      roomsTitle: "Iskaz površina",
      totalLabel: "Ukupna neto površina",
      disclaimer: "Tlocrt je shematski prikaz izrađen prema projektnoj dokumentaciji i informativnog je karaktera. Površine lođa, balkona i terasa uračunate su s koeficijentima sukladno iskazu površina.",
      sea: "Pogled na more · JZ",
      garageTitle: "Suteren — garaža i ostave",
      garageNote: "Svakom stanu pripada jedno parkirno-garažno mjesto (PGM) i jedno spremište."
    },
    rooms: {
      hodnik: "Hodnik", spavaca: "Spavaća soba", spavaca1: "Spavaća soba 1", spavaca2: "Spavaća soba 2",
      kupaonica: "Kupaonica", dnevni: "Dnevni boravak, kuhinja i blagovaonica",
      open: "Otvoreni dnevni prostor s kuhinjom", ostava: "Ostava", loggia: "Lođa",
      terasa: "Natkrivena terasa", balkon: "Natkriveni balkon", stubiste: "Stubište (zajedničko)",
      spremiste: "Spremište", pgm: "Parkirno-garažno mjesto", rampa: "Kolna rampa"
    },
    tech: {
      eyebrow: "Tehnički opis",
      title: "Tehnologija koja se ne vidi — <em>ali se osjeti.</em>",
      note: "Ključna tehnička rješenja primijenjena u projektu.",
      t1t: "Dizalica topline + podno grijanje", t1d: "Grijanje i priprema potrošne tople vode putem sustava dizalice topline, s podnim grijanjem u cijelom stanu.",
      t2t: "Hlađenje klima uređajima", t2d: "Svaki stan hladi se klima uređajima.",
      t3t: "Priprema za solarne panele", t3d: "Izvedena priprema instalacija za postavljanje solarnih panela.",
      t4t: "PVC stolarija, trostruko staklo", t4d: "Visokokvalitetna PVC stolarija s trostrukim ostakljenjem.",
      t5t: "Podovi po izboru kupca", t5d: "Završne podne obloge biraju se u dogovoru s kupcem."
    },
    gallery: {
      eyebrow: "Galerija",
      title: "Vizualizacije <em>u izradi.</em>",
      ph: "3D render u pripremi",
      note: "3D vizualizacije projekta trenutačno su u izradi — galerija će uskoro biti dopunjena."
    },
    loc: { eyebrow: "Lokacija", map: "Otvori na karti" },
    pb: {
      eyebrow: "Projekt 01 · Bjelovar",
      b2: "2 stambene jedinice", b3: "57,21 m² NKP",
      introLead: "Boutique zgrada s dva stana — jedan u prizemlju, jedan na katu — u slijepoj ulici Vlahe Bukovca, u mirnom bjelovarskom naselju.",
      introP1: "Izrazito efikasno arhitektonsko rješenje pretvara 57,21 m² u prostran dvosoban dom: dnevni boravak otvorenog tipa s kuhinjom i blagovaonicom, dvije spavaće sobe, kupaonica, lođa i natkrivena terasa.",
      introP2: "Svakom stanu pripadaju dva vanjska parkirna mjesta i vlastiti dio vrta. Škola, vrtić, trgovine i svi potrebni sadržaji nalaze se u krugu jednog kilometra.",
      h1t: "Slijepa ulica", h1d: "Bez tranzitnog prometa — mir i sigurnost za obitelji s djecom.",
      h2t: "2 parkirna mjesta", h2d: "Svakom stanu pripadaju dva vanjska parkirna mjesta.",
      h3t: "Pripadajući vrt", h3d: "Vlastiti dio uređenog vrta uz svaki stan.",
      h4t: "Sve unutar 1 km", h4d: "Škola, vrtić, trgovine i sadržaji svakodnevice na pješačkoj udaljenosti.",
      h5t: "Efikasnih 57 m²", h5d: "Bez izgubljenih kvadrata — svaka prostorija promišljena do detalja.",
      h6t: "Samo dva stana", h6d: "Privatnost male zgrade: zajednički ulaz dijele svega dvije obitelji.",
      unitsEyebrow: "Stanovi",
      unitsTitle: "Dvije jedinice, <em>identičan tlocrt.</em>",
      extras: "2 parkirna mjesta · dio vrta",
      unitsNote: "NKP = neto korisna površina. Lođa i natkrivena terasa uračunate su s koeficijentima sukladno iskazu površina iz projekta.",
      planTitle: "Svaki metar <em>na svom mjestu.</em>",
      tab1: "Stan 1 · Prizemlje", tab2: "Stan 2 · 1. kat",
      t6t: "Parking i vrt", t6d: "Dva vanjska parkirna mjesta i pripadajući dio vrta uz svaki stan.",
      locTitle: "Mirno naselje, <em>sve nadohvat ruke.</em>",
      locP: "Ulica Vlahe Bukovca slijepa je ulica u mirnom stambenom dijelu Bjelovara. Bez prolaznog prometa, a opet — škola, vrtić i svi sadržaji svakodnevice na manje od kilometra.",
      d1n: "Škola", d1v: "< 1 km", d2n: "Vrtić", d2v: "< 1 km",
      d3n: "Trgovine i sadržaji", d3v: "< 1 km", d4n: "Tranzitni promet", d4v: "0"
    },
    pr: {
      eyebrow: "Projekt 02 · Kraljevica",
      b2: "6 stambenih jedinica", b3: "≈ 57 m² NKP", b4: "Pogled na more iz svih stanova",
      introLead: "Projekt Regina — šest stanova u Strossmayerovoj ulici u Kraljevici, svaki s jugozapadnim pogledom na more.",
      introP1: "Zgrada ima tri stambene etaže s po dva stana, a u suterenu su garaža s parkirnim mjestima i ostave. Svaki stan ima otvoreni dnevni prostor s kuhinjom, dvije spavaće sobe, lođu i natkriveni balkon okrenut moru.",
      introP2: "Parcela je omeđena samo jednim susjedom, a svi sadržaji Kraljevice — trgovine, škola, kafići i more — na svega su 500 metara.",
      h1t: "Pogled na more", h1d: "Svih šest stanova ima jugozapadni pogled na more.",
      h2t: "2 stana po etaži", h2d: "Samo dva stana na svakoj od tri etaže — privatnost i mir.",
      h3t: "Garažno mjesto + ostava", h3d: "Svakom stanu pripada parkirno-garažno mjesto u suterenu i vlastito spremište.",
      h4t: "Dodatni vanjski parking", h4d: "Mogućnost kupnje dodatnog vanjskog parkirnog mjesta.",
      h5t: "500 m do svega", h5d: "Svi sadržaji Kraljevice na pet minuta hoda.",
      h6t: "Jedan susjed", h6d: "Parcela omeđena samo jednim susjedom — otvorenost i svjetlo sa svih strana.",
      unitsEyebrow: "Stanovi",
      unitsTitle: "Šest stanova, <em>tri etaže.</em>",
      extras: "PGM + spremište",
      unitsNote: "NKP = neto korisna površina. Lođe i natkriveni balkoni uračunati su s koeficijentima sukladno iskazu površina. Uz svaki stan: parkirno-garažno mjesto (PGM) i spremište u suterenu, uz mogućnost kupnje dodatnog vanjskog parkirnog mjesta.",
      planTitle: "Dva stana po etaži, <em>more ispred.</em>",
      tab1: "Prizemlje · S1–S2", tab2: "1. kat · S3–S4", tab3: "2. kat · S5–S6", tab4: "Suteren · Garaža",
      t6t: "Garaža i spremišta", t6d: "Parkirno-garažno mjesto i spremište uz svaki stan; mogućnost kupnje dodatnog vanjskog parkirnog mjesta.",
      locTitle: "Kraljevica — <em>more na 500 metara.</em>",
      locP: "Projekt Regina smješten je u Strossmayerovoj ulici, mirnom dijelu Kraljevice između Rijeke i Crikvenice. Svi sadržaji grada — trgovine, škola, plaže i riva — na svega su 500 metara.",
      d1n: "Svi sadržaji grada", d1v: "500 m", d2n: "Pogled na more", d2v: "6 / 6 stanova",
      d3n: "Stana po etaži", d3v: "2", d4n: "Susjed", d4v: "1"
    }
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    meta: {
      home:     { title: "V3 — Residential Development | Bjelovar · Kraljevica", desc: "V3 builds residential buildings where every square metre counts. Current projects: Vlahe Bukovca in Bjelovar and Regina in Kraljevica, Croatia." },
      bjelovar: { title: "Vlahe Bukovca, Bjelovar — V3 | Two apartments with garden & parking", desc: "Boutique residential building with two 57.21 m² two-bedroom apartments on a quiet cul-de-sac. Two parking spaces and a garden share with each unit. Move-in: October 2027." },
      regina:   { title: "Regina, Kraljevica — V3 | Six sea-view apartments", desc: "Project Regina: six apartments with south-west sea views, garage and storage rooms in the basement. All of Kraljevica's amenities within 500 metres." }
    },
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    brand: { tag: "development" },
    hero: {
      eyebrow: "Residential development · Bjelovar — Kraljevica",
      title: "Every square metre <em>counts.</em>",
      sub: "V3 designs and builds residential buildings where every square metre is put to work. Quality over quantity — from the first sketch to key handover.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch"
    },
    marquee: "Every square metre counts",
    home: {
      projectsEyebrow: "01 · Projects",
      projectsTitle: "Two projects. <em>One philosophy.</em>",
      projectsNote: "Boutique buildings with few apartments, considered floor plans and locations proven by everyday life.",
      aboutEyebrow: "02 · About us",
      aboutTitle: "Quality over <em>quantity.</em>",
      contactEyebrow: "03 · Contact",
      contactTitle: "Let's talk about <em>your new home.</em>",
      contactLead: "Interested in an apartment, a meeting or project details? Reach out — we reply quickly and concretely."
    },
    proj: {
      view: "View project",
      bjelovar: {
        city: "Bjelovar · Vlahe Bukovca Street",
        blurb: "A boutique residential building with two apartments on a quiet cul-de-sac. Each apartment comes with two parking spaces and its own garden share, with school, kindergarten and all amenities within one kilometre.",
        f1: "2 apartments", f2: "57.21 m²", f3: "2 parking spaces per unit", f4: "Garden share"
      },
      regina: {
        city: "Kraljevica · Strossmayerova Street",
        blurb: "Six sea-view apartments, two per floor, above a basement with garage and storage rooms. South-west orientation, with all of Kraljevica's amenities 500 metres away.",
        f1: "6 apartments", f2: "≈ 57 m²", f3: "Sea view", f4: "Garage + storage"
      }
    },
    status: { prep: "In preparation", completion: "Move-in: October 2027" },
    unit: {
      available: "Available", reserved: "Reserved", sold: "Sold",
      layout: "2 bedrooms + living room",
      inquiry: "Send inquiry"
    },
    floor: { ground: "Ground floor", first: "1st floor", second: "2nd floor", basement: "Basement" },
    cols: { unit: "Apartment", floor: "Floor", layout: "Layout", nkp: "Net area", extras: "Included", status: "Status" },
    about: {
      lead: "We believe every square metre counts — so we design apartments without wasted hallways or dead corners, only space that works for you every day.",
      p1: "V3 is a construction company specialised in building residential and non-residential buildings. We build boutique projects with a small number of units, because that scale gives us full control of quality — from material selection to the last finishing detail.",
      p2: "Every floor plan we draw has the same goal: maximum use of every square metre. A 57 m² apartment can live like a much larger one — if every metre is in the right place.",
      v1t: "Considered floor plans", v1d: "Architectural layouts where every room has a purpose and space follows real living habits.",
      v2t: "Build quality", v2d: "Proven materials, modern technical solutions and supervision at every stage — we build as if for ourselves.",
      v3t: "Locations for living", v3d: "Quiet streets, nearby amenities and good connections — we choose locations that save time every day.",
      s1n: "2", s1l: "active projects",
      s2n: "8", s2l: "residential units",
      s3n: "2027", s3l: "first move-ins"
    },
    form: {
      name: "Full name", email: "E-mail address", phone: "Phone (optional)",
      project: "Project you are interested in",
      optGeneral: "General inquiry", optBjelovar: "Vlahe Bukovca — Bjelovar", optRegina: "Regina — Kraljevica",
      message: "Message", send: "Send inquiry",
      note: "Sending opens your e-mail app with a pre-filled inquiry.",
      success: "Thank you! Your e-mail app is opening with a pre-filled inquiry."
    },
    info: { company: "Company", address: "Address", oib: "VAT / OIB", email: "E-mail", hq: "Bjelovarska ulica 22, 43212 Rovišće, Croatia" },
    footer: {
      ctaEyebrow: "Have a question?",
      ctaTitle: "Let's find <em>your square metres.</em>",
      ctaBtn: "Send inquiry",
      tag: "We build homes where every square metre counts.",
      colNav: "Navigation", colProjects: "Projects", colContact: "Contact",
      rights: "All rights reserved.",
      disclaimer: "All content is for information purposes only and does not constitute a legally binding offer."
    },
    breadcrumb: "All projects",
    plan: {
      eyebrow: "Floor plans",
      hint: "Hover over or tap a room for details.",
      roomsTitle: "Schedule of areas",
      totalLabel: "Total net area",
      disclaimer: "The floor plan is a schematic drawing based on the project documentation and is for information only. Loggia, balcony and terrace areas are weighted with coefficients as per the area schedule.",
      sea: "Sea view · SW",
      garageTitle: "Basement — garage & storage",
      garageNote: "Each apartment comes with one garage parking space (PGM) and one storage room."
    },
    rooms: {
      hodnik: "Hallway", spavaca: "Bedroom", spavaca1: "Bedroom 1", spavaca2: "Bedroom 2",
      kupaonica: "Bathroom", dnevni: "Living room, kitchen & dining",
      open: "Open-plan living area & kitchen", ostava: "Storage", loggia: "Loggia",
      terasa: "Covered terrace", balkon: "Covered balcony", stubiste: "Staircase (common)",
      spremiste: "Storage room", pgm: "Garage parking space", rampa: "Driveway ramp"
    },
    tech: {
      eyebrow: "Technical specification",
      title: "Technology you don't see — <em>but you feel.</em>",
      note: "Key technical solutions applied in the project.",
      t1t: "Heat pump + underfloor heating", t1d: "Heating and domestic hot water via a heat pump system, with underfloor heating throughout the apartment.",
      t2t: "Air-conditioning", t2d: "Each apartment is cooled by air-conditioning units.",
      t3t: "Solar-ready installations", t3d: "Pre-installed infrastructure for mounting solar panels.",
      t4t: "PVC joinery, triple glazing", t4d: "High-quality PVC windows and doors with triple glazing.",
      t5t: "Flooring of your choice", t5d: "Final floor finishes are selected together with the buyer."
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Visualisations <em>in progress.</em>",
      ph: "3D render coming soon",
      note: "3D visualisations of the project are currently in production — the gallery will be updated soon."
    },
    loc: { eyebrow: "Location", map: "Open in maps" },
    pb: {
      eyebrow: "Project 01 · Bjelovar",
      b2: "2 residential units", b3: "57.21 m² net",
      introLead: "A boutique building with two apartments — one on the ground floor, one upstairs — on the quiet cul-de-sac of Vlahe Bukovca Street in a peaceful Bjelovar neighbourhood.",
      introP1: "A highly efficient architectural layout turns 57.21 m² into a spacious two-bedroom home: an open-plan living room with kitchen and dining, two bedrooms, a bathroom, a loggia and a covered terrace.",
      introP2: "Each apartment comes with two outdoor parking spaces and its own garden share. School, kindergarten, shops and all daily amenities are within one kilometre.",
      h1t: "Cul-de-sac", h1d: "No through traffic — calm and safety for families with children.",
      h2t: "2 parking spaces", h2d: "Two outdoor parking spaces belong to each apartment.",
      h3t: "Garden share", h3d: "A private share of the landscaped garden with every apartment.",
      h4t: "Everything within 1 km", h4d: "School, kindergarten, shops and daily amenities within walking distance.",
      h5t: "An efficient 57 m²", h5d: "No wasted square metres — every room considered down to the detail.",
      h6t: "Only two apartments", h6d: "The privacy of a small building: a shared entrance for just two families.",
      unitsEyebrow: "Apartments",
      unitsTitle: "Two units, <em>an identical floor plan.</em>",
      extras: "2 parking spaces · garden share",
      unitsNote: "Net area = net usable floor area. The loggia and covered terrace are weighted with coefficients as per the project's area schedule.",
      planTitle: "Every metre <em>in its place.</em>",
      tab1: "Apartment 1 · Ground floor", tab2: "Apartment 2 · 1st floor",
      t6t: "Parking & garden", t6d: "Two outdoor parking spaces and a garden share with each apartment.",
      locTitle: "A quiet neighbourhood, <em>everything at hand.</em>",
      locP: "Vlahe Bukovca is a cul-de-sac in a quiet residential part of Bjelovar. No through traffic, and yet — school, kindergarten and all daily amenities are less than a kilometre away.",
      d1n: "School", d1v: "< 1 km", d2n: "Kindergarten", d2v: "< 1 km",
      d3n: "Shops & amenities", d3v: "< 1 km", d4n: "Through traffic", d4v: "0"
    },
    pr: {
      eyebrow: "Project 02 · Kraljevica",
      b2: "6 residential units", b3: "≈ 57 m² net", b4: "Sea view from every apartment",
      introLead: "Project Regina — six apartments on Strossmayerova Street in Kraljevica, each with a south-west view of the sea.",
      introP1: "The building has three residential floors with two apartments each, while the basement holds a garage with parking spaces and storage rooms. Every apartment has an open-plan living area with kitchen, two bedrooms, a loggia and a covered balcony facing the sea.",
      introP2: "The plot borders only one neighbour, and all of Kraljevica's amenities — shops, school, cafés and the sea — are just 500 metres away.",
      h1t: "Sea view", h1d: "All six apartments enjoy a south-west view of the sea.",
      h2t: "2 apartments per floor", h2d: "Only two apartments on each of the three floors — privacy and calm.",
      h3t: "Garage space + storage", h3d: "Each apartment comes with a garage parking space in the basement and its own storage room.",
      h4t: "Extra outdoor parking", h4d: "Option to purchase an additional outdoor parking space.",
      h5t: "500 m to everything", h5d: "All of Kraljevica's amenities within a five-minute walk.",
      h6t: "One neighbour", h6d: "The plot borders a single neighbour — openness and light from all sides.",
      unitsEyebrow: "Apartments",
      unitsTitle: "Six apartments, <em>three floors.</em>",
      extras: "Garage space + storage",
      unitsNote: "Net area = net usable floor area. Loggias and covered balconies are weighted with coefficients as per the area schedule. Each apartment includes a garage parking space (PGM) and a storage room in the basement, with the option to purchase an additional outdoor parking space.",
      planTitle: "Two apartments per floor, <em>the sea in front.</em>",
      tab1: "Ground floor · S1–S2", tab2: "1st floor · S3–S4", tab3: "2nd floor · S5–S6", tab4: "Basement · Garage",
      t6t: "Garage & storage", t6d: "A garage parking space and storage room with every apartment; option to purchase an additional outdoor space.",
      locTitle: "Kraljevica — <em>the sea 500 metres away.</em>",
      locP: "Project Regina sits on Strossmayerova Street, in a quiet part of Kraljevica between Rijeka and Crikvenica. All the town's amenities — shops, school, beaches and the seafront — are just 500 metres away.",
      d1n: "All town amenities", d1v: "500 m", d2n: "Sea view", d2v: "6 / 6 apartments",
      d3n: "Apartments per floor", d3v: "2", d4n: "Neighbours", d4v: "1"
    }
  },

  /* ---------------- DEUTSCH ---------------- */
  de: {
    meta: {
      home:     { title: "V3 — Wohnbau | Bjelovar · Kraljevica", desc: "V3 baut Wohngebäude, in denen jeder Quadratmeter zählt. Aktuelle Projekte: Vlahe Bukovca in Bjelovar und Regina in Kraljevica, Kroatien." },
      bjelovar: { title: "Vlahe Bukovca, Bjelovar — V3 | Zwei Wohnungen mit Garten & Stellplätzen", desc: "Boutique-Wohnhaus mit zwei Wohnungen à 57,21 m² in einer ruhigen Sackgasse. Zwei Stellplätze und Gartenanteil zu jeder Wohnung. Bezug: Oktober 2027." },
      regina:   { title: "Regina, Kraljevica — V3 | Sechs Wohnungen mit Meerblick", desc: "Projekt Regina: sechs Wohnungen mit Meerblick nach Südwesten, Garage und Kellerabteile im Untergeschoss. Alle Annehmlichkeiten Kraljevicas in 500 m Entfernung." }
    },
    nav: { projects: "Projekte", about: "Über uns", contact: "Kontakt" },
    brand: { tag: "Wohnbau" },
    hero: {
      eyebrow: "Wohnbau · Bjelovar — Kraljevica",
      title: "Jeder Quadratmeter <em>zählt.</em>",
      sub: "V3 plant und baut Wohngebäude, in denen jeder Quadratmeter durchdacht genutzt wird. Qualität vor Quantität — von der ersten Skizze bis zur Schlüsselübergabe.",
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt aufnehmen"
    },
    marquee: "Jeder Quadratmeter zählt",
    home: {
      projectsEyebrow: "01 · Projekte",
      projectsTitle: "Zwei Projekte. <em>Eine Philosophie.</em>",
      projectsNote: "Boutique-Gebäude mit wenigen Wohnungen, durchdachte Grundrisse und Lagen, die sich im Alltag bewähren.",
      aboutEyebrow: "02 · Über uns",
      aboutTitle: "Qualität vor <em>Quantität.</em>",
      contactEyebrow: "03 · Kontakt",
      contactTitle: "Sprechen wir über <em>Ihr neues Zuhause.</em>",
      contactLead: "Interessieren Sie sich für eine Wohnung, einen Termin oder Projektdetails? Melden Sie sich — wir antworten schnell und konkret."
    },
    proj: {
      view: "Projekt ansehen",
      bjelovar: {
        city: "Bjelovar · Straße Vlahe Bukovca",
        blurb: "Ein Boutique-Wohnhaus mit zwei Wohneinheiten in einer ruhigen Sackgasse. Zu jeder Wohnung gehören zwei Stellplätze und ein eigener Gartenanteil; Schule, Kindergarten und alle Annehmlichkeiten liegen im Umkreis von einem Kilometer.",
        f1: "2 Wohnungen", f2: "57,21 m²", f3: "2 Stellplätze pro Wohnung", f4: "Gartenanteil"
      },
      regina: {
        city: "Kraljevica · Strossmayerova-Straße",
        blurb: "Sechs Wohnungen mit Meerblick, je zwei pro Etage, über einem Untergeschoss mit Garage und Kellerabteilen. Südwest-Ausrichtung, alle Annehmlichkeiten Kraljevicas in 500 m Entfernung.",
        f1: "6 Wohnungen", f2: "≈ 57 m²", f3: "Meerblick", f4: "Garage + Kellerabteil"
      }
    },
    status: { prep: "In Vorbereitung", completion: "Bezug: Oktober 2027" },
    unit: {
      available: "Verfügbar", reserved: "Reserviert", sold: "Verkauft",
      layout: "2 Schlafzimmer + Wohnbereich",
      inquiry: "Anfrage senden"
    },
    floor: { ground: "Erdgeschoss", first: "1. Obergeschoss", second: "2. Obergeschoss", basement: "Untergeschoss" },
    cols: { unit: "Wohnung", floor: "Etage", layout: "Aufteilung", nkp: "Nettofläche", extras: "Inklusive", status: "Status" },
    about: {
      lead: "Wir glauben, dass jeder Quadratmeter zählt — deshalb planen wir Wohnungen ohne verlorene Flure und tote Ecken, nur mit Raum, der täglich für Sie arbeitet.",
      p1: "V3 ist ein Bauunternehmen, spezialisiert auf den Bau von Wohn- und Nichtwohngebäuden. Wir realisieren Boutique-Projekte mit wenigen Wohneinheiten, weil uns dieser Maßstab die volle Qualitätskontrolle ermöglicht — von der Materialauswahl bis zum letzten Detail des Innenausbaus.",
      p2: "Jeder unserer Grundrisse entsteht mit demselben Ziel: maximale Nutzung jedes Quadratmeters. Eine 57-m²-Wohnung kann sich deutlich größer anfühlen — wenn jeder Meter an der richtigen Stelle ist.",
      v1t: "Durchdachte Grundrisse", v1d: "Architektur, in der jeder Raum einen Zweck hat und der Grundriss echten Wohngewohnheiten folgt.",
      v2t: "Bauqualität", v2d: "Bewährte Materialien, moderne technische Lösungen und Aufsicht in allen Phasen — wir bauen, als bauten wir für uns selbst.",
      v3t: "Lagen zum Leben", v3d: "Ruhige Straßen, Nähe zu Annehmlichkeiten und gute Anbindung — wir wählen Lagen, die täglich Zeit sparen.",
      s1n: "2", s1l: "aktive Projekte",
      s2n: "8", s2l: "Wohneinheiten",
      s3n: "2027", s3l: "erste Bezüge"
    },
    form: {
      name: "Vor- und Nachname", email: "E-Mail-Adresse", phone: "Telefon (optional)",
      project: "Projekt, das Sie interessiert",
      optGeneral: "Allgemeine Anfrage", optBjelovar: "Vlahe Bukovca — Bjelovar", optRegina: "Regina — Kraljevica",
      message: "Nachricht", send: "Anfrage senden",
      note: "Beim Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Anfrage.",
      success: "Vielen Dank! Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Anfrage."
    },
    info: { company: "Unternehmen", address: "Adresse", oib: "OIB / Steuernr.", email: "E-Mail", hq: "Bjelovarska ulica 22, 43212 Rovišće, Kroatien" },
    footer: {
      ctaEyebrow: "Haben Sie eine Frage?",
      ctaTitle: "Finden wir <em>Ihre Quadratmeter.</em>",
      ctaBtn: "Anfrage senden",
      tag: "Wir bauen Wohnräume, in denen jeder Quadratmeter zählt.",
      colNav: "Navigation", colProjects: "Projekte", colContact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      disclaimer: "Alle Inhalte dienen nur zu Informationszwecken und stellen kein rechtlich bindendes Angebot dar."
    },
    breadcrumb: "Alle Projekte",
    plan: {
      eyebrow: "Grundrisse",
      hint: "Fahren Sie mit dem Zeiger über einen Raum oder tippen Sie ihn an.",
      roomsTitle: "Flächenaufstellung",
      totalLabel: "Gesamte Nettofläche",
      disclaimer: "Der Grundriss ist eine schematische Darstellung auf Basis der Projektdokumentation und dient nur zur Information. Loggia-, Balkon- und Terrassenflächen sind gemäß Flächenaufstellung mit Koeffizienten gewichtet.",
      sea: "Meerblick · SW",
      garageTitle: "Untergeschoss — Garage & Kellerabteile",
      garageNote: "Zu jeder Wohnung gehören ein Garagenstellplatz (PGM) und ein Kellerabteil."
    },
    rooms: {
      hodnik: "Flur", spavaca: "Schlafzimmer", spavaca1: "Schlafzimmer 1", spavaca2: "Schlafzimmer 2",
      kupaonica: "Badezimmer", dnevni: "Wohnzimmer, Küche & Essbereich",
      open: "Offener Wohnbereich mit Küche", ostava: "Abstellraum", loggia: "Loggia",
      terasa: "Überdachte Terrasse", balkon: "Überdachter Balkon", stubiste: "Treppenhaus (Gemeinschaft)",
      spremiste: "Kellerabteil", pgm: "Garagenstellplatz", rampa: "Zufahrtsrampe"
    },
    tech: {
      eyebrow: "Technische Beschreibung",
      title: "Technik, die man nicht sieht — <em>aber spürt.</em>",
      note: "Zentrale technische Lösungen des Projekts.",
      t1t: "Wärmepumpe + Fußbodenheizung", t1d: "Heizung und Warmwasserbereitung über eine Wärmepumpe, mit Fußbodenheizung in der gesamten Wohnung.",
      t2t: "Klimaanlage", t2d: "Jede Wohnung wird mit Klimageräten gekühlt.",
      t3t: "Solar-Vorbereitung", t3d: "Vorinstallierte Leitungen für die Montage von Solarpaneelen.",
      t4t: "PVC-Fenster, Dreifachverglasung", t4d: "Hochwertige PVC-Fenster und -Türen mit Dreifachverglasung.",
      t5t: "Böden nach Wahl", t5d: "Die Bodenbeläge werden gemeinsam mit dem Käufer ausgewählt."
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Visualisierungen <em>in Arbeit.</em>",
      ph: "3D-Rendering folgt in Kürze",
      note: "Die 3D-Visualisierungen des Projekts sind derzeit in Produktion — die Galerie wird bald ergänzt."
    },
    loc: { eyebrow: "Lage", map: "In Karten öffnen" },
    pb: {
      eyebrow: "Projekt 01 · Bjelovar",
      b2: "2 Wohneinheiten", b3: "57,21 m² netto",
      introLead: "Ein Boutique-Gebäude mit zwei Wohnungen — eine im Erdgeschoss, eine im Obergeschoss — in der ruhigen Sackgasse Vlahe Bukovca in einem friedlichen Viertel von Bjelovar.",
      introP1: "Ein äußerst effizienter Grundriss macht aus 57,21 m² ein großzügiges Zuhause: offener Wohnbereich mit Küche und Essplatz, zwei Schlafzimmer, Bad, Loggia und überdachte Terrasse.",
      introP2: "Zu jeder Wohnung gehören zwei Außenstellplätze und ein eigener Gartenanteil. Schule, Kindergarten, Geschäfte und alle Annehmlichkeiten liegen im Umkreis von einem Kilometer.",
      h1t: "Sackgasse", h1d: "Kein Durchgangsverkehr — Ruhe und Sicherheit für Familien mit Kindern.",
      h2t: "2 Stellplätze", h2d: "Zu jeder Wohnung gehören zwei Außenstellplätze.",
      h3t: "Gartenanteil", h3d: "Ein eigener Anteil am angelegten Garten zu jeder Wohnung.",
      h4t: "Alles im Umkreis von 1 km", h4d: "Schule, Kindergarten, Geschäfte und der tägliche Bedarf — alles fußläufig.",
      h5t: "Effiziente 57 m²", h5d: "Keine verlorenen Quadratmeter — jeder Raum bis ins Detail durchdacht.",
      h6t: "Nur zwei Wohnungen", h6d: "Die Privatsphäre eines kleinen Hauses: ein gemeinsamer Eingang für nur zwei Familien.",
      unitsEyebrow: "Wohnungen",
      unitsTitle: "Zwei Einheiten, <em>ein identischer Grundriss.</em>",
      extras: "2 Stellplätze · Gartenanteil",
      unitsNote: "Nettofläche = Nettonutzfläche. Loggia und überdachte Terrasse sind gemäß Flächenaufstellung des Projekts mit Koeffizienten gewichtet.",
      planTitle: "Jeder Meter <em>an seinem Platz.</em>",
      tab1: "Wohnung 1 · Erdgeschoss", tab2: "Wohnung 2 · 1. OG",
      t6t: "Parken & Garten", t6d: "Zwei Außenstellplätze und ein Gartenanteil zu jeder Wohnung.",
      locTitle: "Ruhiges Viertel, <em>alles in Reichweite.</em>",
      locP: "Die Vlahe-Bukovca-Straße ist eine Sackgasse in einem ruhigen Wohnviertel von Bjelovar. Kein Durchgangsverkehr — und doch sind Schule, Kindergarten und alle Annehmlichkeiten des Alltags weniger als einen Kilometer entfernt.",
      d1n: "Schule", d1v: "< 1 km", d2n: "Kindergarten", d2v: "< 1 km",
      d3n: "Geschäfte & Bedarf", d3v: "< 1 km", d4n: "Durchgangsverkehr", d4v: "0"
    },
    pr: {
      eyebrow: "Projekt 02 · Kraljevica",
      b2: "6 Wohneinheiten", b3: "≈ 57 m² netto", b4: "Meerblick aus allen Wohnungen",
      introLead: "Projekt Regina — sechs Wohnungen in der Strossmayerova-Straße in Kraljevica, jede mit Meerblick nach Südwesten.",
      introP1: "Das Gebäude hat drei Wohnetagen mit je zwei Wohnungen; im Untergeschoss befinden sich eine Garage mit Stellplätzen und Kellerabteile. Jede Wohnung bietet einen offenen Wohnbereich mit Küche, zwei Schlafzimmer, eine Loggia und einen überdachten Balkon zum Meer.",
      introP2: "Das Grundstück grenzt nur an einen Nachbarn, und alle Annehmlichkeiten Kraljevicas — Geschäfte, Schule, Cafés und das Meer — sind nur 500 Meter entfernt.",
      h1t: "Meerblick", h1d: "Alle sechs Wohnungen haben Meerblick nach Südwesten.",
      h2t: "2 Wohnungen pro Etage", h2d: "Nur zwei Wohnungen auf jeder der drei Etagen — Privatsphäre und Ruhe.",
      h3t: "Garagenstellplatz + Kellerabteil", h3d: "Zu jeder Wohnung gehören ein Garagenstellplatz im Untergeschoss und ein eigenes Kellerabteil.",
      h4t: "Zusätzlicher Außenstellplatz", h4d: "Möglichkeit, einen zusätzlichen Außenstellplatz zu erwerben.",
      h5t: "500 m zu allem", h5d: "Alle Annehmlichkeiten Kraljevicas in fünf Gehminuten.",
      h6t: "Ein Nachbar", h6d: "Das Grundstück grenzt nur an einen Nachbarn — Offenheit und Licht von allen Seiten.",
      unitsEyebrow: "Wohnungen",
      unitsTitle: "Sechs Wohnungen, <em>drei Etagen.</em>",
      extras: "Garagenplatz + Kellerabteil",
      unitsNote: "Nettofläche = Nettonutzfläche. Loggien und überdachte Balkone sind gemäß Flächenaufstellung mit Koeffizienten gewichtet. Zu jeder Wohnung gehören ein Garagenstellplatz (PGM) und ein Kellerabteil im Untergeschoss; zusätzlich kann ein Außenstellplatz erworben werden.",
      planTitle: "Zwei Wohnungen pro Etage, <em>das Meer davor.</em>",
      tab1: "Erdgeschoss · S1–S2", tab2: "1. OG · S3–S4", tab3: "2. OG · S5–S6", tab4: "Untergeschoss · Garage",
      t6t: "Garage & Kellerabteile", t6d: "Garagenstellplatz und Kellerabteil zu jeder Wohnung; zusätzlicher Außenstellplatz optional erhältlich.",
      locTitle: "Kraljevica — <em>das Meer in 500 Metern.</em>",
      locP: "Das Projekt Regina liegt in der Strossmayerova-Straße, einem ruhigen Teil von Kraljevica zwischen Rijeka und Crikvenica. Alle Annehmlichkeiten der Stadt — Geschäfte, Schule, Strände und die Uferpromenade — sind nur 500 Meter entfernt.",
      d1n: "Alle Annehmlichkeiten", d1v: "500 m", d2n: "Meerblick", d2v: "6 / 6 Wohnungen",
      d3n: "Wohnungen pro Etage", d3v: "2", d4n: "Nachbarn", d4v: "1"
    }
  }
};
