const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");
const postCtrl = require('../controllers/post.controller');

router.route('/api/posts/feed/:userId')
    .get(authCtrl.requireSignin, postCtrl.listNewsFeed)

router.route('/api/posts/new/:userId')
    .post(authCtrl.requireSignin, postCtrl.create)

router.route('/api/posts/by/:userId')
    .get(authCtrl.requireSignin, postCtrl.listByUser)

router.route('/api/posts/:postId')
    .delete(authCtrl.requireSignin, postCtrl.isPoster, postCtrl.remove)

router.route('/api/posts/like')
    .put(authCtrl.requireSignin, postCtrl.like)

router.route('/api/posts/unlike')
    .put(authCtrl.requireSignin, postCtrl.unlike)

router.route('/api/posts/comment')
    .put(authCtrl.requireSignin, postCtrl.comment)

router.route('/api/posts/uncomment')
    .put(authCtrl.requireSignin, postCtrl.uncomment)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

module.exports = router;