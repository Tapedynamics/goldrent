import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.goldrentitalia.it'),
  title: {
    default: "Noleggio Auto Lungo Termine | Offerte da 319€/mese | Gold Rent Italia",
    template: "%s | Gold Rent Italia"
  },
  description: "Noleggio a lungo termine in tutta Italia. Scopri le nostre offerte di noleggio auto con assicurazione, manutenzione e assistenza stradale incluse. Zero anticipo e canone fisso mensile.",
  keywords: [
    "noleggio lungo termine",
    "noleggio auto",
    "noleggio lungo termine senza anticipo",
    "noleggio auto aziendale",
    "noleggio auto partita IVA",
    "noleggio lungo termine privati",
    "noleggio veicoli commerciali",
    "leasing auto",
    "rent a car lungo termine"
  ],
  authors: [{ name: "Gold Rent Italia" }],
  creator: "Gold Rent Italia",
  publisher: "Gold Rent Italia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Open Graph - MANCANTE NEL SITO ORIGINALE
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.goldrentitalia.it',
    siteName: 'Gold Rent Italia',
    title: 'Noleggio Auto Lungo Termine | Offerte da 319€/mese | Gold Rent Italia',
    description: 'Noleggio a lungo termine in tutta Italia con assicurazione, manutenzione e assistenza stradale incluse. Zero anticipo disponibile.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Rent Italia - Noleggio Lungo Termine',
      },
    ],
  },
  // Twitter Card - MANCANTE NEL SITO ORIGINALE
  twitter: {
    card: 'summary_large_image',
    title: 'Noleggio Auto Lungo Termine | Gold Rent Italia',
    description: 'Noleggio auto a lungo termine in tutta Italia. Offerte da 319€/mese con tutto incluso.',
    images: ['/og-image.jpg'],
  },
  // Canonical - MANCANTE NEL SITO ORIGINALE
  alternates: {
    canonical: 'https://www.goldrentitalia.it',
  },
  // Verification
  verification: {
    google: 'google-site-verification-code', // Da configurare
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Preconnect per ottimizzazione performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Public Sans font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org LocalBusiness - MANCANTE NEL SITO ORIGINALE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.goldrentitalia.it/#organization",
              "name": "Gold Rent Italia",
              "description": "Noleggio auto a lungo termine in tutta Italia",
              "url": "https://www.goldrentitalia.it",
              "telephone": "+39-329-00-92-394",
              "email": "info@goldrentitalia.it",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IT"
              },
              "priceRange": "€€",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.goldrentitalia.it/logo.png"
              },
              "sameAs": [
                "https://www.facebook.com/goldrentitalia",
                "https://www.instagram.com/goldrentitalia"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Italy"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servizi di Noleggio",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Noleggio Lungo Termine"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Noleggio Pronta Consegna"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Noleggio No CRIF"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
