'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface GoogleReviewsProps {
  placeId?: string;
  maxReviews?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function GoogleReviews({
  placeId,
  maxReviews = 10,
  autoPlay = true,
  autoPlayInterval = 5000,
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  // Fetch recensioni da backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/google-reviews${placeId ? `?placeId=${placeId}` : ''}`);

        if (!response.ok) {
          throw new Error('Errore nel caricamento delle recensioni');
        }

        const data = await response.json();
        setReviews(data.reviews || []);
        setAverageRating(data.rating || 0);
        setTotalReviews(data.user_ratings_total || 0);
        setError(null);
      } catch (err) {
        console.error('Errore caricamento recensioni:', err);
        setError('Non è stato possibile caricare le recensioni');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();

    // Auto-refresh ogni ora
    const refreshInterval = setInterval(fetchReviews, 60 * 60 * 1000);
    return () => clearInterval(refreshInterval);
  }, [placeId]);

  // Auto-play carosello
  useEffect(() => {
    if (!autoPlay || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-accent-cyan border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Caricamento recensioni...</p>
      </div>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">{error || 'Nessuna recensione disponibile'}</p>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header con Rating Medio */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.floor(averageRating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
        </div>
        <p className="text-gray-600">
          Basato su {totalReviews} recensioni Google
        </p>
      </div>

      {/* Carosello Recensione */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Frecce Navigazione */}
        {reviews.length > 1 && (
          <>
            <button
              onClick={prevReview}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Recensione precedente"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Recensione successiva"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </>
        )}

        {/* Contenuto Recensione */}
        <div className="text-center">
          {/* Avatar e Nome */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {currentReview.profile_photo_url ? (
              <img
                src={currentReview.profile_photo_url}
                alt={currentReview.author_name}
                className="w-12 h-12 rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-accent-cyan flex items-center justify-center text-white font-semibold">
                {currentReview.author_name.charAt(0)}
              </div>
            )}
            <div className="text-left">
              <p className="font-semibold text-gray-900">{currentReview.author_name}</p>
              <p className="text-sm text-gray-500">{currentReview.relative_time_description}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < currentReview.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Testo Recensione */}
          <p className="text-gray-700 leading-relaxed text-lg italic">
            "{currentReview.text}"
          </p>
        </div>

        {/* Dots Indicatori */}
        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {reviews.slice(0, maxReviews).map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent-cyan w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Vai alla recensione ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Link Scrivi Recensione */}
      <div className="text-center mt-6">
        <a
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-cyan hover:bg-accent-teal text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <Star className="w-5 h-5" />
          Scrivi una Recensione
        </a>
      </div>

      {/* Logo Google */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">Powered by Google</p>
      </div>
    </div>
  );
}
