import React from "react";
//style
import "./About.scss";
//component
import SkillsCard from "./skillsCard/SkillsCard";
//skills data
import { skills } from "../../data/skills";
//asset
import Avatar from "../../assets/avatar.jpg";

function About() {
    return (
        <section className="main">
            <div>
                <h1 className="main__title ">About me</h1>
            </div>
            <div className="main__aboutSection">
                <img
                    className="main__aboutSection--img"
                    src={Avatar}
                    width="200px"
                    height="200px"
                    alt="profile picture"
                />
                <h2 className="main__aboutSection--title">Who am I?</h2>
                <p className="main__aboutSection--description ">
                    My name is Sara and I am a junior front-end developer. I am based in
                    Barcelona, Spain. I am looking for a new job opportunity in front-end
                    development or full-stack. I enjoy coding things from scratch and
                    building projects to life in the browser.
                </p>
            </div>
            <div className="main__aboutSection--card">
                {skills.map((item) => (
                    <SkillsCard title={item.title} items={item.items} />
                ))}
            </div>
        </section>
    );
}

export default About;
