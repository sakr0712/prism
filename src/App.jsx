import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Production from "./components/Production";
import About from "./components/About";
import Services from "./components/Services";
import EssentialsPackages from "./components/EssentialsPackages";
import SignaturePackages from "./components/SignaturePackages";
import Process from "./components/Process";
import MissionVision from "./components/MissionVision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Production />
        <About />
        <Services />
        <section id="packages" className="packages-anchor" aria-label="Packages">
          <EssentialsPackages />
          <SignaturePackages />
        </section>
        <Process />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
