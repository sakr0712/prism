import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="section section--dark services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow--light">Core services</p>
          <h2>Everything needed to build and launch.</h2>
          <p>
            Choose a full journey or a custom scope around what you need most.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ title, icon: Icon, description, items }, index) => (
            <motion.article
              className="service-card"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.05, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-card__top">
                <div className="service-card__icon">
                  <Icon size={22} />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="service-card__eyebrow">PRISM services</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="service-card__footer">
                <span>Custom scope available</span>
                <ArrowUpRight size={17} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
