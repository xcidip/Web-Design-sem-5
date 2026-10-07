# Projektová specifikace webu festivalu VR filmů

## CHROMASYNC VR FILM FESTIVAL 2026

Dokument slouží jako první výstup semestrálního projektu předmětu **Web Design** (5. semestr). Definuje identitu festivalu, cíle a účel webové prezentace, profilaci cílových skupin, informační architekturu, uživatelské scénáře, vizuálně-technologický koncept i provázanost s dodanou datovou základnou [`data.json`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/data.json).

---

## 1. Identita festivalu

| Parametr | Specifikace |
| :--- | :--- |
| **Název festivalu** | **CHROMASYNC VR FILM FESTIVAL** |
| **Ročník** | 4. ročník |
| **Lokalita** | **Praha**, Česká republika<br>Výstaviště Praha & Křižíkovy pavilony (Pavilon B, C, A, D)<br>*Výstaviště 67, 170 00 Praha 7 – Holešovice* |
| **Datumový rozsah** | **23. – 25. října 2026** (Pátek – Neděle, 3 festivalové dny) |
| **Charakter festivalu** | Mezinárodní audiovizuální a technologický festival zaměřený na virtuální realitu (VR), 360° stereoskopickou kinematografii, prostorové vyprávění (*spatial storytelling*) a interaktivní 6DOF zážitky se sledováním pohybu v reálném prostoru. Festival má **hravý, barevný, futuristický a dynamický charakter** s důrazem na přístupnost moderních technologií široké veřejnosti i setkávání filmových a herních profesionálů. |
| **Hlavní žánry a témata** | • **Sci-Fi & Cyberpunk Spatial Worlds** (futuristické vize, kyberprostor)<br>• **Imerzivní dokument a sociální empatie** (humanitární témata, ekologie, věda)<br>• **6DOF Interaktivní narrativní hry** (větvené příběhy ovládané pohybem a gesty)<br>• **Generativní AI sny a fraktální 3D umění** (abstraktní snové světy)<br>• **Animovaný VR film & rodinné světy** (ručně kreslené Quill světy, dětské pohádky)<br>• **Spatial Audio & virtuální koncerty** (binaurální 64-kanálový zvuk, live mocap tance) |

---

## 2. Účel webu

### K čemu web slouží
Webová prezentace festivalu **CHROMASYNC 2026** slouží jako centrální interaktivní rozcestník, informační uzel a zážitková brána pro návštěvníky, akreditované filmaře, novináře i partnery. Jelikož festival prezentuje médium virtuální reality a prostorového vnímání, samotný web funguje jako **hravá digitální ochutnávka** imerzivního zážitku ještě před vstupem do fyzického sálu.

### Hlavní cíle webu
1. **Zprostředkovat atmosféru a vtáhnout uživatele (Engagement):** Využít dynamické mikroanimace, interaktivní 3D prvky (např. 3D model VR headsetu otočný myší, světelné neonové přechody, prostorové karty) a hravou barevnou estetiku k demonstraci pokročilosti festivalu.
2. **Přehledně představit rozsáhlý program a tvůrce:** Poskytnout intuitivní vícedenní harmonogram (60 programových položek ve 4 scénách) s okamžitým filtrováním podle dnů, scén, hardwaru, žánrů a věkového doporučení.
3. **Umožnit personalizaci návštěvy:** Dovolit návštěvníkům sestavit si vlastní festivalový rozvrh (*Můj program / Bookmark list*), rezervovat si omezené kapacity časových slotů na specializované 6DOF stanice a koupit vstupenky.
4. **Poskytnout veškeré praktické informace bez tření:** Jasné pokyny k dopravě, přístupnosti pro osoby s tělesným znevýhodněním, hygienickým standardům headsetů a prevenci kinetózy (*cyber sickness*).

### Důležité akce uživatelů na webu
- **Filtrování a procházení programu** podle dnů (Pátek, Sobota, Neděle), scén (Dome Alpha, Matrix Arena, Neon Stage, Oasis Hub) a formátu (360° vs. 6DOF vs. Masterclass).
- **Detailní prozkoumání filmů a účinkujících** (video trailery, použitý VR hardware, biografie režisérů a studií).
- **Sestavení vlastního programu** („Přidat do mého rozvrhu“) s vizuální kontrolou časových překryvů.
- **Rezervace časového slotu na VR headset** s výběrem preferovaného zařízení (např. Apple Vision Pro, Meta Quest 3, HTC Vive Focus 3 + haptická vesta).
- **Interakce s 3D / vizuálními prvky webu** (otáčení 3D modelu VR brýlí, interaktivní audio-preview prostorového zvuku, přepínání barevných režimů).
- **Nákup festivalových pasů a jednotlivých vstupenek** s rekapitulací.

---

## 3. Cílové skupiny

Na základě charakteru festivalu a specifických nároků na konzumaci VR obsahu jsou definovány čtyři klíčové uživatelské skupiny:

### 3.1 Technologičtí nadšenci a VR gameři (Tech Early Adopters & Gamers)
- **Věk:** 18 – 35 let
- **Charakteristika:** Vlastní nebo dobře znají VR headsety (Quest, Index, PSVR2, Vision Pro), vyžadují technické detaily o rozlišení, framerate, enginu (Unreal 5 vs. Unity) a haptice.
- **Potřeby:** Hledají technologicky nejradikálnější zážitky (plný 6DOF pohyb v prostoru, haptické obleky bHaptics, multiplayer).
- **Očekávání:** Bleskově rychlý, responzivní web bez lagů, dynamický a vizuálně strhující design s moderními trendy (dark mode, neonové gradienty, 3D interakce).
- **Klíčové funkce na webu:** Technické filtry u programu (podle hardware a stupňů volnosti 3DOF/6DOF), detailní popisy hardwarových instalací, rychlá rezervace slotů v Matrix Areně.

### 3.2 Filmoví fanoušci, cinefilové a studenti uměleckých škol
- **Věk:** 19 – 45 let
- **Charakteristika:** Navštěvují festivaly jako KVIFF, Ji.hlava nebo Anifilm. VR vnímají jako nové svébytné umělecké médium narativní kinematografie a vizuální poezie.
- **Potřeby:** Zajímají je režiséři, autorská vize, festivalová ocenění (Benátky VR, Sundance, Cannes XR), témata sociální empatie, poetiky a dokumentu.
- **Očekávání:** Důraz na dramaturgické texty, anotace, synopse, profily tvůrců a Q&A panely s režiséry.
- **Klíčové funkce na webu:** Seznam a detail účinkujících s propojením na jejich projekce, filtrování podle filmových žánrů, přehled soutěžních sekcí a harmonogram diskusí na Neon Stage.

### 3.3 Rodiny s dětmi a běžní zvědaví návštěvníci (Mainstream Public & Families)
- **Věk:** Děti od 8 let, rodiče 30 – 50 let, zvídaví dospělí bez předchozí zkušenosti s VR.
- **Charakteristika:** Chtějí si poprvé vyzkoušet virtuální realitu v bezpečném, přátelském a srozumitelném prostředí bez stresu z technické složitosti.
- **Potřeby:** Jednoduchá orientace, jasná věková doporučení (např. *Vhodné pro děti od 8 let*), informace o hygieně a bezpečnosti.
- **Očekávání:** Hravé, barevné, přístupné rozhraní, žádný nepřehledný odborný žargon, jasné návody a asistence na místě.
- **Klíčové funkce na webu:** Filtr obsahu „Vhodné pro rodiny a děti“, sekce *Praktické informace* (jak probíhá nasazení headsetu, hygiena, prevence nevolnosti, občerstvení, šatny, bezbariérovost).

### 3.4 Profesionálové z oboru, vývojáři a zástupci médií (Industry & Press)
- **Věk:** 25 – 60 let
- **Charakteristika:** Režiséři, producenti, herní designéři, kurátoři, zástupci fondů a novináři pokrývající XR odvětví.
- **Potřeby:** Získat akreditaci, stáhnout tiskové zprávy a obrazové materiály, vyhledat kontakty na zahraniční hosty, sledovat odborné masterclasses a networkingové večery.
- **Očekávání:** Profesionální press kit ke stažení, přehledné profesní biografie tvůrců, program Industry sekce.
- **Klíčové funkce na webu:** Označení programových bloků Masterclass / Industry Panel, odkaz na akreditace, kontakty na PR tým a tiskové balíčky v plném rozlišení.

---

## 4. Informační architektura

### 4.1 Sitemap (Struktura webu)

```
CHROMASYNC VR FILM FESTIVAL 2026
│
├── 1. Úvodní stránka (Home)
│    ├── Hero sekce s interaktivním 3D VR Headsetem & dynamickou typografií
│    ├── Rychlý odpočet do zahájení & Klíčové festivalové statistiky
│    ├── Kurátorský výběr (Featured Highlights) – top 4 zážitky festivalu
│    ├── Interaktivní rozcestník festivalových scén (4 imerzivní zóny)
│    ├── O festivalu & Video Teaser Showreel
│    └── Newsletter, Call to Action: Vstupenky & Rezervace slotů
│
├── 2. Program (Harmonogram festivalu)
│    ├── Přepínač festivalových dnů (Den 1: Pátek, Den 2: Sobota, Den 3: Neděle)
│    ├── Rychlé vyhledávání & Filtrovací lišta (Podle scény, žánru, VR hardwaru, věku)
│    ├── Přepínač zobrazení: Mřížka karet vs. Časová osa (Timeline / Schedule Grid)
│    ├── Seznam 60 programových položek s interaktivními štítky
│    └── Funkce „Můj program“ (interaktivní ukládání do vlastního harmonogramu)
│
├── 3. Účinkující a tvůrci (Creators & Performers)
│    ├── Seznam všech 60 mezinárodních a českých tvůrců & studií
│    ├── Filtrování podle role (Režisér, 3D Artist, Spatial Audio, Studio, Porota)
│    ├── Abecední a zemi původu zohledňující vyhledávání
│    └── Detail účinkujícího (Modální okno / Detailní podstránka)
│         ├── Biografie a fotografie
│         ├── Role a země původu
│         ├── Odkazy na portfolio / web
│         └── Provázaný seznam festivalových programových položek daného tvůrce
│
├── 4. Místa a scény (Venues & Stages)
│    ├── Interaktivní mapa areálu Výstaviště Holešovice (Pavilony A, B, C, D)
│    ├── Dome Alpha: Spatial HoloCinema (8K projekční dóm & synchronizované headset bary)
│    ├── Matrix Arena: 6DOF Interactive Lab (volný pohyb v prostoru & haptické vesty)
│    ├── Neon Stage: Creators & Masterclasses (konferenční sál & live coding/mocap)
│    ├── Oasis Hub: Ambient & Sensory VR (chillout zóna, lehký headset relax)
│    └── Technické parametry, kapacita a aktuální program každé scény
│
├── 5. Interaktivní VR Showcase & 3D Lab (Speciální sekce festivalu)
│    ├── Interaktivní 3D prohlížeč festivalového headsetu s rozpadem komponent (Exploded View)
│    ├── Virtuální zkušebna zorného pole (FOV Simulator: 3DOF 360° vs. 6DOF Roomscale)
│    └── Zvuková ukázka binaurálního prostorového audia (Spatial Audio Switcher)
│
├── 6. Praktické informace (Practical Guide)
│    ├── Jak se k nám dostat (MHD, tramvaj Výstaviště, parkování, pěší přístup)
│    ├── Vstupenky & Rezervace slotů na VR brýle (Pravidla, systém rezervací)
│    ├── Průvodce prvním nasazením VR (Hygiena, jednorázové masky, brýle na dálku)
│    ├── Prevence nevolnosti a bezpečnost (Kinetóza, odpočinkové zóny)
│    ├── Bezbariérovost a asistence na místě
│    └── Často kladené otázky (FAQ) & Kontakty na festivalový tým
│
└── 7. Můj program & Rezervace (Interaktivní klientská zóna)
     ├── Přehled uložených vystoupení v reálném čase
     ├── Detekce časových kolizí (upozornění na překrývající se časy)
     └── Export harmonogramu do iCal / PDF nebo zkopírování odkazu
```

### 4.2 Hlavní navigace
Hlavní navigace je koncipována jako **plovoucí skleněná lišta (Glassmorphic Floating Navbar)** s neonovým akcentovým podsvícením, fixovaná v horní části obrazovky:
- **Logo:** `CHROMASYNC [2026]` s pulzujícím gradientem a mikroanimací při najetí.
- **Položky menu:**
  1. `Program` (s indikátorem živě probíhajících akcí)
  2. `Tvůrci`
  3. `Scény & Mapa`
  4. `3D Showcase`
  5. `Praktické info`
- **Akční tlačítka v pravé části:**
  - `Můj rozvrh` (s odznakem počtu uložených položek, např. `3`)
  - `Koupit vstupenku / Rezervace` (zvýrazněné tlačítko s dynamickým gradientem)
  - `EN / CZ` přepínač jazyka

### 4.3 Vztahy mezi hlavními částmi webu
Architektura je plně provázaná a eliminuje slepé uličky pro návštěvníka:
- Z **Úvodní stránky** vedou přímé cesty do programových detailů, na interaktivní 3D ukázku i k nákupu vstupenek.
- Z **Karty programu** se uživatel jediným kliknutím proklikne na:
  - **Profil daného tvůrce** (kde vidí jeho další zapojení v programu),
  - **Profil dané scény** (kde vidí polohu na mapě a kapacitu),
  - **Tlačítko pro uložení do „Mého programu“**.
- Z **Detailu scény** je okamžitý přístup k časové ose všech pořadů, které se v dané zóně odehrávají.
- Z **Detailu účinkujícího** jsou přímo linkována všechna vystoupení, filmy a diskuse, na kterých participuje.

---

## 5. Uživatelské scénáře

Níže jsou definovány 3 klíčové scénáře pokrývající různé archetypy uživatelů, které slouží pro návrh drátěných modelů, interaktivní logiku a testování.

### Scénář 1: Pokročilý hráč hledá interaktivní 6DOF zážitek s haptikou a rezervuje si slot
- **Typ uživatele:** Technologický nadšenec a VR gamer (Tomáš, 24 let).
- **Cíl:** Najít na festivalu nejintenzivnější interaktivní zážitek s volným pohybem po místnosti a haptickou vestou na sobotní odpoledne, zjistit podrobnosti a uložit si jej do svého rozvrhu s rezervací časového slotu.
- **Výchozí situace:** Tomáš přichází na web z mobilního telefonu přes odkaz na sociální síti, kde viděl zmínku o haptických vestách bHaptics.
- **Průběh akce:**
  1. Otevírá web festivalu a v plovoucím menu kliká na **Program**.
  2. Vybírá záložku **Den 2 (Sobota 24. 10.)**.
  3. V rychlých filtrech kliká na štítek scény **Matrix Arena (6DOF)** a filtr hardwaru **Haptická vesta**.
  4. Systém okamžitě vyfiltruje položky; Tomáše zaujme projekt *Kybernetický únik: Úniková místnost s časovou smyčkou* (12:00 – 12:45).
  5. Otevírá detail, přečte si parametry hardware a kliká na tlačítko **„Přidat do mého programu“** a následně **„Rezervovat slot“**.
- **Očekávaný výsledek:** Položka se uloží do Tomášova rozvrhu v liště, zobrazí se potvrzení o rezervaci slotu v Matrix Areně na 12:00 s QR kódem a systém jej upozorní, aby dorazil 10 minut předem na instruktáž.

### Scénář 2: Milovnice dokumentů a filmová studentka hledá programové bloky konkrétního režiséra
- **Typ uživatele:** Filmová studentka FAMU / Cinefilka (Karolína, 22 let).
- **Cíl:** Zjistit, kde a kdy vystupuje španělský dokumentarista Mateo Silva, přečíst si o jeho oceněném VR dokumentu o klimatických změnách a zkontrolovat, zda nekoliduje s masterclass o režii v prostoru.
- **Výchozí situace:** Karolína sedí u notebooku a plánuje si páteční festivalový den zaměřený na autorskou tvorbu.
- **Průběh akce:**
  1. Na webu v hlavní navigaci volí sekci **Tvůrci (Performers)**.
  2. Do vyhledávacího pole napíše „Mateo Silva“ nebo vyfiltruje štítek **Dokument**.
  3. Zobrazí se karta režiséra; kliknutím otevře detailní profil s biografií a filmografií.
  4. V sekci „Vystoupení na CHROMASYNC 2026“ vidí dvě položky:
     - Pátek 11:15: *Hlasy tajícího ledu: Arktická expedice* (Dome Alpha)
     - Neděle 13:30: *Doteky války: Rekonstrukce měst po katastrofě* (Dome Alpha)
  5. Karolína kliká na „Přidat do mého rozvrhu“ u páteční projekce.
  6. Otevírá plovoucí okno **„Můj program“**, kde se vizuálně vykreslí časová osa pátečního dne.
- **Očekávaný výsledek:** Karolína má film zařazen v rozvrhu, vidí, že po jeho skončení ve 11:55 pohodlně stíhá Masterclass v Pavilonu A ve 12:00 bez časové kolize.

### Scénář 3: Rodič s dětmi hledá bezpečný rodinný program a zjišťuje praktická pravidla
- **Typ uživatele:** Rodič (Martin, 41 let, s 10letou dcerou).
- **Cíl:** Najít na neděli program vhodný pro děti bez násilí a hororových prvků, zjistit, zda dcera může nosit VR brýle s dioptrickými brýlemi a jak je to s lístky pro rodiny.
- **Výchozí situace:** Martin přichází na hlavní stránku z vyhledávače Google po zadání „VR festival Praha pro děti“.
- **Průběh akce:**
  1. Na domovské stránce kliká na doporučenou kategorii nebo přechází do **Programu**.
  2. Zvolí **Den 3 (Neděle 25. 10.)** a aktivuje filtr věku **„Děti & Rodina (Všechny věkové kategorie / 6+)“**.
  3. Objeví titul *Rodinné nedělní dopoledne: Ptačí let nad Amazonií* (09:30, Dome Alpha) a *Kouzelná zahrada origami* (Oasis Hub).
  4. Následně v menu přechází do záložky **Praktické info**.
  5. V sekci FAQ kliká na rozbalovací otázku: *„Mohu mít ve VR brýlích dioptrické brýle?“* a *„Od kolika let je VR vhodná?“*.
  6. Dočítá se, že všechny festivalové headsety mají distanční vložky pro dioptrické obruby a personál pomáhá dětem s nastavením mezizornicové vzdálenosti (IPD).
- **Očekávaný výsledek:** Martin získává jistotu o bezpečnosti a komfortu, ukládá si obě rodinné projekce a přechází přímo k zakoupení rodinné celodenní vstupenky.

---

## 6. Vizuální koncept, styl a mikroanimace

V souladu se zadáním je grafický koncept webu postaven na **hravosti, pestrosti, dynamice a technologické eleganci**:

### 6.1 Barevná paleta (Cyber-Chromatic Harmony)
Místo fádních základních barev web využívá hluboké kosmické pozadí s prosvětlenými neonovými akcenty reagujícími na pohyb kurzoru:
- **Hluboké pozadí (Deep Space Dark):** `#080914` a `#0E1126` (poskytuje maximální kontrast pro zářivé barvy).
- **Primární neon (Cyan Spatial Pulse):** `#00F0FF` (reprezentuje digitální technologii, světlo displejů).
- **Sekundární neon (Electric Magenta / Fuchsia):** `#FF007A` (představuje hravost, energii a filmové emoce).
- **Terciární akcent (Hyper Violet):** `#7928CA` (využití v holografických přechodech).
- **Varovný / Highlight akcent (Solar Amber):** `#FFB800` (pro označení zbývajících volných míst a štítků).
- **Povrchy karet (Glassmorphism):** `rgba(255, 255, 255, 0.04)` s blur efektem `backdrop-filter: blur(16px)` a 1px okrajem `rgba(255, 255, 255, 0.12)`.

### 6.2 Typografie
- **Nadpisy (Display):** Moderní geometrický bezpatkový font **Outfit** nebo **Space Grotesk** s vysokým kontrastem a futuristickými křivkami.
- **Běžný text (Body):** Vysoce čitelný **Plus Jakarta Sans** nebo **Inter** pro pohodlné čtení synopsí a technických parametrů.
- **Kódy a metadata:** **JetBrains Mono** pro technické štítky (hardware, čas, FPS, 6DOF).

### 6.3 Interaktivní 3D prvky a mikroanimace
1. **Interaktivní 3D Hero prvek:** WebGL / Three.js plovoucí VR headset v hero sekci, který se jemně natáčí za polohou myši (paralaxa) a při kliknutí vyzařuje světelné fotonové vlny.
2. **Karty s 3D Tilt efektem:** Karty filmů a programových položek se při najetí myší mírně naklánějí v prostoru (CSS `transform: perspective(1000px) rotateX(...) rotateY(...)`) a vytváří holografický odlesk (*sheen effect*).
3. **Mikroanimace tlačítek a stavů:** Tlačítka reagují pulzujícími zářícími okraji (*glow animation*), plynulým zvětšením při hoveru a magnetickým efektem přitažení k myši.
4. **Interaktivní časová osa (Timeline Slider):** Plynulý přechod mezi jednotlivými dny s horizontálním posunem a filtrováním bez znovunačítání stránky.

---

## 7. Datová základna a struktura databáze

Datový podklad projektu je uložen v souboru [`data.json`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/data.json). Všechny vazby jsou normalizované, konzistentní a připravené pro přímou konzumaci v JavaScriptu.

### 7.1 Přehled entit a jejich rozsah

| Entita | Počet záznamů | Primární klíč | Popis a vazby |
| :--- | :---: | :--- | :--- |
| **`festival`** | 1 | `id` (`chromasync-2026`) | Globální metadata, data konání, lokalita, motto, témata, statistiky. |
| **`stages`** (scény/místa) | **4** | `id` (`stage-dome-alpha`, apod.) | Jednotlivé zóny s technickým vybavením, kapacitou a popisem. Vazba 1:N do `program_items`. |
| **`performers`** (účinkující) | **60** | `id` (`perf-01` až `perf-60`) | Režiséři, vývojáři, VR studia a lektoři z celého světa. Vazba M:N do `program_items`. |
| **`program_items`** (vystoupení) | **60** | `id` (`prog-01` až `prog-60`) | Filmové projekce, interaktivní 6DOF hry, workshopy a masterclasses rozdělené rovnoměrně do 3 dnů (20 na den). |

### 7.2 Datové vazby a integrita
- Každá programová položka obsahuje platný cizí klíč `stage_id` odkazující na jednu ze 4 scén.
- Každá programová položka obsahuje pole cizích klíčů `performer_ids` odkazující na minimálně jednoho existujícího tvůrce (1 až 4 tvůrci na položku).
- Časové sloty jsou rozprostřeny v rámci 3 dnů (23. 10. – 25. 10. 2026) od 09:30 do 23:00 bez kolizí na téže scéně.

---

## 8. Plán realizace v dalších fázích projektu

1. **Fáze 1 (Aktuální výstup):** Projektová specifikace (`project-specification.md`) a datová základna (`data.json`).
2. **Fáze 2 (Informační struktura & Wireframing):** Příprava HTML šablony s responzivní strukturou a CSS design systémem tokenů.
3. **Fáze 3 (Interaktivní vývoj & Komponenty):** Dynamické načítání `data.json`, implementace vyhledávání, filtrování, časové osy a funkce „Můj program“.
4. **Fáze 4 (Vizuální WOW efekt & 3D / Mikroanimace):** Nasazení 3D prvků, mikrointerakcí, přístupnosti (a11y) a SEO optimalizace.
