import config from "../config";

export default function Contact() {
  return (
    <section className="contact fade-in">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="section-divider"></div>
        <p>
          <strong>Phone:</strong> {config.phone}
        </p>
        <p>
          <strong>Address:</strong> {config.address}
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.407694852673!2d79.0458694758032!3d26.74890057684953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x300660a57ea783cd!2sShri%20Tirupati%20Balaji%20Communication%2C%20Etawah%2C%20UP%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999"
          width="100%"
          height="300"
          style={{ border: 0, marginTop: "30px" }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
