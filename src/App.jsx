import "./App.css";
import AccessAlternativeInvestments from "./components/AccessAlternativeInvestments/AccessAlternativeInvestments";
import ContactForm from "./components/ContactFrom/ContactForm";
import Discover_Section from "./components/Discover_Section/Discover_Section";
import Exposure from "./components/Exposure/Exposure";
import Hero from "./components/HeroSection/Hero";
import HowToInvest from "./components/HowToInvest/HowToInvest";
import Investmentclub from "./components/Investment club/Investmentclub";
import Navbar from "./components/Navbar/Navbar";
import OurPartners from "./components/OurPartners/OurPartners";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover_Section />
      <AccessAlternativeInvestments />
      <Exposure />
      <HowToInvest />
      <Investmentclub />
      <OurPartners />
      <ContactForm />
    </>
  );
}

export default App;
