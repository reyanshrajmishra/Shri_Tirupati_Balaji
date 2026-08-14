import config from "../config";
import { ShieldCheck, Clock, Wrench, BadgeCheck } from "lucide-react";

const icons = [ShieldCheck, Clock, Wrench, BadgeCheck];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {config.trustPoints.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div className="trust-item" key={index}>
              <Icon size={20} />
              {item.title}
            </div>
          );
        })}
      </div>
    </section>
  );
}