const mongoose = require('mongoose');

const internshipModel = new mongoose.Schema({

    employe:{type: mongoose.Schema.Types.ObjectId, ref:"employe"},
    student:[{type: mongoose.Schema.Types.ObjectId, ref:"Students"}],

    profile: String,
    skills: String,
    internshipType:{type: String, enum:["in office", "remote"]},
    opening:Number,
    from:String,
    to:String,
    responsibility:String,
    stipend:{
        status:{
            type:String,
            enum:["Fixed", "Negotiable","Performance Based","Unpaid"]
        },
        amount: Number,
    },
    perks:{
        type: String,
    },
    assessments:{type: String}

}, { timestamps: true } );


module.exports = mongoose.model('internship', internshipModel);