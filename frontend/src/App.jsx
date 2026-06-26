import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <header className="hero">
        <Navbar />
        <Hero />
      </header>

      <main>
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default App;