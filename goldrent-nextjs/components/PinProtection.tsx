'use client';

import { useState, useEffect } from 'react';

interface PinProtectionProps {
  children: React.ReactNode;
  correctPin: string;
  title?: string;
  description?: string;
}

export default function PinProtection({
  children,
  correctPin,
  title = "Accesso Riservato",
  description = "Inserisci il PIN per accedere a questa pagina"
}: PinProtectionProps) {
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Verifica se l'utente ha già sbloccato la pagina in questa sessione
  useEffect(() => {
    const unlocked = sessionStorage.getItem('convenzione_leonardo_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (pin === correctPin) {
      setIsUnlocked(true);
      sessionStorage.setItem('convenzione_leonardo_unlocked', 'true');
    } else {
      setError('PIN non corretto. Riprova.');
      setPin('');
    }
  };

  // Mostra loading durante il check iniziale
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-white text-xl">Caricamento...</div>
      </div>
    );
  }

  // Se sbloccato, mostra il contenuto
  if (isUnlocked) {
    return <>{children}</>;
  }

  // Mostra il form PIN
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-accent-red via-accent-magenta to-accent-blue p-8 text-white text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-white/90">{description}</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="pin"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  PIN di Accesso
                </label>
                <input
                  id="pin"
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••"
                  className={`w-full px-4 py-3 text-center text-2xl tracking-widest border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-colors ${
                    error
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-300 focus:border-accent-cyan'
                  }`}
                  autoFocus
                  required
                />
                {error && (
                  <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={pin.length !== 4}
                className="w-full bg-gradient-to-r from-accent-cyan to-accent-teal text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                Sblocca
              </button>
            </form>

            {/* Informazioni */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-1">Pagina Riservata</p>
                  <p>Questa pagina contiene offerte esclusive riservate ai dipendenti e partner convenzionati. Per accedere è necessario il PIN fornito dalla direzione.</p>
                </div>
              </div>
            </div>

            {/* Link contatto */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Non hai il PIN di accesso?
              </p>
              <a
                href="/contatti"
                className="text-accent-cyan hover:text-accent-teal font-medium text-sm transition-colors"
              >
                Contattaci per maggiori informazioni →
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Gold Rent Italia - Tutti i diritti riservati</p>
        </div>
      </div>
    </div>
  );
}
