const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user.controller")
const authCtrl = require("../controllers/auth.controller")
const postCtrl = require('../controllers/post.controller')
const profileCtrl = require('../controllers/profile.controller')

router.route('/api/profile/new')
    .post(profileCtrl.create)

router.route('/api/profile/:profileId')
    .get(authCtrl.requireSignin, profileCtrl.read)

// Add a new post to profile
router.route('/api/profile/new/post')
    .put(authCtrl.requireSignin, profileCtrl.addPost)

// Add a new like to profile
router.route('/api/profile/new/like')
    .put(authCtrl.requireSignin, profileCtrl.addLike)

// Remove post from profile
router.route('/api/profile/remove/post')
    .put(authCtrl.requireSignin, profileCtrl.deletePost)

// Remove like from profile
router.route('/api/profile/remove/like')
    .put(authCtrl.requireSignin, profileCtrl.deleteLike)

// Follow a new user
router.route('/api/profile/new/follow/:profileId')
    .put(authCtrl.requireSignin, profileCtrl.addLike)

// Add a new follow to profile
router.route('/api/profile/new/follower/:profileId')
    .put(authCtrl.requireSignin, profileCtrl.addLike)

/*router.route('/api/profile/new/pick/:postId')
    .put(authCtrl.requireSignin, profileCtrl.addLike)

router.route('/api/profile/new/notification/:postId')
    .put(authCtrl.requireSignin, profileCtrl.addLike)*/

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)
router.param('profileId', profileCtrl.profileByID)

module.exports = router