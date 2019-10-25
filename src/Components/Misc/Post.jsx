import React from 'react'
import useAuth from '../../Hooks/useAuth'
import useProfile from '../../Hooks/useProfile'
import PostApi from '../../Api/PostApi'
import ProfileApi from '../../Api/ProfileApi'
import LikeOutline from '../../Img/Icons/Posts/like-outline-24px.png'
import LikeFilled from '../../Img/Icons/Posts/like-filled-24px.png'
import CommentIcon from '../../Img/Icons/Posts/comment-24px.png'

const Post =({post, key}) => {
    const [{profile}] = useProfile()
    const [{auth}] = useAuth()
    const like = () => {
        //PostApi.likePost(profile.general.id, auth.token, post._id)
        //ProfileApi.addLike(profile.general.id, post._id, auth.token)
    }
    const unlike = () => {
        //PostApi.unlikePost(profile.general.id, auth.token, post._id)
        //ProfileApi.removeLike(profile.general.id, post._id, auth.token)
    }
    const remove = () => {
        //PostApi.deletePost(post._id, auth.token)
        //ProfileApi.removePost(profile.general.id, post._id, auth.token)
    }
    console.log(post)
    const isLiked = 
        post.likes.indexOf(profile._id) === -1 
            ? 
        <img src={LikeOutline} alt='like-outline-icon' onClick={() => like()} /> 
            : 
        <img src={LikeFilled} alt='like-outline-icon' onClick={() => unlike()} />
    return(
        <div className='Post'>
            <p onClick={remove}>delete</p>
            <div id="Text">
                <p>{post.text}</p>
            </div>
            <div id="Post-User">
                {/*Profile Pic*/}
                <h4>{post.name}</h4>
                <p>{post.comments.length}<img src={CommentIcon} alt="comment icon" /></p>
                <p>{post.likes.length}{isLiked}</p>
            </div>
        </div>
    )
}

export default Post