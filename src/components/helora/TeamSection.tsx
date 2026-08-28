const PROFESSIONALS = [
  {
    name: 'Elizângela',
    photo: '/elizangela-profissional.jpeg',
    role: 'Psicóloga',
  },
  {
    name: 'Fátima',
    photo: '/fatima-profissional.jpeg',
    role: 'Psicóloga',
  },
  {
    name: 'Juliana',
    photo: '/juliana-profissional.jpeg',
    role: 'Psicóloga',
  },
] as const;

export function TeamSection() {
  return (
    <section id="equipe" className="section-padding bg-[#F5F0EB]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Equipe
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] text-balance">
            Profissionais que cuidam de verdade.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROFESSIONALS.map((person) => (
            <div key={person.name} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-serif text-[1.15rem] text-[#2C2C2C] mb-1">
                {person.name}
              </h3>
              <p className="font-sans text-[0.85rem] text-[#6B6B6B] tracking-[0.02em]">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
