# Immagini Mancanti

Per completare il sito identico al sito originale, servono le seguenti immagini:

## 1. Hero Background Image

**File richiesto:** `public/hero-bg.jpg`

**Come ottenerlo:**

### Opzione A - Scarica dal sito originale (consigliato):
1. Vai su https://www.goldrentitalia.it
2. Tasto destro sulla hero section → "Ispeziona"
3. Nel pannello Styles cerca `background-image`
4. Copia l'URL dell'immagine
5. Apri l'URL in una nuova tab
6. Tasto destro → "Salva immagine con nome..."
7. Salvala come `hero-bg.jpg` in `goldrent-nextjs/public/`

### Opzione B - Usa screenshot dello screenshot:
1. Apri lo screenshot che hai fornito
2. Ritaglia solo la parte dell'auto
3. Salvala come `hero-bg.jpg` in `goldrent-nextjs/public/`

### Opzione C - Usa un'altra immagine:
1. Cerca un'immagine di un'auto elegante (preferibilmente Alfa Romeo Stelvio)
2. Risoluzione consigliata: 1920x1080px o superiore
3. Salvala come `hero-bg.jpg` in `goldrent-nextjs/public/`

---

## 2. Immagini Prodotti (98 immagini)

**Cartella richiesta:** `public/images/products/`

**Come ottenerle:**

### Via FTP (migliore qualità):
```bash
# Connettiti via FTP/SFTP al server WordPress
# Scarica la cartella: /wp-content/uploads/
# Copia in: goldrent-nextjs/public/images/uploads/
```

### Via Browser (manuale):
Per ogni prodotto, l'URL delle immagini è generalmente:
```
https://www.goldrentitalia.it/wp-content/uploads/YYYY/MM/nome-file.jpg
```

---

## 3. Logo (già presente)

✅ **Già fatto!** Il logo è stato ricreato come componente SVG basato sul PDF fornito.

---

## Dopo aver aggiunto l'immagine hero:

1. Metti il file `hero-bg.jpg` in `goldrent-nextjs/public/`
2. Apri `goldrent-nextjs/app/globals.css`
3. Trova la riga 102-104
4. Decommentare questa riga:
   ```css
   background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero-bg.jpg') center/cover no-repeat;
   ```
5. Commentare la riga del gradiente temporaneo

Il sito si aggiornerà automaticamente! 🚀
