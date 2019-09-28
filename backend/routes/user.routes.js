const express = require("express");
const router = express.Router();
const RateLimit = require("express-rate-limit");
const stringCapitalizeName = require("string-capitalize-name");
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../controllers/auth.controller");

const minutes = 5;
const postLimiter = new RateLimit({
  windowMs: minutes * 60 * 1000, // milliseconds
  max: 100, // Limit each IP to 100 requests per windowMs
  delayMs: 0, // Disable delaying - full speed until the max limit is reached
  handler: (req, res) => {
    res
      .status(429)
      .json({
        success: false,
        msg: `You made too many requests. Please try again after ${minutes} minutes.`
      });
  }
});

router.route('/api/users')
  .get(userCtrl.list)
  

router.route('/api/register')
  .post(userCtrl.register)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

module.exports = router