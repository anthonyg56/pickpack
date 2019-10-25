import React from 'react';
import Header from './Misc/Header';
import Footer from './Misc/Footer';
import NavMenu from './Misc/NavMenu';
import { Switch, Route } from 'react-router-dom';
import UserHome from '../Routes/UserHome'
import Odds from './Odds/Odds';
import Community from './Community/Community';
import Premium from './Premium/Premium';
import About from './About/About';

const Body = () => 
    <div className="Body">
        <UserHome />
        <Switch>
            <Route path="/odds" render={props => <Odds {...props} />} />
            <Route path="/community" render={props => <Community {...props} />} />
            <Route path="/premium" render={props => <Premium {...props} />} />
            <Route path="/about" render={props => <About {...props} />} />
        </Switch>
    </div>
    
    

const ContentBody = () => 
    <div className="Content-Body">
        <Header />
        <Body />
        <Footer />
    </div>

const Content = () =>
    <div className="Content">
        <NavMenu />
        <ContentBody />
    </div>

export default Content;
