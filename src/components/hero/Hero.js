import React, { useRef } from "react";
//style
import "./Hero.scss";

//component
import About from "../about/About";

function Hero() {
    const refElement = useRef(null);
    const scrollTo = () => {
        if (refElement && refElement.current) {
            refElement.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className="container">
            <div className="container__hero">
                <h1> Software developer </h1>
                <div>
                    <button onClick={scrollTo} className="container__button">
                        More about me
                    </button>
                </div>
            </div>
            <div ref={refElement}>
                <About />
            </div>
        </div>
    );
}

export default Hero;
