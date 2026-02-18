import config from "../config";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="logo-wrapper">
          <img src="../SHOP_LOGO.jpeg" alt="Shop Logo" className="logo" />
          <h2>{config.businessName}</h2>
        </div>

        <a href={`tel:${config.phone}`} className="call-btn">
          Call Now
        </a>
      </div>
    </nav>
  );
}
