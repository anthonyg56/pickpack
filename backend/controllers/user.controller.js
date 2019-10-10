const _ = require('lodash');
const User = require('../models/user.model');
const errorHandler = require('../helpers/error.helper');

const register = (req, res, next) => { 
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });
                user.save().then(user => res.json(user)).catch(err => console.log(err))
            }
        })
};

const list = (req, res) => { 
    User.find((err, users) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
          })
        }
        res.json(users)
    }).select('name email updated created');
};

const userByID = (req, res, next, id) => { 
    User.findById(id).exec((err, user) => {
        if (err || !user)
          return res.status('400').json({
            error: "User not found"
          })
        req.user = user
        next()
    });
};

const read = (req, res) => { 
    req.user.hashed_password = undefined
    req.user.salt = undefined
    return res.json(req.user)
};

const update = (req, res, next) => { 
    let user = req.user
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save((err) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
    })
};

const remove = (req, res, next) => { 
    let user = req.user
    user.remove((err, deletedUser) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    })
};

module.exports = { register, userByID, read, list, remove, update }