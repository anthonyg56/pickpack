import React from 'react'
import useForm from 'react-hook-form'
import PostApi from '../../Api/PostApi'
import ProfileApi from '../../Api/ProfileApi'
import useAuth from '../../Hooks/useAuth'
import useProfile from '../../Hooks/useProfile'

const NewPost = () => {
    const { register, handleSubmit } = useForm()
    const [{auth}] = useAuth()
    const [{profile},, addPost] = useProfile()

    const onSubmit = data => async () => {
        const response = await PostApi.createPost(auth.user._id, data, auth.token)
        const response2 = await ProfileApi.addPost(profile.general.id, response, auth.token)
        addPost(response2)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="text" placeholder="Share Your Wisdom.." name="text" ref={register({ required: true })} />
            <input id="submit" type="submit" />
        </form>
    )
}

export default NewPost