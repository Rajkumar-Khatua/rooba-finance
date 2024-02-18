import "./App.css";
import Discover_Section from "./components/Discover_Section/Discover_Section";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover_Section/>
    </>
  );
}

export default App;
