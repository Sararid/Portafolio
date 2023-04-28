import React from "react";
//navigation
import { useLocation } from "react-router-dom";
//style
import "./Footer.scss";
//icons
import { BiDownArrow } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsTwitter, BsMailbox } from "react-icons/bs";

function Footer() {
    const colorFooter = useLocation().pathname === "/" ? "#883c82" : null
    return (
        <footer className="footer" style={{ backgroundColor: colorFooter }}>

            <div className="footer__sm">
                <div className="footer__sm--style">
                    <a
                        className="link_style"
                        href="https://www.linkedin.com/in/sara-rd/"
                        target="blank"
                    >
                        <BsLinkedin className="footer__sm--icon" />
                    </a>
                </div>
                <div>
                    <a
                        className="link_style"
                        href="https://github.com/Sararid"
                        target="blank"
                    >
                        <BsGithub className="footer__sm--icon" />
                    </a>
                </div>
                <div>
                    <a
                        className="link_style"
                        href="https://twitter.com/sara_rid"
                        title="Twitter"
                        target="_blank"
                    >
                        <BsTwitter className="footer__sm--icon" />
                    </a>
                </div>
                <div>
                    <a
                        className="link_style"
                        href="mailto:sarayridouane@gmail.com"
                        title="Correo"
                        target="_blank"
                    >
                        <BsMailbox className="footer__sm--icon" />
                    </a>
                </div>
            </div>
            <div className="footer__copy">
                <p>Designed and developed by Sara R. &copy2021</p>
            </div>
        </footer>
    );
}

export default Footer;
