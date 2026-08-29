const express = require("express");
const router = express.Router();

const teacherDashboardController = require("../controllers/teacherDashboardController");

const {teacherAuth} = require("../middleware/authMiddleware");

const teacherProfileController = require("../controllers/teacherProfileController");


router.get("/teacher/dashboard",teacherDashboardController.dashboard );

// Teacher Dashboard
router.get("/teacher/dashboard", teacherAuth, teacherDashboardController.dashboard);

// ==========================================
// TEACHER PROFILE
// ==========================================

router.get(
    "/teacher/profile",
    teacherAuth,
    teacherProfileController.profile
);

// ==========================================
// EDIT TEACHER PROFILE
// ==========================================

router.get(
    "/teacher/profile/edit",
    teacherAuth,
    teacherProfileController.editProfile
);

// ==========================================
// UPDATE TEACHER PROFILE
// ==========================================

router.post("/teacher/profile/edit", teacherAuth, teacherProfileController.updateProfile);


// Students
router.get("/teacher/students", (req, res) => {

    res.render("teacher/students/index");

});


// Student Profile
router.get("/teacher/students/:id", (req, res) => {

    res.render("teacher/students/profile");

});


// Attendance
router.get("/teacher/attendance", (req, res) => {

    res.render("teacher/attendance/index");

});


// Attendance History
router.get("/teacher/attendance/history", (req, res) => {

    res.render("teacher/attendance/history");

});


// Syllabus
router.get("/teacher/syllabus", (req, res) => {

    res.render("teacher/syllabus/index");

});


// Manage Syllabus
router.get("/teacher/syllabus/manage", (req, res) => {

    res.render("teacher/syllabus/manage");

});


// Resources
router.get("/teacher/resources", (req, res) => {

    res.render("teacher/resources/index");

});


// Manage Resources
router.get("/teacher/resources/manage", (req, res) => {

    res.render("teacher/resources/manage");

});


// Quiz
router.get("/teacher/quiz", (req, res) => {

    res.render("teacher/quiz/index");

});


// Create Quiz
router.get("/teacher/quiz/create", (req, res) => {

    res.render("teacher/quiz/create");

});


// Profile
router.get(
    "/teacher/profile",
    teacherAuth,
    (req, res) => {

        res.render(
            "teacher/profile/index",
            {
                teacher: req.teacher
            }
        );

    }
);


// Edit Profile
router.get("/teacher/profile/edit", (req, res) => {

    res.render("teacher/profile/edit");

});


module.exports = router;