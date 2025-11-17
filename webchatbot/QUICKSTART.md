# 🚀 Quick Start - Gold Rent Chatbot

Guida rapida per iniziare in 5 minuti.

## Prerequisiti

- Node.js 16+ installato ([Download](https://nodejs.org))
- API Key di OpenAI ([Ottienila qui](https://platform.openai.com/api-keys))
- Account WordPress con accesso admin

## Setup Locale (Test)

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Configura l'ambiente

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Apri `.env` e inserisci:
```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxx
PORT=3000
ALLOWED_ORIGIN=*
ADMIN_KEY=password_segreta_123
```

### 3. Avvia il server

```bash
npm start
```

Dovresti vedere:
```
🚀 Gold Rent Chatbot server running on port 3000
📝 Environment: development
🔑 OpenAI API Key configured: Yes
```

### 4. Testa il chatbot

Apri nel browser: `file:///path/to/webchatbot/test.html`

Oppure testa l'API:
```bash
curl http://localhost:3000/health
```

### 5. Prova il chatbot

1. Apri `test.html` nel browser
2. Clicca sull'icona in basso a destra
3. Chatta con il bot
4. Prova a richiedere un preventivo per testare il lead form

## Deploy in Produzione

### Opzione A: Render.com (Gratuito e veloce)

1. **Push su GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TUO-USERNAME/goldrent-chatbot.git
   git push -u origin main
   ```

2. **Deploy su Render**:
   - Vai su https://render.com e registrati
   - Click "New +" → "Web Service"
   - Connetti repository GitHub
   - Settings:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Aggiungi variabili ambiente:
     - `OPENAI_API_KEY`
     - `ALLOWED_ORIGIN`: https://www.goldrentitalia.it
     - `ADMIN_KEY`
   - Click "Create Web Service"

3. **Ottieni URL**:
   Render ti darà un URL tipo: `https://goldrent-chatbot-xxxx.onrender.com`

### Opzione B: VPS (Più controllo)

Vedi il file `DEPLOY.md` per istruzioni dettagliate.

## Integrazione WordPress

### Metodo rapido (Plugin)

1. In WordPress, installa plugin **"Insert Headers and Footers"**

2. Vai in **Impostazioni → Insert Headers and Footers**

3. Nella sezione **Footer**, incolla:

```html
<!-- Gold Rent AI Chatbot -->
<link rel="stylesheet" href="https://TUO-URL.onrender.com/chatbot.css">
<script src="https://TUO-URL.onrender.com/chatbot.js"></script>
<script>
  GoldRentChatbot.init({
    apiUrl: 'https://TUO-URL.onrender.com'
  });
</script>
```

4. Sostituisci `TUO-URL.onrender.com` con l'URL del tuo deploy

5. Salva e visita www.goldrentitalia.it

**Il chatbot dovrebbe apparire in basso a destra! 🎉**

## Personalizzazione Base

### Cambia colori

Modifica `public/chatbot.css`:
```css
:root {
  --primary-color: #d4af37;  /* Oro - Cambia questo */
  --primary-dark: #b8962e;   /* Oro scuro */
}
```

### Modifica risposte del bot

Modifica `server/config.js` → sezione `systemPrompt`

### Cambia modello AI (per risparmiare)

In `server/config.js`:
```javascript
openai: {
  model: "gpt-3.5-turbo",  // Più economico (invece di gpt-4)
}
```

## Gestione Lead

### Visualizza lead raccolti

**Via file**:
```bash
cat data/leads.json
```

**Via API**:
```bash
curl -H "X-Admin-Key: TUA_PASSWORD" https://TUO-URL.com/api/leads
```

**Export CSV**:
```bash
curl -H "X-Admin-Key: TUA_PASSWORD" https://TUO-URL.com/api/leads/export > leads.csv
```

## Problemi Comuni

### "Cannot find module..."
```bash
npm install
```

### "OpenAI API key not configured"
Controlla che `.env` esista e contenga `OPENAI_API_KEY=sk-...`

### "CORS error"
In `.env`, imposta:
```
ALLOWED_ORIGIN=https://www.goldrentitalia.it
```

### Chatbot non appare su WordPress
1. Verifica che gli script siano caricati (Ispeziona → Network)
2. Controlla Console JavaScript per errori
3. Verifica che `apiUrl` sia corretto

### "Insufficient quota" (OpenAI)
- Vai su https://platform.openai.com
- Aggiungi metodo di pagamento
- Controlla utilizzo/credito

## Comandi Utili

```bash
# Avvia server locale
npm start

# Avvia con auto-reload
npm run dev

# Visualizza lead
cat data/leads.json

# Backup lead
cp data/leads.json data/leads.backup.json

# Test API
curl http://localhost:3000/health
```

## Struttura File

```
webchatbot/
├── server/              # Backend Node.js
│   ├── index.js        # Server principale
│   ├── config.js       # Configurazione bot
│   └── routes/         # API endpoints
├── public/             # Frontend
│   ├── chatbot.js      # Widget JavaScript
│   └── chatbot.css     # Stili
├── data/               # Database
│   └── leads.json      # Lead raccolti
├── .env                # Variabili ambiente (non committare!)
├── package.json        # Dipendenze
└── README.md          # Documentazione
```

## Costi Stimati

**Server** (Render.com free):
- ✅ Gratuito (con limitazioni)
- ⚠️ Si "addormenta" dopo 15 min inattività
- 💡 Piano paid da $7/mese per server sempre attivo

**OpenAI API**:
- GPT-3.5: ~$0.002 per conversazione (~$2/mese per 1000 chat)
- GPT-4: ~$0.03 per conversazione (~$30/mese per 1000 chat)

**Totale**: Da €0/mese (test) a €10-40/mese (produzione)

## Prossimi Passi

1. ✅ Setup locale e test
2. ✅ Deploy su Render/VPS
3. ✅ Integrazione WordPress
4. 📈 Monitora utilizzo e ottimizza
5. 🎨 Personalizza look & feel
6. 📧 Integra con email/CRM (futuro)

## Link Utili

- 📚 Guida completa: `README.md`
- 🚀 Deploy dettagliato: `DEPLOY.md`
- 🔧 Integrazione WordPress: `WORDPRESS_INTEGRATION.md`
- 🧪 Test locale: `test.html`

## Supporto

Per problemi:
1. Controlla i log del server
2. Verifica Console browser (F12)
3. Leggi i file di documentazione
4. Verifica API key OpenAI

---

**Fatto! Il tuo chatbot AI per Gold Rent è pronto! 🎉**
