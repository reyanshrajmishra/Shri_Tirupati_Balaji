import config from "../config";

export default function Hero() {
  return (
    <>
      <div className="top-banner">
        <img src="../SHOP_BANNER.png" alt="Shop Banner" />
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
