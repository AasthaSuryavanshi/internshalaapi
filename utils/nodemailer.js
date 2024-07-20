const nodemailer = require('nodemailer');
const ErrorHandler = require('./ErrorHandler');

exports.sendmail = (req, res, next, url)=>{
     const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: '465',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
     });

     const mailOptions = {
        from: "AshKetchup ptv limited.",
        to: req.body.email,
        subject: 'Reset Password',
        html: `<h1> Click the link below to reset yourpassword </h1>
                <a href="${url}">Click Here to reset</a>`,
     };

     transport.sendMail(mailOptions, (err, info)=> {
        if(err) {return next(new ErrorHandler(err, 500))};
        console.log(info);
        return res.status(200).json({
            message:'Mail has been send successfully',
            url,
        });
     });

};