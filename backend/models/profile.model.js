const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema();

const ProfileSchema = new Schema({
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
  followers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],
  followings: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],
  favoriteTeams: [String],
  favoriteSport: [String]
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;