const express = require("express");

const router = express.Router();


// Attendance page

router.get("/attendance", (req, res) => {

    res.render("attendance/index");

});


// Attendance history

router.get("/attendance/history", (req, res) => {

    res.render("attendance/history");

});


module.exports = router;
