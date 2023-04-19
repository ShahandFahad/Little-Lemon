import React from "react";
import './Navbar.css';
import { images } from '../../constants';

export default function Navbar() {
    const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    return(
    <nav className="app__navbar">
        <div className="app__navbar-logo" >
            <a href="#">
                    <img src={images.logo} alt="logo image" />
            </a>
        </div>
        <ul className="app__navbar-links">
            {
                navItems.map((item) => {
                    return (
                    <li key={`key-${item}`}>
                        <a href={`#${item}`}>
                            {item}
                        </a>
                    </li>
                    );
                })
            }
        </ul>
    </nav>);
};

