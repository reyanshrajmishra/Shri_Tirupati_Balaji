import { Star, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function GoogleBusiness() {
  const rating = 4.1;
  const totalReviews = 12;

  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 8 && hour < 20;
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
              Shri Tirupati Balaji Communication
            </div>

            <div className="google-rating">
              {renderStars()}
              <span className="rating-number">{rating}</span>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJdTHBh3_gdTkRzYOnfqVgBjA"
                target="_blank"
                rel="noopener noreferrer"
              >
                ({totalReviews} Google reviews)
              </a>
            </div>

            <div className="google-badge">
              Mobile phone repair shop in Etawah, Uttar Pradesh
            </div>
          </div>

          {/* DETAILS */}
          <div className="google-details">
            <p>
              <MapPin size={16} />
              <strong> Address:</strong> Vijay Nagar Chauraha, Friends Colony,
              Etawah, Uttar Pradesh 206001
            </p>

            <p>
              <Phone size={16} />
              <strong> Phone:</strong> +91 92191 19832
            </p>

            <p>
              <Clock size={16} />
              <strong> Hours:</strong> 8 AM – 8 PM ·{" "}
              <span className={isOpen() ? "open" : "closed"}>
                {isOpen() ? "Open Now" : "Closed"}
              </span>
            </p>
          </div>
          {/* ACTION BUTTONS */}
          <div className="google-actions">
            <a href="tel:9219119832" className="google-btn primary">
              <Phone size={16} /> Call Now
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shri+Tirupati+Balaji+Communication+Etawah"
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
