import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News e Novità | Gold Rent Italia - Noleggio Lungo Termine",
  description: "Rimani aggiornato sulle ultime novità del settore noleggio lungo termine, nuovi modelli disponibili e offerte speciali di Gold Rent Italia.",
  keywords: [
    "news noleggio lungo termine",
    "novità auto",
    "offerte speciali",
    "blog noleggio auto",
  ],
  openGraph: {
    title: "News | Gold Rent Italia",
    description: "Tutte le novità sul noleggio a lungo termine.",
  },
  alternates: {
    canonical: "https://www.goldrentitalia.it/news",
  },
};

// Articolo dal sito originale
const articles = [
  {
    id: 1,
    title: "Scopri il Noleggio a Lungo Termine",
    slug: "scopri-il-noleggio-a-lungo-termine",
    excerpt:
      "Viaggiare in Tutto Relax. Il noleggio a lungo termine rappresenta una soluzione innovativa per la tua mobilità quotidiana.",
    date: "2023-12-04",
    category: "Guide",
    image: "/news/noleggio-lungo-termine.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News e Novità</h1>
          <p className="text-xl text-gray-300">
            Rimani aggiornato sulle ultime novità del settore noleggio lungo
            termine, nuovi modelli e offerte speciali.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="card">
                <div className="aspect-video bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-white text-4xl">
                  📰
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="badge bg-accent-cyan bg-opacity-10 text-accent-cyan">
                      {article.category}
                    </span>
                    <span>•</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    <Link
                      href={`/news/${article.slug}`}
                      className="hover:text-accent-cyan transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-accent-cyan font-semibold hover:underline"
                  >
                    Leggi di più →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder per altri articoli */}
          <div className="mt-12 bg-accent-cyan bg-opacity-5 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Altri Articoli in Arrivo
            </h3>
            <p className="text-gray-700 mb-6">
              Stiamo preparando nuovi contenuti interessanti sul mondo del
              noleggio lungo termine. Torna a trovarci presto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/prodotti" className="btn btn-accent">
                Scopri i Veicoli
              </Link>
              <Link href="/contatti" className="btn btn-primary">
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Argomenti Popolari */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Argomenti di Interesse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                🚗 Nuovi Modelli
              </h3>
              <p className="text-gray-700 mb-4">
                Scopri gli ultimi modelli disponibili per il noleggio a lungo
                termine. Dalle citycar ai SUV premium, tutti i brand più
                prestigiosi.
              </p>
              <Link
                href="/prodotti"
                className="text-accent-cyan font-semibold hover:underline"
              >
                Vai al catalogo →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                💼 Noleggio per Aziende
              </h3>
              <p className="text-gray-700 mb-4">
                Vantaggi fiscali e gestione semplificata della flotta aziendale.
                Scopri le soluzioni dedicate alle imprese.
              </p>
              <Link
                href="/chi-siamo"
                className="text-accent-cyan font-semibold hover:underline"
              >
                Scopri di più →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                ⚡ Pronta Consegna
              </h3>
              <p className="text-gray-700 mb-4">
                Veicoli disponibili immediatamente. Ritira la tua auto in pochi
                giorni senza lunghe attese.
              </p>
              <Link
                href="/prodotti?category=pronta-consegna"
                className="text-accent-cyan font-semibold hover:underline"
              >
                Vedi disponibilità →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                📋 Guide e Consigli
              </h3>
              <p className="text-gray-700 mb-4">
                Tutto quello che devi sapere sul noleggio a lungo termine:
                vantaggi, costi, procedure e molto altro.
              </p>
              <Link
                href="/"
                className="text-accent-cyan font-semibold hover:underline"
              >
                Leggi le guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vuoi Ricevere le Nostre Novità?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contattaci per rimanere aggiornato su offerte speciali, nuovi
            modelli e promozioni esclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="btn bg-white text-accent-cyan hover:bg-gray-100 font-semibold px-8 py-3 rounded-md"
            >
              Contattaci
            </Link>
            <Link
              href="/prodotti"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-cyan font-semibold px-8 py-3 rounded-md"
            >
              Scopri le Offerte
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Gold Rent Italia News",
            "description":
              "News e novità sul noleggio lungo termine",
            "url": "https://www.goldrentitalia.it/news",
            "publisher": {
              "@type": "Organization",
              "name": "Gold Rent Italia",
            },
            "blogPost": articles.map((article) => ({
              "@type": "BlogPosting",
              "headline": article.title,
              "datePublished": article.date,
              "url": `https://www.goldrentitalia.it/news/${article.slug}`,
              "description": article.excerpt,
            })),
          }),
        }}
      />
    </>
  );
}
