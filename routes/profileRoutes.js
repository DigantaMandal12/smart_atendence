
const express = require("express");

const router = express.Router();


// ======================================
// PROFILE PAGE
// ======================================

router.get("/profile", (req, res) => {

    res.render("profile");

});


// ======================================
// EDIT PROFILE PAGE
// ======================================

router.get("/profile/edit", (req, res) => {

    res.render("profile/edit");

});


// ======================================
// UPDATE PROFILE
// ======================================

router.post("/profile/edit", (req, res) => {

    const {
        name,
        email,
        phone,
        dob,
        gender,
        address
    } = req.body;


    console.log("Updated Profile:");

    console.log({
        name,
        email,
        phone,
        dob,
        gender,
        address
    });


    // MongoDB update will be added here later.


    res.redirect("/profile");

});


module.exports = router;
