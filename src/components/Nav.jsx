import React from "react";
import '../assets/styles/Nav.css';
function Nav () {
    return (
        <div className="nav">
            <h1> Allison Kidd </h1>
           <a href="AboutMe"> About Me</a>
           <a href="Portfolio"> Portfolio</a>
           <a href="Resume"> Resume</a>
           <a href="Contact"> Contact</a>
        </div>
    );
};

export default Nav;