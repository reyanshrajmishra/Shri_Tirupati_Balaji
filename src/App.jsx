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

function App() {
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
