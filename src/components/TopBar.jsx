import config from "../config";
import { Phone, Mail, Sun, Moon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export default function TopBar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");

  function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    const RR =
      R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
    const GG =
      G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
    const BB =
      B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }

  const applyColorScheme = (darkMode) => {
    const colors = darkMode ? config.darkMode : {
      primaryColor: config.primaryColor,
      secondaryColor: config.secondaryColor,
      accentColor: config.accentColor,
      bgLight: config.bgLight,
      bgLighter: config.bgLighter,
      bgAlt: config.bgAlt,
      bgAltLight: config.bgAltLight,
      textDark: config.textDark,
      textMuted: config.textMuted,
      textLight: config.textLight,
      gradientEndColor: config.gradientEndColor,
    };

    document.documentElement.style.setProperty("--light-bg", colors.bgLight);
    document.documentElement.style.setProperty("--section-alt", colors.bgAlt);
    document.documentElement.style.setProperty("--text-dark", colors.textDark);
    document.documentElement.style.setProperty("--text-muted", colors.textMuted);
    document.documentElement.style.setProperty("--text-light", colors.textLight);
    document.documentElement.style.setProperty("--bg-light", colors.bgLight);
    document.documentElement.style.setProperty("--bg-lighter", colors.bgLighter);
    document.documentElement.style.setProperty("--bg-alt", colors.bgAlt);
    document.documentElement.style.setProperty("--bg-alt-light", colors.bgAltLight);
    document.documentElement.style.setProperty("--primary-color", colors.primaryColor);
    document.documentElement.style.setProperty("--primary-dark", shadeColor(colors.primaryColor, -20));
    document.documentElement.style.setProperty("--secondary-color", colors.secondaryColor);
    document.documentElement.style.setProperty("--accent-color", colors.accentColor);
    document.documentElement.style.setProperty("--success-color", config.successColor);
    document.documentElement.style.setProperty("--warning-color", config.warningColor);
    document.documentElement.style.setProperty("--gradient-end", colors.gradientEndColor);

    // Update gradient variables
    document.documentElement.style.setProperty(
      "--hero-gradient",
      `linear-gradient(135deg, ${colors.bgLight} 0%, ${colors.gradientEndColor} 100%)`
    );
    document.documentElement.style.setProperty(
      "--booking-gradient",
      `linear-gradient(135deg, ${colors.bgLight} 0%, ${colors.gradientEndColor} 100%)`
    );
    document.documentElement.style.setProperty(
      "--contact-gradient",
      `linear-gradient(135deg, ${colors.bgLight} 0%, ${colors.gradientEndColor} 100%)`
    );
    document.documentElement.style.setProperty(
      "--why-gradient",
      `linear-gradient(135deg, ${colors.gradientEndColor} 0%, ${colors.bgLight} 100%)`
    );
    document.documentElement.style.setProperty(
      "--google-gradient",
      `linear-gradient(135deg, ${colors.gradientEndColor} 0%, ${colors.bgLight} 100%)`
    );
    document.documentElement.style.setProperty(
      "--about-gradient",
      `linear-gradient(135deg, ${colors.bgLighter} 0%, ${colors.gradientEndColor} 100%)`
    );

    if (darkMode) {
      document.documentElement.style.setProperty("--primary-dark", "#e85e0a");
    }
  };

  useLayoutEffect(() => {
    applyColorScheme(isDark);
    // Dispatch event on mount so other components know theme is applied
    window.dispatchEvent(new Event("darkModeChange"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    applyColorScheme(newDarkMode);
    window.dispatchEvent(new Event("darkModeChange"));
  };

  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <Phone size={19} /> <b style={{ color: "#ffffff", fontSize: "19px" }}>{config.phone}</b>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div>
            <Mail size={19} /> <b style={{ color: "#ffffff", fontSize: "19px" }}>{config.email}</b>
          </div>
          <button
            onClick={toggleDarkMode}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
            }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
