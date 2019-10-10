const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user.controller")
const authCtrl = require("../controllers/auth.controller")
const postCtrl = require('../controllers/post.controller')
const profileCtrl = require('../controllers/profile.controller')

router.route('/api/profile/:profileId')
    .get(authCtrl.requireSignin, profileCtrl.read)

router.route('/api/profile/new')
    .post(profileCtrl.create)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)
router.param('profileId', profileCtrl.profileByID)

module.exports = router