import React from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import { createPost, postsByUser } from '../../Redux/Actions/PostActions'
import auth from '../Auth/AuthHelper'
import PropTypes from "prop-types"

const NewPost = props => {
    const jwt = auth.isAuthenticated()
    const { register, handleSubmit } = useForm()
    const onSubmit = data => props.createPost({ 
            userId: jwt.user._id
        }, {
            post: data 
        }, {
            t: jwt.token
        })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="text" ref={register({ required: true })} />
            <input type="submit" />
        </form>
    )
}

NewPost.propTypes = {
    createPost: PropTypes.func.isRequired
}

const Post = props => {

    return(
        <div className="Post">
            <div>
                {/*<img />*/}
                <h4>{props.userName}</h4>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
            {/*<div>
                //Comments & Likes
            </div>*/}
        </div>
    )
}

const ListByUser = props => {
    let posts = {};
    const jwt = auth.isAuthenticated();
    props.postsByUser(jwt.user._id, jwt.token)
    .then(data => posts.feed = data)
    console.log(posts);
}


export const ConnectedNewPost = connect( null, { createPost })(NewPost);
export const ConnectedListByUser = connect( null, { postsByUser })(ListByUser);