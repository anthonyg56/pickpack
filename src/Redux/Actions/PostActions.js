import PostConstants from "../Constants/PostConstants";

const PostActions = {
  createPost: posts => {
    return {
      type: PostActions.post,
      payload: posts
    }
  },
  removePost: posts => {
    return {
      type: PostConstants.deletePost,
      payload: posts
    }
  },
  getLikes: likes => {
    return {
      type: PostConstants.postLikes,
      payload: likes
    }
  },
  like: likes => {
    return {
      type: PostConstants.likePost,
      payload: likes
    }
  },
  unlike: likes => {
    return {
      type: PostConstants.unlikePost,
      payload: likes
    }
  },
  getComments: comments => {
    return {
      type: PostConstants.postComments,
      payload: comments
    }
  },
  comment: comments => {
    return {
      type: PostConstants.comment,
      payload: comments
    }
  },
  uncomment: comments => {
    return {
      type: PostConstants.deleteComment,
      payload: comments
    }
  },
  likeComment: comments => {
    return {
      type: PostConstants.likeComment,
      payload: comments
    }
  },
  unlikeComment: comments => {
    return {
      type: PostConstants.unlikeComment,
      payload: comments
    }
  }
}

export default PostActions;
