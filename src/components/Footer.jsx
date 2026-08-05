import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "../assets/prism-logo.png";
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
            <p className="eyebrow">Ready when you are</p>
            <h2>Let’s turn your idea into a brand people remember.</h2>
          </div>
          <a className="button button--light" href="#contact">
            Start a Project <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-intro">
            <div className="brand footer-brand">
              <img src={logo} alt="PRISM" />
            </div>
            <p>
              Clothing production and fashion brand development—from first idea
              to first sale.
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
            <span className="footer-label">Connect</span>
            {/* <a href={`mailto:${site.email}`}><Mail size={15} />{site.email}</a> */}
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            {/* <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a> */}
          </div>

          <div className="footer-column">
            <span className="footer-label">Location</span>
            <span>
              <MapPin size={15} />
              {site.location}
            </span>
            <p>
              Working with emerging and established fashion brands across Egypt
              and beyond.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PRISM. All rights reserved.</span>
          <span>A Light Group company.</span>
        </div>
      </div>
    </footer>
  );
}
