import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import WaterFooter from "./components/WaterFooter";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <SocialBar />
      <WaterFooter />
    </div>
  );
}

export default App;
