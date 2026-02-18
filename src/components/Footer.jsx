import config from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>{config.businessName}</h3>
          <p>{config.tagline}</p>
        </div>

        <div>
          <p><strong>Phone:</strong> {config.phone}</p>
          <p><strong>Address:</strong> {config.address}</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {config.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
