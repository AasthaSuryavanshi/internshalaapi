const express = require('express');
const { homePage,studentSignup,studentSignin, studentSignout, currentUser,studentSendmail,studentforgetPassword
    ,studentresetPassword,studentupdate,studentavatar,applyinternship,applyjob } = require('../controllers/indexController');
const { isAuthenticated } = require('../Middlewares/auth');
const router = express.Router();


// GET /
router.get('/', isAuthenticated ,homePage)

// POST /
router.post('/student', isAuthenticated ,currentUser)

// POST /student/signup
router.post('/student/signup', studentSignup)

// POST /student/signin
router.post('/student/signin', studentSignin)

// GET /student/signout
router.get('/student/signout', isAuthenticated ,studentSignout)

// POST /student/sendMail
router.post('/student/sendmail',studentSendmail)

// GET /forgetPassword/:student.id
router.get('/forgetPassword/:id',studentforgetPassword)

// POST /student/resetPassword/:student.id
router.post('/student/resetPassword/:id', isAuthenticated ,studentresetPassword)

// POST /student/update/:student.id
router.post('/student/update/:id',isAuthenticated,studentupdate)

// POST /student/avatar/:student.id
router.post('/student/avatar/:id',isAuthenticated,studentavatar)

// -------------------apply internship------------------------

// POST /student/apply/internship/:internshipId
router.post('/student/apply/internship/:internshipId', isAuthenticated ,applyinternship)

// -------------------apply job------------------------

// POST /student/apply/job/:jobId
router.post('/student/apply/job/:jobId', isAuthenticated ,applyjob)

module.exports = router;