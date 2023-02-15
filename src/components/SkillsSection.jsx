import React from "react";
import "../styles/HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function SkillsSection() {
  return (
    <div className="Skills-Parent">
      <div className="Skills-Background"></div>

      <div
        style={{
          zIndex: 2,
        }}
        data-aos="zoom-in-up"
        className="Skill-Section-Left"
      >
        <h3>My Skills</h3>
        <p
          style={{
            color: "burlywood",
          }}
        >
          Languages
        </p>
        <p
          style={{
            color: "#FFED00",
          }}
        >
          JavaScript, HTML, CSS, Java, Go
        </p>
        <p
          style={{
            color: "burlywood",
          }}
        >
          Frameworks
        </p>
        <p
          style={{
            color: "#FFED00",
          }}
        >
          Reactjs, Nextjs, Chakra UI, TailwindCSS
        </p>
        <p
          style={{
            color: "burlywood",
          }}
        >
          Technologies & Patterns
        </p>
        <p
          style={{
            color: "#FFED00",
          }}
        >
          Firebase, AWS, Vercel, Git, Github, Chrome devtools, VSCode, CI/CD
          Responsive design, SOLID principles & Figma.
        </p>
      </div>
      <div
        style={{
          zIndex: 2,
        }}
        data-aos="flip-left"
        className="Skill-Section-Right"
      >
        <img
          id="debarshi_skill_img"
          src="/Debarshi_Skill.png"
          alt="Debarshi Skill"
        />
      </div>
    </div>
  );
}

export default SkillsSection;
