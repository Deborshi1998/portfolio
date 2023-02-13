import React, { useState, useEffect } from "react";
import "../styles/Work.css";
import db from "../utils/firebaseSetup";
import { doc, getDoc } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Work() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const docRef = doc(db, "mywork", "Projects");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().project_list);
        setProjects(docSnap.data().project_list);
      } else {
        alert("No such document!");
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <div className="work-parent">
        <div data-aos="zoom-in" className="work-header">
          <h3>My Personal Projects</h3>
        </div>
        <div className="work-text">
          <p id="subheading">Here are some of my projects</p>
        </div>
        <div className="work-projects">
          {projects.map((project) => {
            return (
              <>
                <div
                  className="project-box"
                  data-aos="zoom-in"
                  key={project.name}
                >
                  <div>
                    <img
                      className="project-image"
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      onMouseEnter={(e) => (e.currentTarget.src = project.gif)}
                      onMouseLeave={(e) =>
                        (e.currentTarget.src = project.image)
                      }
                    />
                  </div>
                  <div className="project-text">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-github-link">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <button className="github_button">Github</button>
                    </a>
                  </div>
                  <div className="project-live-link">
                    <a
                      href={project.hosted_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="hosted_button">Hosted Link</button>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
