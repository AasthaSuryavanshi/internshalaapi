const express = require('express');
const { homePage } = require('../controllers/inedxController');
const router = express.Router();


router.get('/', homePage)

module.exports = router;