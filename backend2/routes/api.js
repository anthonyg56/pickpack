const express = require ('express');
const router = express.Router();
const User = require("../models/user");

router.get('/todos', (req, res, next) => {

    User.find({}, 'action')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/todos', (req, res, next) => {

});

router.delete('/todos/:id', (req, res, next) => {

})

module.exports = router;