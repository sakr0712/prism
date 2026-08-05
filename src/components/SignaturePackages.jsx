import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { signaturePackages } from "../data/signaturePackages";

export default function SignaturePackages() {
  return (
    <section className="section section--cream signature-section" id="signature-packages">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">PRISM Signature</p>
          <h2>Choose how far we take your brand.</h2>
          <p>
            Structured engagements for founders building a serious fashion brand.
          </p>
        </div>

        <div className="package-grid package-grid--signature">
          {signaturePackages.map((pkg, index) => (
            <motion.article
              className={`package-card ${pkg.featured ? "package-card--featured" : ""}`}
              key={pkg.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ delay: index * 0.08, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.featured && <span className="package-badge">Featured</span>}
              <div className="package-card__topline">
                <p className="eyebrow">{pkg.eyebrow}</p>
                <span className="package-tier">0{index + 1}</span>
              </div>
              <div className="package-card__crest" />
              <div className="package-card__hero">
                <div>
                  <h3>{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                </div>
                <div className="package-price">
                  <span className="package-price__label">Investment</span>
                  <strong>{pkg.price}</strong>
                  <span className="package-price__duration">{pkg.duration}</span>
                </div>
              </div>
              <div className="package-card__divider" />
              <div className="package-card__list-head">
                <span>Includes</span>
              </div>
              <ul>
                {pkg.deliverables.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className={`button ${pkg.featured ? "button--light" : "button--outline"}`}
                href="#contact"
              >
                Choose {pkg.name}
              </a>
              <small>Manufacturing is quoted separately.</small>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
