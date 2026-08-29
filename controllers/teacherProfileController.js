const Teacher = require("../models/Teacher");


// ==========================================
// TEACHER PROFILE
// ==========================================

exports.profile = async (req, res) => {

    try {

        // Check login
        if (!req.session.teacherId) {
            return res.redirect("/login");
        }


        // Get teacher from MongoDB
        const teacher = await Teacher.findById(
            req.session.teacherId
        );


        if (!teacher) {
            return res.redirect("/login");
        }


        // Send teacher to EJS
        res.render(
            "teacher/profile/index",
            {
                teacher
            }
        );


    } catch (error) {

        console.log(
            "Teacher Profile Error:",
            error
        );

        res.status(500).send(
            "Unable to load teacher profile"
        );

    }

};


// ==========================================
// EDIT PROFILE PAGE
// ==========================================

exports.editProfile = async (req, res) => {

    try {

        if (!req.session.teacherId) {
            return res.redirect("/login");
        }


        const teacher = await Teacher.findById(
            req.session.teacherId
        );


        if (!teacher) {
            return res.redirect("/login");
        }


        res.render(
            "teacher/profile/edit",
            {
                teacher
            }
        );


    } catch (error) {

        console.log(
            "Edit Profile Error:",
            error
        );

        res.status(500).send(
            "Unable to load edit profile"
        );

    }

};


// ==========================================
// UPDATE PROFILE
// ==========================================

exports.updateProfile = async (req, res) => {

    try {

        if (!req.session.teacherId) {
            return res.redirect("/login");
        }


        const {
            fullName,
            email,
            phone,
            employeeId,
            department,
            designation
        } = req.body;


        // Basic validation
        if (
            !fullName ||
            !email ||
            !employeeId ||
            !department ||
            !designation
        ) {

            return res.send(
                "Please fill all required fields"
            );

        }


        // Update teacher
        const teacher = await Teacher.findByIdAndUpdate(

            req.session.teacherId,

            {
                fullName: fullName.trim(),
                email: email.toLowerCase().trim(),
                phone: phone ? phone.trim() : "",
                employeeId: employeeId.trim(),
                department: department.trim(),
                designation: designation.trim()
            },

            {
                new: true,
                runValidators: true
            }

        );


        if (!teacher) {
            return res.redirect("/login");
        }


        console.log(
            "Teacher profile updated:",
            teacher.fullName
        );


        // Go back to profile
        res.redirect("/teacher/profile");


    } catch (error) {

        console.log(
            "Update Profile Error:",
            error
        );

        res.status(500).send(
            "Profile update failed: " +
            error.message
        );

    }

};