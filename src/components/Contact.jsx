import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `PRISM inquiry — ${data.get("brand") || data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nBrand: ${data.get("brand")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nInterest: ${data.get("interest")}\nMessage: ${data.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow eyebrow--light">Start a project</p>
          <h2>Ready to build your brand?</h2>
          <p>
            Tell us where you are in the journey. We will recommend the right
            package, custom scope, or production quotation.
          </p>
          <div className="contact-details">
            {/* <a href={`mailto:${site.email}`}>
              <Mail size={18} />
              {site.email}
            </a> */}
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={18} />
              {site.phone}
            </a>
            <span>
              <MapPin size={18} />
              {site.location}
            </span>
          </div>
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
            <select name="interest" defaultValue="Production quotation">
              <option>Production quotation</option>
              <option>Foundation package</option>
              <option>Build package</option>
              <option>Launch package</option>
              <option>PRISM Essentials</option>
              <option>Custom scope</option>
            </select>
          </label>
          <label>
            Tell us about the project
            <textarea
              name="message"
              rows="5"
              placeholder="Garment types, quantity, target launch date, budget, and anything else we should know."
            />
          </label>
          <button className="button" type="submit">
            Send Inquiry <Send size={17} />
          </button>
          {sent && (
            <small>
              Your email application should now open with the inquiry prepared.
            </small>
          )}
        </form>
      </div>
    </section>
  );
}
