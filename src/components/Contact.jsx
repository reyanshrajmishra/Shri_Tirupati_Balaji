import config from "../config";
import { Phone, MapPin, Navigation } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode") === "true");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDark(localStorage.getItem("darkMode") === "true");
    };
    window.addEventListener("darkModeChange", handleDarkModeChange);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMapLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-tagline">Get in Touch</div>
        <h2 className="section-title">{config.contact.title}</h2>
        <div className="section-divider"></div>

        <p className="contact-detail">
          <Phone size={16} style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }} />
          <strong>Phone:</strong> +91 {config.phone}
        </p>
        <p className="contact-detail">
          <MapPin size={16} style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }} />
          <strong>Address:</strong> {config.address}
        </p>

        <div className="contact-map" ref={mapRef}>
          {mapLoaded ? (
            <iframe
              src={config.contact.mapEmbed}
              width="100%"
              height="360"
              style={{
                border: 0,
                filter: isDark ? "invert(0.9) hue-rotate(180deg)" : "none",
                transition: "filter 0.3s ease",
              }}
              loading="lazy"
              title="Shop Location"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <a
              className="map-placeholder"
              href={config.googleBusiness.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={24} />
              <span>Open location in Google Maps</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}