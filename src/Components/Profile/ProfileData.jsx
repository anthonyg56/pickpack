import React, {useState} from 'react'
import PropTypes from "prop-types"
import auth from '../Auth/AuthHelper'
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import useForm from 'react-hook-form'
import { postsByUser } from '../../Redux/Actions/PostActions'

const ProfilePosts = props => {
    const { posts } = props;
    return(
        <div className="Content-Items">
            { posts }
        </div>
    )
}

const ProfileComments = props => {

}

const ProfileLikes = props => {

}

const ProfilePicks = props => {

}

const ProfileStats = props => {

}

const ProfileBar = props => {
    const { name, pic, bio, follower, following, reputation } = props;
    return(
        <div className="Profile-Bar">
            <div className="Profile-Header">
                <img src={pic} />
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
            <div className="Body">
                <h3>{follower}</h3>
                <h3>{following}</h3>
                <h3>{reputation}</h3>
            </div>
        </div>
    )
}

const ProfileTabs = props => {

    return(
        <div className="Tabs">
            <div className="Tab-Item" id="Posts">
                <h2>Posts</h2>
            </div>
            <div className="Tab-Item" id="Picks">
                <h2>Picks</h2>
            </div>
            <div className="Tab-Item" id="Likes">
                <h2>Likes</h2>
            </div>
            <div className="Tab-Item" id="Stats">
                <h2>Stats</h2>
            </div>
            <div className="Tab-Item" id="All-Activity">
                <h2>All Activity</h2>
            </div>
        </div>
    )
}

const ProfileContent = props => {
    const { content, newPosts } = props
    return(
        <div className="User-Content">
            <div className="New-Post">
                {newPosts}
            </div>
            { content }
        </div>
    )
}

const Liked = props => {

}

const Post = props => {
    return(
        <div className="Content-Item" id="Post">
            <div id="Text">
                <p>{props.text}</p>
            </div>
            <div id="Post-User">
                {/*<img />*/}
                <h4>{props.name}</h4>
                <p>{/* Comments */}</p>
                <p>{/* Likes */}</p>
            </div>
        </div>
    )
}

const Comment = props => {

}

const Pick = props => {

}

const Stat = props => {

}

const NewPost = props => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => props.newPost(data)
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="text" placeholder="Share Your Wisdom.." name="text" ref={register({ required: true })} />
            <input id="submit" type="submit" />
        </form>
    )
}

const SubNav = () => 
    <div className="Profile-Sub-Nav">
        <NavLink to="/timeline" activeClassName="Active"><h2>Timeline</h2></NavLink>
        <NavLink to="/profile" activeClassName="Active"><h2>My Profile</h2></NavLink>
        <NavLink to="/messages" activeClassName="Active"><h2>Messages</h2></NavLink>
    </div>


Post.propType = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

ProfilePosts.propType = {
    posts: PropTypes.object.isRequired
}

export {
    ProfileComments,
    ProfileContent,
    ProfilePosts,
    ProfileLikes,
    ProfilePicks,
    ProfileStats,
    ProfileTabs,
    ProfileBar,
    Comment,
    NewPost,
    SubNav,
    Liked,
    Post,
    Pick,
    Stat,
}