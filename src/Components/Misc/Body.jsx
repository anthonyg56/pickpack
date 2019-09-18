import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import Sports from '../Sports/Sports';
import Community from '../Community/Community';
import Premium from '../Premium/Premium';
import About from '../About/About';

const Body = () => 
    <div className="Body">
        <Switch>
            <Route path="/dashboard/myprofile" render={props => <Profile {...props} />} />
            <Route path="/dashboard" render={props => <Stats {...props} />} />
            <Route path="/dashboard/sports" render={props => <Sports {...props} />} />
            <Route path="/dashboard/community" render={props => <Community {...props} />} />
            <Route path="/dashboard/premium" render={props => <Premium {...props} />} />
            <Route path="/dashboard/about" render={props => <About {...props} />} />
        </Switch>
    </div>

export default Body;
    
