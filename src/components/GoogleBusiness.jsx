import { Star, MapPin, Phone, Clock, PenLine } from "lucide-react";
import config from "../config";

export default function GoogleBusiness() {
  const rating = config.googleBusiness.rating;
  const totalReviews = config.googleBusiness.totalReviews;

  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= config.googleBusiness.hoursOpen && hour < config.googleBusiness.hoursClose;
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={18}
          fill={i <= Math.round(rating) ? "#facc15" : "none"}
          stroke={i <= Math.round(rating) ? "#facc15" : "#e5e7eb"}
        />
      );
    }
    return stars;
  };

  return (
    <section className="google-business">
      <div className="container">
        <div className="section-tagline">Google Reviews</div>
        <h2 className="section-title">Find Us on Google</h2>
        <div className="section-divider"></div>

        <div className="google-card">
          <div className="google-header">
            <div className="google-title">{config.businessName}</div>
            <div className="google-rating">
              {renderStars()}
              <span className="rating-number">{rating}</span>
              <a href={config.googleBusiness.reviewLink} target="_blank" rel="noopener noreferrer">
                ({totalReviews} Google reviews)
              </a>
            </div>
            <div className="google-badges">
              <span className="google-badge">{config.googleBusiness.businessType}</span>
              <span className="google-badge" style={isOpen() ? { color: "#10b981", background: "rgba(16,185,129,0.09)" } : { color: "#ef4444", background: "rgba(239,68,68,0.09)" }}>
                {isOpen() ? "Open Now" : "Closed"}
              </span>
            </div>
          </div>

          <div className="google-details">
            <p><MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Address:</strong> {config.address}</span></p>
            <p><Phone size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Phone:</strong> +91 {config.phone}</span></p>
            <p><Clock size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span><strong>Hours:</strong> {config.googleBusiness.hoursOpen} AM – {config.googleBusiness.hoursClose} PM (Mon–Sat)</span></p>
          </div>

          <div className="google-actions">
            <a href={`tel:${config.phone}`} className="google-btn primary">
              <Phone size={16} /> Call Now
            </a>
            <a href={config.googleBusiness.mapsLink} target="_blank" rel="noopener noreferrer" className="google-btn secondary">
              <MapPin size={16} /> Get Directions
            </a>
            <a href={config.googleBusiness.reviewLink} target="_blank" rel="noopener noreferrer" className="google-btn secondary">
              <PenLine size={16} /> Write a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
