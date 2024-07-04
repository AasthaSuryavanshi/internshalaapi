exports.CatchErrorHandling = (func) => (req,res,next) => {
    Promise.resolve(func(req,res,next)).catch(next)
}
 

// asynchronous error handling ke liye we use try catch but ase phir every route pr use krna padta i.e we made a middleware of it
// if no error then fun vese ke vese return hoga if error then catch will give err.msg.