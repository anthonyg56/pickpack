import React, {useEffect} from 'react'
import Post from '../Misc/Post'
import NewPost from '../Misc/NewPost'
import PostApi from '../../Api/PostApi'
import useAuth from '../../Hooks/useAuth'
import useProfile from '../../Hooks/useProfile'

const Posts = () => {
    const [{auth}] = useAuth();
    const [{profile},, setPosts] = useProfile()
    
    useEffect(() => {
        PostApi.getPostsByUser(auth.user._id, auth.token)
        .then(response => setPosts(response.data));
    },[]);

    console.log(profile)
    return(
        <div className="User-Post">
            <div className="New-Post">
                <NewPost />
            </div>
            <div className="User-Posts-Content">
                {
                    profile.posts ? profile.posts.map((item, key) => {
                        return <Post post={item} key={key} />
                    }) : null
                }
            </div>
        </div>
    )
}

export default Posts