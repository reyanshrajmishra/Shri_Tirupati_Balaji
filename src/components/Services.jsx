import config from "../config";
import {
  Smartphone,
  BatteryCharging,
  Wrench,
  ShieldCheck,
  Cpu,
  HardDrive,
} from "lucide-react";

const icons = [
  Smartphone,
  BatteryCharging,
  Cpu,
  HardDrive,
  Wrench,
  ShieldCheck,
];

export default function Services() {
  return (
    <>
      <section className="services fade-in">
        <div className="container">
          <h2>Our Services</h2>
          <div className="section-divider"></div>

          <div className="services-grid">
            {config.services.map((service, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div className="service-card" key={index}>
                  <Icon size={36} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="container">
          <h2>Devices We Repair</h2>
          <div className="section-divider"></div>

          <div className="brands-grid">
            <div className="brand-item">Apple</div>
            <div className="brand-item">Samsung</div>
            <div className="brand-item">Xiaomi / Redmi</div>
            <div className="brand-item">Oppo</div>
            <div className="brand-item">Vivo</div>
            <div className="brand-item">Realme</div>
            <div className="brand-item">OnePlus</div>
            <div className="brand-item">Lenovo</div>
            <div className="brand-item">Asus</div>
            <div className="brand-item">Acer</div>
            <div className="brand-item">And More.....</div>
          </div>

          <p className="brands-note">
            We are an independent repair shop and are not affiliated with these
            brands.
          </p>
        </div>
      </section>
    </>
  );
}
