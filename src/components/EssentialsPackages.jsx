import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { essentialsPackages } from "../data/essentialsPackages";

export default function EssentialsPackages() {
  return (
    <section className="section essentials-section" id="essentials-packages">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">PRISM Essentials</p>
            <h2>Focused execution for brands that know what they need.</h2>
          </div>
          <p>
            Smaller packages for brands that need specific launch assets without
            the full process.
          </p>
        </div>

        <div className="package-grid package-grid--essentials">
          {essentialsPackages.map((pkg, index) => (
            <motion.article
              className="essential-card"
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="essential-card__header">
                <span>PRISM Essentials</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
              </div>
              <strong>{pkg.price}</strong>
              <ul>
                {pkg.items.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contact">
                Request this package <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
