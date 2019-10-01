import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {changeNavBar} from '../../Redux/Actions/Actions';

import ProfileIcon from '../../Img/Icons/Misc/Nav/profile.png';
import AnalysisIcon from '../../Img/Icons/Misc/Nav/graph.png';
import SportIcon from '../../Img/Icons/Misc/Nav/sports.png';
import CommunityIcon from '../../Img/Icons/Misc/Nav/community.png';
import PremiumIcon from '../../Img/Icons/Misc/Nav/premium.png';
import AboutIcon from '../../Img/Icons/Misc/Nav/about.png';

import CloseIcon from '../../Img/Icons/Misc/Nav/close-outline.png';
import OpenIcon from '../../Img/Icons/Misc/Nav/menu-outline.png';

const NavMenuItems = props => 
    <div className="Nav-Menu-Items">
        <NavLink to="/dashboard/profile" activeClassName="Active" className="Nav-Icon" id="Profile">
            <img src={ProfileIcon} alt="profile-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>Profile</p>
        </NavLink>
        <NavLink to="/dashboard/in-depth-analysis" activeClassName="Active" className="Nav-Icon" id="Analysis">
            <img src={AnalysisIcon} alt="analysis-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>In Depth Analysis</p>
        </NavLink>
        <NavLink to="/dashboard/sport" activeClassName="Active" className="Nav-Icon" id="Sports">
            <img src={SportIcon} alt="sports-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>Sports</p>
        </NavLink>
        <NavLink to="/dashboard/community" activeClassName="Active" className="Nav-Icon" id="Community">
            <img src={CommunityIcon} alt="community-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>Community</p>
        </NavLink>
        <NavLink to="/dashboard/premium" activeClassName="Active" className="Nav-Icon" id="Premium">
            <img src={PremiumIcon} alt="premium-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>Premium</p>
        </NavLink>
        <NavLink to="/dashboard/about" activeClassName="Active" className="Nav-Icon" id="About">
            <img src={AboutIcon} alt="about-icon" />
            <p style={{display: props.isOpen === true ? "inline-block" : "none"}}>About</p>
        </NavLink>
    </div>

const NavButton = props =>{
    const nav = props.isOpen === true ? false : true;
    return(
        <div className="Nav-Menu-Button" onClick={() => props.change(nav)}>
            <img src={props.isOpen === true ? CloseIcon : OpenIcon} alt="menu-button-icon" />
        </div>
    )
}
    

const NavMenu = ({ NavOpen, changeNavBar }) => {
    return(
        <div className="Nav-Menu">
            <NavButton change={flip => changeNavBar(flip)} isOpen={NavOpen} />
            <NavMenuItems isOpen={NavOpen} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      changeNavBar: navBar => dispatch(changeNavBar(navBar))
    };
}

const mapStateToProps = state => {
    return {
      NavOpen: state.NavOpen
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);