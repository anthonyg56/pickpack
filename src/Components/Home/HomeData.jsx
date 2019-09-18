import React from 'react';
import {NavLink} from 'react-router-dom'
import IntroductionPic from '../../Img/Backgrounds/Home/background.jpg';

export const Introduction = () => 
    <div className="Section" style={{backgroundImage: "url(" + IntroductionPic + ")"}}>
        <div className="Overlay" id="Introduction">
            <div id="Title">
                <h1 style={{transform: "translateY(45px)"}}>Pick</h1>
                <h1 style={{paddingLeft: "40px", marginBottom: "10px"}}>Pack</h1>
                <NavLink to="/about" style={{transform: "translateY(65px)"}}>Learn More</NavLink>
            </div>
            <div id="Slogan">
                <h3>An online community where <span>PICKS</span> are shared with the <span style={{color: "#c7141a", fontSize: "1.75em"}}>PACK</span></h3>
            </div>
        </div>
    </div>

export const SubNav = () =>
    <div className="Subnav" id="Home-Subnav">
        <NavLink>Login/Register</NavLink>
    </div>