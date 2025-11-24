import Link from "next/link";
import type { Metadata } from "next";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "Home - Noleggio Lungo Termine Gold Rent Italia",
  description: "Noleggio a lungo termine in tutta Italia. La tua nuova auto ti aspetta senza pensieri con un canone fisso mensile. Assicurazione, manutenzione e assistenza stradale inclusi. Offerte da 319€/mese.",
  openGraph: {
    title: "Noleggio Auto Lungo Termine | Gold Rent Italia",
    description: "Guida senza pensieri. Noleggio a lungo termine con tutto incluso.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-video relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-32 px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-md">
            Noleggio Auto a Lungo Termine
          </h1>
          <p className="text-lg mb-8 max-w-md">Scopri la guida senza pensieri</p>
          <Link
            href="/prodotti"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold bg-accent-cyan text-white rounded-full shadow-2xl hover:bg-accent-teal hover:scale-105 transition-all duration-300 hover:shadow-accent-cyan/50 animate-pulse-slow group"
          >
            <span>Vai alle Offerte</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            IL NOLEGGIO INCLUDE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Coperture Assicurative</h3>
              <p className="feature-description">
                Assicurazione RCA, Kasko, Furto e Incendio incluse. Guida protetto in ogni situazione.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="feature-title">Manutenzione</h3>
              <p className="feature-description">
                Manutenzione ordinaria e straordinaria inclusa. Non preoccuparti di nulla, ci pensiamo noi.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Assistenza Stradale</h3>
              <p className="feature-description">
                Assistenza stradale H24 7/7 su tutto il territorio nazionale. Sempre al tuo fianco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            La soddisfazione dei nostri clienti è la nostra priorità. Leggi le recensioni autentiche di chi ha già scelto Gold Rent Italia.
          </p>
          <GoogleReviews maxReviews={10} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>

      {/* SEO Content Section - QUESTO MANCAVA AL SITO ORIGINALE */}
      <section className="content-section bg-white">
        <div className="max-w-6xl mx-auto">
          <h2>Noleggio Lungo Termine: La Soluzione Intelligente per la Tua Mobilità</h2>

          <p>
            Il <strong>noleggio a lungo termine</strong> rappresenta oggi la scelta più conveniente e sicura per chi desidera guidare un'auto nuova senza le preoccupazioni legate all'acquisto. Con Gold Rent Italia, accedi a un servizio completo che include assicurazione, manutenzione e assistenza stradale, il tutto con un <strong>canone fisso mensile</strong> trasparente e senza sorprese.
          </p>

          <h3>Perché Scegliere il Noleggio Lungo Termine?</h3>

          <p>
            A differenza dell'acquisto tradizionale o del leasing, il noleggio a lungo termine ti libera da tutti gli oneri burocratici e gestionali. Non dovrai più preoccuparti di:
          </p>

          <ul>
            <li>Bollo auto e tasse di proprietà</li>
            <li>Assicurazioni RCA, Kasko, Furto e Incendio</li>
            <li>Manutenzione ordinaria e straordinaria</li>
            <li>Cambio pneumatici e revisioni</li>
            <li>Assistenza stradale in caso di emergenza</li>
            <li>Deprezzamento del veicolo nel tempo</li>
          </ul>

          <h3>Noleggio Lungo Termine Senza Anticipo</h3>

          <p>
            Con le nostre <strong>offerte a zero anticipo</strong>, puoi iniziare subito a guidare la tua nuova auto senza immobilizzare capitale. Ideale sia per privati che per aziende, il noleggio senza anticipo ti permette di gestire al meglio la tua liquidità mantenendo una mobilità di qualità.
          </p>

          <h3>Offerte per Privati e Partite IVA</h3>

          <p>
            Gold Rent Italia propone soluzioni personalizzate per ogni esigenza. Se sei un <strong>privato</strong>, benefici di un canone mensile fisso e trasparente, senza pensieri di gestione. Se sei un <strong>professionista con Partita IVA</strong> o un'<strong>azienda</strong>, il noleggio lungo termine offre importanti vantaggi fiscali: il canone è interamente deducibile e l'IVA è detraibile, permettendoti di ottimizzare i costi della tua attività.
          </p>

          <h3>Ampia Scelta di Veicoli</h3>

          <p>
            Nel nostro catalogo trovi oltre <strong>90 modelli</strong> di tutte le principali case automobilistiche: dalle city car compatte alle berline di rappresentanza, dai SUV spaziosi ai veicoli commerciali per la tua attività. Ogni veicolo può essere personalizzato con gli optional che preferisci.
          </p>

          <h3>Servizio Pronta Consegna</h3>

          <p>
            Hai bisogno di un'auto immediatamente? Con il servizio <strong>Pronta Consegna</strong> puoi ritirare il tuo veicolo in pochi giorni, senza i lunghi tempi di attesa delle ordinazioni tradizionali. Scopri i modelli disponibili subito e parti senza aspettare.
          </p>

          <h3>Noleggio No CRIF</h3>

          <p>
            Gold Rent Italia offre soluzioni anche per chi ha avuto difficoltà finanziarie nel passato. Con il nostro <strong>programma No CRIF</strong>, puoi accedere al noleggio a lungo termine anche senza verifica della centrale rischi, valutando la tua situazione attuale e non solo la storia creditizia.
          </p>

          <h3>Come Funziona il Noleggio Lungo Termine</h3>

          <ol>
            <li><strong>Scegli il veicolo</strong>: Sfoglia il nostro catalogo e seleziona l'auto che preferisci</li>
            <li><strong>Configura l'offerta</strong>: Scegli la durata (24, 36, 48 o 60 mesi) e i chilometri annui</li>
            <li><strong>Firma il contratto</strong>: Tutto gestibile online o presso i nostri uffici</li>
            <li><strong>Ritira l'auto</strong>: Ricevi il tuo veicolo e inizia a guidare senza pensieri</li>
          </ol>

          <h3>Copertura Nazionale</h3>

          <p>
            Operiamo su <strong>tutto il territorio italiano</strong>, garantendo lo stesso livello di servizio e assistenza in ogni regione. La nostra rete di assistenza H24 è sempre disponibile per supportarti in caso di necessità, ovunque tu sia.
          </p>

          <h3>Vantaggi Fiscali per Aziende e Professionisti</h3>

          <p>
            Per le imprese, il noleggio lungo termine offre significativi <strong>vantaggi fiscali</strong>:
          </p>

          <ul>
            <li>Deduzione fiscale del 100% del canone per veicoli strumentali</li>
            <li>Deduzione del 70% per veicoli aziendali uso promiscuo</li>
            <li>Detrazione IVA secondo le normative vigenti</li>
            <li>Nessuna immobilizzazione di capitale</li>
            <li>Bilancio più leggero senza beni strumentali</li>
            <li>Costi certi e programmabili</li>
          </ul>

          <h3>Trasparenza Totale</h3>

          <p>
            Il nostro obiettivo è la <strong>massima trasparenza</strong>. Il canone mensile include tutti i servizi ed è fisso per tutta la durata del contratto. Non ci sono costi nascosti o sorprese: tutto è chiaro fin dall'inizio. Puoi pianificare con certezza i tuoi costi di mobilità.
          </p>

          <div className="bg-gradient-to-br from-accent-cyan to-accent-teal p-8 rounded-2xl mt-8 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">Richiedi un Preventivo Gratuito</h3>
            <p className="mb-6 text-white text-lg">
              Contattaci per ricevere un'offerta personalizzata in base alle tue esigenze. Il nostro team di esperti è a tua disposizione per consigliarti la soluzione migliore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prodotti"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold bg-white text-accent-cyan rounded-full shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Scopri le Offerte
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold bg-primary-dark text-white rounded-full shadow-xl hover:bg-primary-gray hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contattaci Ora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SCHEMA MANCANTE NEL SITO ORIGINALE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Domande Frequenti</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cosa include il canone mensile?</h3>
              <p className="text-gray-700">
                Il canone include assicurazione RCA, Kasko, Furto/Incendio, manutenzione ordinaria e straordinaria, assistenza stradale H24, cambio pneumatici, bollo auto e tasse di proprietà.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Posso noleggiare senza anticipo?</h3>
              <p className="text-gray-700">
                Sì, offriamo soluzioni a zero anticipo per permetterti di iniziare subito senza immobilizzare capitale. È la scelta più flessibile e conveniente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Qual è la durata minima del contratto?</h3>
              <p className="text-gray-700">
                La durata standard va da 24 a 60 mesi. Puoi scegliere la durata più adatta alle tue esigenze, con la possibilità di estendere o modificare il contratto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">È conveniente anche per i privati?</h3>
              <p className="text-gray-700">
                Assolutamente sì. Il noleggio lungo termine elimina tutti i costi imprevisti e ti permette di guidare auto nuove con un canone fisso mensile, senza preoccupazioni di manutenzione o svalutazione.
              </p>
            </div>
          </div>
        </div>

        {/* Schema.org FAQPage - MANCANTE NEL SITO ORIGINALE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Cosa include il canone mensile?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Il canone include assicurazione RCA, Kasko, Furto/Incendio, manutenzione ordinaria e straordinaria, assistenza stradale H24, cambio pneumatici, bollo auto e tasse di proprietà."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Posso noleggiare senza anticipo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sì, offriamo soluzioni a zero anticipo per permetterti di iniziare subito senza immobilizzare capitale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qual è la durata minima del contratto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La durata standard va da 24 a 60 mesi. Puoi scegliere la durata più adatta alle tue esigenze."
                  }
                },
                {
                  "@type": "Question",
                  "name": "È conveniente anche per i privati?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Assolutamente sì. Il noleggio lungo termine elimina tutti i costi imprevisti e ti permette di guidare auto nuove con un canone fisso mensile."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </>
  );
}
