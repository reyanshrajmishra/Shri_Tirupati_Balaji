import config from "../config";
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div>
          <Phone size={19} /> <b style={{ color: "#ffffff", fontSize: "19px" }}>{config.phone}</b>
        </div>
        <div>
          <Mail size={19} /> <b style={{ color: "#ffffff", fontSize: "19px" }}>{config.email}</b>
        </div>
      </div>
    </div>
  );
}
