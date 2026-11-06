# Zpráva o postupu: Dokončení webové prezentace a multi-page architektura

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr) – Cvičení 4  
**Výstupní složka webu:** [`projekt/web/`] (spustitelné přímo v prohlížeči i přes `file:///` bez instalace)

---

## 1. Co je implementováno

Finální web festivalu **CHROMASYNC 2026** v `projekt/web/` je postaven na čistém sémantickém HTML5, CSS3 a Vanilla JS bez externích knihoven:

1. **Úvodní stránka (`index.html`):** Hero sekce s živým JS odpočtem do zahájení (23. října 2026) a 3D headsetem reagujícím na pohyb myši i dotyk (`rotateX/Y`), festivalové metriky, kurátorský výběr (Featured Highlights), rozcestník 4 scén s technickými parametry, 3D Sensory Lab & FOV canvas simulátor (6DOF, 360°, haptika), ceník pasů a video teaser.
2. **Katalog programu a harmonogram (`program.html`):** Kompletní databáze 60 děl, vícedimenzionální filtry (dny, scény, technologie, rychlé štítky), fulltextové vyhledávání v reálném čase a přepínač zobrazení mezi kartovou mřížkou a chronologickou časovou osou (Timeline).
3. **Katalog tvůrců a hostů (`tvurci.html`):** Databáze 60 tvůrců a studií z 18 zemí s filtrem rolí a obousměrným propojením profil ↔ vystoupení v programu (modální okno s biografií a 1-klik přidáním do rozvrhu).
4. **Návštěvnický průvodce (`prakticke-info.html`):** Mapa Křižíkových pavilonů na Výstavišti Praha včetně bezbariérovosti, doprava (tramvaje, metro, parkování), VR hygiena a bezpečnost (UV-C Cleanbox, brýle, kinetóza), FAQ akordeon (`<details>`) a kontaktní formulář.
5. **Globální navigace a klientská zóna:** Fixovaná horní skleněná lišta (`aria-current="page"`), mobilní spodní lišta v dosahu palce (Thumb Zone), výsuvný panel „Můj rozvrh“ s detekcí časových kolizí a tiskem, rezervační dialog (`<dialog>`) s kódem `RES-XXXXXX` a `localStorage`.

---

## 2. Aktuální best practices a trendy v oblasti UX a designu

| Oblast | Uplatněný trend a best practice | Konkrétní implementace na webu |
| :--- | :--- | :--- |
| **Vizuální styl** | **Cyber-Chromatic Dark Mode** | Tmavé pozadí (`#080914`), neonové gradienty (cyan, magenta), nativní `color-scheme: dark;`. |
| **Materiál** | **Glassmorphism** | Rozostření pozadí (`backdrop-filter: blur(14px)`), poloprůhledné povrchy a světelné okraje. |
| **Ergonomie** | **Thumb Zone & WCAG Touch** | Mobilní spodní lišta v dosahu palce; interaktivní cíle splňují minimální rozměr 44×44 px. |
| **Typografie** | **Fluid Typography s `clamp()`** | Plynulé škálování textů podle šířky okna bez skokových zlomů a přetékání obsahu. |
| **Informační tok** | **Progressive Disclosure** | Hardwarové specifikace, bio tvůrců a FAQ skryty za interaktivními modály `<dialog>` a `<details>`. |
| **Harmonogram** | **Dual Schedule Views** | Volba mezi vizuální kartovou mřížkou a chronologickou časovou osou (Timeline). |
| **Přístupnost** | **WCAG 2.2 AA Standardy** | Sémantické tagy, skip-link, výrazný `:focus-visible` s odsazením 3 px, podpora klávesy Esc. |
| **Tisk** | **Print Media Stylesheet** | Pravidlo `@media print` odstraní navigace a naformátuje osobní rozvrh pro čistý tisk na A4. |

---

## 3. Co se proti prototypu změnilo a proč

1. **Oddělení produkčního kódu do `projekt/web/`:** Finální řešení je samostatné ve složce `web`; původní prototyp v `projekt/prototyp/` zůstal zachován v nedotčeném stavu.
2. **Odstranění testovací lišty a emulátoru:** Odstraněna lišta `proto-topbar` s pevnými rámci; web je 100% přirozeně responzivní pro libovolný displej.
3. **Multi-Page architektura:** Původní one-page rozložení rozděleno do 4 samostatných stránek (`index`, `program`, `tvurci`, `prakticke-info`) s vlastními titulky, meta popisky a sémantickou navigací.
4. **Časová osa v programu (Timeline View):** Doplněn alternativní chronologický pohled shlukující projekce podle hodinových bloků a scén.
5. **Nové prezentační sekce:** Na úvodní stránku přibyl živý JS odpočet, kurátorský výběr (Featured), ceník festivalových pasů a video teaser showreel.
6. **Globální perzistence dat:** Osobní rozvrh i vygenerované rezervace se ukládají do `localStorage` a synchronizují mezi všemi stránkami.
7. **Rozšířená přístupnost (WCAG):** Doplněn `.skip-link`, kontrastní styl `:focus-visible` a `aria-current="page"` pro aktivní položku.

---

## 4. Jaké testy a kontroly byly provedeny

1. **Automatizovaná kontrola odkazů a HTML:** Ověřena integrita všech interních odkazů a kotev napříč 4 soubory (100% validní, 0 chybějících cílů).
2. **Syntaktická kontrola kódu:** JavaScript zvalidován pomocí Node.js (`node -c projekt/web/app.js`) s nulovým výskytem syntaktických chyb.
3. **Responzivní testování:** Ověřeno na mobilu (360–414 px: spodní lišta v dosahu palce, 1 sloupec, dotykové cíle ≥ 44 px), tabletu (768–834 px: 2 sloupce) i desktopu (1024–1440 px+: plná navigace, 3–4 sloupce).
4. **Funkční testy modulů:** Ověřeno filtrování a vyhledávání, detekce časových kolizí v rozvrhu, generování kódů `RES-XXXXXX`, přepínání mřížky/časové osy i 100% offline běh z lokálního disku přes `file:///`.

---

## 5. Použití AI a ověření AI výstupů

Umělá inteligence byla využita v režimu asistovaného párového programování pro refaktoring architektury, generování CSS komponent a tvorbu šablon pro nově vzniklé stránky. Výstupy byly podrobeny přísné lidské verifikaci:

1. **Refaktoring na Multi-Page web:**
   - *Využití AI:* Generování základních kostek pro `program.html`, `tvurci.html` a `prakticke-info.html` s konzistentní hlavičkou a patičkou.
   - *Nedostatky AI:* AI v odkazech ponechávala původní kotevní odkazy z prototypu (např. `href="#program-section"` místo `href="program.html"`), což při procházení z jiné podstránky vedlo na nefunkční kotvu.
   - *Ověření a náprava:* Všechny navigační odkazy byly ručně přepracovány s ohledem na aktuální umístění a byla doplněna logika pro předávání parametrů přes URL (např. `program.html?stage=stage-matrix-6dof`).

2. **Zobrazení časové osy (Timeline View):**
   - *Využití AI:* Návrh algoritmu pro seskupení programových položek podle dnů a hodinových intervalů.
   - *Nedostatky AI:* Původní návrh řadil hodiny jako řetězce bez normalizace (např. „9:00“ za „10:00“) a v CSS chyběly vizuální spojovací linie časové osy.
   - *Ověření a náprava:* Implementováno robustní chronologické řazení na základě celých minut a doplněn moderní vizuální styl s vertikální neonovou linkou a svítícími uzly.

3. **Dostupnost a WCAG pravidla (Modern Web Guidance):**
   - *Využití AI:* Doporučení a návrhy tříd pro focus stavy.
   - *Nedostatky AI:* Modely často používají `outline: none;` bez náhrady nebo opomíjejí atribut `aria-current="page"` pro aktivní položku navigace.
   - *Ověření a náprava:* Do stylů byl začleněn vysoce kontrastní `:focus-visible` s odsazením `outline-offset: 3px`, byl doplněn přístupný skip-link a všechny aktivní stránky nesou sémantické atributy pro asistenční technologie.

---

## 6. Spuštění webové prezentace

Web nevyžaduje žádnou instalaci, build ani balíčkovací nástroje:
- **Přímé spuštění v prohlížeči (offline):** Dvojklikem otevřete soubor [`projekt/web/index.html`].
- **Spuštění přes lokální HTTP server (volitelně):**
  ```bash
  python3 -m http.server 8000
  ```
  A v prohlížeči otevřete `http://localhost:8000/projekt/web/`.
