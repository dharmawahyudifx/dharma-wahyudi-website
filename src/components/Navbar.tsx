import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#media-sosial', label: 'Media Sosial' },
];

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="group flex items-center gap-2"
        >
          <Sparkles className="h-5 w-5 text-gold-400 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-xl font-semibold tracking-wide text-white">
            Dharma<span className="text-gradient-gold"> Wahyudi</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="group relative text-sm font-medium tracking-wide text-gray-300 transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#media-sosial"
            onClick={(e) => handleClick(e, '#media-sosial')}
            className="rounded-full border border-gold-500/30 px-5 py-2 text-sm font-medium text-gold-300 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-200 hover:glow-gold"
          >
            Ikuti Saya
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-200 transition-colors hover:text-gold-300 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-gold-500/10 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gold-500/10 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#media-sosial"
            onClick={(e) => handleClick(e, '#media-sosial')}
            className="mt-2 rounded-xl border border-gold-500/30 px-4 py-3 text-center text-sm font-medium text-gold-300 transition-all hover:bg-gold-500/10"
          >
            Ikuti Saya
          </a>
        </div>
      </div>
    </nav>
  );
}
