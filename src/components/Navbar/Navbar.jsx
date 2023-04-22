import React from "react";
import './Navbar.css';
import { images } from "../../constants";
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { useState } from "react";

const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
    <nav className="app__navbar">
            {/* Desktop Navigation */}

            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>

        <ul className="app__navbar-links">
            {
                navItems.map((item) => {
                    return (
                        <li className="app__flex p_text"
                        key={`key-${item}`}>
                            <a href={`#${item}`}>
                                {item}
                            </a>
                        </li>
                    );
                })
            }
        </ul>

        {/* Mobile Navigation */}
        
        <div className="app__navbar-menu">
            <HiMenuAlt4
                onClick={() => { setToggle(true) }}
                className="app__navbar-hamburger"
            />
            {
             toggle &&  (
             <div>
                <HiX 
                    onClick={() => {
                        setToggle(false)
                    }} 
                    className="app__navbar-cancel"
                />
                <ul>
                    {
                        navItems.map(
                            (item) => {
                                return (
                                    <li key={{item}}>
                                        <a href={`#${item}`}
                                            onClick={() => { setToggle(false)}}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
             </div>)
            }
        </div>
    </nav>
    );
}


export default Navbar;