const { CatchErrorHandling } = require("../Middlewares/CatchErrorHandling");

exports.homePage = CatchErrorHandling (async(req, res, next) => {
    res.json({message:"heeloo from get router"});
    
})

// for handling async errors we use --
// try {        
// res.json({message:"heeloo from get router"});
// } catch (error) {
//     res.json(err.message);
// }