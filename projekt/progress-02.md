# Zpráva o postupu: Návrh klíčových částí webu a interaktivní prototyp

**Projekt:** CHROMASYNC VR FILM FESTIVAL 2026  
**Předmět:** Web Design (5. semestr) – Cvičení 3  
**Prototyp:** [`projekt/prototyp/index.html`] (spustitelný přímo v prohlížeči bez instalace)

---

## 1. Seznam navržených funkcí

Prototyp je postaven na čistém sémantickém HTML5, CSS3 a Vanilla JavaScriptu bez externích knihoven. Obsahuje následující klíčové funkce:

1. **Vícedimenzionální filtr a okamžité vyhledávání v programu:**
   - Přepínání festivalových dnů (Pátek, Sobota, Neděle, Vše).
   - Filtrování podle 4 scén (*Dome Alpha*, *Matrix Arena*, *Neon Stage*, *Oasis Hub*) a technologií (6DOF, haptika, 360°, Apple Vision Pro, masterclass).
   - Rychlé tematické štítky (🦺 Haptika, 🕹️ 6DOF, 🚀 Sci-Fi, 👶 Rodina & Děti, 🇨🇿 Česká tvorba).
   - Fulltextové vyhledávání v reálném čase s dynamickým počítadlem a prázdným stavem s možností resetu.

2. **Osobní program („Můj rozvrh“) s detekcí časových kolizí:**
   - Přidávání vystoupení do oblíbených z karty i detailu s indikátorem v navigaci.
   - Výsuvný panel rozvrhu s chronologickým řazením podle dnů a časů.
   - **Algoritmická detekce kolizí:** automatické varování při časovém překryvu dvou a více uložených akcí.
   - Ukládání rozvrhu do `localStorage` a možnost tisku / exportu (`window.print()`).

3. **Detail programu a rezervace slotů na VR headsety:**
   - Kontextové okno (`<dialog>`) s anotací, technickými parametry (hardware, interakce, věk) a tvůrci.
   - Rezervační formulář s validací, generováním unikátního kódu (`RES-XXXXXX`) a uložením do `localStorage`.

4. **Katalog účinkujících s vazbou na program:**
   - Seznam 60 tvůrců s filtrováním rolí (režiséři, VR studia, 3D/VFX, zvuk, česká tvorba).
   - Profil tvůrce s biografií a výpisem jeho vystoupení s možností přímého přidání do rozvrhu.

5. **3D Canvas Sensory Simulator (3D Lab):**
   - Interaktivní simulátor zorného pole v prohlížeči (6DOF room-scale reagující na pohyb, 3DOF 360° rotace, prostorový zvuk).
   - Test haptického pulzu (`navigator.vibrate` na mobilu / vizuální pulz na desktopu).

6. **Testovací ovládací lišta prototypu:**
   - Přepínač viewportu pro okamžité zobrazení v rámu telefonu (**Mobil 390px**), tabletu (**Tablet 768px**) a desktopu.
   - Tlačítka pro automatizovaný průchod Scénářem 1 (Tomáš) a Scénářem 2 (Karolína).

---

## 2. Vazba funkcí na uživatelské potřeby

Funkce přímo řeší potřeby person a cílových skupin definovaných v zadání:

| Persona / Cílová skupina | Uživatelská potřeba a problém | Implementované řešení v prototypu |
| :--- | :--- | :--- |
| **VR gameři a nadšenci**<br>*(Tomáš, 24 let)* | Chce nejnáročnější 6DOF zážitky a haptiku bHaptics; nechce stát fronty na omezený hardware. | • Rychlé filtry „6DOF“ a „Haptika“ v programu.<br>• Specifikace hardware na kartách i v detailu.<br>• Rezervační formulář slotu na headset s kódem. |
| **Filmoví diváci a studenti**<br>*(Karolína, 22 let)* | Hledá tvorbu konkrétního režiséra (Mateo Silva) a potřebuje vyřešit časové překryvy s masterclasses. | • Vyhledávání tvůrců a obousměrná vazba tvůrce ↔ program.<br>• Můj rozvrh s **automatickou detekcí časových kolizí**. |
| **Rodiny s dětmi a veřejnost**<br>*(Martin s dcerou)* | Hledá bezpečný obsah pro děti a praktické informace (nošení dioptrických brýlí ve VR, hygiena). | • Rychlý filtr „👶 Rodina & Děti“ a věkové štítky.<br>• Akordeon FAQ s praktickými informacemi o headsetech. |
| **Mobilní návštěvníci v areálu** | Potřebují snadno zkontrolovat program za chůze jednou rukou. | • **Mobile-first ergonomie**: spodní lišta v dosahu palce (*Thumb Zone*).<br>• Dotykové cíle min. 44×44 px a rychlý výsuvný rozvrh. |

---

## 3. Co bylo ověřováno a jak

1. **Scénář 1: Gamer Tomáš (6DOF & rezervace):**
   - *Postup:* Filtrování Dne 2 (sobota), scény *Matrix Arena* a štítku *Haptika*; otevření detailu díla *Kybernetický únik* a odeslání rezervačního formuláře.
   - *Výsledek:* Systém ověřil vstup, vygeneroval kód rezervace, uzamkl formulář, uložil stav do `localStorage` a přidal položku do rozvrhu.

2. **Scénář 2: Studentka Karolína (Tvůrce & časový harmonogram):**
   - *Postup:* Vyhledání režiséra „Mateo Silva“ v sekci Tvůrci, otevření profilu, přidání jeho projekce do rozvrhu a následné přidání souběžné akce pro test kolize.
   - *Výsledek:* Profil korektně nabídl přímé přidání do rozvrhu. Při překryvu časů výsuvný panel okamžitě zobrazil varování s názvy kolidujících akcí.

3. **Responzivita a Mobile-First ergonomie:**
   - *Postup:* Testování na rozlišeních 375 px, 390 px, 768 px a desktopu (i pomocí integrovaného přepínače viewportu).
   - *Výsledek:* Na mobilu se aktivuje spodní navigační lišta, filtry umožňují dotykové přetáčení, prvky dodržují minimální velikost 44×44 px a rozložení karet škáluje z 1 do 4 sloupců.

4. **Přístupnost a ovládání z klávesnice:**
   - Ověřeno otevírání a zavírání nativních dialogů (`<dialog>`) klávesou `Escape`, cyklování fokusu klávesou `Tab` s viditelným indikátorem a sémantické atributy `aria-live` pro čtečky obrazovky.

---

## 4. Použití AI a ověření AI výstupů

AI (model Gemini) byla využita v režimu **řízeného párového programování** pro konkrétní dílčí úkoly. Veškeré výstupy byly technicky ověřeny a korigovány:

1. **Generování databáze (`data.json`):**
   - *Úkol pro AI:* Vygenerovat strukturovaný dataset 60 programových bodů a 60 tvůrců.
   - *Chyby AI:* Chybné reference cizích klíčů (např. odkaz na neexistující `perf-61`) a časové překryvy na téže scéně.
   - *Ověření a oprava:* Vytvořen validační skript v Pythonu, který zkontroloval referenční integritu a unikátnost ID; nekonzistence byly ručně opraveny na 100 %.

2. **Mobile-First CSS architektura:**
   - *Chyby AI:* AI měla tendenci psát desktopové CSS a degradovat ho přes `max-width` media queries.
   - *Ověření a oprava:* Kód byl přepracován na striktní Mobile-First s `min-width` dotazy, ergonomickou spodní lištou pro palec a dotykovými plochami min. 44×44 px.

3. **Algoritmus detekce kolizí v rozvrhu:**
   - *Návrh AI:* Převod časů `"HH:MM"` na minuty od půlnoci a intervalový test $start_A < end_B \land start_B < end_A$.
   - *Ověření:* Otestovány hraniční stavy (navazující akce bez kolize vs. překryv o 1 minutu vyvolávající varování).

4. **Odladění dialogů `<dialog>` a offline běhu:**
   - *Chyby AI:* Chybějící zavírání dialogu kliknutím na backdrop a reload stránky při odeslání rezervačního formuláře.
   - *Ověření a oprava:* Doplněno `e.preventDefault()`, obsluha kliku na backdrop a offline fallback dat přímo v JS pro bezproblémové spuštění přes `file:///` bez nutnosti serveru.

---

## 5. Spuštění prototypu

- **Přímo z disku:** Otevřete soubor [`projekt/prototyp/index.html`]
- **Přes lokální server (volitelně):** Spusťte `python3 -m http.server 3000` a otevřete `http://localhost:3000/projekt/prototyp/`.
