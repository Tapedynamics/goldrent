"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione invio form (da implementare con backend reale)
    setTimeout(() => {
      setSubmitMessage(
        "Grazie per averci contattato! Ti risponderemo al più presto."
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
          <p className="text-xl text-gray-300">
            Siamo a tua disposizione per qualsiasi informazione sul noleggio a
            lungo termine. Richiedi un preventivo gratuito o parla con un nostro
            esperto.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Telefono */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-cyan bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chiamaci</h3>
              <a
                href="tel:+393290092394"
                className="text-accent-cyan font-bold text-lg hover:underline"
              >
                329 00 92 394
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Lun-Ven: 9:00 - 18:00
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-cyan bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-cyan"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">Scrivici</h3>
              <a
                href="mailto:info@goldrentitalia.it"
                className="text-accent-cyan font-bold hover:underline break-all"
              >
                info@goldrentitalia.it
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Risposta entro 24h
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent-green"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/393290092394"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent inline-block"
              >
                Chatta con noi
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Risposta immediata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Richiedi Informazioni</h2>
            <p className="text-gray-600">
              Compila il form e ti ricontatteremo al più presto per fornirti tutte
              le informazioni di cui hai bisogno.
            </p>
          </div>

          {submitMessage && (
            <div className="bg-accent-green bg-opacity-10 border border-accent-green text-accent-green px-6 py-4 rounded-lg mb-6">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="form-label">
                Nome e Cognome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Mario Rossi"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="mario.rossi@example.com"
              />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="phone" className="form-label">
                Telefono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="+39 333 1234567"
              />
            </div>

            {/* Oggetto */}
            <div>
              <label htmlFor="subject" className="form-label">
                Oggetto *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Seleziona un oggetto</option>
                <option value="preventivo">Richiesta Preventivo</option>
                <option value="informazioni">Informazioni Generali</option>
                <option value="noleggio">Info su Noleggio Lungo Termine</option>
                <option value="pronta-consegna">Pronta Consegna</option>
                <option value="aziende">Noleggio per Aziende</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            {/* Messaggio */}
            <div>
              <label htmlFor="message" className="form-label">
                Messaggio (opzionale)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Scrivi qui la tua richiesta..."
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                className="mt-1 mr-3 w-4 h-4 text-accent-cyan focus:ring-accent-cyan border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                Accetto la{" "}
                <a
                  href="/privacy-policy"
                  className="text-accent-cyan hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                e autorizzo il trattamento dei miei dati personali. *
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-accent w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            * Campi obbligatori
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Perché Contattarci?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                💰 Preventivo Gratuito
              </h3>
              <p className="text-gray-700">
                Richiedi un preventivo personalizzato senza impegno. Ti
                aiuteremo a trovare la soluzione più adatta alle tue esigenze.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                👨‍💼 Consulenza Esperta
              </h3>
              <p className="text-gray-700">
                Il nostro team di esperti è a tua disposizione per consigliarti
                il veicolo e la formula di noleggio più vantaggiosa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                📋 Informazioni Dettagliate
              </h3>
              <p className="text-gray-700">
                Ottieni tutte le informazioni su servizi inclusi, coperture
                assicurative e modalità contrattuali.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-accent-cyan">
                ⚡ Risposta Veloce
              </h3>
              <p className="text-gray-700">
                Ti rispondiamo entro 24 ore lavorative. Per urgenze, utilizza
                il servizio WhatsApp per una risposta immediata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Gold Rent Italia",
              "telephone": "+39-329-00-92-394",
              "email": "info@goldrentitalia.it",
              "url": "https://www.goldrentitalia.it",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+39-329-00-92-394",
                "contactType": "Customer Service",
                "availableLanguage": "Italian",
                "areaServed": "IT",
              },
            },
          }),
        }}
      />
    </>
  );
}
