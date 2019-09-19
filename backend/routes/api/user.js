const express = require("express");
const router = express.Router();
const RateLimit = require("express-rate-limit");
const stringCapitalizeName = require("string-capitalize-name");
const bcrypt = require("bcryptjs");

const User = require("../../models/user");

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

// Minor sanitizing to be invoked before reaching the database
const sanitizeName = name => stringCapitalizeName(name);

const sanitizeEmail = email => email.toLowerCase();

// READ (ONE)
router.get("/dashboard/:id", (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json({ success: false, msg: `No such user.` });
    });
});

// READ (ALL)
router.get("/dashboard/", (req, res) => {
  User.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

router.post("/register", postLimiter, (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      let newUser = new User({
        name: sanitizeName(req.body.name),
        email: sanitizeEmail(req.body.email),
        password: req.body.password,
        userName: req.body.userName
      });

      newUser.save()
        .then(result => {
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => console.log(res.json(user)))
                .catch(err => console.log(err));
            });
          });

          res.json({
            success: true,
            msg: `Successfully added!`,
            result: {
              _id: result._id,
              name: result.name,
              email: result.email,
              password: result.password,
              userName: result.userName
            }
          });
        })
        .catch(err => {
          if (err.errors) {
            if (err.errors.name) {
              res
                .status(400)
                .json({ success: false, msg: err.errors.name.message });
              return;
            }
            if (err.errors.email) {
              res
                .status(400)
                .json({ success: false, msg: err.errors.email.message });
              return;
            }
            if (err.errors.password) {
              res
                .status(400)
                .json({ success: false, msg: err.errors.password.message });
              return;
            }
            if (err.errors.userName) {
              res
                .status(400)
                .json({ success: false, msg: err.errors.userName.message });
              return;
            }
            // Show failed if all else fails for some reasons
            res
              .status(500)
              .json({ success: false, msg: `Something went wrong. ${err}` });
          }
        });
    }
  });
});

// UPDATE
router.put("/dashboard/:id", (req, res) => {
  let updatedUser = {
    name: sanitizeName(req.body.name),
    email: sanitizeEmail(req.body.email),
    password: req.body.password,
    userName: req.body.gender
  };

  User.findOneAndUpdate({ _id: req.params.id }, updatedUser, {
    runValidators: true,
    context: "query"
  })
    .then(oldResult => {
      User.findOne({ _id: req.params.id })
        .then(newResult => {
          res.json({
            success: true,
            msg: `Successfully updated!`,
            result: {
              _id: newResult._id,
              name: newResult.name,
              email: newResult.email,
              password: newResult.password,
              gender: newResult.gender
            }
          });
        })
        .catch(err => {
          res
            .status(500)
            .json({ success: false, msg: `Something went wrong. ${err}` });
          return;
        });
    })
    .catch(err => {
      if (err.errors) {
        if (err.errors.name) {
          res
            .status(400)
            .json({ success: false, msg: err.errors.name.message });
          return;
        }
        if (err.errors.email) {
          res
            .status(400)
            .json({ success: false, msg: err.errors.email.message });
          return;
        }
        if (err.errors.password) {
          res
            .status(400)
            .json({ success: false, msg: err.errors.password.message });
          return;
        }
        if (err.errors.gender) {
          res
            .status(400)
            .json({ success: false, msg: err.errors.gender.message });
          return;
        }
        // Show failed if all else fails for some reasons
        res
          .status(500)
          .json({ success: false, msg: `Something went wrong. ${err}` });
      }
    });
});

// DELETE
router.delete("/dashboard/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(result => {
      res.json({
        success: true,
        msg: `It has been deleted.`,
        result: {
          _id: result._id,
          name: result.name,
          email: result.email,
          password: result.password,
          gender: result.gender
        }
      });
    })
    .catch(err => {
      res.status(404).json({ success: false, msg: "Nothing to delete." });
    });
});

module.exports = router;
