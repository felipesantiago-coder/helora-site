import { NextResponse } from 'next/server';

// ── Types ──────────────────────────────────────────────────────────────
interface Review {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

interface ReviewsResponse {
  rating: number;
  totalReviews: number;
  reviews: Review[];
  source: 'google' | 'mock';
}

// ── Mock data (fallback) ───────────────────────────────────────────────
const MOCK_REVIEWS: ReviewsResponse = {
  rating: 4.9,
  totalReviews: 73,
  source: 'mock',
  reviews: [
    {
      author: 'Camila R.',
      rating: 5,
      text: 'A Helora é um espaço de acolhimento único. Desde a primeira sessão me senti ouvida de verdade. A atenção ao detalhe, o cuidado com o ambiente e, principalmente, com o meu tempo, fazem toda a diferença. Recomendo de olhos fechados.',
      relativeTime: '2 semanas atrás',
    },
    {
      author: 'Fernando M.',
      rating: 5,
      text: 'Profissionalismo e empatia em cada atendimento. A equipe é extremamente qualificada e o ambiente transmite calma. Finalmente encontrei um lugar onde me sinto seguro para falar sobre o que preciso.',
      relativeTime: '1 mês atrás',
    },
    {
      author: 'Ana Luiza S.',
      rating: 5,
      text: 'A avaliação neuropsicológica foi muito esclarecedora. Me ajudou a entender questões que eu carregava há anos. O relatório foi detalhado e a orientação clara. Agradeço imensamente.',
      relativeTime: '1 mês atrás',
    },
    {
      author: 'Patrícia L.',
      rating: 5,
      text: 'O espaço é lindo e muito bem cuidado. A sensação de tranquilidade começa já na recepção. Minha psicóloga é excepcional — dedicada, atenciosa e muito competente.',
      relativeTime: '2 meses atrás',
    },
    {
      author: 'Ricardo D.',
      rating: 4,
      text: 'Comecei o atendimento na Helora por indicação e não me arrependo. A abordagem é séria e baseada em evidências. O único ponto é que às vezes é difícil agendar em horários específicos, mas a qualidade compensa.',
      relativeTime: '3 meses atrás',
    },
  ],
};

// ── In-memory cache ────────────────────────────────────────────────────
let cache: { data: ReviewsResponse; expiresAt: number } | null = null;
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

// ── Fetch from Google Places API (New) ─────────────────────────────────
async function fetchGoogleReviews(): Promise<ReviewsResponse | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const url =
    `https://places.googleapis.com/v1/places/${placeId}?` +
    new URLSearchParams({
      fields: 'rating,userRatingCount,reviews',
      key: apiKey,
    });

  const res = await fetch(url, { next: { revalidate: 21600 } });
  if (!res.ok) return null;

  const data = await res.json();

  const reviews: Review[] = (data.reviews || [])
    .slice(0, 5)
    .map((r: Record<string, unknown>) => ({
      author: (r.authorAttribution as Record<string, string>)?.displayName || 'Anônimo',
      rating: (r.rating as number) ?? 5,
      text: (r.originalText as Record<string, string>)?.text || '',
      relativeTime: (r.relativePublishTimeDescription as string) || '',
    }));

  return {
    rating: (data.rating as number) ?? 0,
    totalReviews: (data.userRatingCount as number) ?? 0,
    reviews,
    source: 'google',
  };
}

// ── GET handler ────────────────────────────────────────────────────────
export async function GET() {
  // Return cached data if still valid
  if (cache && Date.now() < cache.expiresAt) {
    return NextResponse.json(cache.data);
  }

  // Try Google API first
  const googleData = await fetchGoogleReviews();

  const response: ReviewsResponse = googleData || MOCK_REVIEWS;

  // Cache the result
  cache = { data: response, expiresAt: Date.now() + CACHE_TTL_MS };

  return NextResponse.json(response);
}
