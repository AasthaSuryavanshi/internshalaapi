const { CatchErrorHandling } = require("../Middlewares/CatchErrorHandling");
const employeModel = require('../Models/employeModel');
const internshipModel = require('../Models/internshipModel');
const jobModel = require('../Models/jobModel');

const ErrorHandler = require("../utils/ErrorHandler");
const { getToken } = require("../utils/getTokens");
const { sendmail } = require("../utils/nodemailer");
const  imagekit  = require("../utils/imagekit").initImageKit();
const path = require('path');


exports.employePage = CatchErrorHandling (async(req, res, next) => {
    res.json({message:"heeloo from employe router"});
    
})

exports.currentemploye = CatchErrorHandling (async(req, res, next) => {
    const employe = await employeModel.findById(req.id)
    res.json(employe);
    
})

// for handling async errors we use --
// try {        
// res.json({message:"heeloo from get router"});
// } catch (error) {
//     res.json(err.message);
// }


exports.employeSignup = CatchErrorHandling(async(req, res, next) => {
    const employe = await new employeModel(req.body).save();
    getToken(employe,201,res);
})

exports.employeSignin = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findOne({email: req.body.email})
    .select('+password')
    .exec();

    if(!employe){
        return next(new ErrorHandler("employe not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    const isMatch = await employe.comparePassword(req.body.password);
    if(!isMatch){
        return next(new ErrorHandler("Invalid password", 401));
    }

    getToken(employe,200,res);

})

exports.employeSignout = CatchErrorHandling(async(req, res, next) => {
    res.clearCookie("token");
    res.json({message: "signout successfully!"})
})


exports.employeSendmail = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findOne({email:req.body.email}).exec();

    if(!employe){
        return next(new ErrorHandler("user not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    const url = `${req.protocol}://${req.get('host')}/employe/forgetPassword/${employe._id}`
    sendmail(req,res,next,url);
    resetPasswordToken = "1";
    await employe.save();


    // res.json(employe,url)
})

    
exports.employeforgetPassword = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findById(req.params.id).exec();

    if(!employe){
        return next(new ErrorHandler("user not found with this email", 404));   // when email is enterd wrong so khudke error handler pr msg dekhaya
    }

    if(resetPasswordToken == "1"){
        resetPasswordToken = "0"
        employe.password = req.body.password;
        
    }else{return next(new ErrorHandler("invalid reset password link", 500));}
    await employe.save();
    res.status(200).json({message: "password reset successfully!"})
});    



exports.employeresetPassword = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findById(req.params.id).exec();
    employe.password = req.body.password;    
    await employe.save();
    res.status(200).json({message: "password reset successfully!"})
});    


exports.employeupdate = CatchErrorHandling(async(req, res, next) => {
    await employeModel.findByIdAndUpdate(req.params.id, req.body).exec();
    res.status(200).json({
        success: true, 
        message: "employe details updated successfully!",
    
    })
})


exports.employeavatar = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findById(req.params.id).exec();
    const file = req.files.Organization_logo;
    const modifiedFile = `uploads-${Date.now()}${path.extname(file.name)}`;

    if(employe.Organization_logo.fileId !== ""){
        await imagekit.deleteFile(employe.Organization_logo.fileId)
    }

    const {fileId,url} = await imagekit.upload({
        file: file.data,
        fileName: modifiedFile,
        // transformation: [{ width: 200, height: 200, crop: 'fill' }]
    })
    employe.Organization_logo = {fileId,url};
    await employe.save();
    res.status(200).json({
        success: true,
        message: "Organization_logo updated successfully!",
    })
})


// --------------------------------INTERNSHIP--------------------------

exports.createinternship = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findById(req.id);
    const internship = await new internshipModel(req.body);
    internship.employe = employe._id,
    employe.internships.push(internship._id);
    await internship.save();
    await employe.save();
    
    res.status(201).json({success: true , internship});
})

exports.readinternship = CatchErrorHandling(async(req, res, next) => {
    const {internships} = await employeModel.findById(req.id).populate('internships').exec();
    res.status(200).json({success: true , internships});
})

exports.readsingleinternship = CatchErrorHandling(async(req, res, next) => {
    const internship = await internshipModel(req.body);
    res.status(200).json({success: true , internship});
})


// --------------------------------JOB--------------------------

exports.createjob = CatchErrorHandling(async(req, res, next) => {
    const employe = await employeModel.findById(req.id);
    const job = await new jobModel(req.body);
    job.employe = employe._id,
    employe.jobs.push(job._id);
    await job.save();
    await employe.save();
    
    res.status(201).json({success: true , job});
})

exports.readjob = CatchErrorHandling(async(req, res, next) => {
    const {jobs} = await employeModel.findById(req.id).populate('jobs').exec();
    res.status(200).json({success: true , jobs});
})

exports.readsinglejob = CatchErrorHandling(async(req, res, next) => {
    const job = await jobModel(req.body);
    res.status(200).json({success: true , job});
})