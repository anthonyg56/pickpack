const Post = require('../models/post.model');
const errorHandler = require('../helpers/error.helper');

const create = (req, res, next) => {
  let post = new Post({
    text: req.body.text,
    postedBy: req.auth,
    profile: req.profile._id
  })
  console.log(post)
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(result)
  })
}

const postByID = (req, res, next, id) => { 
    Post.findById(id).exec((err, post) => {
        if (err || !post)
          return res.status('400').json({
            error: "Post not found"
          })
        req.post = post
        next()
    });
};

const listByUser = (req, res) => {
    Post.find({profile: req.profile})
    .populate('comments', 'text created')
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .sort('-created')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(posts)
    })
};

const likesByUser = (req, res) => {
  Post.find({likes: req.profile})
  .populate('comments', 'text created')
  .populate('comments.postedBy', '_id name')
  .populate('postedBy', '_id name')
  .sort('-created')
  .exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(posts)
  })
};

const listNewsFeed = (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    Post.find({postedBy: { $in : req.profile.following } })
    .populate('comments', 'text created')
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .sort('-created')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(posts)
    })
};

const remove = (req, res) => {
    let post = req.post
      post.remove((err, deletedPost) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(deletedPost)
      })
};

const like = (req, res, next) => {
    Post.findByIdAndUpdate(req.body.post, {$push: {likes: req.body.user}}, {new: true})
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
};

const unlike = (req, res) => {
    Post.findByIdAndUpdate(req.body.post, {$pull: {likes: req.body.user}}, {new: true})
    .exec((err, result) => {
      if (err) {
        console.log('yup, isPoster is the')
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
};

const comment = (req, res) => {
    let comment = req.body.comment
    comment.postedBy = req.body.userId
    Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
};

const uncomment = (req, res) => {
    let comment = req.body.comment
    Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: comment._id}}}, {new: true})
    .populate('comments.postedBy', '_id name')
    .populate('postedBy', '_id name')
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
};

const isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
    if(!isPoster){
      console.log('yup, isPoster is the issue')
      return res.status('403').json({
        error: "User is not authorized"
      })
    }
    console.log('user authorized')
    next()
};

module.exports = { 
    create,
    postByID, 
    listByUser, 
    likesByUser,
    listNewsFeed, 
    remove, 
    like, 
    unlike, 
    comment, 
    uncomment,
    isPoster
}