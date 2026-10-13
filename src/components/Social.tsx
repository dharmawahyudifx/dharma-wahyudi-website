import { Youtube, Instagram, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@dharmawhyd',
    href: 'https://www.instagram.com/dharmawhyd/',
    description: 'Konten visual, update, dan cuplikan keseharian seputar teknologi.',
  },
  {
    name: 'TikTok',
    handle: '@darmawhyd',
    href: 'https://www.tiktok.com/@darmawhyd',
    description: 'Video singkat — tips, fakta teknologi, dan AI dalam hitungan detik.',
  },
  {
    name: 'YouTube',
    handle: '@dharmawhyd',
    href: 'https://youtube.com/@dharmawhyd',
    description: 'Video panjang — pembahasan mendalam tentang teknologi, AI, dan masa depan.',
  },
];

function TikTokIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.45a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

function getIcon(name: string) {
  if (name === 'YouTube') return Youtube;
  if (name === 'Instagram') return Instagram;
  return TikTokIcon;
}

export default function Social() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="media-sosial"
      className="relative overflow-hidden bg-ink-900 py-24 lg:py-32"
    >
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gold-600/5 blur-[120px]" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''} mb-16 text-center`}>
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase">
            — Media Sosial
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
            Ikuti perjalanan saya
            <br />
            <span className="text-gradient-gold italic">di setiap platform.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-400">
            Temukan konten tentang teknologi, AI, dan masa depan di platform favorit Anda.
          </p>
        </div>

        {/* Social Cards */}
        <div ref={cardsRef} className={`reveal ${cardsVisible ? 'is-visible' : ''} grid gap-6 md:grid-cols-3`}>
          {socialLinks.map((social, idx) => {
            const Icon = getIcon(social.name);
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold-500/10 glass-card p-8 transition-all duration-500 hover:border-gold-500/30 hover:glow-gold"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-5 inline-flex w-fit rounded-xl bg-gold-500/10 p-3 transition-colors group-hover:bg-gold-500/15">
                  <Icon className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Name + Handle */}
                <h3 className="mb-1 font-serif text-xl font-medium text-white">
                  {social.name}
                </h3>
                <span className="mb-3 text-sm text-gold-300/80">
                  {social.handle}
                </span>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-400">
                  {social.description}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Kunjungi profil
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold-500/10" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
