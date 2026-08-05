import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="section mission-section">
      <div className="container">
        <div className="mission-heading">
          <p className="eyebrow eyebrow--light">Mission and vision</p>
          <h2>Built for brands made to last.</h2>
        </div>

        <div className="mission-grid">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Mission</span>
            <h2>Make fashion brand building simpler, clearer, and more professional.</h2>
            <p>
              We unite strategy, creative development, production, branding, and
              launch through one trusted partner.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Vision</span>
            <h2>Build the leading fashion brand ecosystem in the Middle East.</h2>
            <p>
              We want ambitious founders to access the structure and expertise
              needed to build lasting brands.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
