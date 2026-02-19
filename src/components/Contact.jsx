import config from "../config";
import { useState, useEffect } from "react";

export default function Contact() {
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
    <section className="contact fade-in">
      <div className="container">
        <h2>{config.contact.title}</h2>
        <div className="section-divider"></div>
        <p>
          <strong>Phone:</strong> {config.phone}
        </p>
        <p>
          <strong>Address:</strong> {config.address}
        </p>
        <iframe
          src={config.contact.mapEmbed}
          width="100%"
          height="300"
          style={{
            border: 0,
            marginTop: "30px",
            filter: isDark ? "invert(0.9) hue-rotate(180deg)" : "none",
            transition: "filter 0.3s ease",
          }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
