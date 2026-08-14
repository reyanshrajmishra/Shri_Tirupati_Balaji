import { ShieldCheck, Clock, IndianRupee } from "lucide-react";
import config from "../config";

const icons = [ShieldCheck, Clock, IndianRupee];

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="section-tagline">Why Us</div>
        <h2 className="section-title">Why Choose Us</h2>
        <div className="section-divider"></div>

        <div className="why-grid">
          {config.whyUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div className="why-card" key={index}>
                <Icon size={40} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
