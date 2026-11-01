# Zpráva o postupu: Návrh klíčových částí webu a interaktivní prototyp

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr)  
**Výstup:** Cvičení 3 – Interaktivní prototyp a zpráva o postupu (`progress-02.md`)  
**Umístění prototypu:** [`projekt/web/index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/web/index.html) (případně přesměrování v [`projekt/prototyp/index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/prototyp/index.html))

---

## 1. Seznam navržených funkcí

Prototyp představuje plně funkční, spustitelný web bez nutnosti jakékoliv instalace závislostí či spouštění buildovacích procesů (čisté sémantické HTML5, moderní CSS3 a Vanilla JavaScript). Bylo navrženo a implementováno **5 klíčových interaktivních funkcí**, které výrazně překračují rámec pouhé statické prezentace:

### 1. Vícedimenzionální interaktivní filtr a okamžité fulltextové vyhledávání v programu
- **Přepínání dnů v reálném čase:** Možnost okamžitého filtrování programu podle festivalových dnů (Den 1: Pátek, Den 2: Sobota, Den 3: Neděle, Celý festival) pomocí záložek s ARIA sémantikou.
- **Filtr podle scén:** Výběr konkrétní scény (*Dome Alpha: Spatial HoloCinema*, *Matrix Arena: 6DOF Interactive Lab*, *Neon Stage: Creators & Masterclasses*, *Oasis Hub: Ambient & Sensory VR*).
- **Filtr podle formátu a technologie:** Výběr 6DOF room-scale, haptických vest, 360° filmů, Apple Vision Pro zážitků nebo masterclasses.
- **Rychlé tematické štítky (*Quick Pills*):** Jednoklikové filtry pro nejžádanější kategorie (🦺 Haptika, 🕹️ 6DOF, 🚀 Sci-Fi, 👶 Děti & Rodina, 🇨🇿 Česká tvorba) s možností aktivace i deaktivace.
- **Živé vyhledávání s dynamickým počítadlem:** Fulltextový search reagující na každý stisk klávesy (hledá v názvech, anotacích, jménech tvůrců i technických parametrech). Vizuální stav prázdných výsledků (*Empty State*) s tlačítkem pro kompletní obnovení filtrů.

### 2. Osobní program a správa oblíbených („Můj rozvrh“) s automatickou detekcí časových kolizí
- **Ukládání oblíbených vystoupení:** Návštěvník si může kliknutím na hvězdičku/záložku na kartě nebo v detailu uložit libovolné vystoupení do svého osobního rozvrhu.
- **Plovoucí indikátor v navigaci:** Plovoucí odznak v záhlaví (*Header Badge*) s reálným počítadlem vybraných položek.
- **Výsuvný postranní panel (*Schedule Drawer*):** Přehledný panel vysouvající se zprava (na mobilu přes celou obrazovku), který řadí vybrané akce chronologicky podle dnů a časů.
- **Algoritmická detekce časových kolizí:** Aplikace v reálném čase matematicky kontroluje, zda se dvě a více uložených vystoupení v tentýž den časově nepřekrývají ($start_A < end_B \land start_B < end_A$). Pokud kolize nastane, zobrazí se výrazný výstražný panel s konkrétními názvy a časy kolidujících akcí a dotčené položky v seznamu jsou vizuálně zvýrazněny varovným rámečkem.
- **Trvalé ukládání a export:** Rozvrh se ukládá do `localStorage`, takže zůstává zachován i po zavření či obnovení prohlížeče. K dispozici je také tlačítko pro export / tisk (`window.print()`).

### 3. Kontextové zobrazení detailů programu a rezervační systém slotů na VR headsety
- **Nativní dialogové okno (`<dialog>`):** Kontextový detail zobrazuje kompletní technické parametry (použitý hardware, typ interakce, doporučený věk, délku, kapacitu), podrobnou anotaci a prokliky na zúčastněné tvůrce.
- **Funkční rezervační formulář na VR headsety:** Vzhledem k omezené kapacitě 6DOF stanic a brýlí formulář umožňuje návštěvníkovi zadat jméno a e-mail, provede validaci, zarezervuje slot a vygeneruje unikátní rezervační kód (např. `RES-K8A29F`).
- **Perzistence rezervací:** Stav rezervace se ukládá do `localStorage`, takže uživatel vidí potvrzený stav i při opakovaném otevření detailu daného díla.

### 4. Interaktivní 3D Canvas / FOV & Sensory Simulator (3D Lab)
- **Zkušebna zorného pole a volnosti pohybu:** Přímo v prohlížeči běžící HTML5 Canvas simulátor demonstrující rozdíl mezi technologiemi:
  - *6DOF Room-scale:* Simulace pohybu ve 3D mřížce reagující na souřadnice myši / dotyku s plovoucími geometrickými tělesy a hloubkovým vnímáním.
  - *3DOF 360° Cinema:* Simulace statické sférické rotace z pevného sedadla.
  - *Ambient Audio Pulsing:* Vizuální reprezentace šíření prostorových zvukových vln.
- **Test haptického pulzu:** Interaktivní tlačítko spouštějící fyzické vibrace zařízení skrze API `navigator.vibrate([80, 50, 120])` na mobilních zařízeních a odpovídající vizuální haptický otřes obrazovky na desktopu.

### 5. Interaktivní katalog účinkujících s obousměrným propojením na program
- **Katalog 60 mezinárodních i českých tvůrců:** Rychlé filtrování podle profesních rolí (Režiséři, VR Studia, 3D & VFX, Zvuk, Česká scéna) a vyhledávání podle jmen.
- **Kontextový profil tvůrce:** Modální okno s biografií, štítky specializace a dynamickým seznamem všech programových položek festivalu, na kterých se daný tvůrce podílí.
- **Přímé přidání do rozvrhu z profilu tvůrce:** Návštěvník si může projekci oblíbeného autora přidat do svého rozvrhu přímo z jeho profilu jedním kliknutím bez nutnosti přecházet zpět do programu.

### Bonus: Vestavěná testovací lišta scénářů (*Scenario Walkthroughs*)
V horní části prototypu je umístěn plovoucí asistent pro testování, který umožňuje hodnotiteli jedním kliknutím spustit automatizovaný průchod Scénářem 1 i Scénářem 2, plynule odscrolovat na příslušné místo, nastavit filtry a otevřít patřičné dialogy.

---

## 2. Vazba funkcí na uživatelské potřeby

Všechny navržené funkce přímo vycházejí z cílových skupin a person specifikovaných v dokumentu `project-specification.md`:

| Cílová skupina / Persona | Konkrétní potřeba a problém | Implementované řešení v prototypu |
| :--- | :--- | :--- |
| **Technologičtí nadšenci a VR gameři**<br>*(Persona: Tomáš, 24 let)* | Hledá nejnáročnější 6DOF zážitky s plným pohybem po místnosti a haptickými vestami; nechce stát dlouhé fronty na omezený hardware v sále. | • Rychlé filtry „6DOF“ a „Haptika“ v programu.<br>• Zobrazení hardwaru přímo na kartách i v detailu díla.<br>• Rezervační systém slotů na headset s okamžitým vygenerováním kódu. |
| **Filmoví diváci, cinefilové a studenti**<br>*(Persona: Karolína, 22 let)* | Chce navštívit díla konkrétního režiséra (Mateo Silva), vyhnout se překrývání jeho promítání s odbornou masterclass a sestavit si logický páteční harmonogram. | • Vyhledávání tvůrců a obousměrná vazba profil -> program.<br>• Osobní rozvrh („Můj program“) s chronologickým řazením.<br>• **Automatická detekce časových kolizí**, která Karolínu okamžitě upozorní na překryv. |
| **Rodiny s dětmi a běžná veřejnost**<br>*(Persona: Martin s dcerou)* | Hledá bezpečný nenásilný obsah vhodný pro 10letou dceru a potřebuje ověřit nošení dioptrických brýlí ve VR a hygienické standardy. | • Rychlý filtr „👶 Rodina & Děti“ a věkové štítky na kartách.<br>• Sekce *Praktické informace* s interaktivním akordeonem FAQ zodpovídajícím dotazy na dioptrie, hygienu i věková omezení. |
| **Návštěvníci v areálu festivalu (na mobilu)** | Potřebují rychle kontrolovat čas a další bod rozvrhu jednou rukou za chůze v davu na Výstavišti. | • **Mobile-first ergonomie**: spodní navigační lišta v dosahu palce (*Thumb Zone*).<br>• Velké dotykové cíle (min. 44×44 px).<br>• Rychlý výsuvný panel rozvrhu s přehledem uložených akcí. |

---

## 3. Co bylo ověřováno a jak

Během přípravy a ladění prototypu bylo provedeno systematické testování v několika klíčových oblastech:

### 3.1 Ověření Scénáře 1: Gamer Tomáš (6DOF & Haptika)
- **Scénář ze specifikace:** Tomáš chce najít nejintenzivnější 6DOF zážitek s haptickou vestou na sobotní odpoledne, rezervovat si slot v Matrix Areně a uložit položku do rozvrhu.
- **Způsob ověření:** Proveden jak ruční průchod, tak automatizovaný test tlačítkem *„▶ Scénář 1“* v horní liště.
  1. Výběr záložky `SO 24.10. (Den 2)`.
  2. Výběr scény `Matrix Arena (6DOF & Haptika)` a štítku `🦺 Haptika`.
  3. Zobrazení odpovídajících položek, výběr titulu *Kybernetický únik: Úniková místnost s časovou smyčkou*.
  4. Otevření modálního okna detailu díla, kontrola specifikace hardware (`HTC Vive Focus 3 + haptická vesta`).
  5. Vyplnění jména a e-mailu a kliknutí na *„Potvrdit rezervaci slotu“*.
- **Výsledek testu:** Rezervace proběhla úspěšně, systém vygeneroval kód rezervace (např. `RES-E9B71C`), uzamkl formulář, zobrazil zelené potvrzení a uložil stav do `localStorage`. Položka byla zároveň přidána do rozvrhu a odznak v navigaci zvýšil hodnotu na `1`.

### 3.2 Ověření Scénáře 2: Karolína (Režisér Mateo Silva a časový harmonogram)
- **Scénář ze specifikace:** Karolína chce najít španělského dokumentaristu Matea Silvu, zjistit časy jeho děl a ověřit, zda nekolidují s masterclass.
- **Způsob ověření:** Manuální i automatizovaný test tlačítkem *„▶ Scénář 2“*.
  1. Přechod do sekce *Tvůrci*.
  2. Zadání řetězce „Mateo Silva“ do vyhledávacího pole.
  3. Otevření profilu Matea Silvy kliknutím na kartu.
  4. V profilu ověřena přítomnost obou jeho festivalových projekcí (*Hlasy tajícího ledu* a *Doteky války*).
  5. Kliknutí na *„+ Přidat“* u díla *Hlasy tajícího ledu* (Pátek 11:15 – 11:55).
  6. Přidání další páteční akce ze stejného časového slotu pro ověření detektoru kolizí.
  7. Otevření panelu *„Můj rozvrh“*.
- **Výsledek testu:** Profil tvůrce se korektně otevřel a nabídl přímou interakci s programem. Při testovacím vložení překrývající se akce panel rozvrhu okamžitě zobrazil varovný box: *„Detekován časový konflikt! Kolize v Den 1: ... se překrývá s ...“* s červeno-oranžovým zvýrazněním. Po odebrání kolidující položky varování zmizelo.

### 3.3 Ověření mobilního rozložení (Mobile-First) a ergonomie
- **Testovaná zařízení a rozlišení:** iPhone SE (375 px), iPhone 14/15 Pro (390 px), Samsung Galaxy S20 (360 px), iPad mini (768 px) i velký desktop (1440 px a 1920 px).
- **Výsledky ověření:**
  - Na malých displejích se automaticky aktivuje fixovaná spodní navigační lišta přizpůsobená dosahu palce, zatímco horní desktopové menu je zjednodušeno.
  - Všechny dotykové prvky (tlačítka, štítky, zavírací křížky) mají minimální rozměr 44×44 px pro bezproblémové ovládání prstem.
  - Výběr dnů a rychlých filtrů umožňuje plynulé horizontální přetáčení (*touch scroll*) bez deformace stránky.
  - Karty programu plynule přecházejí z 1 sloupce na mobilu do 2 sloupců na tabletu a 3–4 sloupců na širokém monitoru pomocí CSS Gridu `repeat(auto-fill, minmax(300px, 1fr))`.

### 3.4 Ověření přístupnosti a ovládání z klávesnice
- Modální dialogy využívají nativní element `<dialog>`, který správně izoluje focus a lze jej spolehlivě zavřít stiskem klávesy `Escape`.
- Všechny interaktivní prvky jsou dosažitelné klávesou `Tab` s viditelným fokusovým kroužkem (`outline: 2px solid var(--neon-cyan)`).
- Dynamické výpisy programu a zprávy o vyhledávání mají atributy `aria-live="polite"` pro hlasové čtečky obrazovky.

---

## 4. Použití AI a ověření AI výstupů

V rámci tvorby prototypu byla umělá inteligence (pokročilý model Gemini 3.8 / LLM) využita v režimu **řízeného párového programování (Pair Programming)**. AI nesloužila jako nekontrolovaný generátor celého kódu najednou, ale jako specializovaný asistent pro konkrétní architektonické, datové a algoritmické kroky. Každý AI výstup byl podroben lidské revizi a technické verifikaci.

### 4.1 Fáze a konkrétní způsoby zapojení AI

1. **Generování a syntéza konzistentní datové základny (`data.json`):**
   - **Úkol pro AI:** Vytvořit realistický dataset mezinárodního XR festivalu s 60 unikátními tvůrci a 60 programovými položkami rozprostřenými do 3 dnů a 4 scén, s důrazem na reálné technologie (bHaptics, Vision Pro, 6DOF, Quest 3).
   - **Rizika a halucinace AI:** AI v první iteraci generovala cizí klíče s drobnými překlepy (např. odkaz na neexistujícího tvůrce `perf-61`) a náhodně vytvořila časové překryvy dvou různých filmů v témže sále ve stejný čas.
   - **Způsob ověření a nápravy:** Napsali jsme validační Python skript, který zkontroloval referenční integritu všech `stage_id` i `performer_ids`, ověřil intervalovou bezkonfliktnost harmonogramu a zkontroloval unikátnost primárních klíčů. Odhalené chyby byly opraveny a data byla zvalidována na 100% shodu.

2. **Návrh CSS Design Systému a Mobile-First responzivity:**
   - **Úkol pro AI:** Sestavit sadu CSS Custom Properties (barevná paleta Cyber-Chromatic, glassmorphism, neonové gradienty, typografická hierarchie s fonty Outfit a Plus Jakarta Sans).
   - **Rizika a iterace:** Původní AI návrh stylů obsahoval desktop-first média queries (`@media (max-width: ...)`) a fixní šířky u karet, což vedlo k horizontálnímu přetékání na iPhone SE (375 px).
   - **Způsob ověření a nápravy:** Vynutili jsme refaktoring do striktního **Mobile-First** přístupu s využitím `@media (min-width: ...)` a responzivních CSS funkcí `clamp()`, `minmax()` a `calc()`. Kód byl otestován v Chrome DevTools Device Modu na šířkách od 320 px do 2560 px.

3. **Algoritmická logika detekce kolizí v rozvrhu:**
   - **Úkol pro AI:** Navrhnout efektivní JavaScriptovou funkci pro zjišťování časových konfliktů mezi libovolným počtem položek v uživatelském rozvrhu.
   - **Řešení navržené AI:** AI navrhla matematický převod časových řetězců `"HH:MM"` na minuty od půlnoci ($H \cdot 60 + M$) a následné porovnání všech dvojic v rámci shodného festivalového dne podle podmínky:
     $$a_{start} < b_{end} \land b_{start} < a_{end}$$
   - **Ověření výstupu:** Algoritmus byl otestován na hraničních případech (přesně navazující akce např. 11:00–11:30 a 11:30–12:00 – nesmí hlásit kolizi; akce s překryvem o 1 minutu – musí spolehlivě nahlásit kolizi). Testování potvrdilo matematickou správnost implementace.

4. **Vyřešení modálních dialogů a chování formulářů:**
   - **Rizika a chyby v AI kódu:** AI původně vygenerovala ovládání modálních oken pomocí třídy `.modal-open` na `<div>` elementu. Po přechodu na sémantický tag `<dialog>` docházelo k chybě, kdy kliknutí na backdrop nezavíralo okno a tlačítka uvnitř formulářů bez atributu `type="button"` vyvolávala nativní submit s reloadem stránky.
   - **Způsob ověření a nápravy:** Kód byl upraven doplněním explicitních posluchačů na `dialog.showModal()` a `dialog.close()`, ošetřením kliknutí na backdrop (`if (e.target === dialog) dialog.close()`) a přidáním klávesové zkratky `Escape`.

5. **Zajištění běhu bez závislostí a offline fallback (Zero-dependency):**
   - **Technické omezení:** Při otevření lokálního souboru přes protokol `file:///` prohlížeč z bezpečnostních důvodů (CORS) zablokuje volání `fetch('./data.json')`.
   - **Řešení s AI:** AI implementovala hybridní načítání: aplikace se nejprve pokusí o asynchronní `fetch('./data.json')` (funguje při běhu přes HTTP server). Pokud dojde k chybě nebo blokaci protokolem `file:///`, `catch` blok okamžitě a bez přerušení přepne na vestavěný fallback dataset `FESTIVAL_FALLBACK_DATA`. Prototyp tak funguje 100% spolehlivě kdekoliv na disku bez nutnosti spouštět webserver.

---

## 5. Jak spustit prototyp (bez instalace)

Prototyp je navržen tak, aby nevyžadoval žádnou instalaci (`npm`, `node`, `yarn` apod.):

1. **Přímo z disku (file protokol – nejjednodušší způsob):**
   - Otevřete soubor [`projekt/web/index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/web/index.html) dvojklikem v libovolném moderním webovém prohlížeči (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge).
   - Veškerá data, filtry, simulátor i ukládání rozvrhu fungují okamžitě offline.

2. **Spuštění přes lokální HTTP server (volitelné):**
   - V terminálu v kořenovém adresáři projektu zadejte:
     ```bash
     python3 -m http.server 3000
     ```
   - Otevřete v prohlížeči adresu: `http://localhost:3000/projekt/web/`
