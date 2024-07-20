const { CatchErrorHandling } = require("../Middlewares/CatchErrorHandling");
const studentModel = require('../Models/studentModel');
const ErrorHandler = require("../utils/ErrorHandler");
const {v4:uuidv4} = require('uuid')


exports.resume = CatchErrorHandling (async(req, res, next) => {
    const { resume } = await studentModel.findById(req.id).exec(); 

    res.json({message:"heeloo from get resume router", resume});
    
})
// ----------------------------------educations---------------------------------
exports.addeducation = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.education.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"heeloo from get resume router add edu"});
    
})


exports.editeducation = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const eduIndex = student.resume.education.findIndex(i => i.id === req.params.eduid)
    student.resume.education[eduIndex] = {...student.resume.education[eduIndex], ...req.body}
    await student.save();
    res.json({message:"updated edu"});
    
})

exports.deleteeducation = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filterededu = student.resume.education.filter(i => i.id !== req.params.eduid)
    student.resume.education = filterededu;
    await student.save();
    res.json({message:"deleted edu"});
    
})

// ----------------------------------job---------------------------------
exports.addjob = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.job.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add job"});
    
})


exports.editjob = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const jobIndex = student.resume.job.findIndex(i => i.id === req.params.jobid)
    student.resume.job[jobIndex] = {...student.resume.job[jobIndex], ...req.body}
    await student.save();
    res.json({message:"updated job"});
    
})

exports.deletejob = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredjob = student.resume.job.filter(i => i.id !== req.params.jobid)
    student.resume.job = filteredjob;
    await student.save();
    res.json({message:"deleted job"});
    
})

// ----------------------------------internship---------------------------------
exports.addinternship = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.internship.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add internship"});
    
})


exports.editinternship = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const internshipIndex = student.resume.internship.findIndex(i => i.id === req.params.internshipid)
    student.resume.internship[internshipIndex] = {...student.resume.internship[internshipIndex], ...req.body}
    await student.save();
    res.json({message:"updated internship"});
    
})

exports.deleteinternship = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredinternship = student.resume.internship.filter(i => i.id !== req.params.internshipid)
    student.resume.internship = filteredinternship;
    await student.save();
    res.json({message:"deleted internship"});
    
})

// ----------------------------------responsibility---------------------------------
exports.addresponsibility = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.responsibility.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add responsibility"});
    
})


exports.editresponsibility = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const responsibilityIndex = student.resume.responsibility.findIndex(i => i.id === req.params.responsibilityid)
    student.resume.responsibility[responsibilityIndex] = {...student.resume.responsibility[responsibilityIndex], ...req.body}
    await student.save();
    res.json({message:"updated responsibility"});
    
})

exports.deleteresponsibility = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredresponsibility = student.resume.responsibility.filter(i => i.id !== req.params.responsibilityid)
    student.resume.responsibility = filteredresponsibility;
    await student.save();
    res.json({message:"deleted responsibility"});
    
})

// ----------------------------------course---------------------------------
exports.addcourse = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.course.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add course"});
    
})


exports.editcourse = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const courseIndex = student.resume.course.findIndex(i => i.id === req.params.courseid)
    student.resume.course[courseIndex] = {...student.resume.course[courseIndex], ...req.body}
    await student.save();
    res.json({message:"updated course"});
    
})

exports.deletecourse = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredcourse = student.resume.course.filter(i => i.id !== req.params.courseid)
    student.resume.course = filteredcourse;
    await student.save();
    res.json({message:"deleted course"});
    
})
// ----------------------------------skill---------------------------------
exports.addskill = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.skill.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add skill"});
    
})


exports.editskill = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const skillIndex = student.resume.skill.findIndex(i => i.id === req.params.skillid)
    student.resume.skill[skillIndex] = {...student.resume.skill[skillIndex], ...req.body}
    await student.save();
    res.json({message:"updated skill"});
    
})

exports.deleteskill = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredskill = student.resume.skill.filter(i => i.id !== req.params.skillid)
    student.resume.skill = filteredskill;
    await student.save();
    res.json({message:"deleted skill"});
    
})
// --------------------------------project---------------------------------
exports.addproject = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.project.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add project"});
    
})


exports.editproject = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const projectIndex = student.resume.project.findIndex(i => i.id === req.params.projectid)
    student.resume.project[projectIndex] = {...student.resume.project[projectIndex], ...req.body}
    await student.save();
    res.json({message:"updated project"});
    
})

exports.deleteproject = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredproject = student.resume.project.filter(i => i.id !== req.params.projectid)
    student.resume.project = filteredproject;
    await student.save();
    res.json({message:"deleted project"});
    
})

// --------------------------------certificate---------------------------------
exports.addcertificate = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.certificate.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add certificate"});
    
})


exports.editcertificate = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const certificateIndex = student.resume.certificate.findIndex(i => i.id === req.params.certificateid)
    student.resume.certificate[certificateIndex] = {...student.resume.certificate[certificateIndex], ...req.body}
    await student.save();
    res.json({message:"updated certificate"});
    
})

exports.deletecertificate = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredcertificate = student.resume.certificate.filter(i => i.id !== req.params.certificateid)
    student.resume.certificate = filteredcertificate;
    await student.save();
    res.json({message:"deleted certificate"});
    
})

// --------------------------------accomplishment---------------------------------
exports.addaccomplishment = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    student.resume.accomplishment.push({...req.body, id: uuidv4()})
    await student.save();
    res.json({message:"add accomplishment"});
    
})


exports.editaccomplishment = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const accomplishmentIndex = student.resume.accomplishment.findIndex(i => i.id === req.params.accomplishmentid)
    student.resume.accomplishment[accomplishmentIndex] = {...student.resume.accomplishment[accomplishmentIndex], ...req.body}
    await student.save();
    res.json({message:"updated accomplishment"});
    
})

exports.deleteaccomplishment = CatchErrorHandling (async(req, res, next) => {
    const student = await studentModel.findById(req.id).exec(); 
    const filteredaccomplishment = student.resume.accomplishment.filter(i => i.id !== req.params.accomplishmentid)
    student.resume.accomplishment = filteredaccomplishment;
    await student.save();
    res.json({message:"deleted accomplishment"});
    
})