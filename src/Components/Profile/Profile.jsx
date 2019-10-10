import React from 'react';
import auth from '../Auth/AuthHelper'
import PropTypes from 'prop-types'
import { ProfileComments, NewPost, ProfileContent, ProfilePosts, ProfileLikes, ProfilePicks, ProfileStats, ProfileTabs, ProfileBar, Comment, Liked, Post, Pick, Stat, SubNav } from './ProfileData'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { postsByUser, createPost } from '../../Redux/Actions/PostActions'
import { readProfile } from '../../Redux/Actions/ProfileActions'
import {updateTitle, updateSubNav} from '../../Redux/Actions/BaseActions'
import ProfilePic from '../../Img/Profile Pics/profilePic2.jpg'

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    errors: state.errors
})

class Profile extends React.Component {
    state = {
        posts: []
    }

    NewPost = data => {
        const jwt = this.props.auth
        let post = this.state.posts
        this.props.createPost({ 
            userId: jwt.user._id
        }, {
            post: data 
        }, {
            t: jwt.token
        }).then(data => this.UpdatePosts(data))
    }

    UpdatePosts = data => {
        let post = <Post name={this.props.auth.user.name} text={data.text} />
        let updatedPosts = this.state.posts
        updatedPosts.unshift(post)
        this.setState({posts: updatedPosts})
    }

    Posts = data => {
        console.log(data);
        let posts = data.map((item, key) => {
            console.log(item.text)
            return <Post name={this.props.auth.user.name} text={item.text} key={key} />
        });
        return posts
    }

    UNSAFE_componentWillMount = () => {
        const jwt = this.props.auth
        this.props.postsByUser(jwt.user._id, jwt.token)
        .then((data) => this.setState({posts: this.Posts(data)}))
        this.props.updateSubNav(<SubNav />)
        this.props.updateTitle('@' + this.props.profile.general.userName + ' Profile')
    }

    render(){
        return(
            <div className="Profile">
                <ProfileBar 
                    pic={ProfilePic} 
                    name={this.props.auth.user.name} 
                    bio={this.props.profile.general.bio} 
                />
                <div className="Profile-Content">
                    <ProfileTabs />
                    <ProfileContent
                        newPosts={
                            <NewPost newPost={
                                    data => this.NewPost(data)
                                } 
                            />
                        }
                        content={
                            <ProfilePosts 
                                posts={
                                    this.state.posts
                                } 
                            />
                        } 
                    />
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    postsByUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    readProfile: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired
}

export default connect( 
    mapStateToProps, 
    { 
        postsByUser,
        readProfile,
        updateTitle,
        updateSubNav,
        createPost
    })
    (withRouter(Profile));