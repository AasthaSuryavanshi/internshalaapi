require ("dotenv").config({path:'./.env'})
require("./routers/indexRouter");
const { config } = require('dotenv');
const express = require('express');
const app = express();


// database connection
require('./Models/database').databaseConnection();


//logger
const logger = require("morgan");
const ErrorHandler = require("./utils/ErrorHandler");
app.use(logger("tiny"))


// bodyparse initalization- used to activate req.body
app.use(express.json());
app.use(express.urlencoded({ extended:false}));


//express session and cookies 0
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret: process.env.Session_secret
}));
app.use(cookieParser());

// file upload
const fileupload = require('express-fileupload');
app.use(fileupload());



//routes
app.use('/', require('./routers/indexRouter'))







//error handlers
const { generatedErrors } = require("./Middlewares/Errors");
app.all("*", (req,res,next) => {
    next(new ErrorHandler(`Route Not Found ${req.url}`, 404))
})
app.use(generatedErrors)


app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));