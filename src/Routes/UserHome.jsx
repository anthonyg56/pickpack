import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {NavLink} from "react-router-dom"
import Profile from '../Components/Profile/Profile'
import Dashboard from '../Components/Dashboard/Dashboard'
import useMisc from '../Hooks/useMisc'
import useProfile from '../Hooks/useProfile'
import ProfileApi from '../Api/ProfileApi'
import useAuth from '../Hooks/useAuth'

const UserHome = () => {
    //const [{misc}, {updateHeader}] = useMisc()
    //const [{profile}] = useProfile()
    //useEffect(() => updateHeader(<SubNav />, 'Welcome ' + profile.userName + '!'))
    return(
        <div style={{height: '100%'}}>
                <Route path="/dashboard" render={props => <Dashboard {...props} />} />
                <Route path="/profile" render={props => <Profile {...props} />} />
        </div>
    )
}

const SubNav = () => 
    <div className="Profile-Sub-Nav">
        <NavLink to="/dashboard" activeClassName="Active"><h2>My Dashboard</h2></NavLink>
        <NavLink to="/profile" activeClassName="Active"><h2>My Profile</h2></NavLink>
        <NavLink to="/messages" activeClassName="Active"><h2>Messages</h2></NavLink>
    </div>

export default UserHome