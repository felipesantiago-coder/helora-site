import { Star } from 'lucide-react';

// ── Real reviews extracted from Google (PDF) ─────────────────────────
const REVIEWS = [
  {
    author: 'Adriana Ribeiro de Lima Dantas',
    rating: 5,
    text: 'Gostaria de deixar meu agradecimento à psicóloga Elizângela. Ela é uma profissional maravilhosa que tem feito uma diferença enorme na minha vida. Graças ao seu trabalho, tenho aprendido a me conhecer cada vez melhor. É um espaço onde me sinto 100% acolhida, segura e ouvida. Recomendo muito!',
    relativeTime: '6 dias atrás',
  },
  {
    author: 'Deusimar Barros',
    rating: 5,
    text: 'A minha experiência foi e é maravilhosa, além de ótima profissional. É uma amiga, tanto que não quero alta agora. Ela fez eu voltar pra mim mesma, me fez enxergar o amor próprio e ver a vida como ela é. Está sendo um aprendizado incrível. Aprendendo a elaborar sentimentos e a entender o que passou na minha vida que não percebi na época. A mais tempo tivesse encontrado a Elizângela. Obrigada por tudo. E a clínica, fácil acesso e confortável, ambiente sereno e lindo. Muito grata.',
    relativeTime: '6 dias atrás',
  },
  {
    author: 'Matheus Quintas',
    rating: 5,
    text: 'A psicóloga Maria de Fátima é uma excelente profissional, especialmente por seu amplo conhecimento em neuropsicologia. Além disso, a clínica é um ambiente muito agradável e acolhedor.',
    relativeTime: '1 semana atrás',
  },
  {
    author: 'Isabella Vieira',
    rating: 5,
    text: 'Tive uma experiência muito positiva na Helora Saúde Integrada durante meu acompanhamento neuropsicológico. Desde o primeiro atendimento, fui recebida com muita atenção, respeito, acolhimento e profissionalismo.',
    relativeTime: '5 dias atrás',
  },
  {
    author: 'Aline Menezes Ribeiro',
    rating: 5,
    text: 'A vida do meu filho mudou para melhor depois do excelente atendimento e acompanhamento da Psicóloga Elizângela Brito. Excelentes profissionais, ambiente extremamente lindo.',
    relativeTime: '1 semana atrás',
  },
  {
    author: 'Andrea Ribeiro de Lima',
    rating: 5,
    text: 'Fui atendida pela Elizangela, uma psicóloga admirável, daquelas que fazem a gente se sentir verdadeiramente ouvida e acolhida. Profissional dedicada, acolhedora e que transmite muita confiança e carinho no que faz.',
    relativeTime: '6 dias atrás',
  },
  {
    author: 'Lenira Bezerra',
    rating: 5,
    text: 'Sou muito grata pela excelente qualidade do serviço psicológico prestado. Desde o início do tratamento psicológico até o momento, percebi uma melhora significativa em minha saúde mental, o que impactou positivamente minhas relações.',
    relativeTime: '1 dia atrás',
  },
  {
    author: 'Tissi',
    rating: 5,
    text: 'Psicóloga Brito, profissional extraordinária e extremamente humana! O consultório dela é um verdadeiro espaço seguro, onde me sinto totalmente acolhida e livre de julgamentos. Com uma escuta atenta, paciência e pontuações cirúrgicas.',
    relativeTime: '1 dia atrás',
  },
  {
    author: 'Rosana Monteiro da Silva',
    rating: 5,
    text: 'Gostei muito do atendimento com a Psicóloga Elizangela Brito. Foi bem atenciosa no atendimento inicial e resultado final, assim como nos atendimentos com minha filha, para avaliação Neuropsicológica. Recomendo.',
    relativeTime: '4 dias atrás',
  },
  {
    author: 'Miguel Jr',
    rating: 5,
    text: 'A profissional Elizângela Brito mudou a minha vida e a forma como me integro à sociedade. Graças ao seu trabalho, dedicação e profissionalismo, vivi uma transformação que levarei para sempre comigo.',
    relativeTime: '1 semana atrás',
  },
  {
    author: 'JAEDSON PAULO OLIVEIRA',
    rating: 5,
    text: 'Fátima é uma profissional incrível, fiz acompanhamento com ela num momento muito difícil da minha vida. Ela é super atenciosa, ouve com atenção e orienta com sabedoria.',
    relativeTime: '3 dias atrás',
  },
  {
    author: 'Dani Ricci',
    rating: 5,
    text: 'Minha vida mudou depois da terapia que comecei com a profissional Maria de Fátima, super indico. Obrigada pela atenção, profissionalismo e dedicação.',
    relativeTime: '1 semana atrás',
  },
  {
    author: 'André Alencar',
    rating: 5,
    text: 'Ótima clínica com uma equipe muito organizada e prestativa.',
    relativeTime: '4 dias atrás',
  },
  {
    author: 'Antonio Facundo',
    rating: 5,
    text: 'Primeiramente ótima localização, atendimento ótimo, rápido e ótimo suporte. Excelentes profissionais, nota 10.',
    relativeTime: '1 semana atrás',
  },
  {
    author: 'Daniela Souza',
    rating: 5,
    text: 'Excelente! Recomendo!',
    relativeTime: '5 dias atrás',
  },
  {
    author: 'Evando Teixeira',
    rating: 5,
    text: 'Excelente atendimento.',
    relativeTime: '1 semana atrás',
  },
];

const DISPLAY_COUNT = 3;
const RATING = 5.0;
const TOTAL_REVIEWS = 17;

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
          <p className="font-sans text-[0.75rem] text-[#A39B82] mt-0.5">
            {review.relativeTime}
          </p>
        </div>
        <Stars rating={review.rating} />
      </div>
    </blockquote>
  );
}

// ── Main Section ───────────────────────────────────────────────────────
export function ReviewsSection() {
  const displayReviews = REVIEWS.slice(0, DISPLAY_COUNT);

  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header + rating summary */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
              Avaliações
            </p>
            <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] text-balance">
              O que nossos pacientes dizem.
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-[#E8E4DD] shrink-0">
            <span className="font-serif text-[2.25rem] text-[#2C2C2C] leading-none">
              {RATING.toFixed(1).replace('.', ',')}
            </span>
            <div className="flex flex-col gap-1">
              <Stars rating={Math.round(RATING)} />
              <p className="font-sans text-[0.75rem] text-[#A39B82]">
                {TOTAL_REVIEWS} avaliações no Google
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
