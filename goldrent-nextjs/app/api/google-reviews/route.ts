import { NextResponse } from 'next/server';

// Cache per le recensioni (evita troppe chiamate API)
let cachedReviews: any = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 ora

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('placeId') || process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId || !apiKey) {
      return NextResponse.json(
        { error: 'Configurazione Google Places mancante' },
        { status: 500 }
      );
    }

    // Controlla cache
    const now = Date.now();
    if (cachedReviews && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json(cachedReviews);
    }

    // Chiama Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}&language=it`;

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate ogni ora
    });

    if (!response.ok) {
      throw new Error('Errore chiamata Google Places API');
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const result = {
      name: data.result.name,
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    };

    // Aggiorna cache
    cachedReviews = result;
    cacheTimestamp = now;

    return NextResponse.json(result);

  } catch (error) {
    console.error('Google Reviews API error:', error);
    return NextResponse.json(
      { error: 'Errore nel recupero delle recensioni' },
      { status: 500 }
    );
  }
}
