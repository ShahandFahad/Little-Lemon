import React from "react";
import { AppWrap } from "../../../wrapper";
import './About.css';

const About = () => {
    return (
        <div
        className="app_about">
            <h1>About</h1>
        </div>
    );
}

export default AppWrap(About, 'about');