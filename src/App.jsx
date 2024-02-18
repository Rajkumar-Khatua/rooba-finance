import "./App.css";
import AccessAlternativeInvestments from "./components/AccessAlternativeInvestments/AccessAlternativeInvestments";
import Discover_Section from "./components/Discover_Section/Discover_Section";
import Exposure from "./components/Exposure/Exposure";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover_Section />
      <AccessAlternativeInvestments />
      <Exposure />
    </>
  );
}

export default App;
