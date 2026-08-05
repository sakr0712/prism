import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "../data/site";

const footerLinks = [
  ["Production", "#production"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="eyebrow eyebrow--light">Ready when you are</p>
            <h2>Let&apos;s turn your idea into a brand people remember.</h2>
          </div>
          <a className="button button--light" href="#contact">
            Start a Project <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-intro">
            <div className="brand footer-brand">
              <img src="/icon.png" alt="PRISM icon" className="footer-logo-image" />
            </div>
            <span className="footer-brand-mark">Fashion brand development</span>
            <p>
              Fashion brand development and clothing production from idea to sale.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-label">Explore</span>
            {footerLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">Contact</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={15} />
              {site.phone}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-label">Location</span>
            <span>
              <MapPin size={15} />
              {site.location}
            </span>
            <p>
              Working with emerging and established brands across Egypt and beyond.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} PRISM. All rights reserved.</span>
          <span>A Light Group company.</span>
        </div>
      </div>
    </footer>
  );
}
