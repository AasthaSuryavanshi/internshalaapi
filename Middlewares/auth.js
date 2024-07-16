const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/ErrorHandler')
const { CatchErrorHandling } = require('./CatchErrorHandling')



exports.isAuthenticated = CatchErrorHandling(async (req, res, next) => {
    const {token}= req.cookies

    if(!token){
        return next(new ErrorHandler("login to access the resources"),401)
    }

    const {id} = jwt.verify(token, process.env.JWT_SCERET)
    req.id = id;
    next();
})