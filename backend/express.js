const cors = require("cors");
const helmet = require("helmet");
const express = require('express');
const bodyParser = require("body-parser");
const compression = require("compression");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const authRouter = require('./routes/auth.routes');

// Express Setup
const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());

//Routers
app.use('/', userRouter);
app.use('/', authRouter);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }
});

/* CORS Header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/

module.exports = app;