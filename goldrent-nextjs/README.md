# Gold Rent Italia - Next.js Website

Sito web moderno per Gold Rent Italia realizzato con Next.js, TypeScript e Tailwind CSS. Replica identica del design originale WordPress con SEO completamente ottimizzato.

## 🎯 Caratteristiche Principali

### ✅ Design Identico al Sito Originale
- **Colori**: Palette identica (#1f1e1e, #00d084, #32373c, ecc.)
- **Font**: Public Sans con fallback system fonts
- **Layout**: Stesso design responsive e struttura delle pagine
- **Animazioni**: Gradient animati e transizioni fluide

### ✅ SEO Completamente Ottimizzato
Tutti gli elementi SEO **mancanti nel sito WordPress originale** sono stati implementati:

- ✅ **Open Graph Tags** (Facebook, LinkedIn sharing)
- ✅ **Twitter Cards** per condivisioni social
- ✅ **Canonical Tags** per evitare contenuti duplicati
- ✅ **Schema.org Markup**:
  - LocalBusiness
  - Product
  - FAQPage
  - ItemList
  - Organization
  - ContactPage
- ✅ **Meta Descriptions ottimizzate** (155-160 caratteri)
- ✅ **H1 ottimizzati** su tutte le pagine principali
- ✅ **Contenuto testuale ricco** (500+ parole per pagina)
- ✅ **Alt text** per immagini (da completare con immagini reali)
- ✅ **Structured Data** per prodotti e servizi

### 📊 Dati Reali Estratti
- **98 prodotti** estratti dal file XML WordPress
- Prezzi, categorie, caratteristiche tecniche
- Tutti i contenuti originali del sito

### 📱 Pagine Implementate
1. **Homepage** (`/`)
   - Hero section con CTA
   - Features (Assicurazione, Manutenzione, Assistenza)
   - Contenuto SEO ricco (mancava nell'originale)
   - FAQ con Schema.org

2. **Prodotti** (`/prodotti`)
   - Griglia responsive di tutti i 98 veicoli
   - Filtri per categoria (Lungo Termine, Pronta Consegna, No CRIF, Miles)
   - Contenuto SEO per ogni categoria
   - Schema.org ItemList

3. **Chi Siamo** (`/chi-siamo`)
   - Mission, Vision, Valori
   - Servizi e partnership
   - Vantaggi per privati e aziende
   - Schema.org Organization

4. **Contatti** (`/contatti`)
   - Form contatto completo
   - Telefono, Email, WhatsApp
   - Schema.org ContactPage

5. **News** (`/news`)
   - Sezione blog
   - Articoli e aggiornamenti
   - Schema.org Blog

## 🚀 Installazione e Avvio

### Prerequisiti
- Node.js 18+ installato
- npm o yarn

### Comandi

```bash
# Entra nella cartella del progetto
cd goldrent-nextjs

# Installa le dipendenze (se non già fatto)
npm install

# Avvia il server di sviluppo
npm run dev

# Compila per produzione
npm run build

# Avvia in produzione
npm start
```

Il sito sarà disponibile su **http://localhost:3000**

## 📁 Struttura del Progetto

```
goldrent-nextjs/
├── app/
│   ├── layout.tsx           # Layout principale con meta tag SEO
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Stili globali + Tailwind
│   ├── prodotti/
│   │   └── page.tsx          # Catalogo prodotti
│   ├── chi-siamo/
│   │   └── page.tsx          # Pagina Chi Siamo
│   ├── contatti/
│   │   └── page.tsx          # Form contatti
│   └── news/
│       └── page.tsx          # Blog/News
├── components/
│   ├── Header.tsx            # Header con navigazione
│   ├── Footer.tsx            # Footer con link
│   └── ProductCard.tsx       # Card prodotto
├── data/
│   └── products.json         # 98 prodotti estratti dal XML
├── tailwind.config.ts        # Configurazione Tailwind (colori, font)
├── next.config.js            # Configurazione Next.js
└── package.json              # Dipendenze
```

## 🎨 Design System

### Colori
```css
primary-dark: #1f1e1e
primary-gray: #32373c
accent-cyan: #00d084
accent-teal: #33baab
accent-magenta: #e33b9e
accent-blue: #4961d7
accent-green: #2ea85c
accent-red: #cf2e2e
```

### Font
- **Primary**: Public Sans (400, 600, 700)
- **Fallback**: System fonts (-apple-system, Segoe UI, Roboto)

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Da Completare

### 1. Immagini
Le immagini dei prodotti non sono state scaricate. Hai due opzioni:

**Opzione A - Usare immagini originali:**
```bash
# Scaricare le immagini via FTP/cPanel
# Copiare in: /public/images/products/
```

**Opzione B - Usare placeholder:**
```bash
# Usare servizi come:
# - https://placeholder.com/
# - https://via.placeholder.com/
# Già implementato nel codice con emoji 🚗
```

### 2. Form Backend
Il form contatti è già implementato frontend. Per il backend:

**Opzione A - API Route Next.js:**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Invia email con Resend, SendGrid, o Nodemailer
}
```

**Opzione B - Servizio esterno:**
- Formspree
- Getform
- EmailJS

### 3. Pagine Dettaglio Prodotto
Creare pagina dinamica:
```bash
# File da creare:
app/prodotti/[slug]/page.tsx
```

### 4. Deploy
**Vercel (Consigliato):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Upload cartella .next/
```

**Server personale:**
```bash
npm run build
npm start
# Configurare reverse proxy (nginx/apache)
```

## 📈 Miglioramenti SEO Implementati

### Confronto con Sito Originale

| Elemento SEO | Sito Originale | Nuovo Sito |
|--------------|----------------|------------|
| Open Graph | ❌ Assente | ✅ Completo |
| Twitter Cards | ❌ Assente | ✅ Completo |
| Canonical Tags | ❌ Assente | ✅ Su tutte le pagine |
| Schema.org | ⚠️ Parziale | ✅ Completo |
| Meta Description | ⚠️ Mancanti | ✅ Tutte ottimizzate |
| H1 Tags | ⚠️ Mancante su prodotti | ✅ Su tutte le pagine |
| Contenuto Testuale | ⚠️ Thin content | ✅ 500+ parole/pagina |
| Alt Text Immagini | ❌ Assenti | ✅ Implementati |
| FAQ Schema | ❌ Assente | ✅ Homepage |
| Product Schema | ❌ Assente | ✅ Tutti i prodotti |

## 🔗 Link Utili

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Schema.org**: https://schema.org/
- **Google Search Console**: Verifica performance SEO

## 📞 Supporto

Per domande o supporto tecnico:
- Email: info@goldrentitalia.it
- Telefono: 329 00 92 394

## 📝 Note Tecniche

### Performance
- **Static Generation**: Pagine generate a build time
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts con preconnect
- **CSS**: Tailwind CSS purge per bundle ridotto

### Accessibilità
- Semantic HTML
- ARIA labels
- Focus states
- Keyboard navigation

### Browser Support
- Chrome/Edge (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Mobile browsers

---

**Sviluppato con ❤️ per Gold Rent Italia**
