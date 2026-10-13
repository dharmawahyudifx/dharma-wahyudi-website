import { Cpu, Brain, Rocket, Eye } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  {
    icon: Cpu,
    title: 'Teknologi',
    description: 'Mengupas perkembangan teknologi terkini — dari perangkat keras, software, hingga tren yang membentuk industri.',
  },
  {
    icon: Brain,
    title: 'Kecerdasan Buatan',
    description: 'Menjelaskan AI secara sederhana: bagaimana cara kerjanya, dampaknya, dan apa artinya bagi kita semua.',
  },
  {
    icon: Rocket,
    title: 'Masa Depan',
    description: 'Menjelajahi kemungkinan dan tantangan yang menanti — dari otomasi hingga transformasi digital.',
  },
];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
    >
      {/* Subtle glow */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''} mb-16`}>
          <span className="mb-4 inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase">
            — Tentang Saya
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
            Membongkar teknologi,
            <br />
            <span className="text-gradient-gold italic">satu gagasan pada satu waktu.</span>
          </h2>
        </div>

        {/* Bio + Image */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div ref={cardsRef} className={`reveal reveal-delay-1 ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="space-y-5 text-base leading-relaxed text-gray-400">
              <p>
                Halo, saya <span className="text-gold-200 font-medium">Dharma Wahyudi</span> —
                seorang content creator dari Indonesia yang fokus membahas teknologi,
                kecerdasan buatan (AI), dan masa depan.
              </p>
              <p>
                Saya percaya bahwa teknologi tidak harus rumit untuk dipahami. Melalui
                konten di YouTube dan platform lainnya, saya berusaha menjembatani
                kesenjangan antara inovasi yang rumit dan pemahaman yang menyentuh —
                agar setiap orang bisa merasa lebih siap menghadapi perubahan.
              </p>
              <p>
                Dari membongkar cara kerja AI, mereview perkakas teknologi terbaru,
                hingga membayangkan bagaimana masa depan akan terbentuk — semua hadir
                dengan bahasa yang jujur, tulus, dan mudah diikuti.
              </p>
            </div>
          </div>

          {/* Visual card */}
          <div className={`reveal reveal-delay-2 ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="group relative overflow-hidden rounded-3xl border border-gold-500/10 glass-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Ilustrasi kecerdasan buatan — tangan robotik menjangkau jaringan digital"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gold-400" />
                  <span className="text-xs font-medium tracking-widest text-gold-200 uppercase">
                    Teknologi · AI · Masa Depan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div ref={cardsRef} className={`reveal ${cardsVisible ? 'is-visible' : ''} grid gap-6 md:grid-cols-3`}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`group relative overflow-hidden rounded-2xl border border-gold-500/10 glass-card p-8 transition-all duration-500 hover:border-gold-500/30 hover:glow-gold`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mb-5 inline-flex rounded-xl bg-gold-500/10 p-3">
                  <Icon className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {pillar.description}
                </p>
                {/* Decorative corner */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold-500/5 blur-2xl transition-opacity duration-500 group-hover:bg-gold-500/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
