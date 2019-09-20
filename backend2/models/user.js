const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
      },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    Password: {
        type: String,
        required: [true, 'Password is required']
    },
    UserName: {
        type: String,
        required: [true, 'Password is required']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;