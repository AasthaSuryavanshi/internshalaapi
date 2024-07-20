const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const studentModel = new mongoose.Schema({
    firstName: {
        type: String,
        require: [
            true,
            "firstName is Required"
        ],
        minLength:[
            2,
            "firstName must be at least 2 characters"
        ],
        
    },
    lastName: {
        type: String,
        require: [
            true,
            "lastName is Required"
        ],
        minLength:[
            2,
            "lastName must be at least 2 characters"
        ],
        
    },
    age: Number,
    gender: {type: String, enum: ["Male", "Female","Others"]},
    contact: {
        type: String,
        require: [
            true,
            "contact is Required"
        ],
        minLength:[
            2,
            "contact must be at least 10 characters"
        ],
        
    },
    city: {
        type: String,
        require: [
            true,
            "city is Required"
        ]        
    },
    avatar:{
        type: Object,
        default:{
            fileId:"",
            url:"data:image/jpeg;base64,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"
        }
    },
    email: {
        type: String,
        require: [
            true,
            "Email is Required"
        ],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Enter a Valid Email"
        ]
    },

    password: {
        type: String,
        select: false,     // coz during fetch password should not be fetched to anyone
        require: [
            true,
            "Password is Required"
        ],
        minLength:[
            4,
            "Password must be at least 4 characters"
        ],
        maxLength:[
            10,
            "Password must be less then 10 characters"
        ],
        
        // match: [
    //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,
    //     "Enter a Valid Password"
    // ]
    },
    resetPasswordToken: {
        type: String,
        default:"0"
    },

    resume:{
        education:[],
        job:[],
        internship:[],
        responsibility:[],
        skill:[],
        course:[],
        project:[],
        certificate:[],
        accomplishment:[],

    },
    internships:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "internship"
    }],
    jobs:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "job"
    }]

}, { timestamps: true } );


// password encryption by bcrypt
// pre will run before the action of (save here) 
studentModel.pre("save", function(){

    if(!this.isModified("password")) return;     //save tho kai bar hoga pr is password not changed then return

    
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
})

studentModel.methods.comparePassword = function(password){       //comparing the passwords of user
    return bcrypt.compareSync(password, this.password)
}



// jwt tokens
studentModel.methods.getjwttoken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SCERET,{expiresIn:process.env.JWT_EXPIRETIME})
}



module.exports = mongoose.model('Student', studentModel);