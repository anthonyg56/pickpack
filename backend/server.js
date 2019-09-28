const app = require('./express.js');
const mongoose = require('mongoose');

// DB Config File
const db = require("./config/keys.js").mongoUri;

// Connect to Mongo.DB
mongoose.Promise = global.Promise;
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Setup Port
const port = process.env.PORT || 5000;

// Server running
app.listen(port, () => console.log(`Server up and running on port ${port} !`));