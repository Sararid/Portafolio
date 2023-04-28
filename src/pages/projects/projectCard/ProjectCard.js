import React from "react";
//style
import "../Projects.scss";

function ProjectCard({ link, title, image, icons }) {
    return (
        <div className="projects__card">
            <a href={link} className="projects__card--link" target="blanck">
                <h3 className="projects__card--title">{title}</h3>

                <img
                    className="projects__card--img"
                    src={image}
                    alt="tv show search engine"
                />

                <a className="projects__card--link" href={link} target="blanck">
                    SOURCE CODE
                </a>
            </a>

            <div>{icons.map((icon) => icon)}</div>
        </div>
    );
}

export default ProjectCard;
