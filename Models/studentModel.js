const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const studentModel = new mongoose.Schema({

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
    }

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