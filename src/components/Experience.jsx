import React from "react";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="experience-parent">
      <div className="experience-header">
        <h3>My Experience</h3>
      </div>
      <div className="experience-body">
        <div className="experience-text">
          <p className="experience-company">Apisero India Private Limited</p>
          <p className="experience-title">Software Engineer</p>
          <p className="experience-time">May 2021 - Present</p>
        </div>
        <div>
          <img className="experience-image" src="/work.png" alt="work" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
