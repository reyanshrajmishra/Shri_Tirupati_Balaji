import { Star, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
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
          stroke="#facc15"
        />
      );
    }
    return stars;
  };

  return (
    <section className="google-business fade-in">
      <div className="container">
        <div className="google-card">

          {/* HEADER */}
          <div className="google-header">
            <div className="google-title">
              {config.businessName}
            </div>

            <div className="google-rating">
              {renderStars()}
              <span className="rating-number">{rating}</span>
              <a
                href={config.googleBusiness.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                ({totalReviews} Google reviews)
              </a>
            </div>

            <div className="google-badge">
              {config.googleBusiness.businessType}
            </div>
          </div>

          {/* DETAILS */}
          <div className="google-details">
            <p>
              <MapPin size={16} />
              <strong> Address:</strong> {config.address}
            </p>

            <p>
              <Phone size={16} />
              <strong> Phone:</strong> +91 {config.phone}
            </p>

            <p>
              <Clock size={16} />
              <strong> Hours:</strong> {config.googleBusiness.hoursOpen} AM – {config.googleBusiness.hoursClose} PM ·{" "}
              <span className={isOpen() ? "open" : "closed"}>
                {isOpen() ? "Open Now" : "Closed"}
              </span>
            </p>
          </div>
          {/* ACTION BUTTONS */}
          <div className="google-actions">
            <a href={`tel:${config.phone}`} className="google-btn primary">
              <Phone size={16} /> Call Now
            </a>

            <a
              href={config.googleBusiness.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="google-btn secondary"
            >
              Directions
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
