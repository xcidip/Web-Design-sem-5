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

Umělá inteligence byla využita jako asistent v roli řízeného párového programování pro urychlení rutinních úkonů, tvorbu výchozího kódu a návrhy řešení. Všechny generované výstupy podléhaly důkladné manuální revizi, testování hraničních případů a technickým úpravám:

1. **Příprava datové sady (`projekt/data.json`):**
   - *Využití AI:* Asistence při tvorbě strukturovaného datasetu pro 60 programových položek a profilů vystupujících.
   - *Nedostatky AI:* AI v některých záznamech generovala neexistující cizí klíče (vazby mezi položkami programu a tvůrci) a docházelo k nechtěnému časovému překryvu představení na stejné scéně.
   - *Ověření a náprava:* Data byla zvalidována na referenční integritu a unikátnost identifikátorů. Chybné vazby a časové kolize scén byly ručně opraveny a data byla přímo integrována i do aplikační logiky v `projekt/prototyp/app.js`.

2. **Kódování stylů a Mobile-First architektura (`projekt/prototyp/style.css`):**
   - *Využití AI:* Tvorba základních CSS skeletonů pro komponenty (karty programu, modální okna, navigační prvky).
   - *Nedostatky AI:* Modely často preferují „desktop-first“ přístup s `max-width` pravidly a navrhují příliš malé klikací plochy nevhodné pro dotykové ovládání.
   - *Ověření a náprava:* Styly byly refaktorovány do striktní Mobile-First architektury s `min-width` media queries, spodní navigační lištou dostupnou v zóně dosahu palce a dodržením minimální velikosti interaktivních cílů 44×44 px podle standardů přístupnosti (WCAG).

3. **Algoritmus detekce kolizí v rozvrhu (`projekt/prototyp/app.js`):**
   - *Využití AI:* Návrh logiky pro detekci překryvů vybraných časových úseků.
   - *Nedostatky AI:* Původní návrh řešil pouze textové porovnání řetězců, což selhávalo u různých formátů a časů přecházejících přes celé hodiny.
   - *Ověření a náprava:* Implementován spolehlivý převod času na celočíselné minuty od začátku dne a intervalová kontrola ($start_A < end_B \land start_B < end_A$). Funkčnost byla ověřena testováním hraničních situací (představení končící přesně v čas začátku dalšího vs. překryv o 1 minutu).

4. **Interakce dialogových oken a formulářů (`projekt/prototyp/index.html`, `projekt/prototyp/app.js`):**
   - *Využití AI:* Vytvoření šablon pro sémantický prvek `<dialog>` a rezervační formulář.
   - *Nedostatky AI:* Chybělo ošetření zavření modálního okna při kliknutí mimo obsah (na `::backdrop`), nebylo zajištěno zamezení výchozího odeslání stránky (`e.preventDefault()`) a chyběla perzistence stavu při obnovení stránky.
   - *Ověření a náprava:* Doplněna správa fokusu, zachytávání klávesy `Escape`, správná obsluha událostí formuláře a ukládání stavu rezervací a oblíbených položek do `localStorage`.

---

## 5. Spuštění prototypu

- **Přímo z disku:** Otevřete soubor [`projekt/prototyp/index.html`]
- **Přes lokální server (volitelně):** Spusťte `python3 -m http.server 3000` a otevřete `http://localhost:3000/projekt/prototyp/`.
