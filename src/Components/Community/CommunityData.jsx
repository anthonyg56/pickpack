import React from 'react';
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import { createPost } from '../../Redux/Actions/PostActions'
import auth from '../Auth/AuthHelper'
import PropTypes from "prop-types"

const mapStateToProps = state => ({
    auth: state.auth
})

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
    createPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

export default connect(
    mapStateToProps,
    { createPost })
    (NewPost);