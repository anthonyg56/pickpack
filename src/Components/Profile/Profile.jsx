import React from 'react'
import Posts from './Posts'
import Stats from './Stats'
import Picks from './Picks'
import Likes from './Likes'
import Comments from './Comments'
import {Route, NavLink} from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import useProfile from '../../Hooks/useProfile'
import ProfilePic from '../../Img/Profile Pics/profilePic2.jpg'

const Profile = () => {
    const [{profile}] = useProfile()
    const [{auth}] = useAuth()
    return(
        <div className="Profile">
            <div className="Profile-Bar">
                <div className="Profile-Header">
                        <img src={ProfilePic} alt="profile pic"/>
                        <h2>{auth.user.name}</h2>
                        <p>{profile.bio}</p>
                    </div>
                    <div className="Body">
                        <h3>{}</h3>
                        <h3>{}</h3>
                        <h3>{}</h3>
                </div>
            </div>
            <div className="Profile-Content">
                <div className="Tabs">
                    <div className="Tab-Item" id="Posts">
                        <h2><NavLink to="/profile">Posts</NavLink></h2>
                    </div>
                    <div className="Tab-Item" id="Picks">
                        <h2><NavLink to="/profile/picks">Picks</NavLink></h2>
                    </div>
                    <div className="Tab-Item" id="Stats">
                        <h2><NavLink to="/profile/stats">Stats</NavLink></h2>
                    </div>
                    <div className="Tab-Item" id="Likes">
                        <h2><NavLink to="/profile/likes">Likes</NavLink></h2>
                    </div>
                    <div className="Tab-Item" id="All-Activity">
                        <h2><NavLink to="/profile/comment">Comment</NavLink></h2>
                    </div>
                </div>
                <div className="User-Content">
                    <Route exact path="/profile" component={props => <Posts {...props} />} />
                    <Route path="/profile/picks" component={props => <Picks {...props} />} />
                    <Route path="/profile/stats" component={props => <Stats {...props} />} />
                    <Route path="/profile/likes" component={props => <Likes {...props} />} />
                    <Route path="/profile/comments" component={props => <Comments {...props} />} />
                </div>
            </div>
        </div>
    );
}

export default Profile;