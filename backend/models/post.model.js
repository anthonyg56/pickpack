const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: 'Name is required'
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }],
    comments: [{
        text: String,
        created: { 
            type: Date, 
            default: Date.now 
        },
        postedBy: { 
            type: mongoose.Schema.ObjectId, 
            ref: 'Profile'
        }
    }],
    postedBy: {
        type: mongoose.Schema.ObjectId, 
        ref: 'User'
    },
    profile: {
        type: mongoose.Schema.ObjectId, 
        ref: 'Profile'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;