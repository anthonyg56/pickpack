import React from 'react';
import Header from './Misc/Header';
import Footer from './Misc/Footer';
import NavMenu from './Misc/NavMenu';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dashboard from './Dashboard/Dashboard';
import Odds from './Odds/Odds';
import Community from './Community/Community';
import Premium from './Premium/Premium';
import About from './About/About';

const Body = () => 
    <div className="Body">
        <Switch>
            <Route path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route path="/dashboard/myprofile" render={props => <Profile {...props} />} />
            <Route path="/dashboard/odds" render={props => <Odds {...props} />} />
            <Route path="/dashboard/community" render={props => <Community {...props} />} />
            <Route path="/dashboard/premium" render={props => <Premium {...props} />} />
            <Route path="/dashboard/about" render={props => <About {...props} />} />
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
