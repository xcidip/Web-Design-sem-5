# CHROMASYNC 2026 – Webová prezentace festivalu VR filmů

> **Semestrální práce z předmětu Web Design (5. semestr)**  
> Česká zemědělská univerzita v Praze
> PEF · Katedra informačních technologií
> Garant předmětu: doc. Ing. Pavel Šimek, Ph.D.  
> Autor: Rafael Prokop 
> Téma: Fiktivní festival

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?logo=javascript&logoColor=black)
![Responzivita](https://img.shields.io/badge/responzivita-mobil_/_tablet_/_desktop-7928CA)
![Licence](https://img.shields.io/badge/licence-MIT-blue)

---

## O projektu

**CHROMASYNC VR FILM FESTIVAL 2026** je fiktivní mezinárodní festival virtuální reality, 360° stereoskopické kinematografie a prostorových zážitků. Jeho čtvrtý ročník se koná 23.–25. října 2026 na Výstavišti Praha v Křižíkových pavilonech.

Cílem semestrální práce je navrhnout a zprovoznit **kompletní webovou prezentaci festivalu** – od představení programu a tvůrců přes praktické informace až po personalizaci návštěvy. Web funguje jako informační uzel i jako hravá digitální ochutnávka imerzivního zážitku.

Řešení je postavené na **čistém HTML, CSS a JavaScriptu bez frameworku a bez build nástrojů**. Data jsou načítána z jediného JSON souboru, takže web není závislý na žádném backendu. Návštěvník si může sestavit vlastní program, ukládat rezervace a procházet obsah na mobilu, tabletu i desktopu.

Web se skládá ze čtyř samostatných stránek:

| Stránka | Účel |
| :--- | :--- |
| **Úvod** (`index.html`) | Hero sekce s odpočtem, 3D headset, festivalové metriky, kurátorský výběr, scény, FOV simulátor a ceník |
| **Program** (`program.html`) | Harmonogram 60 položek ve třech dnech, filtry, fulltext a přepínání mřížky / časové osy |
| **Tvůrci** (`tvurci.html`) | Katalog 60 tvůrců a studií s filtry, detailem a propojením na program |
| **Praktické info** (`prakticke-info.html`) | Doprava, bezbariérovost, hygiena, FAQ a kontaktní formulář |

---

## 🚀 Jak web spustit

Web nevyžaduje instalaci, build ani balíčkovací nástroje.

### 1. Přímé otevření v prohlížeči

Otevřete soubor [`projekt/web/index.html`](projekt/web/index.html) dvojklikem nebo příkazem:

```bash
# macOS
open projekt/web/index.html

# Linux
xdg-open projekt/web/index.html
```

Web se načte i přes protokol `file:///`. V tomto režimu se data použijí z vložené zálohy `FESTIVAL_DATA` přímo v `app.js`.

### 2. Lokální HTTP server (doporučeno)

Server zajistí načítání `projekt/data.json` a věrnější chování prohlížeče:

```bash
cd projekt/web
python3 -m http.server 8000
```

Poté otevřete **[http://localhost:8000/](http://localhost:8000/)**.

### 3. Co je potřeba

- Libovolný moderní prohlížeč (Chrome, Firefox, Safari, Edge).
- **Žádné závislosti** – neinstalujte npm balíčky.
- Fonty **Outfit**, **Plus Jakarta Sans** a **JetBrains Mono** se načítají z Google Fonts. Při výpadku sítě se použije systémový fallback a web zůstane plně funkční.

---

## 📁 Struktura projektu

```text
.
├── README.md
├── LICENSE
└── projekt/
    ├── data.json                   # datová základna festivalu
    ├── project-specification.md    # specifikace, IA, scénáře, vizuální koncept
    ├── progress-02.md              # zpráva o postupu – prototyp
    ├── progress-03.md              # zpráva o postupu – finální web
    ├── prototyp/                   # archivovaný interaktivní prototyp
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    └── web/                        # finální webová prezentace
        ├── index.html
        ├── program.html
        ├── tvurci.html
        ├── prakticke-info.html
        ├── style.css
        └── app.js
```

**Klíčové soubory:**

- **`projekt/web/`** – finální řešení. Všechny čtyři stránky sdílejí `style.css` a `app.js`.
- **`projekt/data.json`** – jediný zdroj dat. Web ho načítá přes `fetch('../data.json')`; při běhu z disku se použije vložená záloha.
- **`projekt/prototyp/`** – původní jednostránkový prototyp. Je zachovaný bez zásahů jako podklad pro porovnání.
- **`project-specification.md`** – informační architektura, cílové skupiny, uživatelské scénáře a datový model.

---

## 🧭 Co si v aplikaci vyzkoušet

### 1. Program, filtry a časová osa

1. Otevřete [`program.html`](projekt/web/program.html).
2. Přepínejte mezi dny (Vše / Pátek / Sobota / Neděle).
3. Zvolte scénu a technologii v rozbalovacích filtrech.
4. Do vyhledávání napište část názvu, popisu nebo jména tvůrce – výsledky se filtrují okamžitě.
5. Přepněte zobrazení mezi **kartovou mřížkou** a **chronologickou časovou osou**.
6. Vyzkoušejte předfiltrovaný odkaz, například `program.html?stage=stage-matrix-6dof`.

### 2. Můj rozvrh a detekce kolizí

1. U libovolné položky klikněte na **„Přidat do mého rozvrhu“**.
2. V horní liště sledujte odznak s počtem uložených položek.
3. Otevřete výsuvný panel **Můj rozvrh** a zkontrolujte řazení podle času.
4. Přidejte dvě položky, které se překrývají – systém na kolizi upozorní.
5. Rozvrh se ukládá do `localStorage` (`chromasync_schedule`) a zůstává i po zavření prohlížeče a po přechodu mezi stránkami.
6. Pomocí tisku (nebo exportu do PDF) si rozvrh vytiskněte – tiskové styly odstraní navigaci a naformátují obsah na A4.

### 3. Rezervace slotu

1. Otevřete detail položky, která rezervaci vyžaduje.
2. Potvrďte rezervaci v dialogovém okně.
3. Systém vygeneruje kód ve formátu `RES-XXXXXX` a uloží ho do `localStorage` (`chromasync_reservations`).
4. **Poznámka:** rezervace je pouze simulovaná, neodesílá se na žádný server.

### 4. Katalog tvůrců

1. Otevřete [`tvurci.html`](projekt/web/tvurci.html).
2. Filtrujte podle role nebo vyhledávejte podle jména a země.
3. Klikněte na kartu tvůrce – otevře se detail s biografií, tagy a propojenými vystoupeními.
4. Z detailu lze položku přímo přidat do vlastního rozvrhu.
5. Karty se skládají do 1, 2, nebo 3 sloupců podle šířky okna.

### 5. Praktické informace

1. Otevřete [`prakticke-info.html`](projekt/web/prakticke-info.html).
2. Rozbalte odpovědi v FAQ (prvky `<details>`).
3. Projděte sekce o dopravě, bezbariérovosti, hygieně headsetů a prevenci kinetózy.
4. Odeslání kontaktního formuláře zobrazí potvrzovací notifikaci – **zpráva se nikam neodesílá**, jde o ukázku interakce.

### 6. Responzivita a ovládání klávesnicí

- Na mobilu (360–414 px) se v hlavičce objeví hamburger menu s výsuvnou navigací.
- Na tabletu (640–1023 px) se karty skládají do dvou sloupců, na desktopu (1024 px a více) do tří.
- Odkaz **„Přeskočit na obsah“** se zobrazí po stisku `Tab`.
- Modální okna zavřete klávesou `Esc`.
- Viditelný `:focus-visible` stav usnadňuje orientaci při ovládání klávesnicí.
- V nastavení systému lze zapnout omezení animací (`prefers-reduced-motion`).

---

## 🛠 Technologie a přístupy

| Oblast | Řešení |
| :--- | :--- |
| **Značkovací jazyk** | Sémantické HTML5 – `header`, `nav`, `main`, `section`, `article`, `footer`, `<dialog>`, `<details>` |
| **Stylování** | CSS3 – vlastní proměnné (design tokens), Grid a Flexbox, `clamp()` pro fluidní typografii, glassmorphism (`backdrop-filter`), `@media print` |
| **JavaScript** | Vanilla JS (ES6+), bez frameworku a bez externích knihoven |
| **Data** | `projekt/data.json` načítaný přes `fetch`, s vloženou zálohou `FESTIVAL_DATA` pro `file://` |
| **Perzistence** | `localStorage` – osobní rozvrh a rezervace |
| **Typografie** | Outfit (nadpisy), Plus Jakarta Sans (text), JetBrains Mono (technická metadata) |
| **Build** | Žádný – web běží přímo v prohlížeči |
| **Backend** | Žádný – veškerá logika běží na klientovi |

**Proč bez frameworku:** Zadání kladlo důraz na čistý kód, rychlý start a běh bez instalace. Vanilla JS umožňuje web otevřít přímo z disku a zároveň ukázat práci se stavem, DOM a `localStorage` bez skrytých závislostí.

---

## 📊 Datová základna

Data jsou normalizovaná a referenčně integrovaná. Všechny vazby jsou jednoznačné a v datech nejsou sirotčí záznamy.

| Entita | Počet | Popis |
| :--- | :---: | :--- |
| **`festival`** | 1 | Metadata festivalu, termín, lokalita, motto a statistiky |
| **`stages`** | 4 | Dome Alpha, Matrix Arena, Neon Stage, Oasis Hub – technické zázemí a kapacita |
| **`performers`** | 60 | Režiséři, 3D vývojáři, VR studia a lektoři z 32 zemí |
| **`program_items`** | 60 | Projekce, 6DOF zážitky, workshopy a masterclasses – 20 položek na každý den |

**Kontrola dat:**

- Každá programová položka odkazuje na existující scénu (`stage_id`) a na 1–4 existující tvůrce (`performer_ids`).
- Každý z 60 tvůrců vystupuje alespoň v jedné položce.
- Časy jsou rozprostřené od 09:30 do 23:00 bez kolizí na stejné scéně.
- Délka položky odpovídá rozdílu `start_time` a `end_time`.

---

## ♿ Přístupnost a testování

**Přístupnost (směřováno k WCAG 2.2 AA):**

- Sémantická struktura stránky a logické pořadí nadpisů.
- Skip-link pro přeskočení navigace.
- Výrazný `:focus-visible` stav s `outline-offset: 3px`.
- `aria-current="page"` u aktivní položky navigace.
- Modální dialogy zavíratelné klávesou `Esc`.
- Interaktivní cíle o velikosti alespoň 44 × 44 px.
- Respektování `prefers-reduced-motion`.
- Tisková šablona `@media print` pro čistý výstup na A4.

**Provedené kontroly:**

- Ruční testování na šířkách 360, 390, 640, 820, 1024 a 1440 px.
- Ověření integrity interních odkazů a kotev mezi všemi čtyřmi stránkami.
- Syntaxová kontrola JavaScriptu (`node --check projekt/web/app.js`).
- Funkční ověření filtrů, vyhledávání, časové osy, kolizí v rozvrhu, rezervací i ukládání do `localStorage`.
- Ověření běhu přes `file:///` i přes lokální HTTP server.

---

## ⚠️ Známé limity

- Web je **pouze frontend** – nemá backend, databázi ani přihlášení.
- Kontaktní formulář a rezervace jsou **simulované**; data se nikam neodesílají.
- Festival, tvůrci i program jsou **fiktivní ukázková data** vytvořená pro účely semestrální práce.
- Přesná typografie závisí na dostupnosti Google Fonts; při offline režimu se použije systémový fallback.
- Projekt neobsahuje automatizovanou testovací sadu – testování bylo ruční a doplněné syntaxovou kontrolou.

---

## 📄 Licence a autor

- **Licence:** MIT – podrobnosti v souboru [LICENSE](LICENSE).
- **Autor:** [Doplnit: jméno a příjmení]
- **Kontakt:** [Doplnit: e-mail]
- **Škola:** [Doplnit: název školy], [Doplnit: fakulta]

---

*Vytvořeno v rámci studia na Provozně ekonomické fakultě ČZU v Praze.*