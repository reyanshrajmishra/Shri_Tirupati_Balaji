import { ShieldCheck, Clock, IndianRupee } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="why-section">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="section-divider"></div>

        <div className="why-grid">
          <div className="why-card">
            <ShieldCheck size={40} />
            <h3>Trusted Service</h3>
            <p>Years of experience serving local customers.</p>
          </div>

          <div className="why-card">
            <Clock size={40} />
            <h3>Quick Repairs</h3>
            <p>Fast turnaround and mostly same-day solutions.</p>
          </div>

          <div className="why-card">
            <IndianRupee size={40} />
            <h3>Fair Pricing</h3>
            <p>Affordable rates with no hidden charges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
