import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Social from '@/components/Social';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
