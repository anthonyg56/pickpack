const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes/user");
const bodyParser = require("body-parser");

// Server Setup
const app = express();

// DB Config File
const db = require("./config/keys.js").mongoUri;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Connect to Mongo.DB
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Setup Port
const port = process.env.PORT || 5000;

// CORS Header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Router
app.use('/api', router);

// Server running
app.listen(port, () => console.log(`Server up and running on port ${port} !`));