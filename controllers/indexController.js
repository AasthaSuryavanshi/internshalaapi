const { CatchErrorHandling } = require("../Middlewares/CatchErrorHandling");
const studentModel = require('../Models/studentModel');
const ErrorHandler = require("../utils/ErrorHandler");
const { getToken } = require("../utils/getTokens");
const { sendmail } = require("../utils/nodemailer");

exports.homePage = CatchErrorHandling (async(req, res, next) => {
    res.json({message:"heeloo from get router"});
    
})

exports.currentUser = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id)
    res.json(student);
    
})

// for handling async errors we use --
// try {        
// res.json({message:"heeloo from get router"});
// } catch (error) {
//     res.json(err.message);
// }


exports.studentSignup = CatchErrorHandling(async(req, res, next) => {
    const Student = await new studentModel(req.body).save();
    getToken(Student,201,res);
})

exports.studentSignin = CatchErrorHandling(async(req, res, next) => {
    const Student = await studentModel.findOne({email: req.body.email})
    .select('+password')
    .exec();

    if(!Student){
        return next(new ErrorHandler("user not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    const isMatch = await Student.comparePassword(req.body.password);
    if(!isMatch){
        return next(new ErrorHandler("Invalid password", 401));
    }

    getToken(Student,200,res);

})

exports.studentSignout = CatchErrorHandling(async(req, res, next) => {
    res.clearCookie("token");
    res.json({message: "signout successfully!"})
})


exports.studentSendmail = CatchErrorHandling(async(req, res, next) => {
    const Student = await studentModel.findOne({email:req.body.email}).exec();

    if(!Student){
        return next(new ErrorHandler("user not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    const url = `${req.protocol}://${req.get('host')}/forgetPassword/${Student._id}`
    sendmail(req,res,next,url);
    resetPasswordToken = "1";
    await Student.save();


    // res.json(Student,url)
})

    
exports.studentforgetPassword = CatchErrorHandling(async(req, res, next) => {
    const Student = await studentModel.findById(req.params.id).exec();

    if(!Student){
        return next(new ErrorHandler("user not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    if(resetPasswordToken == "1"){
        resetPasswordToken = "0"
        Student.password = req.body.password;
        
    }else{return next(new ErrorHandler("invalid reset password link", 500));}
    await Student.save();
    res.status(200).json({message: "password reset successfully!"})
});    



exports.studentresetPassword = CatchErrorHandling(async(req, res, next) => {
    const Student = await studentModel.findById(req.params.id).exec();
    Student.password = req.body.password;    
    await Student.save();
    res.status(200).json({message: "password reset successfully!"})
});    