import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/home/Home";
import NoPage from "../pages/NoPage";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
function NavigationScreens() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </main>
        </>
    );
}

export default NavigationScreens;
