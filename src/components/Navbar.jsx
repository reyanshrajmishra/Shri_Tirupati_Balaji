import config from "../config";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Devices", href: "#devices" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Book", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo-wrapper">
          <img src="/SHOP_LOGO.jpeg" alt={config.businessName} className="logo" />
          <div className="logo-text">
            <h2>{config.businessName}</h2>
            <div className="nav-location">Etawah, Uttar Pradesh</div>
          </div>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`tel:${config.phone}`} className="call-btn">
          <Phone size={15} />
          Call Now
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}