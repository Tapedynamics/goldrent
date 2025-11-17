# 🚀 Guida al Deploy - Gold Rent Italia

## Architettura del Progetto

Il progetto è composto da 2 parti:
1. **Frontend Next.js** (`goldrent-nextjs/`) - Sito web principale
2. **Backend Express** (`webchatbot/`) - API per il chatbot AI

---

## 📦 Deploy del Frontend (Next.js)

### Opzione 1: Vercel (Consigliato)

**Vantaggi:** Ottimizzato per Next.js, deploy automatico, gratuito per progetti personali

#### Via Web Dashboard:
1. Vai su [vercel.com](https://vercel.com) e registrati
2. Clicca "Import Project"
3. Connetti il tuo repository Git (GitHub/GitLab)
4. Seleziona la cartella `goldrent-nextjs`
5. Configura le variabili d'ambiente:
   - `NEXT_PUBLIC_CHATBOT_API_URL` = URL del tuo backend (es: `https://goldrent-chatbot.railway.app`)
6. Deploy!

#### Via CLI:
```bash
npm i -g vercel
cd goldrent-nextjs
vercel login
vercel
```

### Opzione 2: Netlify

```bash
npm i -g netlify-cli
cd goldrent-nextjs
npm run build
netlify deploy --prod
```

### Opzione 3: DigitalOcean App Platform

1. Crea account su [DigitalOcean](https://www.digitalocean.com)
2. Vai su "Apps" → "Create App"
3. Connetti repository
4. Seleziona `goldrent-nextjs` folder
5. Framework: Next.js
6. Aggiungi variabili d'ambiente
7. Deploy ($5/mese)

---

## 🤖 Deploy del Backend Chatbot (Express)

### Opzione 1: Railway (Consigliato)

**Vantaggi:** Semplice, $5/mese dopo credito gratuito, ottimo per Node.js

```bash
npm i -g @railway/cli
cd webchatbot
railway login
railway init
railway up
```

Poi nella dashboard Railway:
1. Vai su "Variables"
2. Aggiungi:
   - `OPENAI_API_KEY` = La tua chiave OpenAI
   - `PORT` = 3005
   - `ALLOWED_ORIGINS` = https://your-domain.vercel.app,https://www.goldrentitalia.it

### Opzione 2: Render

1. Vai su [render.com](https://render.com)
2. "New" → "Web Service"
3. Connetti repository
4. Configurazione:
   - **Root Directory:** `webchatbot`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Aggiungi Environment Variables:
   - `OPENAI_API_KEY`
   - `PORT` = 3005
   - `ALLOWED_ORIGINS`

### Opzione 3: Fly.io

```bash
# Installa Fly CLI
curl -L https://fly.io/install.sh | sh

cd webchatbot
fly launch
fly secrets set OPENAI_API_KEY=your_key_here
fly deploy
```

---

## 🌐 Domini Custom

### Connettere www.goldrentitalia.it

#### Su Vercel:
1. Dashboard Vercel → Settings → Domains
2. Aggiungi `www.goldrentitalia.it` e `goldrentitalia.it`
3. Configura i DNS dal tuo provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21
   ```

#### Su Cloudflare (Proxy + CDN):
1. Aggiungi il dominio a Cloudflare
2. Configura DNS:
   ```
   CNAME  www  your-app.vercel.app  (Proxied)
   CNAME  @    your-app.vercel.app  (Proxied)
   ```

---

## 📋 Checklist Pre-Deploy

### Frontend (Next.js):
- [ ] Verifica che tutte le immagini siano in `public/images/`
- [ ] Controlla `next.config.mjs` per configurazioni production
- [ ] Imposta `NEXT_PUBLIC_CHATBOT_API_URL` in produzione
- [ ] Test build locale: `npm run build`
- [ ] Rimuovi eventuali console.log non necessari

### Backend (Express):
- [ ] File `.env` configurato con `OPENAI_API_KEY`
- [ ] CORS configurato con domini di produzione
- [ ] Test server locale: `npm start`
- [ ] Verifica che `/api/chat` funzioni correttamente

---

## 🔐 Variabili d'Ambiente

### Frontend (.env.production):
```env
NEXT_PUBLIC_CHATBOT_API_URL=https://goldrent-chatbot.railway.app
```

### Backend (.env):
```env
OPENAI_API_KEY=sk-...
PORT=3005
ALLOWED_ORIGINS=https://www.goldrentitalia.it,https://goldrentitalia.it
```

---

## 💰 Costi Stimati

### Setup Minimo (Raccomandato):
- **Vercel** (Frontend): **GRATUITO** (o $20/mese per Pro)
- **Railway** (Backend): **$5/mese** + uso
- **OpenAI API**: **~$10-30/mese** (dipende dall'uso del chatbot)
- **Dominio**: **~$10-15/anno**

**TOTALE: ~$15-35/mese + dominio**

### Setup Economico:
- **Netlify** (Frontend): Gratuito
- **Render** (Backend): Gratuito per 750h/mese
- **OpenAI API**: ~$10-30/mese

**TOTALE: ~$10-30/mese**

### Setup Enterprise:
- **DigitalOcean App Platform**: $12/mese (frontend + backend)
- **OpenAI API**: ~$50-100/mese
- **CDN Cloudflare Pro**: $20/mese

**TOTALE: ~$82-132/mese**

---

## 🧪 Testing Post-Deploy

1. Verifica homepage: https://www.goldrentitalia.it
2. Test prodotti: https://www.goldrentitalia.it/prodotti
3. Test chatbot: Apri il widget e invia un messaggio
4. Test convenzione Leonardo: https://www.goldrentitalia.it/convenzione-leonardo
5. Verifica immagini prodotti
6. Test mobile responsive
7. PageSpeed Insights: https://pagespeed.web.dev/

---

## 🆘 Troubleshooting

### Errore: Chatbot non risponde
- Verifica `NEXT_PUBLIC_CHATBOT_API_URL` sia corretto
- Controlla CORS nel backend
- Verifica che il backend sia online

### Errore: Immagini non si caricano
- Controlla che le immagini siano in `public/images/products/`
- Verifica percorsi in `imageMapper.ts`

### Errore: Build fallisce
```bash
# Pulisci cache e riprova
rm -rf .next
npm run build
```

---

## 📞 Supporto

Per problemi di deploy:
- Vercel: https://vercel.com/support
- Railway: https://railway.app/help
- Next.js: https://nextjs.org/docs

---

**Deploy creato per Gold Rent Italia** 🚗✨
