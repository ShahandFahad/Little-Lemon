import React from "react";
import './Header.css';
import {AppWrap} from '../../wrapper';
import { images } from "../../constants";

const Header = () => {
    const headerData = {
        cafeTitle: "Little Lemon",
        cafeLocation: "Chicago",
        cafeDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora deleniti eum repellat explicabo ratione quisquam fugiat quidem. Tempora eius deserunt corrupti esse nemo earum, a doloremque minus molestias! Quia.",
        cafeButtonName: "Reserve a Table",
    }
    
    return ( 
    <header>
        
        <div className="app__header-data">
            <h1>
                {headerData.cafeTitle}
            </h1>
            <h3>
                {headerData.cafeLocation}
            </h3>
            <p>
                {headerData.cafeDescription}
            </p>
            <button>
                {headerData.cafeButtonName}
            </button>
        </div>
        <div className="app__header-image"
            style={{backgroundImage:`url(${images.resturantFood})`}}
        >

        </div>
    </header> );
}

export default AppWrap(Header, 'header-section', 'app__header');