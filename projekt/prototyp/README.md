# Prototyp – Cvičení 3

Spustitelný prototyp webu pro Cvičení 3 se nachází v adresáři [`projekt/web/`](../web/):

- **Hlavní soubor webu:** [`projekt/web/index.html`](../web/index.html)
- **Styly:** [`projekt/web/style.css`](../web/style.css)
- **Aplikační logika:** [`projekt/web/app.js`](../web/app.js)
- **Datový podklad:** [`projekt/web/data.json`](../web/data.json)

## Jak prototyp spustit (bez instalace)

1. **Přímo v prohlížeči (offline / file protokol):**
   Dvojklikem otevřete soubor `projekt/web/index.html` v libovolném moderním prohlížeči (Chrome, Safari, Firefox, Edge). Díky zabudovanému offline fallbacku v JavaScriptu funguje veškeré vyhledávání, filtry i ukládání do rozvrhu okamžitě i bez webového serveru.

2. **Přes lokální server (volitelné):**
   V kořenovém adresáři nebo ve složce `projekt/web` spusťte:
   ```bash
   python3 -m http.server 3000
   ```
   a otevřete v prohlížeči `http://localhost:3000/projekt/web/` (nebo `http://localhost:3000/` pokud spouštíte přímo z `projekt/web`).
