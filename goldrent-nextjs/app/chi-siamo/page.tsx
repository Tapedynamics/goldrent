import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Siamo - Gold Rent Italia | Leader nel Noleggio Lungo Termine",
  description: "Gold Rent Italia è leader nel settore del noleggio veicoli a lungo e medio termine. Scopri la nostra mission, vision e i valori che ci guidano. Copertura nazionale con servizi trasparenti e personalizzati.",
  keywords: [
    "chi siamo gold rent",
    "azienda noleggio lungo termine",
    "storia gold rent italia",
    "valori aziendali",
    "noleggio auto nazionale"
  ],
  openGraph: {
    title: "Chi Siamo | Gold Rent Italia",
    description: "Leader nel noleggio a lungo termine con copertura nazionale.",
  },
  alternates: {
    canonical: "https://www.goldrentitalia.it/chi-siamo",
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Gold Rent Italia è <strong>il leader</strong> nel settore del
            Noleggio Veicoli a Lungo e Medio Termine, offrendo soluzioni
            innovative e personalizzate per privati e aziende.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent-cyan">
              Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La nostra mission è fornire{" "}
              <strong>soluzioni continue e innovative</strong> nel settore del
              noleggio a lungo termine, garantendo una{" "}
              <strong>collaborazione trasparente</strong> con i nostri clienti.
              Ci impegniamo quotidianamente per superare le aspettative,
              mettendo al centro la <strong>soddisfazione del cliente</strong> in
              ogni fase del percorso.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent-cyan">Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La nostra vision è raggiungere una{" "}
              <strong>copertura territoriale nazionale</strong>, garantendo lo
              stesso livello di eccellenza in ogni regione d'Italia. Vogliamo
              essere il punto di riferimento per chiunque cerchi un servizio di
              noleggio a lungo termine <strong>affidabile, trasparente</strong> e{" "}
              <strong>vantaggioso</strong>.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent-cyan">
              I Nostri Valori
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  🎯 Trasparenza
                </h3>
                <p className="text-gray-700">
                  Crediamo nella chiarezza totale. Ogni nostro cliente conosce
                  esattamente cosa include il canone mensile, senza costi
                  nascosti o sorprese.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  ⭐ Qualità
                </h3>
                <p className="text-gray-700">
                  Selezioniamo solo veicoli di alta qualità dalle migliori case
                  automobilistiche mondiali, garantendo comfort e sicurezza.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  🤝 Affidabilità
                </h3>
                <p className="text-gray-700">
                  Manteniamo sempre le nostre promesse. Assistenza H24,
                  manutenzione puntuale e supporto costante.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  💡 Innovazione
                </h3>
                <p className="text-gray-700">
                  Siamo sempre aggiornati sulle ultime tendenze del settore per
                  offrirti le migliori soluzioni di mobilità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Noleggio Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Perché Scegliere il Noleggio Lungo Termine?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Il <strong>noleggio a lungo termine</strong> rappresenta una
            soluzione innovativa che elimina tutti i pensieri legati al possesso
            di un'auto. A differenza dell'acquisto tradizionale, il noleggio ti
            libera da:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-accent-cyan mr-3 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Costi imprevisti</strong> di manutenzione e riparazione
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-cyan mr-3 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Deprezzamento del veicolo</strong> nel tempo
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-cyan mr-3 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Gestione burocratica</strong> di bollo, assicurazioni e
                revisioni
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-cyan mr-3 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Immobilizzazione di capitale</strong> nell'acquisto
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-cyan mr-3 text-xl">✓</span>
              <span className="text-gray-700">
                <strong>Preoccupazioni per emergenze</strong> grazie
                all'assistenza H24
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed">
            Con un <strong>canone mensile fisso</strong> hai tutto incluso e
            puoi programmare con certezza i tuoi costi di mobilità, sia che tu
            sia un privato, un professionista o un'azienda.
          </p>
        </div>
      </section>

      {/* I Nostri Servizi */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            I Nostri Prodotti e Servizi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Gold Rent Italia offre <strong>contratti di noleggio</strong> sia per{" "}
            <strong>privati</strong> che per <strong>aziende</strong>, con
            accesso a <strong>tutte le principali marche automobilistiche</strong>{" "}
            e versioni disponibili sul mercato globale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">90+</div>
              <div className="text-lg">Modelli Disponibili</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent-purple to-accent-magenta rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Assistenza Stradale</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent-green to-accent-teal rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Copertura Nazionale</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Partnership Strategiche
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Collaboriamo con le <strong>principali istituzioni finanziarie</strong>{" "}
            del settore automotive per garantirti le migliori condizioni di
            noleggio. Le nostre partnership ci permettono di offrirti soluzioni
            flessibili e vantaggiose, studiate su misura per ogni esigenza.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Qualità Garantita
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ci posizioniamo come <strong>leader competitivo</strong> nel mercato
            grazie alla qualità dei nostri prodotti esclusivi e all'eccellenza
            del servizio. Ogni veicolo viene accuratamente selezionato e
            preparato per garantire le massime prestazioni e sicurezza.
          </p>
        </div>
      </section>

      {/* Copertura Nazionale */}
      <section className="py-16 px-4 bg-accent-cyan bg-opacity-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Siamo Presenti su Tutto il Territorio Nazionale
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Grazie alla nostra <strong>rete capillare</strong>, offriamo lo
            stesso livello di servizio eccellente in ogni regione d'Italia. Che
            tu sia al Nord, al Centro o al Sud, Gold Rent Italia è sempre al tuo
            fianco con assistenza qualificata e supporto costante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prodotti" className="btn btn-accent text-lg">
              Scopri le Offerte
            </Link>
            <Link href="/contatti" className="btn btn-primary text-lg">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Vantaggi per Privati e Aziende */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            Soluzioni per Ogni Esigenza
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Privati */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent-cyan">
                👤 Per Privati
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Canone mensile fisso e trasparente
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Nessun pensiero di manutenzione
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Auto sempre nuova senza svalutazione
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Assicurazione completa inclusa
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Possibilità di zero anticipo
                </li>
              </ul>
            </div>

            {/* Aziende */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent-cyan">
                🏢 Per Aziende e Professionisti
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Vantaggi fiscali e deducibilità del canone
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Nessuna immobilizzazione di capitale
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Gestione fleet semplificata
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Costi certi e programmabili
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Veicoli commerciali disponibili
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Gold Rent Italia",
              "description": "Leader nel settore del noleggio veicoli a lungo e medio termine",
              "url": "https://www.goldrentitalia.it",
              "areaServed": "IT",
              "slogan": "Guida la tua nuova auto a noleggio a lungo termine"
            }
          })
        }}
      />
    </>
  );
}
