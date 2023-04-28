import React, { useRef } from "react";
//styles
import "./Projects.scss";
//projects data
import { projectsData } from "../../data/projects";
//component
import ProjectCard from "./projectCard/ProjectCard";

function Projects() {
    return (
        <section className="projects">
            <h3 className="projects__title">Projects</h3>
            <div className="projects__container">
                {projectsData.map((item) => (
                    <ProjectCard
                        link={item.link}
                        title={item.title}
                        image={item.image}
                        icons={item.icons}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
