import config from "../config";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div style={{ textAlign: "center" }}>
          <div className="section-tagline">About Us</div>
          <h2>{config.about.title}</h2>
          <div className="section-divider"></div>
          <p className="about-description">{config.about.description1}</p>
          <p className="about-description">{config.about.description2}</p>
        </div>

        <div>
          <img src="/SHOP_LOGO.jpeg" alt={config.businessName} />
        </div>
      </div>
    </section>
  );
}
