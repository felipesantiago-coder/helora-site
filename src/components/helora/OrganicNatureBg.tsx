'use client';

interface OrganicNatureBgProps {
  variant?: 'understory' | 'forest-floor' | 'soil';
  className?: string;
}

export function OrganicNatureBg({ variant = 'understory', className = '' }: OrganicNatureBgProps) {

  /* ─── UNDERSTORY — Vertical vine & light-ray patterns ─── */
  if (variant === 'understory') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(40,49,6,0.03)] via-transparent to-[rgba(40,49,6,0.02)]" />

        <svg
          className="absolute inset-0 w-full h-full breathe-a"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M180 0 Q175 120, 195 240 Q215 360, 188 480 Q170 560, 195 640 Q210 720, 192 800" stroke="rgba(119,127,92,0.09)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M195 240 Q240 220, 280 245" stroke="rgba(119,127,92,0.06)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M188 480 Q145 465, 110 490" stroke="rgba(119,127,92,0.05)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M1250 0 Q1260 100, 1240 220 Q1220 340, 1255 460 Q1275 560, 1248 680 Q1235 740, 1255 800" stroke="rgba(119,127,92,0.08)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M1240 220 Q1195 205, 1155 228" stroke="rgba(119,127,92,0.05)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M720 0 Q715 80, 730 160 Q748 240, 725 320" stroke="rgba(119,127,92,0.06)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M380 0 Q385 40, 375 80 Q368 110, 382 140" stroke="rgba(119,127,92,0.05)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M1050 0 Q1055 35, 1045 70 Q1038 95, 1052 120" stroke="rgba(119,127,92,0.04)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M550 0 Q545 30, 555 60 Q560 80, 548 105" stroke="rgba(119,127,92,0.04)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          <path d="M210 180 Q228 162, 238 180 Q244 198, 224 202 Q206 196, 210 180Z" fill="rgba(119,127,92,0.06)" />
          <path d="M1220 160 Q1238 144, 1246 162 Q1250 178, 1232 182 Q1216 176, 1220 160Z" fill="rgba(119,127,92,0.05)" />
          <path d="M730 120 Q745 106, 752 122 Q756 136, 740 138 Q726 134, 730 120Z" fill="rgba(119,127,92,0.04)" />
          <path d="M390 350 Q405 336, 412 352 Q416 366, 400 368 Q386 364, 390 350Z" fill="rgba(119,127,92,0.04)" />
          <path d="M1060 380 Q1075 366, 1082 382 Q1086 396, 1070 398 Q1056 394, 1060 380Z" fill="rgba(119,127,92,0.04)" />
        </svg>

        <svg
          className="absolute inset-0 w-full h-full breathe-d"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 60 Q10 200, 5 400 Q0 600, 8 800" stroke="rgba(170,180,130,0.04)" strokeWidth="40" strokeLinecap="round" fill="none" />
          <path d="M0 120 Q5 300, 2 500 Q0 650, 6 800" stroke="rgba(170,180,130,0.03)" strokeWidth="25" strokeLinecap="round" fill="none" />
          <path d="M1440 80 Q1430 250, 1435 450 Q1440 650, 1432 800" stroke="rgba(170,180,130,0.035)" strokeWidth="35" strokeLinecap="round" fill="none" />
          <path d="M480 0 Q475 180, 482 400 Q488 600, 478 800" stroke="rgba(170,180,130,0.025)" strokeWidth="20" strokeLinecap="round" fill="none" />
          <path d="M600 0 Q595 100, 608 200 Q618 300, 605 400" stroke="rgba(119,127,92,0.04)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
          <path d="M880 0 Q885 90, 872 180 Q862 270, 878 360" stroke="rgba(119,127,92,0.035)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }

  /* ─── FOREST-FLOOR — Scattered horizontal leaf-litter & ground-cover ─── */
  if (variant === 'forest-floor') {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(156,97,70,0.015)] via-transparent to-[rgba(44,36,28,0.02)]" />

        <svg
          className="absolute inset-0 w-full h-full breathe-b"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 150 Q180 130, 360 155 Q540 180, 720 148 Q900 118, 1080 145 Q1260 170, 1440 140" stroke="rgba(119,127,92,0.06)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M0 350 Q200 330, 400 355 Q600 380, 800 348 Q1000 318, 1200 350 Q1350 368, 1440 342" stroke="rgba(119,127,92,0.05)" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M0 550 Q240 535, 480 558 Q720 580, 960 548 Q1200 518, 1440 545" stroke="rgba(119,127,92,0.04)" strokeWidth="0.8" strokeLinecap="round" fill="none" />

          <ellipse cx="200" cy="200" rx="28" ry="9" transform="rotate(25 200 200)" fill="rgba(119,127,92,0.04)" />
          <ellipse cx="450" cy="120" rx="22" ry="7" transform="rotate(-15 450 120)" fill="rgba(156,97,70,0.035)" />
          <ellipse cx="750" cy="280" rx="32" ry="10" transform="rotate(40 750 280)" fill="rgba(119,127,92,0.04)" />
          <ellipse cx="1050" cy="180" rx="25" ry="8" transform="rotate(-30 1050 180)" fill="rgba(119,127,92,0.035)" />
          <ellipse cx="1300" cy="320" rx="30" ry="9" transform="rotate(55 1300 320)" fill="rgba(156,97,70,0.03)" />
          <ellipse cx="100" cy="420" rx="26" ry="8" transform="rotate(10 100 420)" fill="rgba(119,127,92,0.03)" />
          <ellipse cx="580" cy="480" rx="24" ry="7" transform="rotate(-45 580 480)" fill="rgba(163,155,130,0.03)" />
          <ellipse cx="900" cy="400" rx="28" ry="9" transform="rotate(20 900 400)" fill="rgba(119,127,92,0.035)" />
          <ellipse cx="1200" cy="520" rx="22" ry="7" transform="rotate(-60 1200 520)" fill="rgba(156,97,70,0.03)" />
          <ellipse cx="350" cy="620" rx="30" ry="10" transform="rotate(35 350 620)" fill="rgba(119,127,92,0.03)" />
          <ellipse cx="680" cy="680" rx="26" ry="8" transform="rotate(-20 680 680)" fill="rgba(163,155,130,0.025)" />
          <ellipse cx="1100" cy="650" rx="28" ry="9" transform="rotate(50 1100 650)" fill="rgba(119,127,92,0.025)" />

          <line x1="300" y1="160" x2="345" y2="172" stroke="rgba(44,36,28,0.03)" strokeWidth="0.8" />
          <line x1="820" y1="240" x2="860" y2="255" stroke="rgba(44,36,28,0.025)" strokeWidth="0.7" />
          <line x1="620" y1="360" x2="655" y2="370" stroke="rgba(44,36,28,0.025)" strokeWidth="0.8" />
          <line x1="1000" y1="440" x2="1030" y2="448" stroke="rgba(44,36,28,0.02)" strokeWidth="0.7" />
        </svg>

        <svg
          className="absolute inset-0 w-full h-full breathe-e"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="280" cy="320" rx="20" ry="6" transform="rotate(65 280 320)" fill="rgba(156,97,70,0.025)" />
          <ellipse cx="620" cy="200" rx="24" ry="8" transform="rotate(-40 620 200)" fill="rgba(163,155,130,0.02)" />
          <ellipse cx="950" cy="560" rx="26" ry="8" transform="rotate(30 950 560)" fill="rgba(156,97,70,0.02)" />
          <ellipse cx="1350" cy="200" rx="22" ry="7" transform="rotate(-55 1350 200)" fill="rgba(119,127,92,0.025)" />
          <ellipse cx="80" cy="680" rx="24" ry="8" transform="rotate(15 80 680)" fill="rgba(163,155,130,0.02)" />
        </svg>

        <div className="absolute breathe-d" style={{ top: '20%', left: '10%', width: '30vw', height: '30vw', maxWidth: 280, maxHeight: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(163,155,130,0.06) 0%, rgba(163,155,130,0) 65%)' }} />
        <div className="absolute breathe-a" style={{ top: '50%', right: '5%', width: '35vw', height: '35vw', maxWidth: 320, maxHeight: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(156,97,70,0.04) 0%, rgba(156,97,70,0) 65%)' }} />
      </div>
    );
  }

  /* ─── SOIL / MYCELIUM — Interconnected network ─── */
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(156,97,70,0.02)] via-[rgba(44,36,28,0.015)] to-[rgba(40,49,6,0.025)]" />

      <svg
        className="absolute inset-0 w-full h-full breathe-d"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M100 200 Q250 170, 400 220 Q550 270, 700 210 Q850 150, 1000 200 Q1150 250, 1300 190" stroke="rgba(156,97,70,0.06)" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M50 350 Q200 320, 380 370 Q560 420, 740 360 Q920 300, 1100 350 Q1280 400, 1400 340" stroke="rgba(156,97,70,0.05)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M200 100 Q320 140, 450 110 Q580 80, 720 120 Q860 160, 1000 110" stroke="rgba(119,127,92,0.04)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M150 480 Q300 450, 480 490 Q660 530, 840 480 Q1020 430, 1200 470 Q1320 500, 1400 460" stroke="rgba(119,127,92,0.035)" strokeWidth="0.7" strokeLinecap="round" fill="none" />

        <path d="M400 220 Q420 300, 380 370" stroke="rgba(156,97,70,0.04)" strokeWidth="0.7" strokeLinecap="round" fill="none" />
        <path d="M700 210 Q720 290, 740 360" stroke="rgba(156,97,70,0.035)" strokeWidth="0.6" strokeLinecap="round" fill="none" />
        <path d="M1000 200 Q1020 280, 1100 350" stroke="rgba(156,97,70,0.03)" strokeWidth="0.6" strokeLinecap="round" fill="none" />

        <circle cx="400" cy="220" r="3" fill="rgba(156,97,70,0.06)" />
        <circle cx="700" cy="210" r="3.5" fill="rgba(156,97,70,0.05)" />
        <circle cx="1000" cy="200" r="3" fill="rgba(156,97,70,0.05)" />
        <circle cx="380" cy="370" r="2.5" fill="rgba(156,97,70,0.04)" />
        <circle cx="740" cy="360" r="3" fill="rgba(156,97,70,0.04)" />
        <circle cx="1100" cy="350" r="2.5" fill="rgba(156,97,70,0.035)" />
        <circle cx="720" cy="120" r="3" fill="rgba(119,127,92,0.03)" />
        <circle cx="840" cy="480" r="3" fill="rgba(119,127,92,0.03)" />

        <path d="M150 250 Q200 230, 260 250 Q320 270, 370 245" stroke="rgba(163,155,130,0.03)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
        <path d="M800 280 Q860 260, 920 285 Q980 310, 1050 280" stroke="rgba(163,155,130,0.025)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
        <path d="M300 400 Q360 385, 420 405 Q480 425, 540 400" stroke="rgba(163,155,130,0.025)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
      </svg>

      <div className="absolute breathe-a" style={{ top: '30%', left: '15%', width: '40vw', height: '40vw', maxWidth: 350, maxHeight: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(156,97,70,0.06) 0%, rgba(156,97,70,0) 65%)' }} />
      <div className="absolute breathe-c" style={{ bottom: '10%', right: '10%', width: '35vw', height: '35vw', maxWidth: 300, maxHeight: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(119,127,92,0.05) 0%, rgba(119,127,92,0) 65%)' }} />
    </div>
  );
}

/** Floating leaf decoration — CSS-only animation, hidden on mobile */
export function FloatingLeaf({ className = '', size = 'md', color = 'sage' }: { className?: string; size?: 'sm' | 'md' | 'lg'; color?: 'sage' | 'dark' | 'sienna' }) {
  const sizeMap = { sm: 32, md: 48, lg: 64 };
  const colorMap = { sage: 'rgba(119,127,92,0.12)', dark: 'rgba(40,49,6,0.12)', sienna: 'rgba(156,97,70,0.12)' };
  const s = sizeMap[size];
  const c = colorMap[color];

  return (
    <div
      className={`pointer-events-none select-none hidden md:block animate-drift ${className}`}
      aria-hidden="true"
    >
      <svg width={s} height={s} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 5 Q52 18, 48 40 Q44 56, 25 55 Q6 54, 8 35 Q10 16, 30 5Z" fill={c} />
      </svg>
    </div>
  );
}

/** Organic branch decoration — hidden on mobile */
export function OrganicBranch({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none select-none hidden md:block ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 200 Q55 160, 50 120 Q42 70, 65 30 Q75 10, 80 5" stroke="#777F5C" strokeWidth="1" opacity="0.15" fill="none" strokeLinecap="round" />
        <path d="M65 30 Q80 15, 95 20 Q105 30, 90 40 Q75 48, 65 30Z" fill="#777F5C" opacity="0.08" />
        <path d="M50 120 Q35 108, 28 115 Q22 125, 38 128 Q48 130, 50 120Z" fill="#777F5C" opacity="0.06" />
      </svg>
    </div>
  );
}
