import axios from "axios"

const PostApi = {
    createPost: (userId, post, token) => {
        return (
            axios
            .post("/api/posts/new/" + userId, post, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(response => {
                console.log("Post Created");
                console.log(response.data);
                return response.data;
            })
            .catch(err => console.log(err))
        )
    },
    deletePost: (postId, token) => {
        return (
            axios
            .delete("/api/posts/" + postId, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(response => {
                console.log("Post Deleted");
                console.log(response.data);
                return response.json();
            })
            .catch(err => console.log(err))
        )
    },
    getPostsByUser: (userId, token) => {
        return(
            axios
            .get("/api/posts/by/" + userId, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            })
            /*.then(response => {
                console.log("Posts by User");
                console.log(response.data);
                return response.data;
            })
            .catch(err => console.log(err))*/
        )
    },
    getLikesByUser: (user, token) => {
        return(
            axios
            .get("/api/posts/likes/" + user, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(res => {
                console.log("Likes By User");
                console.log(res.data);
                return res.data;
            })
            .catch(err => console.log(err))
        )
    },
    likePost: (user, token, post) => {
        return(
            axios
            .put("/api/posts/like/", 
                JSON.stringify({ user: user, post: post }), {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(res => {
                console.log("Post Liked");
                console.log(res.data);
                return res.data;
            })
            .catch(err => console.log(err))
        )
    },
    unlikePost: (user, token, post) => {
        return(
            axios
            .put("/api/posts/unlike/", JSON.stringify({ user: user, post: post }), {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                }
            })
            .then(res => {
                console.log("Post Unliked");
                console.log(res.data);
                return res.data;
            })
            .catch(err => console.log(err))
        )
    }
}

export default PostApi