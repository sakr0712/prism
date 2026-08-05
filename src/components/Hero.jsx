import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="hero"
      id="top"
      style={{
        backgroundImage: "url('/prism-hero-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">
            Fashion brand development & clothing production
          </p>
          <h1>Clothing production, built around your brand.</h1>
          <p className="hero-copy">
            PRISM turns ideas into market-ready fashion businesses through
            strategy, design, sourcing, production, branding, e-commerce, and
            launch.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Request a Production Quote <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#packages">
              Explore Packages
            </a>
          </div>
          <div className="hero-points">
            {[
              "Minimum order: 50 garments per collection",
              "Custom fabrics, printing, embroidery and packaging",
              "One partner from concept to launch",
            ].map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="hero-panel__number">01</span>
          <p>From a single idea</p>
          <div className="spectrum-line" />
          <strong>to a complete fashion brand.</strong>
          <div className="hero-panel__steps">
            {["Strategy", "Design", "Production", "Launch"].map((step, i) => (
              <span key={step}>
                {String(i + 1).padStart(2, "0")} — {step}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
