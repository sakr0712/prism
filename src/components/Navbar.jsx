import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/prism-logo.png";

const links = [
  ["Production", "production"],
  ["Services", "services"],
  ["Packages", "packages"],
  ["Process", "process"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", ...links.map(([, id]) => id)];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0.1, 0.3, 0.55],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a
        className="brand"
        href="#top"
        aria-label="PRISM home"
        onClick={() => setOpen(false)}
      >
        <img src={logo} alt="PRISM" />
      </a>

      <nav
        className={`nav-links ${open ? "nav-links--open" : ""}`}
        aria-label="Primary navigation"
      >
        {links.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "nav-link--active" : ""}
            aria-current={activeSection === id ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="button button--small button--nav"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Start a Project
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
