const express = require("express");

const router = express.Router();


// Dashboard
router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});


// Syllabus
router.get("/syllabus", (req, res) => {
    res.render("syllabus/index");
});

//Resources
router.get("/resources", (req, res) => {
    res.render("resources/index");
});

//Quiz
router.get("/quiz", (req, res) => {
    res.render("quiz/index");
});

module.exports = router;