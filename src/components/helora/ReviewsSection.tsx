import { Star } from 'lucide-react';

// ── Reviews reais extraídas do Google (PDF do cliente) ───────────────
// Seleção que cobre todas as profissionais com avaliações disponíveis:
// Elizângela, Maria de Fátima. Juliana não possui avaliações no PDF.
const REVIEWS = [
  {
    author: 'Adriana Ribeiro de Lima Dantas',
    rating: 5,
    text: 'Gostaria de deixar meu agradecimento à psicóloga Elizângela. Ela é uma profissional maravilhosa que tem feito uma diferença enorme na minha vida. Graças ao seu trabalho, tenho aprendido a me conhecer cada vez melhor. É um espaço onde me sinto 100% acolhida, segura e ouvida. Recomendo muito!',
  },
  {
    author: 'Matheus Quintas',
    rating: 5,
    text: 'A psicóloga Maria de Fátima é uma excelente profissional, especialmente por seu amplo conhecimento em neuropsicologia. Além disso, a clínica é um ambiente muito agradável e acolhedor.',
  },
  {
    author: 'Miguel Jr',
    rating: 5,
    text: 'A profissional Elizângela Brito mudou a minha vida e a forma como me integro à sociedade. Graças ao seu trabalho, dedicação e profissionalismo, vivi uma transformação que levarei para sempre comigo.',
  },
];

// ── Star Rating Component ──────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-[#777F5C] text-[#777F5C]' : 'fill-none text-[#D4CFC7]'}
        />
      ))}
    </div>
  );
}

// ── Review Card ────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <blockquote className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E4DD] flex flex-col h-full">
      {/* Quote mark */}
      <span className="font-serif text-[2.5rem] text-[#E8E4DD] leading-none select-none mb-4" aria-hidden="true">
        &ldquo;
      </span>

      {/* Review text */}
      <p className="font-sans text-[0.9rem] sm:text-[0.938rem] text-[#5A5A5A] leading-[1.75] flex-1 mb-6">
        {review.text}
      </p>

      {/* Footer: stars + author */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-[#E8E4DD]">
        <div>
          <p className="font-sans text-[0.875rem] font-medium text-[#2C2C2C]">
            {review.author}
          </p>
        </div>
        <Stars rating={review.rating} />
      </div>
    </blockquote>
  );
}

// ── Main Section ───────────────────────────────────────────────────────
export function ReviewsSection() {
  return (
    <section className="section-padding bg-[#F0EBE3]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Avaliações
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] text-balance">
            O que nossos pacientes dizem.
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
