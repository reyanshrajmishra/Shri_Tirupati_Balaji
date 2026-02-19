import { ShieldCheck, Clock, BadgeCheck, Wrench } from "lucide-react";
import config from "../config";

const icons = [ShieldCheck, Clock, Wrench, BadgeCheck];

export default function TrustStrip() {
  return (
    <section className="trust-strip fade-in">
      <div className="container">
        <div className="trust-grid">
          {config.trustPoints.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div className="trust-item" key={index}>
                <Icon size={22} />
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
