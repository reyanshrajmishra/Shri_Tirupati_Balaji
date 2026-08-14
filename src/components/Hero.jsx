import config from "../config";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/BANNER.jpg"
          alt="Shri Tirupati Balaji Communications repair shop"
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">Mobile Repair Specialists</div>
        <h1>{config.businessName}</h1>
        <p className="hero-address">
          <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
          Vijay Nagar chauraha, Friends Colony, Etawah
        </p>

        <div className="hero-buttons">
          <a href={`tel:${config.phone}`} className="hero-btn hero-btn-primary">
            <Phone size={16} /> Call Now
          </a>
          <a
            href={`https://wa.me/91${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-outline"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
