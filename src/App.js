import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Intro from "./components/LoadingIntro";
import SkillsSection from "./components/SkillsSection";
import Work from "./components/Work";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Intro />
      ) : (
        <>
          <HeroSection />
          <SkillsSection />
          <Work />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
