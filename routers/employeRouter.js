const express = require('express');
const { employePage,employeSignup,employeSignin,employeSignout,currentemploye,employeSendmail,employeforgetPassword,employeresetPassword,employeupdate,employeavatar } = require('../controllers/employeController');
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


module.exports = router;