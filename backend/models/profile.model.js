const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema();

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  userName: {
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
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Profile"
    }
  ],
  followings: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Profile"
    }
  ],
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Post"
    }
  ],
  picks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Pick"
    }
  ],
  favoriteTeams: [String],
  favoriteSport: [String],
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: ["Pick", "Post"]
    }
  ]
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;