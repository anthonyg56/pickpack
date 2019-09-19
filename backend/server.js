const express = require('express');
const mongoose = require("mongoose");

// Server Setup
const app = express();

// DB Config File
const db = require("./config/keys.js").mongoUri;

// Connect to Mongo.DB
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Setup Port
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Server running
app.listen(port, () => console.log(`Server up and running on port ${port} !`));