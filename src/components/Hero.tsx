import { ArrowDown, Youtube, Instagram, Sparkles } from 'lucide-react';

function TikTokIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.45a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

export default function Hero() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#tentang')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSocial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#media-sosial')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-noise" />

      {/* Radial glow */}
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gold-500/5 blur-[80px] animate-float" />

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-5 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          <span className="text-xs font-medium tracking-widest text-gold-200 uppercase">
            Teknologi · AI · Masa Depan
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-6 font-serif text-5xl font-light leading-tight tracking-tight text-white animate-fade-up sm:text-7xl lg:text-8xl">
          Dharma
          <br />
          <span className="text-shimmer-gold font-medium italic">Wahyudi</span>
        </h1>

        {/* Headline */}
        <p className="mx-auto mb-4 max-w-2xl text-xl font-light leading-relaxed text-gray-200 animate-fade-up sm:text-2xl"
           style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Menjelajasi perpotongan teknologi, kecerdasan buatan, dan masa depan.
        </p>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 animate-fade-up sm:text-lg"
           style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Menghadirkan wawasan, analisis, dan perspektif tentang bagaimana teknologi
 membentuk dunia kita — dengan bahasa yang mudah dipahami.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row" style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="#media-sosial"
            onClick={scrollToSocial}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:from-gold-300 hover:to-gold-500 hover:glow-gold-strong"
          >
            Ikuti di Media Sosial
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#tentang"
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-8 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gold-500/40 hover:text-gold-200"
          >
            Tentang Saya
          </a>
        </div>

        {/* Social quick links */}
        <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="https://youtube.com/@dharmawhyd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gold-300"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/dharmawhyd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gold-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@darmawhyd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gold-300"
            aria-label="TikTok"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest text-gray-600 uppercase">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-500/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
