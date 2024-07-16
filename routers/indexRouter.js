const express = require('express');
const { homePage,studentSignup,studentSignin, studentSignout, currentUser } = require('../controllers/indexController');
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



module.exports = router;