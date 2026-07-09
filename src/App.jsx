import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent/40 selection:text-text-main relative font-sans">
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
