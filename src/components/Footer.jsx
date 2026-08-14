import config from "../config";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Devices", href: "#devices" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>{config.businessName}</h3>
          <p className="footer-tagline">{config.tagline}</p>
          <p className="footer-note">Genuine parts · Same-day repairs · 15+ years</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="foot-contact">
            <Phone size={15} />
            <span>+91 {config.phone}</span>
          </div>
          <div className="foot-contact">
            <MapPin size={15} />
            <span>{config.address}</span>
          </div>
          <div className="foot-contact">
            <Clock size={15} />
            <span>Mon - Sat: 10 AM - 8 PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.
      </div>
    </footer>
  );
}