# CHROMASYNC VR FILM FESTIVAL 2026 – Interaktivní prototyp (Cvičení 3)

Samostatný, spustitelný interaktivní prototyp festivalového webu pro Cvičení 3 (semestr 5, Web Design).  
Prototyp je zcela nezávislý a běží bez jakékoliv instalace externích balíčků či závislostí.

---

## Soubory prototypu

- [`index.html`](index.html) – Hlavní sémantická struktura prototypu s integrovanou lištou pro testování scénářů a přepínačem zařízení (Mobil 390px, Tablet 768px, Desktop).
- [`style.css`](style.css) – Mobile-first responzivní design systém v estetice *Cyber-Chromatic Harmony* (neonové akcenty, glassmorphism, fluidní gridy).
- [`app.js`](app.js) – Aplikační logika v čistém JavaScriptu (Vanilla JS) s vestavěným offline fallback datasetem a detektorem časových kolizí.
- [`data.json`](data.json) – Kompletní normalizovaný dataset festivalu (4 scény, 60 účinkujících, 60 programových slotů).

---

## Jak prototyp spustit (bez instalace)

1. **Přímo v prohlížeči (offline / file protokol):**  
   Dvojklikem otevřete soubor [`index.html`](index.html) v jakémkoliv moderním prohlížeči (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge).  
   Prototyp obsahuje vestavěný offline dataset `FESTIVAL_DATA`, takže veškeré vyhledávání, filtry, simulátor i ukládání fungují okamžitě bez nutnosti webového serveru a bez CORS chyb.

2. **Spuštění přes lokální HTTP server (volitelné):**  
   V této složce spusťte:
   ```bash
   python3 -m http.server 3000
   ```
   a přejděte v prohlížeči na adresu `http://localhost:3000/`.

---

## Klíčové interaktivní funkce prototypu

1. **Vícedimenzionální interaktivní filtr a živé fulltextové vyhledávání v programu:**
   - Přepínání festivalových dnů (Den 1, Den 2, Den 3, Celý festival).
   - Filtrování podle 4 scén a podle technologií (6DOF, Haptika, 360°, Apple Vision Pro, Masterclasses).
   - Rychlé tematické štítky (*Quick Pills*) a okamžité vyhledávání reagující na každý úhoz klávesy.
2. **Osobní program a správa oblíbených („Můj rozvrh“) s automatickou detekcí časových kolizí:**
   - Ukládání oblíbených akcí, výsuvný postranní panel řazený chronologicky, perzistence v `localStorage`.
   - **Algoritmická kontrola časových překryvů:** varovný box s konkrétními názvy a časy kolidujících akcí při nechtěném překryvu dvou projekcí.
3. **Kontextové zobrazení detailů a rezervační systém slotů na VR headsety:**
   - Nativní `<dialog>` okna s technickými parametry, anotací, proklikem na profily zapojených tvůrců a funkčním rezervačním formulářem generujícím unikátní kód (`RES-XXXXXX`).
4. **Interaktivní katalog tvůrců s obousměrným propojením na program:**
   - Fulltextové vyhledávání 60 tvůrců, filtrování rolí a kontextový profil s možností přidat dílo do rozvrhu přímo z karty autora.
5. **3D Canvas / FOV & Sensory Simulator:**
   - Simulace 3 režimů imerze (6DOF Room-scale se sledováním myši/dotyku, 3DOF 360° Cinema, Ambient Spatial Audio) a test haptického pulzu (`navigator.vibrate`).
6. **Integrovaná testovací lišta prototypu:**
   - Tlačítka pro jednoklikový automatický průchod **Scénářem 1** (Gamer Tomáš) i **Scénářem 2** (Cinefilka Karolína).
   - Tlačítka pro přepnutí zobrazení do rámu telefonu (**Mobil 390px**), tabletu (**Tablet 768px**) a plného okna (**Desktop**).
