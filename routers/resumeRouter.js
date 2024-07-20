const express = require('express');
const { resume,addeducation,editeducation,deleteeducation,
    addjob,editjob,deletejob,
    addinternship,editinternship,deleteinternship,
    addresponsibility,editresponsibility,deleteresponsibility,
    addskill, editskill, deleteskill,
    addproject, editproject, deleteproject,
    addcertificate, editcertificate, deletecertificate,
    addaccomplishment, editaccomplishment, deleteaccomplishment,
    addcourse, editcourse, deletecourse
 } = require('../controllers/resumeController');
const { isAuthenticated } = require('../Middlewares/auth');
const router = express.Router();


// GET /
router.get('/', isAuthenticated ,resume)
// -------------------------------EDUCATION------------------------------
// POST / 
router.post('/add-edu', isAuthenticated ,addeducation)
// POST / studentid
router.post('/edit-edu/:eduid', isAuthenticated ,editeducation)

// POST / studentid
router.post('/delete-edu/:eduid', isAuthenticated ,deleteeducation)


// -------------------------------jobs------------------------------
// POST / 
router.post('/add-job', isAuthenticated ,addjob)
// POST / studentid
router.post('/edit-job/:jobid', isAuthenticated ,editjob)

// POST / studentid
router.post('/delete-job/:jobid', isAuthenticated ,deletejob)

// -------------------------------internships------------------------------
// POST / 
router.post('/add-internship', isAuthenticated ,addinternship)
// POST / studentid
router.post('/edit-internship/:internshipid', isAuthenticated ,editinternship)

// POST / studentid
router.post('/delete-internship/:internshipid', isAuthenticated ,deleteinternship)


// -------------------------------responsibility------------------------------
// POST / 
router.post('/add-responsibility', isAuthenticated ,addresponsibility)
// POST / studentid
router.post('/edit-responsibility/:responsibilityid', isAuthenticated ,editresponsibility)

// POST / studentid
router.post('/delete-responsibility/:responsibilityid', isAuthenticated ,deleteresponsibility)


// -------------------------------skill------------------------------
// POST / 
router.post('/add-skill', isAuthenticated ,addskill)
// POST / studentid
router.post('/edit-skill/:skillid', isAuthenticated ,editskill)

// POST / studentid
router.post('/delete-skill/:skillid', isAuthenticated ,deleteskill)


// -------------------------------project------------------------------
// POST / 
router.post('/add-project', isAuthenticated ,addproject)
// POST / studentid
router.post('/edit-project/:projectid', isAuthenticated ,editproject)

// POST / studentid
router.post('/delete-project/:projectid', isAuthenticated ,deleteproject)


// -------------------------------certificate------------------------------
// POST / 
router.post('/add-certificate', isAuthenticated ,addcertificate)
// POST / studentid
router.post('/edit-certificate/:certificateid', isAuthenticated ,editcertificate)

// POST / studentid
router.post('/delete-certificate/:certificateid', isAuthenticated ,deletecertificate)




// -------------------------------accomplishment------------------------------
// POST / 
router.post('/add-accomplishment', isAuthenticated ,addaccomplishment)
// POST / studentid
router.post('/edit-accomplishment/:accomplishmentid', isAuthenticated ,editaccomplishment)

// POST / studentid
router.post('/delete-accomplishment/:accomplishmentid', isAuthenticated ,deleteaccomplishment)


// -------------------------------course------------------------------
// POST / 
router.post('/add-course', isAuthenticated ,addcourse)
// POST / studentid
router.post('/edit-course/:courseid', isAuthenticated ,editcourse)

// POST / studentid
router.post('/delete-course/:courseid', isAuthenticated ,deletecourse)







module.exports = router;
