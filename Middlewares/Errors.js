
// synchronous error handling

const { stack } = require("../routers/indexRouter");

exports.generatedErrors = (err,req,res,next) => {

    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        message: err.message || "Somethin went wrong",
        errName: err.name ,
        // stack: err.stack  
    });
};