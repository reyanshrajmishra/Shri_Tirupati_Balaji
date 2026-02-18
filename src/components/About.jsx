import { TextAlignCenter } from "lucide-react";

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div>
          <h2 style={{ textAlign: "center" }}>About Our Shop</h2>
          <div className="section-divider"></div>
          <p>
            We provide reliable mobile and computer repair services with
            professional support and genuine parts.
          </p>
          <p>
            Customer satisfaction and long-term trust is our priority.
          </p>
        </div>

        <div>
          <img src="../SHOP_LOGO.jpeg" alt="Shop" />
        </div>
      </div>
    </section>
  );
}
