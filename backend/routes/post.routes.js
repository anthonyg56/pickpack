const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");
const postCtrl = require('../controllers/post.controller');
const profileCtrl = require("../controllers/profile.controller");

// Timeline
router.route('/api/posts/feed/:profileId')
    .get(authCtrl.requireSignin, postCtrl.listNewsFeed)

// Create Post
router.route('/api/posts/new/:profileId')
    .post(authCtrl.requireSignin, postCtrl.create)

// Profile
router.route('/api/posts/by/:profileId')
    .get(authCtrl.requireSignin, postCtrl.listByUser)

// Likes
router.route('/api/posts/likes/:profileId')
    .get(authCtrl.requireSignin, postCtrl.likesByUser)

// Find Specific Post
router.route('/api/posts/:postId')
    .delete(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.remove)

// Like a Post
router.route('/api/posts/like')
    .put(authCtrl.requireSignin, postCtrl.like)

// Unlike A Post
router.route('/api/posts/unlike')
    .put(authCtrl.requireSignin, postCtrl.unlike)

// Comment On A Post
router.route('/api/posts/comment')
    .put(authCtrl.requireSignin, postCtrl.comment)

// Delete Comment
router.route('/api/posts/uncomment')
    .put(authCtrl.requireSignin, postCtrl.uncomment)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)
router.param('profileId', profileCtrl.profileByID)

module.exports = router;