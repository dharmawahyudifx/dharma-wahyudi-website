import { Youtube, Instagram, Sparkles, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@dharmawhyd',
    icon: Youtube,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/dharmawhyd/',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@darmawhyd',
    icon: Sparkles,
  },
];

function TikTokIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.45a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.12z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold-500/10 bg-ink-950">
      <div className="absolute inset-0 bg-noise" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12 py-16">
        {/* Social Icons */}
        <div className="mb-12 flex flex-col items-center gap-8">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
            — Terhubung
          </span>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.name === 'TikTok' ? TikTokIcon : social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/15 glass-card transition-all duration-300 hover:border-gold-500/35 hover:glow-gold"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5 text-gold-400 transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <span className="font-serif text-lg font-medium text-white">
              Dharma<span className="text-gradient-gold"> Wahyudi</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Dharma Wahyudi.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-gray-400 transition-colors hover:text-gold-300"
          >
            Kembali ke atas
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-500/20 transition-all group-hover:border-gold-500/40 group-hover:bg-gold-500/10">
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
