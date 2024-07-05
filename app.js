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


//routes
app.use('/', require('./routers/indexRouter'))







//error handlers
const { generatedErrors } = require("./Middlewares/Errors");
app.all("*", (req,res,next) => {
    next(new ErrorHandler(`Route Not Found ${req.url}`, 404))
})
app.use(generatedErrors)


app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));