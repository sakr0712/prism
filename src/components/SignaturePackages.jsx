import { Check } from "lucide-react";
import { signaturePackages } from "../data/signaturePackages";

export default function SignaturePackages() {
  return (
    <section className="section section--cream signature-section" id="signature-packages">
      <div className="container">
        <div className="section-heading section-heading--center"><p className="eyebrow">PRISM Signature</p><h2>Choose how far you want us to take your brand.</h2><p>Premium, structured engagements for founders building a serious fashion business from the ground up.</p></div>
        <div className="package-grid package-grid--signature">
          {signaturePackages.map((pkg) => (
            <article className={`package-card ${pkg.featured ? "package-card--featured" : ""}`} key={pkg.name}>
              <div className="package-card__header">
                <p className="eyebrow">{pkg.eyebrow}</p>
                {pkg.featured && <span className="package-badge">Most complete build stage</span>}
              </div>
              <h3>{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
              <div className="package-price"><strong>{pkg.price}</strong><span>{pkg.duration}</span></div>
              <ul>{pkg.deliverables.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
              <a className={`button ${pkg.featured ? "button--light" : "button--outline"}`} href="#contact">Choose {pkg.name}</a>
              <small>Manufacturing is quoted separately.</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
