const Profile = require('../models/profile.model')
const errorHandler = require('../helpers/error.helper')

const create = (req, res, next) => {
    console.log(req)
    Profile.findOne({ userName: req.body.userName})
        .then(profile => {
            if (profile){
                return res.status(400).json({ userName: 'User Name is Taken' });
            } else {
                const newProfile = new Profile({
                    user: req.body.user,
                    userName: req.body.userName,
                    birthday: req.body.birthday,
                    bio: req.body.bio
                })
                newProfile.save().then(profile => res.json(profile)).catch(err => console.log(err))
            }
        })
}

const profileByID = (req, res, next, id) => { 
    Profile.findOne({user: id}).exec((err, profile) => {
        if (err || !profile)
          return res.status('400').json({
            error: "Profile not found"
          })
        req.profile = profile
        next()
    });
};

const addLike = (req, res) => {
    Profile.findByIdAndUpdate(req.body.user, {$push: {likes: req.body.post}}, {new: true})
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
}

const deleteLike = (req, res) => {
    Profile.findByIdAndUpdate(req.body.user, {$pull: {likes: req.body.post}}, {new: true})
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
}

const addPost = (req, res) => {
    Profile.findByIdAndUpdate(req.body.user, {$push: {posts: req.body.post}}, {new: true})
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
}

const deletePost = (req, res) => {
    Profile.findByIdAndUpdate(req.body.user, {$pull: {posts: req.body.post}}, {new: true})
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
}

const read = (req, res) => res.json(req.profile)

module.exports = {
    read,
    create,
    profileByID,
    addPost,
    deletePost,
    addLike,
    deleteLike
}