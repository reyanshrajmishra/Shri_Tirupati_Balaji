import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import GoogleBusiness from "./components/GoogleBusiness";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import config from "./config";
import { useEffect } from "react";

function App() {
  function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    const RR =
      R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
    const GG =
      G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
    const BB =
      B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      config.primaryColor,
    );

    // Auto-generate darker shade
    document.documentElement.style.setProperty(
      "--primary-dark",
      shadeColor(config.primaryColor, -20),
    );
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <GoogleBusiness />
      <Services />
      <WhyUs />
      <About />
      <BookingForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
