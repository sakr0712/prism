import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <div className="section-heading"><p className="eyebrow eyebrow--light">Core services</p><h2>Everything required to build, produce, and launch.</h2><p>Choose a complete journey or create a custom scope around the services your brand needs most.</p></div>
        <div className="services-grid">
          {services.map(({ title, icon: Icon, description, items }, index) => (
            <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <div className="service-card__top"><Icon size={22} /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
