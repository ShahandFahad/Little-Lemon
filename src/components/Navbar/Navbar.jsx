import React from "react";
import './Navbar.css';
import { images } from '../../constants';

export default function Navbar() {
    const navElements = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    return(
    <nav id="Home">
        <ul>
            <li>
                <a href="#Home">
                    <img src={images.logo} alt="logo image" />
                </a>
            </li>
            {
                navElements.map((element) => {
                    return (
                    <li key={`key-${element}`}>
                        <a href={`#${element}`}>
                            {element}
                        </a>
                    </li>
                    );
                })
            }
        </ul>
    </nav>);
};

