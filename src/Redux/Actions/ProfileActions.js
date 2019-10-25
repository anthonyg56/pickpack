import ProfileConstants from '../Constants/ProfileConstants'

const ProfileActions = {
    getProfile: (id, userName, authId, bio, birthday) => {
        const profile = {
            id: id,
            userName: userName,
            authId: authId,
            bio: bio,
            birthday: birthday
        }
        return {
            type: ProfileConstants.getProfile,
            payload: profile
        }
    },
    getPosts: posts => {
        return {
            type: ProfileConstants.getPost,
            payload: posts
        }
    },
    getPicks: picks => {
        return {
            type: ProfileConstants.getPicks,
            payload: picks
        }
    },
    getLikes: likes => {
        return {
            type: ProfileConstants.getLikes,
            payload: likes
        }
    },
    getComments: comments => {
        return {
            type: ProfileConstants.getComments,
            payload: comments
        }
    },
    getFollowers: followers => {
        return {
            type: ProfileConstants.getFollowers,
            payload: followers
        }
    },
    getFollowing: following => {
        return {
            type: ProfileConstants.getFollowing,
            payload: following
        }
    }
}

export default ProfileActions