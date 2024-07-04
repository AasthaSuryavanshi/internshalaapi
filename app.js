require ("dotenv").config({path:'./.env'})
const { config } = require('dotenv');
const express = require('express');
const app = express();

//logger
const logger = require("morgan");
const ErrorHandler = require("./utils/ErrorHandler");
app.use(logger("tiny"))

//routes
app.get('/', require('./routers/indexRouter'))





//error handlers
const { generatedErrors } = require("./Middlewares/Errors");
app.all("*", (req,res,next) => {
    next(new ErrorHandler(`Route Not Found ${req.url}`, 404))
})
app.use(generatedErrors)


app.listen(process.env.PORT,console.log(`server is running on ${process.env.PORT}`));