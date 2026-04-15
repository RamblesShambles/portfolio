import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Automations from "./components/Automations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Automations />
      <Contact />
      <Footer />
    </div>
  );
}
