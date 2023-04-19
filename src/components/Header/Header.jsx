import React from "react";
import './Header.css';
import {AppWrap} from '../../wrapper';
import { images } from "../../constants";
import BlockRevealAnimation from 'react-block-reveal-animation';

import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations'; 

const Pulse = styled.div`animation: 6s ${keyframes`${pulse}`} infinite`;

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
            <BlockRevealAnimation color="#F4CE14">
                <h1>
                    {headerData.cafeTitle}
                </h1>
            </BlockRevealAnimation>
            <BlockRevealAnimation color='#EDEFEE'>
                <h3>
                    {headerData.cafeLocation}
                </h3>
                <p>
                    {headerData.cafeDescription}
                </p>
            </BlockRevealAnimation>
            <BlockRevealAnimation color="#F4CE14">
                <button>
                    {headerData.cafeButtonName}
                </button>
            </BlockRevealAnimation>
        </div>
        <BlockRevealAnimation color='#333333'>
            <Pulse>
                <div 
                    className="app__header-image"
                    style={{backgroundImage:`url(${images.resturantFood})`}}
                />
            </Pulse>
        </BlockRevealAnimation>
    </header> );
}

export default AppWrap(Header, 'Landing', 'app__header');