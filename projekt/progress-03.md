# Zpráva o postupu: Dokončení webové prezentace a multi-page architektura

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr) – Cvičení 4  
**Výstupní složka webu:** [`projekt/web/`] (spustitelné přímo v prohlížeči i přes `file:///` bez instalace)  
**Původní prototyp:** [`projekt/prototyp/index.html`] (ponechán v původním stavu pro Cvičení 3)

---

## 1. Co je implementováno

Finální webová prezentace festivalu **CHROMASYNC 2026** byla kompletně dokončena a nasazena do dedikované složky `projekt/web/`. Web je postaven na čistém sémantickém HTML5, moderním CSS3 a modulárním Vanilla JavaScriptu bez jakýchkoliv externích knihoven nebo frameworků:

1. **Úvodní stránka (`projekt/web/index.html`):**
   - **Hero sekce s živým odpočtem:** Dynamický JavaScriptový odpočet (dny, hodiny, minuty, sekundy) do slavnostního zahájení festivalu (23. října 2026).
   - **Interaktivní 3D headset vizuál:** Model VR brýlí s akcentovými senzory reagující v reálném čase na pohyb myši (desktop) i dotyková gesta (mobil) s plynulým 3D náklonem (`perspective`, `rotateX`, `rotateY`).
   - **Klíčové festivalové metriky:** Přehledová mřížka údajů (3 festivalové dny, 4 imerzivní scény, 60 tvůrců a studií, 60 programových děl).
   - **Kurátorský výběr (Featured Highlights):** Výběr 4 reprezentativních děl napříč scénami s okamžitou možností otevření detailu, rezervace slotu a přidání do rozvrhu.
   - **Rozcestník festivalových scén:** Přehled 4 scén (Dome Alpha, Matrix Arena, Neon Stage, Oasis Hub) s technickými parametry, kapacitou a přímým odkazem na předfiltrovaný program dané scény.
   - **3D Sensory Lab & FOV Simulátor:** Funkční interaktivní HTML5 canvas simulátor demonstrující rozdíl mezi 6DOF volným pohybem ve 3D mřížce, 360° filmem (3DOF) a ambientním prostorovým audiem, doplněný o test haptické odezvy (`navigator.vibrate` / vizuální impuls).
   - **Festivalové pasy a vstupenky:** Přehled cenových kategorií (1-Denní pas, 3-Denní All-Access a VIP Industry Pass) s garantovanými výhodami.
   - **Video teaser showreel & Newsletter:** Interaktivní video preview s prostorovým audiem a formulářem pro odběr novinek.

2. **Obsahově odlišná stránka – Kompletní program a harmonogram (`projekt/web/program.html`):**
   - **Kompletní katalog 60 děl:** Všechna díla ze strukturovaného datasetu festivalu.
   - **Vícedimenzionální filtrovací systém:**
     - Záložky festivalových dnů (Celý festival 60 děl, Pátek – Den 1, Sobota – Den 2, Neděle – Den 3).
     - Výběrové roletky pro 4 festivalové scény a VR technologie (6DOF, haptika, 360°, Apple Vision Pro, masterclass).
     - Rychlé tematické štítky (🦺 Haptika, 🕹️ 6DOF, 🚀 Sci-Fi, 👶 Rodina & Děti, 🇨🇿 Česká tvorba).
     - Fulltextové vyhledávání v reálném čase s tlačítkem okamžitého vymazání.
   - **Přepínač režimu zobrazení (Mřížka vs. Časová osa):** Možnost přepnout z klasických karet do chronologické časové osy (Timeline), která seskupuje projekce podle hodin a dnů.
   - **Prázdný stav s obnovením:** Při nulovém výsledku vyhledávání se zobrazí srozumitelná zpráva s tlačítkem pro reset všech filtrů.

3. **Obsahově odlišná stránka – Katalog tvůrců a hostů (`projekt/web/tvurci.html`):**
   - **Katalog 60 tvůrců a studií:** Mezinárodní režiséři, 3D vývojáři, zvukaři a umělci z 18 zemí.
   - **Filtrování rolí a vyhledávání:** Filtry pro režiséry, VR studia, 3D/VFX, zvuk a českou scénu s okamžitým vyhledáváním podle jména či země.
   - **Obousměrné propojení profil ↔ program:** Detail tvůrce v modálním okně zobrazuje jeho biografii, portfolio a seznam všech jeho festivalových vystoupení s 1-klik přidáním do rozvrhu.

4. **Obsahově odlišná stránka – Praktické informace a návštěvnický průvodce (`projekt/web/prakticke-info.html`):**
   - **Mapa Křižíkových pavilonů:** Detailní orientace v pavilonech A, B, C a D na Výstavišti Praha včetně bezbariérovosti.
   - **Dopravní dostupnost:** Instrukce pro tramvaje (linky 6, 12, 17 na zastávku Výstaviště), metro C Nádraží Holešovice i parkování.
   - **Pravidla a bezpečnost VR:** Nošení dioptrických brýlí s distančními vložkami, UV-C sterilizace Cleanbox po každém divákovi, antibakteriální masky a prevence kinetózy.
   - **Interaktivní akordeon FAQ:** Sémantické elementy `<details>` a `<summary>` pro často kladené dotazy.
   - **Kontaktní formulář:** Klientsky validovaný formulář pro dotazy a akreditace.

5. **Globální navigace a klientská zóna:**
   - **Skleněná horní lišta (Glassmorphic Floating Navbar):** Fixovaná navigace s označením aktivní stránky pomocí `aria-current="page"`, logem a rychlým přístupem k rozvrhu a vstupenkám.
   - **Mobilní spodní lišta (Mobile Bottom Nav):** Ergonomická navigace pro dotyková zařízení v zóně dosahu palce (Thumb Zone).
   - **Osobní program („Můj rozvrh“):** Výsuvný boční panel dostupný ze všech stránek s chronologickým řazením, **algoritmickou detekcí časových kolizí**, perzistencí v `localStorage` a tiskovým exportem (`window.print()`).
   - **Rezervační systém:** Kontextový dialog (`<dialog>`) s validací jména/e-mailu, generováním kódu `RES-XXXXXX`, uzamčením formuláře po úspěšné rezervaci a uložením do `localStorage`.

---

## 2. Aktuální best practices a trendy v oblasti UX a designu

Při návrhu a realizaci webu byly aplikovány moderní standardy webového designu a uživatelské přívětivosti:

| Oblast | Uplatněný trend a best practice | Konkrétní implementace na webu |
| :--- | :--- | :--- |
| **Barevná paleta & Vizuální styl** | **Cyber-Chromatic Harmony & Dark Mode** | Hluboké barvy pozadí (`#080914`, `#0e1126`), neonové gradienty (cyan `#00f0ff`, magenta `#ff007a`, violet `#7928ca`), nativní `color-scheme: dark;` pro přizpůsobení systémových prvků prohlížeče. |
| **Materiálový design** | **Glassmorphism** | Prvky s jemným rozostřením pozadí (`backdrop-filter: blur(14px)`), poloprůhledné povrchy a světelné akcentové okraje (`border: 1px solid rgba(255, 255, 255, 0.1)`). |
| **Mobilní ergonomie** | **Thumb Zone Ergonomics** | Nejdůležitější navigační body jsou na telefonech přesunuty do spodní lišty v přirozeném dosahu palce jedné ruky; dotykové terče splňují doporučení WCAG (min. 44×44 px). |
| **Typografie & Škálování** | **Fluid Typography s `clamp()`** | Nadpisy a texty škálují plynule podle velikosti viewportu pomocí `clamp(2rem, 1rem + 5vw, 4rem)` bez skokových zlomů a bez přetečení. |
| **Informační architektura** | **Progressive Disclosure** | Méně podstatné nebo specializované informace (specifikace hardwaru, bio tvůrce, rezervační box, FAQ odpovědi) jsou skryty za interaktivními panely a modálními okny `<dialog>` a `<details>`. |
| **Pohledy na harmonogram** | **Dual Schedule Views** | Uživatel si může vybrat mezi kartovou mřížkou pro vizuální prohlížení a časovou osou (Timeline) pro chronologické plánování návštěvy. |
| **Přístupnost (a11y)** | **WCAG 2.2 Level AA Standardy** | Sémantické HTML5 tagy, přeskočení na obsah (`.skip-link`), zřetelný fokus pro klávesnici (`:focus-visible` s `outline-offset: 3px`), podpora klávesy `Escape` pro dialogy a `aria-live` pro dynamické počty výsledků. |
| **Tisková optimalizace** | **Print Media Stylesheet** | Pravidlo `@media print` odstraní navigace, animace i tmavé pozadí a naformátuje osobní rozvrh pro přehledný černobílý tisk na papír A4. |

---

## 3. Co se proti prototypu změnilo a proč

Prototyp v `projekt/prototyp/` sloužil jako testovací laboratorní prostředí. Při přechodu na ostrý web v `projekt/web/` došlo k následujícím klíčovým změnám:

1. **Oddělení produkčního kódu do složky `projekt/web/`:**
   - *Důvod:* Zadání vyžadovalo neupravovat prototyp, ale finální řešení umístit do složky `web` bez linkování na prototyp. Původní prototyp byl zachován v nedotčeném stavu.

2. **Odstranění testovací lišty a umělého emulátoru zařízení:**
   - *Původní stav:* Prototyp obsahoval horní lištu `proto-topbar` s přepínáním pevných rámů telefonů (390 px) a tabletů (768 px) a tlačítka scénářů.
   - *Nové řešení:* V produkčním webu byl emulátor odstraněn. Web je 100% přirozeně responzivní a plně se přizpůsobuje skutečnému oknu libovolného zařízení (od malých mobilů po širokoúhlé 4K monitory).

3. **Rozdělení na vícestránkovou architekturu (Multi-Page Site):**
   - *Původní stav:* Všechny sekce byly umístěny na jediné dlouhé stránce prototypu.
   - *Nové řešení:* Vznikly 4 obsahově odlišné a plnohodnotné stránky (`index.html`, `program.html`, `tvurci.html`, `prakticke-info.html`). Každá stránka má vlastní titulek, meta popisek, sémantickou navigaci s `aria-current="page"` a specializovaný obsah.

4. **Přidání zobrazení harmonogramu v časové ose (Timeline View):**
   - *Původní stav:* Prototyp nabízel pouze zobrazení ve formě karet.
   - *Nové řešení:* Do `program.html` byl implementován přepínač na časovou osu, která chronologicky organizuje projekce podle hodinových bloků a scén.

5. **Nové prezentační sekce na úvodní stránce:**
   - Doplněn živý odpočet do festivalu s dynamickou aktualizací každou sekundu.
   - Doplněn kurátorský výběr (Featured Highlights) s přímými kartami klíčových děl.
   - Doplněna sekce festivalových pasů (ceník a výhody).
   - Doplněn interaktivní video teaser showreel.

6. **Globální perzistence a sdílení dat napříč stránkami:**
   - Data osobního rozvrhu i vygenerovaných rezervací slotů jsou ukládána do `localStorage` a synchronizována mezi všemi podstránkami. Návštěvník si může vybrat film na `index.html` nebo `tvurci.html` a v rozvrhu na `program.html` jej ihned najde.

7. **Přístupnostní prvky (WCAG):**
   - Doplněn odkaz pro přeskočení navigace (`.skip-link`) na všech stránkách.
   - Implementován styl `:focus-visible` s odsazením obrysu pro spolehlivou orientaci při ovládání tabulátorem.

---

## 4. Jaké testy a kontroly byly provedeny

1. **Automatizovaná kontrola odkazů a ID kotev (Link Integrity):**
   - Skriptem byla ověřena integrita všech interních odkazů a kotev napříč všemi 4 HTML soubory.
   - Výsledek: **100% validní**, 0 neplatných odkazů, 0 chybějících cílů, 0 neuzavřených HTML značek.

2. **Syntaktická kontrola kódu:**
   - JavaScriptový soubor byl zvalidován pomocí Node.js (`node -c projekt/web/app.js`) s nulovým výskytem syntaktických chyb.
   - CSS kód byl analyzován na pokrytí tříd použitých v HTML šablonách.

3. **Responzivní testování na různých zařízeních:**
   - **Mobilní rozlišení (360 px, 390 px, 414 px):** Ověřeno, že horní navigace přepíná na kompaktní záhlaví, spodní lišta se fixuje k dolnímu okraji, mřížky karet se skládají do 1 sloupce a dotykové prvky mají min. 44 px.
   - **Tabletové rozlišení (768 px – 834 px):** 2sloupcové rozvržení karet programu i tvůrců, optimální čitelnost textů.
   - **Desktopové rozlišení (1024 px – 1440 px+):** Zobrazení plné skleněné navigace, 3 až 4 sloupce karet programu, dvousloupcové rozvržení hera a 3D zkušebny.

4. **Funkční testy interaktivních modulů:**
   - **Test filtrů:** Ověřena kombinace výběru dne, scény, technologie a fulltextového vyhledávání – počítadlo výsledků korektně reflektuje nalezená data.
   - **Test detekce časových kolizí:** Při uložení dvou souběžně probíhajících vystoupení v tentýž den výsuvný panel okamžitě zobrazí varování s přesnými názvy a časy překrývajících se akcí.
   - **Test rezervace slotu:** Odeslání formuláře s platným jménem a e-mailem vygeneruje unikátní kód `RES-XXXXXX`, uzamkne formulář, uloží stav do `localStorage` a promítne potvrzení do karty i rozvrhu.
   - **Test zobrazení časové osy:** Přepnutí mezi mřížkou a časovou osou zachovává aktuálně nastavené filtry a správně shlukuje položky do hodinových skupin.
   - **Test 100% offline běhu:** Web byl ověřen při přímém otevření z lokálního disku přes `file:///` protokol – díky vloženým záložním datům fungují všechny interakce bez potřeby webového serveru či internetu.

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

- **Přímé spuštění v prohlížeči (offline):**
  Dvojklikem otevřete soubor [`projekt/web/index.html`]
- **Spuštění přes lokální HTTP server (volitelně):**
  V kořenové složce projektu spusťte:
  ```bash
  python3 -m http.server 8000
  ```
  A v prohlížeči otevřete `http://localhost:8000/projekt/web/`.

