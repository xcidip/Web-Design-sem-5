# Zpráva o postupu: Návrh klíčových částí webu a interaktivní prototyp

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr)  
**Výstup:** Cvičení 3 – Interaktivní prototyp a zpráva o postupu (`progress-02.md`)  
**Umístění prototypu:** [`projekt/prototyp/index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/prototyp/index.html) (samostatný spustitelný prototyp)

---

## 1. Seznam navržených funkcí

Prototyp v adresáři [`projekt/prototyp/`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/prototyp/) představuje plně funkční, spustitelný web bez nutnosti jakékoliv instalace externích balíčků či závislostí (čisté sémantické HTML5, moderní CSS3 a Vanilla JavaScript). Bylo navrženo a implementováno **5 klíčových interaktivních funkcí** doplňujících navigaci a informační hierarchii:

### 1. Vícedimenzionální interaktivní filtr a okamžité fulltextové vyhledávání v programu
- **Přepínání dnů v reálném čase:** Možnost okamžitého filtrování programu podle festivalových dnů (Den 1: Pátek, Den 2: Sobota, Den 3: Neděle, Celý festival) pomocí záložek s ARIA sémantikou.
- **Filtr podle scén:** Výběr konkrétní scény (*Dome Alpha: Spatial HoloCinema*, *Matrix Arena: 6DOF Interactive Lab*, *Neon Stage: Creators & Masterclasses*, *Oasis Hub: Ambient & Sensory VR*).
- **Filtr podle formátu a technologie:** Výběr 6DOF room-scale, haptických vest, 360° filmů, Apple Vision Pro zážitků nebo masterclasses.
- **Rychlé tematické štítky (*Quick Pills*):** Jednoklikové filtry pro nejžádanější témata (🦺 Haptika, 🕹️ 6DOF, 🚀 Sci-Fi, 👶 Děti & Rodina, 🇨🇿 Česká tvorba) s možností aktivace i deaktivace.
- **Živé vyhledávání s dynamickým počítadlem:** Fulltextový search reagující na každý úhoz klávesy (hledá v názvech, anotacích, jménech tvůrců i hardware). Vizuální stav prázdných výsledků (*Empty State*) s tlačítkem pro kompletní obnovení filtrů.

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

### 4. Interaktivní katalog účinkujících s obousměrným propojením na program
- **Katalog 60 mezinárodních i českých tvůrců:** Rychlé filtrování podle profesních rolí (Režiséři, VR Studia, 3D & VFX, Zvuk, Česká scéna) a vyhledávání podle jmen.
- **Kontextový profil tvůrce:** Modální okno s biografií, štítky specializace a dynamickým seznamem všech programových položek festivalu, na kterých se daný tvůrce podílí.
- **Přímé přidání do rozvrhu z profilu tvůrce:** Návštěvník si může projekci oblíbeného autora přidat do svého rozvrhu přímo z jeho profilu jedním kliknutím bez nutnosti přecházet zpět do programu.

### 5. Interaktivní 3D Canvas / FOV & Sensory Simulator (3D Lab)
- **Zkušebna zorného pole a volnosti pohybu:** Přímo v prohlížeči běžící HTML5 Canvas simulátor demonstrující rozdíl mezi technologiemi:
  - *6DOF Room-scale:* Simulace pohybu ve 3D mřížce reagující na souřadnice myši / dotyku s plovoucími tělesy a hloubkovým vnímáním.
  - *3DOF 360° Cinema:* Simulace statické sférické rotace z pevného sedadla.
  - *Ambient Audio Pulsing:* Vizuální reprezentace šíření prostorových zvukových vln.
- **Test haptického pulzu:** Interaktivní tlačítko spouštějící fyzické vibrace zařízení skrze API `navigator.vibrate([80, 50, 120])` na mobilních zařízeních a odpovídající vizuální haptický otřes obrazovky na desktopu.

### 6. Integrovaná lišta prototypu (Přepínač viewportu a průchod scénáři)
V horní části prototypu je umístěna speciální ovládací lišta určená pro hodnocení a testování:
- **Přepínač zařízení (Device Viewport Switcher):** Umožňuje jedním kliknutím přepnout zobrazení do rámu telefonu (**Mobil 390px** – iPhone), tabletu (**Tablet 768px** – iPad) nebo plné šířky (**Desktop**), což umožňuje vyučujícímu okamžitě prověřit chování na mobilu i desktopu na jednom monitoru.
- **Spouštěče scénářů:** Tlačítka pro okamžité automatizované projití Scénáře 1 (Tomáš) i Scénáře 2 (Karolína).

---

## 2. Vazba funkcí na uživatelské potřeby

Všechny navržené funkce přímo vycházejí z cílových skupin a person specifikovaných v dokumentu `project-specification.md`:

| Cílová skupina / Persona | Konkrétní potřeba a problém | Implementované řešení v prototypu |
| :--- | :--- | :--- |
| **Technologičtí nadšenci a VR gameři**<br>*(Persona: Tomáš, 24 let)* | Hledá nejnáročnější 6DOF zážitky s plným pohybem po místnosti a haptickými vestami; nechce stát dlouhé fronty na omezený hardware v sále. | • Rychlé filtry „6DOF“ a „Haptika“ v programu.<br>• Zobrazení hardwaru přímo na kartách i v detailu díla.<br>• Rezervační systém slotů na headset s okamžitým vygenerováním kódu. |
| **Filmoví diváci, cinefilové a studenti**<br>*(Persona: Karolína, 22 let)* | Chce navštívit díla konkrétního režiséra (Mateo Silva), vyhnout se překrývání jeho promítání s odbornou masterclass a sestavit si logický páteční harmonogram. | • Vyhledávání tvůrců a obousměrná vazba profil -> program.<br>• Osobní rozvrh („Můj rozvrh“) s chronologickým řazením.<br>• **Automatická detekce časových kolizí**, která Karolínu okamžitě upozorní na překryv. |
| **Rodiny s dětmi a běžná veřejnost**<br>*(Persona: Martin s dcerou)* | Hledá bezpečný nenásilný obsah vhodný pro 10letou dceru a potřebuje ověřit nošení dioptrických brýlí ve VR a hygienické standardy. | • Rychlý filtr „👶 Rodina & Děti“ a věkové štítky na kartách.<br>• Sekce *Praktické informace* s interaktivním akordeonem FAQ zodpovídajícím dotazy na dioptrie, hygienu i věková omezení. |
| **Návštěvníci v areálu festivalu (na mobilu)** | Potřebují rychle kontrolovat čas a další bod rozvrhu jednou rukou za chůze v davu na Výstavišti. | • **Mobile-first ergonomie**: spodní navigační lišta v dosahu palce (*Thumb Zone*).<br>• Velké dotykové cíle (min. 44×44 px).<br>• Rychlý výsuvný panel rozvrhu s přehledem uložených akcí. |

---

## 3. Co bylo ověřováno a jak

Během přípravy a ladění prototypu bylo provedeno systematické testování v několika klíčových oblastech:

### 3.1 Ověření Scénáře 1: Gamer Tomáš (6DOF & Haptika)
- **Scénář ze specifikace:** Tomáš chce najít nejintenzivnější 6DOF zážitek s haptickou vestou na sobotní odpoledne, rezervovat si slot v Matrix Areně a uložit položku do rozvrhu.
- **Způsob ověření:** Proveden ruční průchod i automatizovaný test tlačítkem *„▶ Scénář 1: Gamer & Haptika“* v horní liště prototypu.
  1. Výběr záložky `SO 24.10. (Den 2)`.
  2. Výběr scény `Matrix Arena (6DOF & Haptika)` a štítku `🦺 Haptika`.
  3. Zobrazení odpovídajících položek, výběr titulu *Kybernetický únik: Úniková místnost s časovou smyčkou*.
  4. Otevření modálního okna detailu díla, kontrola specifikace hardware (`HTC Vive Focus 3 + haptická vesta`).
  5. Vyplnění jména a e-mailu a kliknutí na *„Potvrdit rezervaci slotu“*.
- **Výsledek testu:** Rezervace proběhla úspěšně, systém vygeneroval kód rezervace (např. `RES-E9B71C`), uzamkl formulář, zobrazil zelené potvrzení a uložil stav do `localStorage`. Položka byla zároveň přidána do rozvrhu a odznak v navigaci zvýšil hodnotu na `1`.

### 3.2 Ověření Scénáře 2: Karolína (Režisér Mateo Silva a časový harmonogram)
- **Scénář ze specifikace:** Karolína chce najít španělského dokumentaristu Matea Silvu, zjistit časy jeho děl a ověřit, zda nekolidují s masterclass.
- **Způsob ověření:** Manuální i automatizovaný test tlačítkem *„▶ Scénář 2: Režisér Mateo Silva“*.
  1. Přechod do sekce *Tvůrci*.
  2. Zadání řetězce „Mateo Silva“ do vyhledávacího pole.
  3. Otevření profilu Matea Silvy kliknutím na kartu.
  4. V profilu ověřena přítomnost obou jeho festivalových projekcí (*Hlasy tajícího ledu* a *Doteky války*).
  5. Kliknutí na *„+ Přidat“* u díla *Hlasy tajícího ledu* (Pátek 11:15 – 11:55).
  6. Přidání další páteční akce ze stejného časového slotu pro ověření detektoru kolizí.
  7. Otevření panelu *„Můj rozvrh“*.
- **Výsledek testu:** Profil tvůrce se korektně otevřel a nabídl přímou interakci s programem. Při testovacím vložení překrývající se akce panel rozvrhu okamžitě zobrazil varovný box: *„Detekován časový konflikt! Kolize v Den 1: ... se překrývá s ...“* s červeno-oranžovým zvýrazněním. Po odebrání kolidující položky varování zmizelo.

### 3.3 Ověření mobilního rozložení (Mobile-First) a responzivity
- **Testovaná zařízení a rozlišení:** iPhone SE (375 px), iPhone 14/15 Pro (390 px), Samsung Galaxy S20 (360 px), iPad mini (768 px) i velký desktop (1440 px a 1920 px).
- **Integrovaný přepínač viewportu:** Prototyp má v horní liště tlačítka `📱 Mobil (390px)` a `💻 Tablet (768px)`, která okamžitě zapouzdří web do rozměru mobilního telefonu či tabletu.
- **Výsledky ověření:**
  - Na malých displejích se automaticky aktivuje fixovaná spodní navigační lišta přizpůsobená dosahu palce (*Thumb Zone*), zatímco desktopové menu je skryto.
  - Všechny dotykové prvky (tlačítka, štítky, zavírací křížky) mají minimální rozměr 44×44 px pro bezproblémové ovládání prstem.
  - Výběr dnů a rychlých filtrů umožňuje plynulé horizontální přetáčení (*touch scroll*) bez deformace stránky.
  - Karty programu plynule přecházejí z 1 sloupce na mobilu do 2 sloupců na tabletu a 3–4 sloupců na desktopu.

### 3.4 Ověření přístupnosti a ovládání z klávesnice
- Modální dialogy využívají nativní element `<dialog>`, který správně izoluje focus a lze jej spolehlivě zavřít stiskem klávesy `Escape`.
- Všechny interaktivní prvky jsou dosažitelné klávesou `Tab` s viditelným fokusovým kroužkem (`outline: 2px solid var(--neon-cyan)`).
- Dynamické výpisy programu a zprávy o vyhledávání mají atributy `aria-live="polite"` pro hlasové čtečky obrazovky.

---

## 4. Použití AI a ověření AI výstupů

V rámci tvorby prototypu byla umělá inteligence (pokročilý model Gemini 3.8 / LLM) využita v režimu **řízeného párového programování (Pair Programming)**. AI nesloužila jako nekontrolovaný generátor celého kódu najednou, ale jako specializovaný asistent pro konkrétní architektonické, datové a algoritmické kroky. Každý AI výstup byl podroben lidské revizi a technické verifikaci.

### 4.1 Konkrétní proces spolupráce s AI a řešení chyb

1. **Generování a syntéza konzistentní datové základny (`data.json`):**
   - **Konkrétní prompt / úkol pro AI:** Sestavit realistický dataset festivalu virtuální reality odpovídající struktuře definované v `project-specification.md` (60 účinkujících, 60 programových položek, 4 scény).
   - **Chyby a halucinace AI:** V prvním draftu AI vygenerovala cizí klíče s chybami (např. v poli `performer_ids` odkazovala na id `perf-61`, přestože existovalo jen 60 tvůrců). Dále u dvou různých položek na scéně Dome Alpha nastavila stejný časový slot v tentýž den.
   - **Způsob ověření a nápravy:** Napsali jsme validační Python skript, který prošel všechny reference cizích klíčů (`stage_id`, `performer_ids`), unikátnost identifikátorů a časové překryvy na téže scéně. Všechny nekonzistence byly zachyceny a data byla opravena na 100% referenční integritu.

2. **Mobile-First CSS architektura vs. Desktop-First tendence AI:**
   - **Konkrétní prompt / úkol pro AI:** Navrhnout responzivní design systém v estetice Cyber-Chromatic Harmony s podporou mobilních i desktopových zařízení.
   - **Chyby AI:** AI měla zpočátku tendenci psát CSS s desktopovým základem a degradovat jej přes `@media (max-width: ...)`. Tím docházelo k deformacím karet na úzkých displejích a nepraktickému umístění navigace na horní okraj obrazovky.
   - **Způsob ověření a nápravy:** Vynutili jsme striktní **Mobile-First přístup**: základní CSS je psáno pro displej šířky 360–390 px a media queries používají výhradně `(min-width: 640px)`, `(min-width: 1024px)` a `(min-width: 1280px)`. Na mobilu byla navržena ergonomická spodní lišta (*Thumb Zone*) a minimální dotyková plocha prvků 44×44 px.

3. **Matematický algoritmus detekce kolizí v rozvrhu:**
   - **Konkrétní prompt / úkol pro AI:** Vytvořit funkci pro zjištění, zda se vybrané položky v poli `mySchedule` v tentýž den časově překrývají.
   - **Řešení navržené AI:** AI navrhla matematický převod časových řetězců `"HH:MM"` na celkový počet minut od půlnoci ($H \cdot 60 + M$) a intervalový test překryvu dvou pořadů $A$ a $B$:
     $$start_A < end_B \land start_B < end_A$$
   - **Ověření výstupu:** Algoritmus jsme otestovali na hraničních hodnotách: dvě na sebe navazující vystoupení (např. 11:00–11:45 a 11:45–12:30) nesmí hlásit kolizi. Vystoupení s přesahem o 1 minutu (např. 11:00–11:46 a 11:45–12:30) musí okamžitě vyvolat varování. Algoritmus prošel všemi testy.

4. **Odladění modálních dialogů `<dialog>` a formulářů:**
   - **Chyby v AI kódu:** AI navrhla standardní otevírání `<dialog>` pomocí `dialog.showModal()`, ale neřešila zavření kliknutím na ztmavlé pozadí (backdrop). Tlačítka uvnitř rezervačního boxu navíc způsobovala odeslání celého formuláře a znovunačtení stránky, čímž uživatel ztratil stav aplikace.
   - **Způsob ověření a nápravy:** Doplnili jsme explicitní zachycení kliknutí na backdrop (`if (e.target === dialog) dialog.close()`), ošetření klávesy `Escape` a volání `e.preventDefault()` u rezervačního formuláře spolu s generováním unikátního kódu a uložením do `localStorage`.

5. **Zajištění 100% offline běhu bez nutnosti instalace (Zero-dependency):**
   - **Problém:** Při spuštění lokálního souboru přes protokol `file:///` prohlížeče (Chrome) blokují volání `fetch('./data.json')` kvůli CORS politice lokálního souborového systému.
   - **Řešení navržené ve spolupráci s AI:** Do `app.js` byl zakomponován kompletní dataset `FESTIVAL_DATA` jako záložní zdroj. Skript se nejprve pokusí provést `fetch('./data.json')` (pokud běží přes HTTP server), a pokud selže, plynule a bez chybové hlášky použije vestavěný dataset. Tím je zaručeno, že hodnotitel může soubor otevřít přímo z disku dvojklikem a prototyp okamžitě funguje.

---

## 5. Jak spustit prototyp (bez instalace)

Prototyp nevyžaduje žádnou instalaci (`npm install`, balíčkovací manažery apod.):

1. **Přímo z disku (file protokol – nejjednodušší způsob):**
   - Otevřete soubor [`projekt/prototyp/index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/projekt/prototyp/index.html) dvojklikem v libovolném moderním webovém prohlížeči (Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge).
   - Veškerá data, filtry, simulátor i ukládání rozvrhu fungují okamžitě offline.

2. **Spuštění přes lokální HTTP server (volitelné):**
   - V terminálu v kořenovém adresáři nebo přímo ve složce `projekt/prototyp` zadejte:
     ```bash
     python3 -m http.server 3000
     ```
   - Otevřete v prohlížeči adresu: `http://localhost:3000/projekt/prototyp/` (nebo `http://localhost:3000/` při spuštění ze složky `projekt/prototyp`).
