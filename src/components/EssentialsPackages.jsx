import { ArrowUpRight, Check } from "lucide-react";
import { essentialsPackages } from "../data/essentialsPackages";

export default function EssentialsPackages() {
  return (
    <section className="section essentials-section" id="essentials-packages">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow">PRISM Essentials</p><h2>Focused execution for brands that already know what they need.</h2></div>
          <p>Smaller packages for existing brands that need specific launch assets without the full strategic development process.</p>
        </div>
        <div className="package-grid package-grid--essentials">
          {essentialsPackages.map((pkg) => (
            <article className="essential-card" key={pkg.name}>
              <div><span>PRISM Essentials</span><h3>{pkg.name}</h3><p>{pkg.description}</p></div>
              <strong>{pkg.price}</strong>
              <ul>{pkg.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
              <a className="text-link" href="#contact">Request this package <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
