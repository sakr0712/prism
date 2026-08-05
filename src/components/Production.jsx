import { motion } from "framer-motion";
import {
  Factory,
  Layers3,
  PackageCheck,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const capabilities = [
  [Factory, "Production management", "From approved sample to finished collection."],
  [Layers3, "Fabric sourcing", "Materials selected around quality, performance, and budget."],
  [Scissors, "Printing and embroidery", "Production-ready decoration methods matched to each design."],
  [ShieldCheck, "Quality control", "Structured checks before approval and delivery."],
  [PackageCheck, "Labels and packaging", "Branded finishing that completes the customer experience."],
  [Sparkles, "Sample development", "Fit, construction, and finish validated before bulk production."],
];

const cardMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Production() {
  return (
    <section className="section section--light" id="production">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Production</p>
            <h2>We do more than make clothes.</h2>
          </div>
          <p>
            We shape production around your brand, not a standard factory process.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map(([Icon, title, description], index) => (
            <motion.article
              className="capability-card"
              key={title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={cardMotion}
            >
              <div className="capability-card__icon">
                <Icon size={22} />
              </div>
              <span className="capability-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="production-note"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span>MOQ</span>
            <strong>50 garments</strong>
              <small>per collection</small>
          </div>
          <p>
            Manufacturing is quoted separately based on quantity, materials,
            finishing, packaging, and delivery.
          </p>
          <a className="button" href="#contact">
            Start an Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  );
}
