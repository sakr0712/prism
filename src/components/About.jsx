import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow eyebrow--light">About PRISM</p>
          <span className="about-intro__line" />
          <p className="about-intro__caption">Built for founders with serious ambitions.</p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>From one idea to a full fashion brand.</h2>
          <p>
            Building a fashion label often means managing many people and moving
            parts. PRISM brings that journey under one system.
          </p>
          <p>
            We help founders move from uncertainty to a clear, launch-ready
            business with one partner at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
