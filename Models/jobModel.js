const mongoose = require('mongoose');


const jobModel = new mongoose.Schema({
    employe:{type: mongoose.Schema.Types.ObjectId, ref:"employe"},
    student:[{type: mongoose.Schema.Types.ObjectId, ref:"Students"}],

    title: String,
    skills: String,
    jobType:{type: String, enum:["in office", "remote"]},
    opening:Number,
    description:String,
    preference:String,
    responsibility:String,
    salary:Number,
    perks:{
        type: String,
    },
    assessments:{type: String}

}, { timestamps: true } );


module.exports = mongoose.model('job', jobModel);