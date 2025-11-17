# Gold Rent Italia - AI Chatbot

Chatbot AI con OpenAI per il sito Gold Rent Italia, con funzionalità di FAQ e lead generation.

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Crea il file `.env` dalla copia `.env.example`:
```bash
cp .env.example .env
```

3. Configura le variabili d'ambiente nel file `.env`:
   - `OPENAI_API_KEY`: La tua API key di OpenAI
   - `PORT`: Porta del server (default: 3000)
   - `ALLOWED_ORIGIN`: URL del tuo sito WordPress

4. Avvia il server:
```bash
npm start
```

Per development con auto-reload:
```bash
npm run dev
```

## Integrazione WordPress

Vedi il file `WORDPRESS_INTEGRATION.md` per le istruzioni dettagliate.

## Struttura del progetto

```
webchatbot/
├── server/
│   ├── index.js          # Server Express principale
│   ├── config.js         # Configurazione chatbot
│   └── routes/
│       ├── chat.js       # Endpoint chat
│       └── leads.js      # Endpoint leads
├── public/
│   ├── chatbot.js        # Widget JavaScript
│   └── chatbot.css       # Stili del chatbot
├── data/
│   └── leads.json        # Database locale dei lead
└── package.json
```

## API Endpoints

- `POST /api/chat` - Invia messaggio al chatbot
- `POST /api/leads` - Salva lead
- `GET /api/leads` - Recupera tutti i lead (protetto)
