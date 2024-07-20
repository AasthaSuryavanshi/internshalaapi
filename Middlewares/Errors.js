// synchronous error handling

const { stack } = require("../routers/indexRouter");

exports.generatedErrors = (err,req,res,next) => {

    const statusCode = err.statusCode || 500

    if(err.name === "MongoServerError" && err.message.includes("E11000 duplicate key error")){
        err.message = "this email is already in registred"
    }

    res.status(statusCode).json({
        message: err.message || "Somethin went wrong",
        errName: err.name ,
        stack: err.stack  
    });
};