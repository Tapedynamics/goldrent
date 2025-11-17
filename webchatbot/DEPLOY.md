# Guida Deploy - Gold Rent Chatbot

Istruzioni dettagliate per mettere online il chatbot.

## Opzione 1: Deploy su Render.com (GRATUITO - Consigliato per iniziare)

Render offre un piano gratuito per applicazioni Node.js.

### Requisiti
- Account Render.com (gratuito)
- Repository GitHub con il codice

### Step by step

1. **Prepara il repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TUO-USERNAME/goldrent-chatbot.git
   git push -u origin main
   ```

2. **Crea Web Service su Render**:
   - Vai su https://render.com
   - Click "New +" → "Web Service"
   - Connetti il tuo repository GitHub
   - Configura:
     - **Name**: goldrent-chatbot
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **Aggiungi Environment Variables**:
   - Nella dashboard del servizio, vai su "Environment"
   - Aggiungi:
     - `OPENAI_API_KEY`: la tua API key OpenAI
     - `ALLOWED_ORIGIN`: https://www.goldrentitalia.it
     - `ADMIN_KEY`: una password segreta random

4. **Deploy**:
   - Render farà il deploy automaticamente
   - Attendi qualche minuto
   - Ottieni l'URL: `https://goldrent-chatbot.onrender.com`

⚠️ **Nota**: Il piano gratuito si "addormenta" dopo 15 minuti di inattività. Il primo accesso dopo il "sonno" può richiedere 30 secondi.

## Opzione 2: Deploy su Railway.app (GRATUITO con limiti)

Railway offre $5 di credito gratuito al mese.

### Step by step

1. **Prepara repository GitHub** (come sopra)

2. **Deploy su Railway**:
   - Vai su https://railway.app
   - Click "Start a New Project"
   - Seleziona "Deploy from GitHub repo"
   - Seleziona il tuo repository

3. **Configurazione automatica**:
   Railway rileva automaticamente Node.js

4. **Aggiungi variabili**:
   - Click sul servizio → "Variables"
   - Aggiungi le stesse variabili di Render

5. **Deploy**:
   - Deploy automatico al push
   - URL: `https://goldrent-chatbot.up.railway.app`

## Opzione 3: Deploy su VPS (DigitalOcean, Linode, ecc.)

Per produzione seria con performance consistenti.

### Requisiti
- VPS con Ubuntu 22.04 (droplet da $6/mese su DigitalOcean)
- Dominio (opzionale ma consigliato)

### Step by step

1. **Connetti al VPS**:
   ```bash
   ssh root@TUO-IP
   ```

2. **Installa Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo apt-get install -y git
   ```

3. **Clona il repository**:
   ```bash
   cd /var/www
   git clone https://github.com/TUO-USERNAME/goldrent-chatbot.git
   cd goldrent-chatbot
   ```

4. **Installa dipendenze**:
   ```bash
   npm install
   ```

5. **Configura environment**:
   ```bash
   cp .env.example .env
   nano .env
   ```
   Inserisci le tue variabili e salva (Ctrl+X, Y, Enter)

6. **Installa PM2** (process manager):
   ```bash
   sudo npm install -g pm2
   pm2 start server/index.js --name goldrent-chatbot
   pm2 startup
   pm2 save
   ```

7. **Configura Nginx** (reverse proxy):
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/goldrent-chatbot
   ```

   Incolla:
   ```nginx
   server {
       listen 80;
       server_name chatbot.goldrentitalia.it;  # Cambia con il tuo dominio

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Attiva:
   ```bash
   sudo ln -s /etc/nginx/sites-available/goldrent-chatbot /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Installa SSL con Let's Encrypt**:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d chatbot.goldrentitalia.it
   ```

9. **Firewall**:
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw enable
   ```

## Opzione 4: Deploy su Vercel (Solo Files Statici)

⚠️ Vercel non supporta server Node.js persistenti. Dovresti convertire in serverless functions (complesso).

## Configurazione Post-Deploy

Dopo aver fatto il deploy:

1. **Testa l'API**:
   ```bash
   curl https://TUO-URL.com/health
   ```
   Dovresti vedere: `{"status":"OK",...}`

2. **Testa la chat**:
   ```bash
   curl -X POST https://TUO-URL.com/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message":"Ciao","conversationId":"test123"}'
   ```

3. **Aggiorna WordPress**:
   Nel codice di integrazione WordPress, sostituisci:
   ```javascript
   apiUrl: 'https://TUO-URL-DEPLOY.com'
   ```

## Gestione OpenAI API Key

### Ottenere l'API Key

1. Vai su https://platform.openai.com
2. Registrati/Login
3. Vai su "API Keys"
4. Click "Create new secret key"
5. Copia la chiave (inizia con `sk-...`)

### Costi OpenAI

**GPT-4 Turbo** (raccomandato per qualità):
- $0.01 per 1K input tokens
- $0.03 per 1K output tokens
- ~$0.03-0.05 per conversazione

**GPT-3.5 Turbo** (economico):
- $0.0005 per 1K input tokens
- $0.0015 per 1K output tokens
- ~$0.001-0.003 per conversazione

**Stima**: Con 1000 conversazioni/mese:
- GPT-4: ~$30-50/mese
- GPT-3.5: ~$1-3/mese

### Cambiare modello

In `server/config.js`:
```javascript
openai: {
  model: "gpt-3.5-turbo",  // Più economico
  // oppure
  model: "gpt-4-turbo-preview",  // Migliore qualità
}
```

### Limiti di utilizzo

Imposta limiti su OpenAI:
1. Dashboard OpenAI → "Usage limits"
2. Imposta un budget mensile

## Monitoraggio

### Log in tempo reale (VPS)
```bash
pm2 logs goldrent-chatbot
```

### Restart (VPS)
```bash
pm2 restart goldrent-chatbot
```

### Status (VPS)
```bash
pm2 status
```

### Visualizza lead
```bash
curl -H "X-Admin-Key: TUA_KEY" https://TUO-URL.com/api/leads
```

## Backup

### Backup lead (VPS)
```bash
# Backup manuale
scp root@TUO-IP:/var/www/goldrent-chatbot/data/leads.json ./leads-backup.json

# Backup automatico giornaliero (crontab)
0 2 * * * cp /var/www/goldrent-chatbot/data/leads.json /backups/leads-$(date +\%Y\%m\%d).json
```

## Aggiornamenti

```bash
# Su VPS
cd /var/www/goldrent-chatbot
git pull
npm install
pm2 restart goldrent-chatbot

# Su Render/Railway
# Push su GitHub, deploy automatico
git add .
git commit -m "Update"
git push
```

## Troubleshooting

### Server non risponde
```bash
# VPS
pm2 restart goldrent-chatbot
pm2 logs goldrent-chatbot

# Render/Railway
Controlla i log nella dashboard
```

### Quota OpenAI esaurita
- Controlla utilizzo su platform.openai.com
- Aggiungi credito o cambia a GPT-3.5

### Lead non si salvano
```bash
# Verifica permessi cartella (VPS)
chmod 755 data/
chmod 644 data/leads.json
```

## Checklist Pre-Lancio

- [ ] Server backend online e raggiungibile
- [ ] HTTPS configurato
- [ ] OpenAI API Key valida con credito
- [ ] CORS configurato correttamente
- [ ] Lead si salvano correttamente
- [ ] Testato su mobile e desktop
- [ ] Integrato in WordPress
- [ ] Monitoraggio/log attivi
- [ ] Backup configurato

## Risorse Utili

- OpenAI: https://platform.openai.com
- Render: https://render.com
- Railway: https://railway.app
- DigitalOcean: https://digitalocean.com
- PM2 Docs: https://pm2.keymetrics.io
