const express = require('express');
const { employePage,employeSignup,employeSignin,employeSignout,currentemploye,employeSendmail,employeforgetPassword,employeresetPassword,employeupdate,employeavatar
    ,createinternship,readinternship,readsingleinternship,
    createjob,readjob,readsinglejob,
 } = require('../controllers/employeController');
const { isAuthenticated } = require('../Middlewares/auth');
const router = express.Router();


// GET /
router.get('/',employePage)

// POST /
router.post('/currentemploye', isAuthenticated ,currentemploye)

// POST /signup
router.post('/signup', employeSignup)

// POST /signin
router.post('/signin', employeSignin)

// GET /signout
router.get('/signout', isAuthenticated ,employeSignout)

// POST /sendMail
router.post('/sendmail',employeSendmail)

// GET /forgetPassword/:employe.id
router.get('/forgetPassword/:id',employeforgetPassword)

// POST /resetPassword/:employe.id
router.post('/resetPassword/:id', isAuthenticated ,employeresetPassword)

// POST /update/:employe.id
router.post('/update/:id',isAuthenticated,employeupdate)

// POST /avatar/:employe.id
router.post('/avatar/:id',isAuthenticated,employeavatar)

// --------------------------internship------------------------
// POST /internship/create
router.post('/internship/create',isAuthenticated,createinternship)

// POST /internship/read
router.post('/internship/read',isAuthenticated,readinternship)
// POST /internship/readsingle
router.post('/internship/readsingle/:id',isAuthenticated,readsingleinternship)





// --------------------------job------------------------

// POST /job/create
router.post('/job/create',isAuthenticated,createjob)

// POST /job/read
router.post('/job/read',isAuthenticated,readjob)
// POST /job/readsingle
router.post('/job/readsingle/:id',isAuthenticated,readsinglejob)





module.exports = router;