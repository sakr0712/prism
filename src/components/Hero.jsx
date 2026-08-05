import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 70]);
  const contentY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -24]);
  const panelY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : -44]);

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-media"
        style={{ y: imageY, scale: prefersReducedMotion ? 1 : 1.08 }}
        animate={prefersReducedMotion ? undefined : { scale: 1.14 }}
        transition={prefersReducedMotion ? undefined : { duration: 13, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          style={{ y: contentY }}
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <motion.p className="eyebrow eyebrow--hero" custom={0} variants={reveal}>
            Fashion brand development and production
          </motion.p>
          <motion.div className="hero-kicker" custom={0} variants={reveal}>
            Cairo-based. Built for modern labels.
          </motion.div>
          <motion.h1 custom={1} variants={reveal}>
            Build a label that feels clear.
          </motion.h1>
          <motion.p className="hero-copy" custom={2} variants={reveal}>
            PRISM turns strong ideas into ready-to-launch fashion brands through
            strategy, design, production, branding, and e-commerce.
          </motion.p>
          <motion.div className="hero-actions" custom={3} variants={reveal}>
            <a className="button button--hero" href="#contact">
              Request a Quote <ArrowUpRight size={18} />
            </a>
            <a className="button button--ghost" href="#packages">
              Explore Packages
            </a>
          </motion.div>
          <motion.div className="hero-points" custom={4} variants={reveal}>
            {[
              "Minimum order: 50 garments",
              "Custom fabrics, printing, and packaging",
              "One partner from idea to launch",
            ].map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
          </motion.div>
          <motion.div className="hero-credibility" custom={5} variants={reveal}>
            <div>
              <span>Positioning</span>
              <strong>Luxury-minded</strong>
            </div>
            <div>
              <span>Execution</span>
              <strong>End-to-end</strong>
            </div>
            <div>
              <span>Launch model</span>
              <strong>Launch-ready</strong>
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-panel"
          style={{ y: panelY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-panel__top">
            <span className="hero-panel__number">01</span>
            <span className="hero-panel__label">Floating brief</span>
          </div>
          <div className="hero-panel__body">
            <p className="hero-panel__intro">From a single idea</p>
            <strong>to a complete fashion brand.</strong>
            <p className="hero-panel__summary">
              Product, identity, and launch support through one clear system.
            </p>
          </div>
          <div className="hero-panel__metrics">
            <div>
              <span>Service model</span>
              <b>End-to-end</b>
            </div>
            <div>
              <span>Output</span>
              <b>Brand to launch</b>
            </div>
          </div>
          <div className="hero-panel__steps">
            {["Strategy", "Design", "Production", "Launch"].map((step, index) => (
              <span key={step}>
                {String(index + 1).padStart(2, "0")} / {step}
              </span>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
