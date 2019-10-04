import React from 'react';
import auth from '../Auth/AuthHelper'
import PropTypes from 'prop-types'
import { ProfileComments, ProfileContent, ProfilePosts, ProfileLikes, ProfilePicks, ProfileStats, ProfileTabs, ProfileBar, Comment, Liked, Post, Pick, Stat } from './ProfileData'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { postsByUser } from '../../Redux/Actions/PostActions'

const mapStateToProps = state => ({
    profile: state.profile
})

class Profile extends React.Component {

    Posts = () => {
        const data = this.props.profile.posts
        console.log(data);
        return data.map((item, key) => {
            return <Post name={item.postedBy.name} text={item.text} key={key} />
        });
    }

    UNSAFE_componentWillMount = () => {
        const jwt = auth.isAuthenticated()
        this.props.postsByUser(jwt.user._id, jwt.token)
    }

    render(){
        return(
            <div className="Profile">
                <ProfileBar />
                <div className="Profile-Content">
                    <ProfileTabs />
                    <ProfileContent content={<ProfilePosts posts={this.Posts()} />} />
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    postsByUser: PropTypes.func.isRequired
}

export default connect( 
    mapStateToProps, 
    { 
        postsByUser
    })
    (withRouter(Profile));