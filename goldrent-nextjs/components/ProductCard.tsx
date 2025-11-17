import Link from "next/link";
import Image from "next/image";
import { getProductImage } from "@/utils/imageMapper";

interface ProductCardProps {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  price: {
    current: string;
    option1: {
      monthly: string;
      km: string;
      duration: string;
      deposit: string;
    };
    option2: {
      monthly: string;
      km: string;
      duration: string;
      deposit: string;
    };
  };
  thumbnail_id: string;
  displacement?: string;
  horsepower?: string;
  isConvenzione?: boolean;
}

export default function ProductCard({
  id,
  title,
  slug,
  categories,
  price,
  thumbnail_id,
  displacement,
  horsepower,
  isConvenzione = false
}: ProductCardProps) {
  // Trova l'immagine corrispondente al prodotto
  const productImage = getProductImage(title);
  const hasImage = productImage !== null;

  const isOnSale = price.option1.deposit === "0";
  const hasCategories = categories && categories.length > 0;

  // Calcola prezzi scontati del 15% per Convenzione Leonardo
  const discountedPrice1 = isConvenzione
    ? Math.round(parseFloat(price.option1.monthly) * 0.85).toString()
    : price.option1.monthly;

  const discountedPrice2 = isConvenzione && price.option2.monthly
    ? Math.round(parseFloat(price.option2.monthly) * 0.85).toString()
    : price.option2.monthly;

  return (
    <article className="product-card">
      {/* Badge Convenzione Leonardo o In offerta */}
      {isConvenzione ? (
        <div className="absolute top-2 right-2 z-10">
          <span className="px-3 py-1 bg-accent-red text-white text-xs font-bold rounded-full shadow-lg">
            CONVENZIONE LEONARDO -15%
          </span>
        </div>
      ) : (
        isOnSale && (
          <div className="absolute top-2 right-2 z-10">
            <span className="badge badge-sale">In offerta!</span>
          </div>
        )
      )}

      {/* Immagine */}
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        <Link href={`/prodotti/${slug}`}>
          {hasImage ? (
            <Image
              src={productImage}
              alt={title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="text-gray-400 text-4xl">🚗</span>
            </div>
          )}
        </Link>
      </div>

      {/* Contenuto */}
      <div className="product-card-content">
        {/* Categorie */}
        {hasCategories && (
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-accent-cyan bg-opacity-10 text-accent-cyan rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Titolo */}
        <Link href={`/prodotti/${slug}`}>
          <h3 className="product-card-title hover:text-accent-cyan transition-colors">
            {title}
          </h3>
        </Link>

        {/* Dettagli tecnici */}
        <div className="product-card-details space-y-1">
          {displacement && (
            <p className="text-xs">
              <span className="font-medium">Cilindrata:</span> {displacement}
            </p>
          )}
          {horsepower && (
            <p className="text-xs">
              <span className="font-medium">Potenza:</span> {horsepower}
            </p>
          )}
        </div>

        {/* Prezzi */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          {/* Opzione 1 - Zero Anticipo */}
          <div className="mb-3">
            <div className="flex items-baseline gap-2">
              {isConvenzione && (
                <span className="text-sm text-gray-400 line-through">
                  {price.option1.monthly}€
                </span>
              )}
              <span className="product-card-price">
                {discountedPrice1}€<span className="text-sm font-normal">/mese</span>
              </span>
              {isConvenzione && (
                <span className="text-xs font-bold text-accent-red">-15%</span>
              )}
            </div>
            <p className="text-xs text-gray-600">
              <span className="font-semibold text-accent-green">Zero Anticipo</span> •
              {' '}{price.option1.km} km/anno • {price.option1.duration} mesi
            </p>
          </div>

          {/* Opzione 2 - Con Anticipo */}
          {price.option2.monthly && price.option2.deposit !== "0" && (
            <div className="bg-gray-50 p-2 rounded">
              <div className="flex items-baseline gap-2">
                {isConvenzione && (
                  <span className="text-xs text-gray-400 line-through">
                    {price.option2.monthly}€
                  </span>
                )}
                <span className="text-lg font-bold text-gray-900">
                  {discountedPrice2}€<span className="text-xs font-normal">/mese</span>
                </span>
                {isConvenzione && (
                  <span className="text-xs font-bold text-accent-red">-15%</span>
                )}
              </div>
              <p className="text-xs text-gray-600">
                {price.option2.deposit}€ Anticipo •
                {' '}{price.option2.km} km/anno • {price.option2.duration} mesi
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/prodotti/${slug}`}
          className="btn btn-primary w-full mt-4 text-center block"
        >
          Scopri di più
        </Link>
      </div>

      {/* Schema.org Product - SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": title,
            "url": `https://www.goldrentitalia.it/prodotti/${slug}`,
            "image": hasImage ? `https://www.goldrentitalia.it${productImage}` : "https://www.goldrentitalia.it/placeholder-car.jpg",
            "description": `${title} - Noleggio a lungo termine da ${discountedPrice1}€/mese`,
            "category": categories.join(", "),
            "offers": {
              "@type": "Offer",
              "price": discountedPrice1,
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              "url": `https://www.goldrentitalia.it/prodotti/${slug}`,
            }
          })
        }}
      />
    </article>
  );
}
