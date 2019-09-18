import React from 'react';
import {NavLink} from 'react-router-dom';

import FeaturesPic from '../../Img/Backgrounds/Landing/features.jpg';
import AboutPic from '../../Img/Backgrounds/Landing/oregon.jpg';
import IntroductionPic from '../../Img/Backgrounds/Landing/welcome.jpg';
import JoinTodayPic from '../../Img/Backgrounds/Landing/Join.jpg';
import DesignPic from '../../Img/Backgrounds/Landing/lebron.jpg';

import CentralizedIcon from '../../Img/Icons/Landing/Features/decentralized.png';
import LiveBetsIcon from '../../Img/Icons/Landing/Features/live.png';
import DataIcon from '../../Img/Icons/Landing/Features/data.png';
import CommunitiesIcon from '../../Img/Icons/Landing/Features/social-care.png';

import TwitterIcon from '../../Img/Icons/Landing/Footer/twitter1.png';
import FacebookIcon from '../../Img/Icons/Landing/Footer/facebook1.png';
import YoutubeIcon from '../../Img/Icons/Landing/Footer/youtube12.png';
import InstagramIcon from '../../Img/Icons/Landing/Footer/instagram1.png';

import DotOutline from '../../Img/Icons/Landing/Footer/dot-outline.png';
import DotFilled from '../../Img/Icons/Landing/Footer/dot.png';

import RightArrow from '../../Img/Icons/Landing/Footer/right-arrow.png';
import LeftArrow from '../../Img/Icons/Landing/Footer/left-arrow.png';

const Introduction = () => 
    <div className="Section" id="Introduction">
        <div id="Title">
            <h1 style={{transform: "translateY(45px)"}}>Pick</h1>
            <h1 style={{paddingLeft: "40px", marginBottom: "10px"}}>Pack</h1>
            <NavLink to="/about" style={{transform: "translateY(65px)"}}>Learn More</NavLink>
        </div>
        <div id="Slogan">
            <h3>An online community where <span style={{color: "#ea2340", fontSize: "1.75em"}}>PICKS</span> are shared with the <span style={{color: "#ea2340", fontSize: "1.75em"}}>PACK</span></h3>
        </div>
    </div>

const About = () =>
    <div className="Section" id="About">
        
    </div>

const Features = () => 
    <div className="Section" id="Features">
        <div className="Title">
            <h1>Key Features</h1>
        </div>
        <div className="Services-Description">
            <div className="Service" id="Centralized">
                <img src={CentralizedIcon} alt="centralized-icon"/>
                <h3>Centralized Platform</h3>
                <p>Gain access to exclusive features and achieve more with your time and money. We fully equip our members with powerful tools and resources designed to improve their odds all on one platform, even if they aren't in their favor.</p>
            </div>
            <div className="Service" id="Live-Bets">
                <img src={LiveBetsIcon} alt="live-bets-icon"/>
                <h3>Live bets</h3>
                <p>With the constant flow of changing variables during a game, live betting empowers consumers with the opprotunity to predict momentum swings and strategically place bets at the right price as events unfold live.</p>
            </div>
            <div className="Service" id="Data">
                <img src={DataIcon} alt="data-analysis-icon"/>
                <h3>Visual Data Analysis</h3>
                <p>Strengthen the credibility of your portfolio and stay informed about the source of your earnings. Our members benefit from an in-depth analysis of their pick history over any span of time visually onto a graphs or chart.</p>
            </div>
            <div className="Service" id="Communities">
                <img src={CommunitiesIcon} alt="communities-icon"/>
                <h3>Online Communities</h3>
                <p>Be part of an online community packed with people who love sports! Share and discuss picks posted within the community, compete for leader-board positions, and meet so many other people who want to win big.</p>
            </div>
        </div>
    </div>

const Design = () => 
    <div className="Section" id="Design">
        
    </div>

const JoinToday = () => 
    <div className="Section" id="Join-Today" >
        
    </div>

export const LoginRegisterLink = () => 
    <div className="Login-Register-Link">
        <NavLink to="/auth/login">Login/Register</NavLink>
    </div>

export const LandingNav = props => 
    <div className="Nav">
        <h2 className={(props.Index === 0 ? "Active " : "") + "Landing-Nav"} onClick={props.Welcome} >Welcome</h2>
        <h2 className={(props.Index === 1 ? "Active " : "") + "Landing-Nav"} onClick={props.About} >About</h2>
        <h2 className={(props.Index === 2 ? "Active " : "") + "Landing-Nav"} onClick={props.Features} >Features</h2>
        <h2 className={(props.Index === 3 ? "Active " : "") + "Landing-Nav"} onClick={props.Design} >Design</h2>
        <h2 className={(props.Index === 4 ? "Active " : "") + "Landing-Nav"} onClick={props.Join} >Join Free Today!</h2>
    </div>

export const IndexNumber = props => 
    <div className="Index-Number">
        <h2><span style={{transform: "translateY(-20px)", color: "#ffffff"}}>{props.Index + 1}</span> / <span style={{transform: "translateY(20px)", color: "#ffffff"}}>5</span></h2>
    </div>

export const SocialMedia = () => 
    <div className="Social-Media">
        <a href="www.twitter.com"><img src={TwitterIcon} alt="twitter-icon"/></a>
        <a href="www.facebook.com"><img src={FacebookIcon} alt="facebook-icon"/></a>
        <a href="www.instagram.com"><img src={InstagramIcon} alt="instagram-icon"/></a>
        <a href="www.youtube.com"><img src={YoutubeIcon} alt="youtube-icon"/></a>
    </div>

export const Arrows = props => 
    <div className="Arrows">
        <div className="Back" onClick={props.Back} style={{display: props.Index === 0 ? 'none' : 'inline'}}>
        <h2>Back</h2><img src={LeftArrow} alt="left-arrow-icon"/>
        </div>
        <div className="Next" onClick={props.Next} style={{display: props.Index === 4 ? 'none' : 'inline'}}>
        <h2>Next</h2><img src={RightArrow} alt="right-arrow-icon"/>
        </div>
    </div>


export const IndexIndicator = props => 
    <div className="Index-Indicator">
        <img src={props.Index === 0 ? DotFilled : DotOutline} onClick={props.Welcome} alt="dot"/>
        <img src={props.Index === 1 ? DotFilled : DotOutline} onClick={props.About} alt="dot"/>
        <img src={props.Index === 2 ? DotFilled : DotOutline} onClick={props.Features} alt="dot"/>
        <img src={props.Index === 3 ? DotFilled : DotOutline} onClick={props.Design} alt="dot"/>
        <img src={props.Index === 4 ? DotFilled : DotOutline} onClick={props.Join} alt="dot"/>
    </div>

export const Sections = [
    {
        Component: <Introduction />,
        Pic: IntroductionPic
    },
    {
        Component: <About />,
        Pic: AboutPic
    },
    {
        Component: <Features />,
        Pic: FeaturesPic
    },
    {
        Component: <Design />,
        Pic: DesignPic
    },
    {
        Component: <JoinToday />,
        Pic: JoinTodayPic
    }
];