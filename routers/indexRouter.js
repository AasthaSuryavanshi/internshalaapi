const express = require('express');
const { homePage,studentSignup,studentSignin, studentSignout } = require('../controllers/indexController');
const router = express.Router();




// GET /
router.get('/', homePage)

// POST /student/signup
router.post('/student/signup', studentSignup)

// POST /student/signin
router.post('/student/signin', studentSignin)

// GET /student/signout
router.get('/student/signout', studentSignout)



module.exports = router;