import axios from "axios"

const ProfileApi ={
    create: (profileData, history) => {
        axios
        .post('/api/profile/new', profileData)
        .then(res => {
            console.log('Account Created & Added to Database')
            console.log(res.data)
            history.push('/login')
        })
        .catch(err => console.log(err))
    },
    read: (profile, token) => {
        return(
            axios
            .get('/api/profile/' + profile, { headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }})
            .then(res => {
                console.log('Current Profile')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    },
    addLike: (user, post, token) => {
        return (
            axios
            .put('/api/profile/new/like', JSON.stringify({user: user, post: post}), {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                console.log('Like post added to profile')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    },
    addPost: (user, post, token) => {
        return (
            axios
            .put('/api/profile/new/post', JSON.stringify({user: user, post: post}), {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                console.log('Post added to profile')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    },
    removeLike: (user, post, token)  => {
        return(
            axios
            .put('/api/profile/remove/like', JSON.stringify({user: user, post: post}), {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                console.log('Post Unliked From Profile')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    },
    removePost: (user, post, token)  => {
        return (
            axios
            .put('/api/profile/remove/post', JSON.stringify({user: user, post: post}), {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                }
            })
            .then(res => {
                console.log('Post Removed From Profile')
                console.log(res.data)
                return res.data
            })
            .catch(err => console.log(err))
        )
    }
}

export default ProfileApi