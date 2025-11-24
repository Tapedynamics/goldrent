import Link from "next/link";
import type { Metadata } from "next";
import FlyerGallery from "@/components/FlyerGallery";
import PinProtection from "@/components/PinProtection";

export const metadata: Metadata = {
  title: "Convenzione Leonardo - Offerte Esclusive | Gold Rent Italia",
  description: "Scopri le offerte esclusive della Convenzione Leonardo: noleggio a lungo termine con condizioni vantaggiose e prezzi speciali per dipendenti e partner convenzionati.",
  openGraph: {
    title: "Convenzione Leonardo - Offerte Esclusive | Gold Rent Italia",
    description: "Offerte speciali riservate ai convenzionati Leonardo. Prezzi vantaggiosi sul noleggio a lungo termine.",
  },
  alternates: {
    canonical: "https://www.goldrentitalia.it/convenzione-leonardo",
  },
};

// Volantini della Convenzione Leonardo
const convenzioneFlyersData = [
  {
    id: '1',
    title: 'Fiat 500X Diesel',
    imagePath: '/images/convenzione/500X.DIESEL.webp',
    description: 'Offerta speciale Convenzione Leonardo',
  },
  {
    id: '2',
    title: 'Jeep Avenger',
    imagePath: '/images/convenzione/AVENGER.webp',
    description: 'Sconto 15% sul canone mensile',
  },
  {
    id: '3',
    title: 'Citroën C5 Aircross',
    imagePath: '/images/convenzione/c5aircross.jpeg',
    description: 'Offerta esclusiva convenzionati',
  },
  {
    id: '4',
    title: 'Renault Clio',
    imagePath: '/images/convenzione/clio (1).webp',
    description: 'Zero anticipo - Convenzione Leonardo',
  },
  {
    id: '5',
    title: 'Fiat 500X Convenzione',
    imagePath: '/images/convenzione/CONVENZIONE.500X.webp',
    description: 'Prezzo riservato ai convenzionati',
  },
  {
    id: '6',
    title: 'Opel Crossland Convenzione',
    imagePath: '/images/convenzione/CROSSLAND.CONVENZIONE.webp',
    description: 'Offerta esclusiva -15%',
  },
  {
    id: '7',
    title: 'Ford Focus SW',
    imagePath: '/images/convenzione/ford.focus_.sw_.jpeg',
    description: 'Station Wagon con vantaggi Convenzione',
  },
  {
    id: '8',
    title: 'Maserati Grecale',
    imagePath: '/images/convenzione/grecale.webp',
    description: 'Premium con sconto Leonardo',
  },
  {
    id: '9',
    title: 'Kia XCeed',
    imagePath: '/images/convenzione/KIA.webp',
    description: 'Crossover in offerta speciale',
  },
  {
    id: '10',
    title: 'Convenzione Leonardo',
    imagePath: '/images/convenzione/LEONARDO.webp',
    description: 'Tutte le offerte dedicate',
  },
  {
    id: '11',
    title: 'Nissan Juke',
    imagePath: '/images/convenzione/nissan.juke_.webp',
    description: 'Compatto con stile - Sconto 15%',
  },
  {
    id: '12',
    title: 'Peugeot 2008',
    imagePath: '/images/convenzione/PEUGEOT2008.webp',
    description: 'SUV urbano in promozione',
  },
  {
    id: '13',
    title: 'Renault Austral',
    imagePath: '/images/convenzione/RENAULT.AUSTRAL.webp',
    description: 'Nuovo modello con vantaggi esclusivi',
  },
  {
    id: '14',
    title: 'Fiat Scudo Van',
    imagePath: '/images/convenzione/SCUDO.VAN_.webp',
    description: 'Veicolo commerciale Convenzione',
  },
  {
    id: '15',
    title: 'Fiat Scudo',
    imagePath: '/images/convenzione/scudo1.webp',
    description: 'Van professionale in offerta',
  },
  {
    id: '16',
    title: 'Škoda Kamiq',
    imagePath: '/images/convenzione/SKODA.KAMIQ_.webp',
    description: 'SUV compatto con sconto',
  },
  {
    id: '17',
    title: 'Škoda Octavia Wagon',
    imagePath: '/images/convenzione/skoda.octavia.wagon_.webp',
    description: 'Familiare spaziosa - Offerta Leonardo',
  },
  {
    id: '18',
    title: 'Tesla Model 3',
    imagePath: '/images/convenzione/tesla.model_.3.webp',
    description: 'Elettrica premium in convenzione',
  },
  {
    id: '19',
    title: 'Toyota Aygo X',
    imagePath: '/images/convenzione/toyota.webp',
    description: 'City car con vantaggi esclusivi',
  },
  {
    id: '20',
    title: 'Hyundai Tucson',
    imagePath: '/images/convenzione/TUCSON.webp',
    description: 'SUV familiare - Sconto 15%',
  },
  {
    id: '21',
    title: 'Auto Usate',
    imagePath: '/images/convenzione/usate.webp',
    description: 'Selezione usato garantito Convenzione',
  },
  {
    id: '22',
    title: 'BMW X3',
    imagePath: '/images/convenzione/X3.jpeg',
    description: 'Premium SUV in offerta',
  },
  {
    id: '23',
    title: 'BMW X3',
    imagePath: '/images/convenzione/X3.webp',
    description: 'SUV di lusso con vantaggi',
  },
  {
    id: '24',
    title: 'Lancia Ypsilon',
    imagePath: '/images/convenzione/ypsilon.webp',
    description: 'Eleganza italiana - Convenzione Leonardo',
  },
];

export default function ConvenzioneLeonardoPage() {
  return (
    <PinProtection
      correctPin="2016"
      title="Convenzione Leonardo"
      description="Inserisci il PIN per accedere alle offerte esclusive"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-red via-accent-magenta to-accent-blue text-white py-24 px-4 overflow-hidden">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold tracking-wider">OFFERTE ESCLUSIVE</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Convenzione Leonardo
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Vantaggi esclusivi riservati ai dipendenti e partner convenzionati
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <div className="text-3xl font-bold">-15%</div>
                <div className="text-sm">Sul canone</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <div className="text-3xl font-bold">0€</div>
                <div className="text-sm">Anticipo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
                <div className="text-3xl font-bold">48h</div>
                <div className="text-sm">Consegna rapida</div>
              </div>
            </div>

            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-red rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Richiedi Preventivo Convenzione
            </Link>
          </div>
        </div>
      </section>

      {/* Vantaggi Esclusivi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            I Vantaggi della Convenzione
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sconto del 15%</h3>
              <p className="text-gray-600">Sul canone mensile rispetto alle tariffe standard</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Anticipo</h3>
              <p className="text-gray-600">Parti subito senza immobilizzare capitale</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent-magenta rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consegna Rapida</h3>
              <p className="text-gray-600">Ricevi la tua auto in sole 48-72 ore</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pacchetti Flessibili</h3>
              <p className="text-gray-600">Personalizza durata e chilometraggio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volantini Offerte Speciali */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Offerte Esclusive Convenzione Leonardo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scopri tutti i volantini con le offerte speciali riservate ai convenzionati Leonardo. Prezzi già scontati del 15%.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Clicca su un'immagine per ingrandirla e scaricarla
            </p>
          </div>

          <FlyerGallery flyers={convenzioneFlyersData} />

          <div className="text-center mt-12">
            <Link
              href="/prodotti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white rounded-full font-bold text-lg hover:bg-accent-teal hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Vedi Tutti i Veicoli Disponibili
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Come Aderire */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Come Aderire alla Convenzione
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verifica la tua Idoneità</h3>
                <p className="text-gray-600">
                  La convenzione è riservata ai dipendenti Leonardo e partner convenzionati. Contattaci per verificare se hai diritto all'agevolazione.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scegli il Veicolo</h3>
                <p className="text-gray-600">
                  Sfoglia il nostro catalogo e seleziona l'auto che preferisci. Tutti i modelli disponibili beneficiano dello sconto del 15%.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-magenta text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Richiedi il Preventivo</h3>
                <p className="text-gray-600">
                  Compila il form di contatto indicando di voler usufruire della Convenzione Leonardo. Riceverai un preventivo personalizzato entro 24 ore.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ritira la Tua Auto</h3>
                <p className="text-gray-600">
                  Una volta approvata la pratica, ricevi la tua auto in 48-72 ore. Tutto incluso: assicurazione, manutenzione e assistenza H24.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-accent-cyan to-accent-teal p-8 rounded-2xl shadow-2xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Hai Bisogno di Assistenza?</h3>
            <p className="text-lg mb-6">
              Il nostro team è a tua disposizione per maggiori informazioni sulla Convenzione Leonardo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+393290092394"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-cyan rounded-full font-semibold hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                329 00 92 394
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white rounded-full font-semibold hover:bg-primary-gray hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contattaci
              </Link>
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
            "@type": "SpecialAnnouncement",
            "name": "Convenzione Leonardo - Gold Rent Italia",
            "text": "Offerte esclusive di noleggio a lungo termine riservate ai dipendenti Leonardo e partner convenzionati. Sconto del 15% sul canone mensile.",
            "datePosted": new Date().toISOString(),
            "expires": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "category": "https://www.wikidata.org/wiki/Q811701",
            "provider": {
              "@type": "Organization",
              "name": "Gold Rent Italia",
              "url": "https://www.goldrentitalia.it"
            }
          })
        }}
      />
    </PinProtection>
  );
}
