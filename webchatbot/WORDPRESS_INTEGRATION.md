# Integrazione WordPress - Gold Rent Chatbot

Guida completa per integrare il chatbot AI nel tuo sito WordPress (www.goldrentitalia.it).

## Metodo 1: Integrazione Diretta (Consigliato)

### Step 1: Deploy del Backend

Prima di tutto, devi mettere online il backend Node.js. Opzioni:

**Opzione A: Hosting dedicato (VPS/Cloud)**
- DigitalOcean, AWS, Google Cloud, Azure
- Costo: da €5/mese
- Maggior controllo e performance

**Opzione B: Servizi serverless**
- Vercel, Railway, Render.com
- Spesso hanno piano gratuito limitato
- Setup più semplice

**Opzione C: Stesso server del sito**
- Se hai accesso SSH al server WordPress
- Richiede Node.js installato

### Step 2: Configurazione

1. Carica i file del progetto sul server
2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Crea il file `.env`:
   ```bash
   cp .env.example .env
   nano .env
   ```

4. Configura le variabili:
   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxx
   PORT=3000
   ALLOWED_ORIGIN=https://www.goldrentitalia.it
   ADMIN_KEY=una_chiave_segreta_random
   ```

5. Avvia il server:
   ```bash
   npm start
   ```

6. (Opzionale) Configura PM2 per auto-restart:
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name goldrent-chatbot
   pm2 startup
   pm2 save
   ```

### Step 3: Integrazione in WordPress

Ci sono 3 metodi per integrare il chatbot in WordPress:

#### Metodo 3A: Plugin "Insert Headers and Footers" (PIÙ FACILE)

1. Installa il plugin "Insert Headers and Footers":
   - Dashboard WordPress → Plugin → Aggiungi nuovo
   - Cerca "Insert Headers and Footers"
   - Installa e attiva

2. Vai in **Impostazioni → Insert Headers and Footers**

3. Nella sezione **Footer**, incolla questo codice:
   ```html
   <!-- Gold Rent AI Chatbot -->
   <link rel="stylesheet" href="https://TUO-SERVER.com/chatbot.css">
   <script src="https://TUO-SERVER.com/chatbot.js"></script>
   <script>
     GoldRentChatbot.init({
       apiUrl: 'https://TUO-SERVER.com'
     });
   </script>
   ```

4. Sostituisci `TUO-SERVER.com` con l'URL del tuo server backend

5. Salva le modifiche

#### Metodo 3B: functions.php del tema

1. Vai in **Aspetto → Editor temi**
2. Seleziona il file `functions.php`
3. Aggiungi questo codice alla fine:

```php
<?php
// Gold Rent AI Chatbot
function goldrent_chatbot_scripts() {
    wp_enqueue_style('goldrent-chatbot', 'https://TUO-SERVER.com/chatbot.css');
    wp_enqueue_script('goldrent-chatbot', 'https://TUO-SERVER.com/chatbot.js', array(), '1.0', true);
    wp_add_inline_script('goldrent-chatbot', '
        GoldRentChatbot.init({
            apiUrl: "https://TUO-SERVER.com"
        });
    ');
}
add_action('wp_enqueue_scripts', 'goldrent_chatbot_scripts');
?>
```

4. Sostituisci `TUO-SERVER.com` con l'URL del tuo server
5. Salva le modifiche

#### Metodo 3C: Child Theme (PIÙ SICURO)

Se usi un child theme (consigliato per preservare le modifiche):

1. Crea/modifica `footer.php` nel child theme
2. Aggiungi prima di `</body>`:

```html
<!-- Gold Rent AI Chatbot -->
<link rel="stylesheet" href="https://TUO-SERVER.com/chatbot.css">
<script src="https://TUO-SERVER.com/chatbot.js"></script>
<script>
  GoldRentChatbot.init({
    apiUrl: 'https://TUO-SERVER.com'
  });
</script>
```

### Step 4: Test

1. Visita il tuo sito: www.goldrentitalia.it
2. Dovresti vedere l'icona del chatbot in basso a destra
3. Clicca per aprire e testa la conversazione
4. Prova a richiedere un preventivo per testare la raccolta lead

## Metodo 2: Tramite Elementor/Page Builder

Se usi Elementor o altri page builder:

1. Aggiungi un widget "HTML Personalizzato"
2. Incolla il codice di integrazione
3. Posiziona in footer o come elemento globale

## Configurazione Avanzata

### HTTPS (Obbligatorio per produzione)

Il chatbot richiede HTTPS in produzione. Opzioni:

1. **Let's Encrypt gratuito**:
   ```bash
   sudo apt install certbot
   sudo certbot --nginx
   ```

2. **Cloudflare**: Proxy gratuito con SSL

### CORS

Se hai problemi CORS, verifica:

1. `ALLOWED_ORIGIN` in `.env` corrisponde al dominio WordPress
2. Il server backend è raggiungibile dal browser

### Personalizzazione

Puoi personalizzare i colori modificando `public/chatbot.css`:

```css
:root {
  --primary-color: #TUO-COLORE;  /* Cambia questo */
  --primary-dark: #TUO-COLORE-SCURO;
}
```

### Monitoraggio Lead

Per visualizzare i lead raccolti:

**Via API**:
```bash
curl -H "X-Admin-Key: TUA_ADMIN_KEY" https://TUO-SERVER.com/api/leads
```

**Export CSV**:
```bash
curl -H "X-Admin-Key: TUA_ADMIN_KEY" https://TUO-SERVER.com/api/leads/export > leads.csv
```

**File JSON diretto**:
I lead sono salvati in `data/leads.json`

## Troubleshooting

### Il chatbot non appare
- Verifica che gli script siano caricati (Ispeziona → Network)
- Controlla la console JavaScript per errori
- Verifica che il server backend sia online

### Errore CORS
- Verifica `ALLOWED_ORIGIN` in `.env`
- Aggiungi il dominio alle origini consentite

### Errore OpenAI API
- Verifica che `OPENAI_API_KEY` sia corretta
- Controlla il credito OpenAI
- Verifica i log del server

### Il form lead non funziona
- Verifica che la cartella `data/` sia scrivibile
- Controlla i log del server per errori

## Manutenzione

### Backup Lead
```bash
cp data/leads.json data/leads.backup.json
```

### Aggiornamenti
```bash
git pull
npm install
pm2 restart goldrent-chatbot
```

### Log
```bash
pm2 logs goldrent-chatbot
```

## Costi Stimati

- **Server backend**: €5-20/mese (VPS basic)
- **OpenAI API**:
  - GPT-4: ~$0.03 per conversazione
  - GPT-3.5: ~$0.002 per conversazione
- **Esempio**: 1000 conversazioni/mese con GPT-3.5 = ~$2

## Supporto

Per problemi o domande:
1. Controlla i log del server
2. Verifica la console JavaScript del browser
3. Testa l'API direttamente con curl

## Sicurezza

- Mantieni `OPENAI_API_KEY` e `ADMIN_KEY` segreti
- Non condividere il file `.env`
- Usa HTTPS in produzione
- Aggiorna regolarmente le dipendenze
