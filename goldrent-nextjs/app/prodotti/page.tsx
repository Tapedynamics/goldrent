import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import SortDropdown from "@/components/SortDropdown";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "Noleggio Lungo Termine - Tutte le Offerte Auto | Gold Rent Italia",
  description: "Scopri tutte le nostre offerte di noleggio auto a lungo termine. Oltre 90 modelli disponibili con assicurazione, manutenzione e assistenza incluse. Offerte da 319€/mese con zero anticipo.",
  keywords: [
    "offerte noleggio lungo termine",
    "catalogo auto noleggio",
    "noleggio auto economico",
    "auto in pronta consegna",
    "noleggio senza anticipo"
  ],
  openGraph: {
    title: "Tutte le Offerte Noleggio Lungo Termine | Gold Rent Italia",
    description: "Oltre 90 modelli disponibili per il noleggio a lungo termine. Trova l'auto perfetta per te.",
  },
  alternates: {
    canonical: "https://www.goldrentitalia.it/prodotti",
  },
};

export default function ProdottiPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string };
}) {
  const category = searchParams.category;
  const sortBy = searchParams.sort || 'recent';

  // IDs dei prodotti che sono solo volantini (da escludere dalla pagina prodotti)
  const flyerOnlyProductIds = ['471']; // 500X DIESEL

  // Filtra prodotti per categoria e rimuovi volantini
  let filteredProducts = category
    ? productsData.filter((product: any) =>
        !flyerOnlyProductIds.includes(product.id) &&
        product.categories.some(
          (cat: string) =>
            cat.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase()
        )
      )
    : productsData.filter((product: any) => !flyerOnlyProductIds.includes(product.id));

  // Ordina prodotti in base al parametro sort
  filteredProducts = [...filteredProducts].sort((a: any, b: any) => {
    switch (sortBy) {
      case 'price-asc':
        // Ordina per prezzo crescente
        const priceA = parseFloat(a.price?.regular) || parseFloat(a.price?.sale) || 0;
        const priceB = parseFloat(b.price?.regular) || parseFloat(b.price?.sale) || 0;
        return priceA - priceB;

      case 'price-desc':
        // Ordina per prezzo decrescente
        const priceA2 = parseFloat(a.price?.regular) || parseFloat(a.price?.sale) || 0;
        const priceB2 = parseFloat(b.price?.regular) || parseFloat(b.price?.sale) || 0;
        return priceB2 - priceA2;

      case 'name-asc':
        // Ordina alfabeticamente A-Z
        return a.title.localeCompare(b.title);

      case 'name-desc':
        // Ordina alfabeticamente Z-A
        return b.title.localeCompare(a.title);

      case 'recent':
      default:
        // Ordina per ID decrescente (più recenti prima)
        return b.id - a.id;
    }
  });

  const categoryTitles: { [key: string]: string } = {
    "lungo-termine": "Noleggio Lungo Termine",
    "pronta-consegna": "Pronta Consegna",
    "no-crif": "Noleggio No CRIF",
    "be-free": "Be Free",
    "miles": "Miles",
    "veicoli-commerciali": "Veicoli Commerciali",
  };

  const pageTitle = category
    ? categoryTitles[category] || "Prodotti"
    : "Tutte le Offerte";

  return (
    <>
      {/* Header con H1 - MANCAVA NEL SITO ORIGINALE */}
      <section className="bg-primary-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl text-gray-300">
            Scopri la nostra selezione di veicoli disponibili per il noleggio a
            lungo termine. Tutti i veicoli includono assicurazione completa,
            manutenzione e assistenza stradale H24.
          </p>
        </div>
      </section>

      {/* Filtri Categoria e Ordinamento */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filtri Categoria */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/prodotti"
                className={`px-4 py-2 rounded-full transition-all ${
                  !category
                    ? "bg-accent-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tutti ({productsData.length})
              </a>
              <a
                href={`/prodotti?sort=${sortBy}&category=lungo-termine`}
                className={`px-4 py-2 rounded-full transition-all ${
                  category === "lungo-termine"
                    ? "bg-accent-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Lungo Termine
              </a>
              <a
                href={`/prodotti?sort=${sortBy}&category=pronta-consegna`}
                className={`px-4 py-2 rounded-full transition-all ${
                  category === "pronta-consegna"
                    ? "bg-accent-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Pronta Consegna
              </a>
              <a
                href={`/prodotti?sort=${sortBy}&category=no-crif`}
                className={`px-4 py-2 rounded-full transition-all ${
                  category === "no-crif"
                    ? "bg-accent-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                No CRIF
              </a>
              <a
                href={`/prodotti?sort=${sortBy}&category=miles`}
                className={`px-4 py-2 rounded-full transition-all ${
                  category === "miles"
                    ? "bg-accent-cyan text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Miles
              </a>
            </div>

            {/* Dropdown Ordinamento */}
            <SortDropdown />
          </div>
        </div>
      </section>

      {/* Contenuto SEO - MANCAVA NEL SITO ORIGINALE */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {category
                ? `Offerte ${categoryTitles[category]}`
                : "Tutte le Nostre Offerte di Noleggio Lungo Termine"}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {category === "pronta-consegna" ? (
                <>
                  Hai bisogno di un'auto <strong>immediatamente</strong>? Con il
                  servizio <strong>Pronta Consegna</strong> puoi ritirare il tuo
                  veicolo in pochi giorni. Tutti i veicoli sono disponibili a
                  magazzino e pronti per essere consegnati, senza i lunghi tempi
                  di attesa delle ordinazioni standard.
                </>
              ) : category === "no-crif" ? (
                <>
                  Il <strong>Noleggio No CRIF</strong> è la soluzione ideale per
                  chi ha avuto difficoltà finanziarie nel passato. Valutiamo la
                  tua situazione attuale e non solo la storia creditizia,
                  offrendoti comunque la possibilità di accedere a un veicolo di
                  qualità con tutti i servizi inclusi.
                </>
              ) : (
                <>
                  Scopri la nostra selezione completa di veicoli disponibili per
                  il <strong>noleggio a lungo termine</strong>. Ogni offerta
                  include assicurazione RCA, Kasko, Furto/Incendio, manutenzione
                  ordinaria e straordinaria, assistenza stradale H24 e cambio
                  pneumatici. Canone mensile fisso, nessuna sorpresa.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Griglia Prodotti */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Visualizzazione di {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "veicolo" : "veicoli"}
                </p>
              </div>

              <div className="products-grid">
                {filteredProducts.map((product: any) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    slug={product.slug}
                    categories={product.categories}
                    price={product.price}
                    thumbnail_id={product.thumbnail_id}
                    displacement={product.displacement}
                    horsepower={product.horsepower}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nessun veicolo trovato per questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Perché Scegliere il Noleggio Lungo Termine
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Il noleggio a lungo termine rappresenta la soluzione più moderna e
              conveniente per la mobilità aziendale e privata. Con un{" "}
              <strong>canone mensile fisso</strong> hai accesso a un veicolo
              nuovo senza preoccuparti di manutenzione, assicurazioni o
              svalutazione.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">
              Vantaggi del Noleggio
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Nessun anticipo richiesto</strong> sulle offerte
                selezionate
              </li>
              <li>Canone mensile fisso e trasparente</li>
              <li>
                Assicurazione completa: RCA, Kasko, Furto/Incendio incluse
              </li>
              <li>
                Manutenzione ordinaria e straordinaria sempre inclusa
              </li>
              <li>Assistenza stradale H24 su tutto il territorio nazionale</li>
              <li>Cambio pneumatici stagionale incluso</li>
              <li>Nessun pensiero di svalutazione del veicolo</li>
              <li>Vantaggi fiscali per aziende e professionisti</li>
            </ul>
            <p className="mt-6">
              Con oltre <strong>90 modelli disponibili</strong>, da city car a
              SUV premium, da berline eleganti a veicoli commerciali, troverai
              sicuramente l'auto perfetta per le tue esigenze.
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org ItemList per SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": filteredProducts.slice(0, 10).map((product: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://www.goldrentitalia.it/prodotti/${product.slug}`,
              "name": product.title,
            })),
          }),
        }}
      />
    </>
  );
}
