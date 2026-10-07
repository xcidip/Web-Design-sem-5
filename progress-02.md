# Zpráva o postupu: Návrh klíčových částí webu a interaktivní prototyp

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr)  
**Výstup:** Cvičení 3 – Interaktivní prototyp a zpráva o postupu (`progress-02.md`)

---

## 1. Seznam navržených funkcí

Prototyp představuje plně funkční, spustitelný web bez nutnosti jakékoliv instalace (čisté HTML5, CSS3 a Vanilla JavaScript). Bylo implementováno **5 klíčových interaktivních funkcí**:

1. **Vícedimenzionální interaktivní filtr a okamžité vyhledávání v programu:**
   - Přepínání festivalových dnů (Den 1, Den 2, Den 3, Celý festival).
   - Filtrování podle scén (*Dome Alpha*, *Matrix Arena*, *Neon Stage*, *Oasis Hub*).
   - Filtrování podle technologií a formátů (6DOF Room-scale, Haptika, 360° film, Apple Vision Pro, Masterclasses).
   - Rychlé štítky (*Quick Pills*) pro populární témata (🦺 Haptika, 🕹️ 6DOF, 🚀 Sci-Fi, 👶 Děti & Rodina, 🇨🇿 Česká tvorba).
   - Živé fulltextové vyhledávání v reálném čase s dynamickým počítadlem výsledků a prázdným stavem (*Empty State*) s možností resetu.

2. **Osobní program a správa oblíbených („Můj rozvrh“):**
   - Možnost označit/odebrat kterékoliv vystoupení přímo na kartě nebo v detailu (hvězdička / záložka).
   - Plovoucí odznak s počítadlem v navigaci.
   - Výsuvný postranní panel (*Schedule Drawer*) s chronologickým řazením položek.
   - **Automatická detekce časových kolizí:** pokud si uživatel uloží vystoupení, která se v daný den časově překrývají, systém zobrazí varovný panel s konkrétními názvy a časy kolidujících akcí.
   - Trvalé ukládání do `localStorage` a možnost exportu / tisku rozvrhu.

3. **Kontextové zobrazení detailů a rezervační systém slotů na VR headsety:**
   - Modální dialog `<dialog>` zobrazující technické parametry díla, použitý hardware, doporučený věk, interakci a anotaci.
   - Proklik na profily zapojených tvůrců a studií.
   - Rezervační formulář na headset: návštěvník zadá jméno a e-mail, systém ověří kapacitu a vygeneruje unikátní rezervační kód (`RES-XXXXXX`) uložený v lokálním úložišti.

4. **Interaktivní 3D Canvas / FOV & Sensory Simulator:**
   - Interaktivní 3D zkušebna zorného pole v sekci *3D Showcase*.
   - Simulace 3 režimů: **6DOF Room-scale** (3D mřížka a plovoucí objekty reagující na myš/pohyb), **3DOF 360° Cinema** (rotační panorama z pevného bodu) a **Ambient Spatial Audio** (binaurální pulzující vlny).
   - Tlačítko pro test haptického pulzu (využívá `navigator.vibrate` na mobilních zařízeních a vizuální haptický otřes).

5. **Interaktivní katalog účinkujících s obousměrným propojením na program:**
   - Seznam 60 tvůrců s vyhledáváním a filtrováním rolí (Režisér, Studio, 3D/VFX, Audio, Česko).
   - Detail tvůrce s biografií a výpisem všech jeho festivalových vystoupení s možností přímého přidání do rozvrhu.

---

## 2. Vazba funkcí na uživatelské potřeby

Všechny funkce vycházejí z cílových skupin definovaných v `project-specification.md`:

| Cílová skupina | Potřeba / Problém | Řešení v prototypu |
| :--- | :--- | :--- |
| **Technologičtí nadšenci a VR gameři** | Chtějí rychle najít 6DOF pohyb a haptické vesty bHaptics bez procházení 60 položek. | Rychlý filtr „Haptika“ a „6DOF“, detail s hardwarem a okamžitá rezervace slotu v Matrix Areně. |
| **Filmoví fanoušci a studenti (Cinefilové)** | Hledají konkrétní autory, oceněné dokumenty a chtějí se vyhnout překrývání projekcí s masterclass. | Fulltextové vyhledávání tvůrců, obousměrné propojení na díla a **detekce časových kolizí** v „Mém rozvrhu“. |
| **Rodiny s dětmi a běžná veřejnost** | Hledají bezpečný obsah vhodný pro děti a srozumitelné praktické informace. | Rychlý filtr „Rodina & Děti“, věkové štítky (např. 6+ vs. 18+) a interaktivní akordeon FAQ s informacemi o brýlích a hygieně. |
| **Mobilní návštěvníci přímo na festivalu** | Potřebují ovládat program jednou rukou za chůze v areálu Výstaviště. | **Mobile-first ergonomie**: plovoucí spodní lišta (*Thumb Zone*), velká dotyková tlačítka, rychlý výsuvný rozvrh. |

---

## 3. Co bylo ověřováno a jak

Byla provedena verifikace klíčových scénářů i technického chování:

### Ověření Scénáře 1 (Gamer Tomáš – 6DOF & Haptika):
- **Postup:** V prototypu bylo využito testovací tlačítko v horní liště *„Scénář 1: Gamer & 6DOF Haptika“* i ruční průchod:
  1. Přepnutí na Den 2 (Sobota 24. 10.).
  2. Výběr scény *Matrix Arena* a štítku *Haptika*.
  3. Otevření detailu *Kybernetický únik: Úniková místnost s časovou smyčkou*.
  4. Odeslání formuláře rezervace slotu na headset.
- **Výsledek:** Systém úspěšně potvrdil rezervaci, vygeneroval kód a aktualizoval stav tlačítka na uloženo. Dialog se korektně zavírá křížkem ✕, spodním tlačítkem, kliknutím na pozadí i klávesou `Escape`.

### Ověření Scénáře 2 (Filmová studentka Karolína – Režisér Mateo Silva):
- **Postup:** Spuštění scénáře 2 z lišty i ruční vyhledání:
  1. Odscrollování do sekce Tvůrci.
  2. Zadání jména „Mateo Silva“ do vyhledávače.
  3. Otevření profilu režiséra.
  4. Přidání projekce *Hlasy tajícího ledu* do rozvrhu.
  5. Otevření „Mého rozvrhu“ a kontrola časové osy.
- **Výsledek:** Profil správně zobrazil obě režisérova díla, položka se přidala do rozvrhu s navýšením počítadla na badge a při záměrném přidání překrývajícího se pořadu se aktivoval žlutý varovný box kolize.

### Ověření responzivity (Mobile-first):
- Testováno pro šířky obrazovek 375px (iPhone SE), 390px (iPhone 14/15), 768px (iPad) a 1440px (Desktop).
- Na mobilních zařízeních se aktivuje ergonomická spodní lišta s 5 sekcemi přizpůsobená dosahu palce.

---

## 4. Použití AI a ověření AI výstupů

### Jak byla AI využita:
1. **Generování a syntéza konzistentních dat:** AI asistovala při sestavení realistického datasetu 60 účinkujících a 60 programových slotů do `data.json`, aby odpovídal standardům mezinárodních festivalů (Benátky Immersive, Cannes XR).
2. **Architektura komponent a přístupnost:** AI pomohla navrhnout sémantickou strukturu s využitím moderních HTML5 standardů (`<dialog>`, `<details>`, `<summary>`) a CSS Gridu bez externích knihoven.
3. **Logika detekce kolizí a simulátoru:** Implementace matematického převodu časů na minuty pro zjišťování intervalových překryvů a Canvas animace pro vizualizaci zorného pole.

### Jak byly AI výstupy ověřovány:
- **Konzistence dat:** Vytvořen automatický Python validační skript kontrolující existenci všech cizích klíčů (`stage_id`, `performer_ids`), unikátnost identifikátorů a rovnoměrné rozložení do 3 dnů.
- **Funkčnost kódu:** Odhalení a oprava chyb v návaznostech posluchačů událostí (`initDialogs`), doplnění explicitního `type="button"` a ošetření `z-index` pro spolehlivé zavírání modálních oken.
- **Běh bez závislostí:** Do kódu byl zakomponován vložený fallback dataset, který garantuje, že prototyp funguje i při otevření souboru `index.html` napřímo přes protokol `file:///` bez nutnosti spouštět webserver.

---

## 5. Jak spustit prototyp

Prototyp nevyžaduje žádnou instalaci (`npm install` apod.):
1. Otevřete soubor [`index.html`](file:///Users/rafaelprokop/Documents/Projects/Web%20Design%20sem%205/index.html) v jakémkoliv moderním webovém prohlížeči (Chrome, Safari, Firefox, Edge).
2. Alternativně lze spustit jednoduchý lokální server: `python3 -m http.server 3000` a přejít na `http://localhost:3000/`.
