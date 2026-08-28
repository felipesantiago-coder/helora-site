import { getWhatsAppLink } from '@/lib/utils';

export function CTASection() {
  return (
    <section id="contato" className="section-padding bg-[#F5F0EB]">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
          Vamos conversar
        </p>
        <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
          Estamos prontos para te ouvir.
        </h2>
        <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8] mb-10">
          É só chamar.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-[13px] tracking-[0.1em] uppercase font-medium px-8 py-3.5 rounded-full bg-[#777F5C] text-white hover:bg-[#283107] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50"
        >
          Marcar uma conversa
        </a>
      </div>
    </section>
  );
}
