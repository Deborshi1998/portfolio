import React, { useRef, useState, useEffect } from "react";
import "../styles/HeroSection.css";
import db from "../utils/firebaseSetup";
import { doc, getDoc } from "firebase/firestore";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import "animate.css";
function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [cvLink, setCvLink] = useState("");
  const myRef = useRef(null);

  useEffect(() => {
    const getCV = async () => {
      const docRef = doc(db, "mywork", "CV");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCvLink(docSnap.data().link);
      } else {
        console.log("Error in Retrieving CV");
      }
    };
    getCV();
  }, []);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#635985",
          backgroundColor: "#18122b",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="Hero-Section-Parent">
      <div className="Hero-Section" ref={myRef}>
        <div className="Hero-Section-Left animate__animated animate__fadeIn">
          <h3>Hi, I'm Debarshi</h3>
          <p>
            A passionate Web Developer with around 2 years of experience, I
            specialize in creating dynamic, high-performance websites using
            modern web technologies. My goal is to craft intuitive and
            aesthetically pleasing user experiences. I am ready to take on your
            next project and help bring your ideas to life on the web.
          </p>
          <div className="Hero-Section-Left-Buttons">
            <button
              onClick={() => {
                window.open(cvLink);
              }}
              className="Hero-Section-Left-Buttons-1"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="Hero-Section-Right">
          <img
            className="animate__animated animate__backInRight"
            id="debarshi_img"
            src="/debarshi.png"
            alt="Debarshi"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
