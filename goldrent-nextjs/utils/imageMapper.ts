/**
 * Utility per mappare i titoli dei prodotti alle immagini corrispondenti
 */

// Mapping manuale per prodotti specifici
const manualMapping: Record<string, string> = {
  // BMW
  "BMW X1": "bmw-x2-front-view.webp",
  "BMW X2": "bmw-x2-front-view.webp",
  "BMW X3": "X3.webp",
  "BMW X4": "bmw-x4.webp",
  "BMW Serie 1": "INTERNIBMW.webp",

  // Audi
  "Audi Q2": "Q2.webp",
  "Audi Q3": "Q3.webp",
  "Audi Q5": "q5.webp",
  "Audi A1": "audi-a1-allstreet-2023.webp",

  // Volkswagen
  "Volkswagen Golf": "golf-50-anni.webp",
  "Volkswagen Tiguan": "TIGUAN.webp",
  "Volkswagen T-Roc": "TROC.webp",
  "VOLKSWAGEN T-ROC": "TROC.webp",
  "VOKSWAGEN T-ROC": "TROC.webp",
  "Volkswagen Taigo": "TAIGO.webp",
  "VOLKSWAGEN TAIGO": "TAIGO.webp",
  "Volkswagen Passat": "PASSAT.webp",

  // Renault
  "Renault Clio": "clio.webp",
  "RENAULT  CLIO": "clio.webp",
  "CLIO": "clio.webp",
  "Renault Austral": "RENAULT.AUSTRAL.webp",
  "RENAULT AUSTRAL": "RENAULT.AUSTRAL.webp",
  "Renault Symbioz": "SYMBIOZ.INTERNI.webp",

  // Peugeot
  "Peugeot 208": "Peugeot-208-2020-UK-pictures-29-scaled.webp",
  "Peugeot 2008": "2008.webp",
  "Peugeot 3008": "peugeot-3008-2023.webp",
  "Peugeot 5008": "peugeot-5008-side-view-scaled.jpg",

  // Citroen
  "Citroen C3": "Nuova-Citroen-C3-1.webp",
  "NUOVA CITROEN C3": "Nuova-Citroen-C3-1.webp",
  "C3 VAN": "C3VAN.webp",
  "C3 AIR CROSS": "C3AIR.webp",
  "C3 AIRCROSS": "c3-aircross.webp",
  "Citroen C3 Aircross": "c3-aircross.webp",
  "Citroen C5": "C5.webp",
  "C5": "C5.webp",
  "C5 AIRCROSS": "c5aircross.jpeg",
  "Citroen C5 Aircross": "Citroen-C5-Aircross-2020-1.webp",
  "Citroen Berlingo": "citroen-berlingo-front-view.webp",
  "CITROEN BERLINGO": "citroen-berlingo-front-view.webp",
  "Citroen Van": "citroen-e-berlingo-2024.webp",
  "CITROEN VAN": "citroen-e-berlingo-2024.webp",

  // Fiat
  "Fiat Panda": "PANDA.webp",
  "PANDA VAN": "PANDAVAN4POSTI.webp",
  "Fiat 500": "fiat-500-hybrid-2020-mobile-cover.webp",
  "Fiat 600": "fiat600.webp",
  "Fiat 500X": "500X.webp",
  "500X": "500X.webp",
  "500X DIESEL": "500X.DIESEL.webp",
  "Fiat Tipo": "nuova-fiat-tipo-2022.webp",
  "Fiat Fiorino": "Fiorino-Canvas-Mobile_626x368.webp",
  "GRANDE PANDA": "fiat-grande-panda.webp",
  "Fiat Grande Panda": "fiat-grande-panda.webp",
  "Fiat Ducato": "ducato.SITO_.webp",
  "Fiat Scudo": "scudo1.webp",

  // Opel
  "Opel Corsa": "OPEL.CORSA_.webp",
  "Opel Crossland": "opel-crossland-2020-01.webp",
  "Opel Mokka": "MOKKA.webp",
  "Opel Astra": "OPEL.ASTRA_.webp",

  // Ford
  "Ford Puma": "puma.webp",
  "Ford Focus": "ford-focus.webp",
  "Ford Kuga": "ford-kuga-graphite-design-eleganza.webp",
  "Ford Tourneo": "ford-tourneoV761-FoE-07_V761_Tourneo_Con_Ext_Ft_7_8_Static-16x9-2160x1215-gt.jpg.renditions.extra-large.webp",
  "Ford Transit": "Ford-Transit-Custom-front_view.webp",

  // Skoda
  "Skoda Kamiq": "SKODA.KAMIQ_.webp",
  "Skoda Karoq": "KAROQ.webp",
  "Skoda Octavia": "skoda.octavia.wagon_.webp",

  // Hyundai
  "Hyundai Tucson": "Nuova-Hyundai-Tucson-2.webp",
  "Hyundai Bayon": "csm_hyundai-all-new-bayon_02_1610_c8ae0ff1d6.webp",
  "Hyundai i10": "hyundai-i10-i10-n-line-group-introduction-2023-02.webp",

  // Kia
  "Kia Sportage": "kia-sportage-2025-corea-del-sud.webp",
  "Kia XCeed": "KIA.webp",

  // Alfa Romeo
  "Alfa Romeo Tonale": "alfa-romeo-tonale-22-gallery-4.jpg",
  "Alfa Romeo Junior": "AR-Model-Page-Canvas-Media-Junior-Ibrida_MBL-1280x1280Cover.webp",
  "NUOVA ALFA ROMEO JUNIOR": "AR-Model-Page-Canvas-Media-Junior-Ibrida_MBL-1280x1280Cover.webp",
  "Alfa Romeo Giulia": "GIULIA.webp",
  "GIULIA VELOCE": "GIULIA.webp",
  "Alfa Romeo Stelvio": "stelvio-background.webp",
  "STELVIO VELOCE": "stelvioveloce.webp",
  "STELVIO SUPER": "STELVIO.SUPER_.webp",

  // Lancia
  "Lancia Ypsilon": "ypsilon.webp",

  // Jeep
  "Jeep Avenger": "AVENGER.webp",
  "Jeep Renegade": "1688830825721_renegade4xelimitedalpinewhite.webp",
  "Jeep Compass": "COMPASS.webp",
  "COMPASS": "COMPASS.webp",

  // Nissan
  "Nissan Juke": "nissan.juke_.webp",
  "Nissan Qashqai": "nissan.webp",
  "NISSAN QASQHAI": "nissan.webp",

  // Toyota
  "Toyota Aygo X": "toyota-aygo-x-primo-contatto-2022-04_05.webp",

  // Tesla
  "Tesla Model 3": "tesla.model_.3.webp",

  // BYD
  "BYD Seal": "byd-seal-u-dm-i-2024-05_08.webp",

  // Maserati
  "Maserati Grecale": "grecale.webp",

  // Mercedes
  "Mercedes GLC": "mercedes-benz-glc-coupe-front-view-scaled.webp",
  "GLC COUPE": "mercedes-benz-glc-coupe-front-view-scaled.webp",
  "MERCEDES GLC COUPE": "mercedes-benz-glc-coupe-front-view-scaled.webp",

  // Mini
  "Mini Cooper": "MINI.webp",
  "Mini Countryman": "MINI.webp",

  // DS
  "DS 3": "ds.webp",
  "DS 7": "ds.webp",

  // Omoda
  "Omoda 5": "Omoda5_A77I3331.webp",

  // Iveco
  "Iveco Daily": "iveco-daily-cargo-van-2022-front-side-1.webp",
  "DAILY": "iveco-daily-cargo-van-2022-front-side-1.webp",
  "DAILY 35S12": "iveco-daily-cargo-van-2022-front-side-1.webp",
};

/**
 * Trova l'immagine corrispondente per un prodotto
 * @param productTitle - Titolo del prodotto
 * @returns Nome del file immagine o null se non trovato
 */
export function getProductImage(productTitle: string): string | null {
  if (!productTitle) return null;

  // 1. Cerca prima nel mapping manuale (match esatto)
  if (manualMapping[productTitle]) {
    return `/images/products/${manualMapping[productTitle]}`;
  }

  // 2. Cerca match parziale nel mapping manuale
  for (const [key, value] of Object.entries(manualMapping)) {
    if (productTitle.toLowerCase().includes(key.toLowerCase())) {
      return `/images/products/${value}`;
    }
  }

  // 3. Prova a costruire il nome del file dal titolo
  // Esempio: "Skoda Kamiq 1.0 Sport" -> "SKODA.KAMIQ_.webp"
  const normalized = productTitle
    .toLowerCase()
    .split(" ")
    .slice(0, 2) // Prendi solo marca e modello
    .join(".")
    .replace(/[^a-z0-9.]/g, "");

  // 4. Fallback - ritorna null per usare placeholder
  return null;
}

/**
 * Verifica se esiste un'immagine per il prodotto
 * @param productTitle - Titolo del prodotto
 * @returns true se esiste un'immagine mappata
 */
export function hasProductImage(productTitle: string): boolean {
  return getProductImage(productTitle) !== null;
}
