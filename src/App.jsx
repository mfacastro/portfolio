import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <main className="bg-ink min-h-screen relative font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
