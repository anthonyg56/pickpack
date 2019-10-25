import React, {useState} from 'react'
import Post from '../Misc/Post'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostApi from '../../Api/PostApi'

const Likes = ({auth, misc, profile}) =>  {
    let initialState = PostApi.getLikesByUser(auth.user._id, auth.token)
    const [likes, updateLikes] = useState(initialState)
    const removePost = () => {

    }
    const addLike = () => {

    }

    const removeLike = () => {

    }
    return(
        <div className="User-Likes">
            <div className="User-Likes-Content">
                {
                    likes.map((item, key) => {
                        return <Post post={item} key={key} removePost={() => this.RemovePost(key)} addLike={() => this.AddNewLike(item)} removeLike={() => this.RemoveLike(key)} />
                    })
                }
            </div>
        </div>
    )
}
    

Likes.propType = {
    auth: PropTypes.object.isRequired,
    misc: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
    misc: state.misc
})

export default connect(mapStateToProps)(Likes)