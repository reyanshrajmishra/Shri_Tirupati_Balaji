import config from "../config";
import { Phone, Mail, Sun, Moon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export default function TopBar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true");

  const applyColorScheme = (darkMode) => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--dark", "#f9fafb");
      root.style.setProperty("--dark2", "#111827");
      root.style.setProperty("--body-text", "#d1d5db");
      root.style.setProperty("--white", "#1f2937");
      root.style.setProperty("--bg-light", "#1a202c");
      root.style.setProperty("--bg-alt", "#2d3748");
      root.style.setProperty("--primary-light", "rgba(255, 117, 29, 0.15)");
      root.style.setProperty("--nav-bg", "rgba(31, 41, 55, 0.97)");
      root.style.setProperty("--nav-border", "rgba(255, 255, 255, 0.1)");
    } else {
      root.style.setProperty("--dark", "#111827");
      root.style.setProperty("--dark2", "#1f2937");
      root.style.setProperty("--body-text", "#6b7280");
      root.style.setProperty("--white", "#ffffff");
      root.style.setProperty("--bg-light", "#F5F6F8");
      root.style.setProperty("--bg-alt", "#f9fafb");
      root.style.setProperty("--primary-light", "rgba(255, 117, 29, 0.09)");
      root.style.setProperty("--nav-bg", "rgba(255, 255, 255, 0.97)");
      root.style.setProperty("--nav-border", "rgba(0, 0, 0, 0.06)");
    }
  };

  useLayoutEffect(() => {
    applyColorScheme(isDark);
    window.dispatchEvent(new Event("darkModeChange"));
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={16} style={{ flexShrink: 0 }} />
          <b style={{ color: "#ffffff", fontSize: "14px" }}>+91 {config.phone}</b>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Mail size={16} style={{ flexShrink: 0 }} />
            <b style={{ color: "#ffffff", fontSize: "14px" }}>{config.email}</b>
          </div>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s ease",
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
