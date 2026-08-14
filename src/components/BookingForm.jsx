import { useState } from "react";
import config from "../config";
import { Send } from "lucide-react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const message = `Hello, my name is ${name}. I need help with: ${issue}. Contact: ${phone}`;
    const url = `https://wa.me/91${config.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="section-tagline">Get Started</div>
        <h2 className="section-title">Book a Service</h2>
        <div className="section-divider"></div>

        <form onSubmit={handleSubmit}>
          <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input placeholder="Phone Number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <textarea placeholder="Describe the issue" value={issue} onChange={(e) => setIssue(e.target.value)} required />
          <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
            <Send size={16} /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
