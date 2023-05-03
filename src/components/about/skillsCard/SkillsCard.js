import React from "react";

//icons
import { BsTools } from "react-icons/bs";
import { GiToolbox } from "react-icons/gi";
//styles
import "./SkillsCard.scss";

function SkillsCard({ title, items }) {
    return (
        <div className="cardSkills">
            <div className="cardSkills__content">
                <div className="cardSkills__front">
                    <h2 className="cardSkills__front--title">{title}</h2>
                    {title === "Skills" ? (
                        <GiToolbox className="cardSkills__front--icon" />
                    ) : (
                        <BsTools className="cardSkills__front--icon" />
                    )}
                </div>
                <div className="cardSkills__back">
                    <ul className="cardSkills__tech">
                        {items.map((element) => (
                            <li className="cardSkills__tech--item">{element}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;
