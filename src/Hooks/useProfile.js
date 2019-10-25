import {useStore} from '../Store'

const useProfile = () => {
    const [{...profile}, setState] = useStore()
    
    const setProfile = ({_id, userName, bio, birthday}) => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                _id: _id,
                userName: userName,
                bio: bio,
                birthday: birthday
            }
        }))
    }
    
    const setPosts = posts => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                posts: posts
            }
        }))
    }

    const addPost = post => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                posts: profile.posts.unshift(post)
            }
        }))
    }

    const setPicks = picks => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                picks: picks
            }
        }))
    }

    const setLikes = likes => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                likes: likes
            }
        }))
    }

    const setStats = stats => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                stats: stats
            }
        }))
    }

    const setComments = comments => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                comments: comments
            }
        }))
    }

    const setFollowing = following => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                following: following
            }
        }))
    }

    const setFollowers = followers => {
        setState(state => ({
            ...state,
            profile: {
                ...state.profile,
                followers: followers
            }
        }))
    }

    return [profile, setProfile, setPosts, addPost, setPicks, setStats, setLikes, setComments, setFollowers, setFollowing]
}

export default useProfile