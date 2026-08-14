import config from "../config";
import { Smartphone, BatteryCharging, Wrench, ShieldCheck, Cpu, HardDrive } from "lucide-react";

const icons = [Smartphone, BatteryCharging, Cpu, HardDrive, Wrench, ShieldCheck];

const brandDomains = {
  "Apple": "apple.com",
  "Google": "google.com",
  "Honor": "honor.com",
  "Huawei": "huawei.com",
  "Motorola": "motorola.com",
  "OnePlus": "oneplus.com",
  "Oppo": "oppo.com",
  "Realme": "realme.com",
  "Samsung": "samsung.com",
  "Sony": "sony.com",
  "Vivo": "vivo.com",
  "Xiaomi / Redmi": "mi.com",
};

export default function Services() {
  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <div className="section-tagline">What We Do</div>
          <h2 className="section-title">Our Services</h2>
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

      <section className="brands" id="devices">
        <div className="container">
          <div className="section-tagline">All Major Brands</div>
          <h2 className="section-title">Devices We Repair</h2>
          <div className="section-divider"></div>

          <div className="brands-grid">
            {config.devices.map((device, index) => {
              const domain = brandDomains[device];
              return (
                <div className="brand-item" key={index}>
                  {domain && (
                    <img
                      src={`https://logo.tomba.io/${domain}?size=64`}
                      alt={`${device} logo`}
                      className="brand-logo"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  )}
                  <span>{device}</span>
                </div>
              );
            })}
            <div className="brand-item more">And More...</div>
          </div>

          <p className="brands-note">
            We are an independent repair shop and are not affiliated with these brands.
          </p>
        </div>
      </section>
    </>
  );
}
