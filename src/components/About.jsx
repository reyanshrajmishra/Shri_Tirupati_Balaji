import config from "../config";

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div>
          <h2 style={{ textAlign: "center" }}>{config.about.title}</h2>
          <div className="section-divider"></div>
          <p>{config.about.description1}</p>
          <p>{config.about.description2}</p>
        </div>

        <div>
          <img src="../SHOP_LOGO.jpeg" alt="Shop" />
        </div>
      </div>
    </section>
  );
}
