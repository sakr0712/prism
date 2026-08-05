import { motion } from "framer-motion";
import { Factory, Layers3, Scissors, ShieldCheck, PackageCheck, Sparkles } from "lucide-react";

const capabilities = [
  [Factory, "Production management", "From approved sample to finished collection."],
  [Layers3, "Fabric sourcing", "Materials selected around quality, performance, and budget."],
  [Scissors, "Printing & embroidery", "Production-ready decoration methods matched to each design."],
  [ShieldCheck, "Quality control", "Structured checks before approval and delivery."],
  [PackageCheck, "Labels & packaging", "Branded finishing that completes the customer experience."],
  [Sparkles, "Sample development", "Fit, construction, and finish validated before bulk production."],
];

export default function Production() {
  return (
    <section className="section section--light" id="production">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow">Production</p><h2>We do more than make clothes.</h2></div>
          <p>We manage the production process around your brand, your positioning, and your customer—not around a generic factory catalogue.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([Icon, title, description], index) => (
            <motion.article className="capability-card" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
        <div className="production-note">
          <div><span>MOQ</span><strong>50 garments</strong><small>per collection</small></div>
          <p>Manufacturing is quoted separately according to quantity, materials, printing, embroidery, accessories, packaging, and delivery requirements.</p>
          <a className="button button--dark" href="#contact">Start a Production Inquiry</a>
        </div>
      </div>
    </section>
  );
}
