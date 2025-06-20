import CustomCursor from './CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
export function App() {
  return <div className="relative min-h-screen text-white">
    <CustomCursor />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>;
}