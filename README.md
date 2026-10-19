# conversor-medidas-juanjosecortessanchez

Conversor de monedas entre USD, EUR y COP usando tasas fijas.

## Instalación

```bash
npm install conversor-medidas-juanjosecortessanchez
```

## Uso

```js
const convertidor = require("conversor-medidas-juanjosecortessanchez");

convertidor("USD", "COP", 10); // 31500
convertidor("EUR", "USD", 85); // 100
convertidor("COP", "EUR", 3150); // 0.85
```
