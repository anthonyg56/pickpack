const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    profileName: {
      type: String,
      trim: true,
      required: "Profile Name Is Required"
    },
    birthday: {
      type: Date,
      trim: true,
      required: "Birthday is required"
    },
    bio: {
      type: String,
      trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    followers: [{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }],
    followings: [{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }],
    salt: String,
    favoriteTeams: [ String ],
    favoriteSport: [ String ]
});

UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
  })
  .get(function() {
    return this._password
});

UserSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
        if (!password) return ''
        try {
          return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex')
        } catch (err) {
          return ''
        }
    },
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
};

UserSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 6) {
      this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password) {
      this.invalidate('password', 'Password is required')
    }
  }, null);

const User = mongoose.model('User', UserSchema);

module.exports = User;