import { useState } from "react";
import { ArrowUpRight, MapPin, Phone, Send } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const whatsappNumber = site.whatsapp.replace(/\D/g, "");
    const message = [
      "PRISM inquiry",
      "",
      `Name: ${data.get("name") || "-"}`,
      `Brand: ${data.get("brand") || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Interest: ${data.get("interest") || "-"}`,
      `Project details: ${data.get("message") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-shell">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light">Start a project</p>
            <h2>Ready to build your brand?</h2>
            <p>
              Tell us where you are. We will recommend the right package, custom
              scope, or production quote.
            </p>

            <div className="contact-details">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone size={18} />
                {site.phone}
              </a>
              <span>
                <MapPin size={18} />
                {site.location}
              </span>
            </div>

            <a
              className="text-link contact-whatsapp"
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us <ArrowUpRight size={16} />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Brand
                <input name="brand" placeholder="Brand or company" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Phone
                <input name="phone" placeholder="+20..." />
              </label>
            </div>
            <label>
              What do you need?
              <select name="interest" defaultValue="Production quote">
                <option>Production quote</option>
                <option>Foundation package</option>
                <option>Build package</option>
                <option>Launch package</option>
                <option>PRISM Essentials</option>
                <option>Custom scope</option>
              </select>
            </label>
            <label>
              Project details
              <textarea
                name="message"
                rows="5"
                placeholder="Garment types, quantity, timeline, budget, and anything else we should know."
              />
            </label>
            <button className="button button--light button--submit" type="submit">
              Send Inquiry <Send size={17} />
            </button>
            {sent && (
              <small>
                WhatsApp should now open with your inquiry prepared.
              </small>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
