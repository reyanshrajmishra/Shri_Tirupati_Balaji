import config from "../config";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDark(localStorage.getItem("darkMode") === "true");
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);

    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <div className="top-banner" style={{ background: isDark ? "#1f2937" : "var(--primary-color)" }}>
        <img src={isDark ? "../SHOP_BANNER_DARK.png" : "../SHOP_BANNER.png"} alt="Shop Banner" />
      </div>

      <section className="hero-clean">
        <div className="container hero-clean-inner">
          <h1>{config.businessName}</h1>
          <p>{config.tagline}</p>

          <div className="hero-buttons">
            <a href={`tel:${config.phone}`} className="primary-btn">
              Call Now
            </a>
            <a
              href={`https://wa.me/91${config.whatsapp}`}
              target="_blank"
              className="secondary-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
