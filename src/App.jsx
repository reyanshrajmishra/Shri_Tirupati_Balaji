import { useEffect } from "react";
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
import { updateSEO, seoData } from "./seoUtils";
import "./index.css";

function App() {
  useEffect(() => {
    updateSEO(seoData.title, seoData.description);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <GoogleBusiness />
      <About />
      <BookingForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
