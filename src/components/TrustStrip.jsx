import { ShieldCheck, Clock, BadgeCheck, Wrench } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="trust-strip fade-in">
      <div className="container">
        <div className="trust-grid">

          <div className="trust-item">
            <ShieldCheck size={22} />
            Genuine Parts
          </div>

          <div className="trust-item">
            <Clock size={22} />
            Mostly Same-Day Repairs
          </div>

          <div className="trust-item">
            <Wrench size={22} />
            15+ Years Experience
          </div>

          <div className="trust-item">
            <BadgeCheck size={22} />
            Service Warranty (on Accessories)
          </div>

        </div>
      </div>
    </section>
  );
}
