const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const Teacher = require("../models/Teacher");
const Student = require("../models/Student");


// ==================================================
// LOGIN PAGE
// ==================================================

router.get("/login", (req, res) => {
    res.render("login");
});



router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        console.log("Login request:", {
            email
        });


        // ===============================
        // CHECK STUDENT
        // ===============================

        const student = await Student.findOne({
            email: email.toLowerCase().trim()
        });

        if (student) {

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    student.password
                );

            if (!passwordMatch) {
                return res.send("Incorrect password");
            }

            req.session.studentId = student._id;
            req.session.userType = "student";

            console.log(
                "Student logged in:",
                student.name
            );

            return res.redirect("/dashboard");
        }


        // ===============================
        // CHECK TEACHER
        // ===============================

        const teacher = await Teacher.findOne({
            email: email.toLowerCase().trim()
        });

        if (teacher) {

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    teacher.password
                );

            if (!passwordMatch) {
                return res.send("Incorrect password");
            }

            req.session.teacherId = teacher._id;
            req.session.userType = "teacher";

            console.log(
                "Teacher logged in:",
                teacher.fullName
            );

            return res.redirect(
                "/teacher/dashboard"
            );
        }


        // ===============================
        // ACCOUNT NOT FOUND
        // ===============================

        return res.send("Account not found");

    } catch (error) {

        console.log("Login Error:", error);

        res.status(500).send("Login failed");

    }

});


// ==================================================
// SIGNUP CHOICE
// ==================================================

router.get("/signup", (req, res) => {

    res.render("signup");

});


// ==================================================
// STUDENT SIGNUP PAGE
// ==================================================

router.get("/signup/student", (req, res) => {

    res.render("studentSignup");

});

// ==================================================
// STUDENT SIGNUP FORM
// ==================================================

router.post("/signup/student", async (req, res) => {

    try {

        console.log("Student Registration:");
        console.log(req.body);


        const {
            name,
            email,
            phone,
            password,
            confirmPassword,
            studentId,
            rollNumber,
            department,
            course,
            semester,
            section
        } = req.body;


        // ==========================================
        // CHECK PASSWORD
        // ==========================================

        if (password !== confirmPassword) {

            return res.send(
                "Passwords do not match"
            );

        }


        // ==========================================
        // CHECK EXISTING EMAIL
        // ==========================================

        const existingStudent =
            await Student.findOne({
                email: email.toLowerCase().trim()
            });


        if (existingStudent) {

            return res.send(
                "Student email already registered"
            );

        }


        // ==========================================
        // CHECK EXISTING STUDENT ID
        // ==========================================

        const existingStudentId =
            await Student.findOne({
                studentId: studentId
            });


        if (existingStudentId) {

            return res.send(
                "Student ID already registered"
            );

        }


        // ==========================================
        // HASH PASSWORD
        // ==========================================

        const hashedPassword =
            await bcrypt.hash(password, 10);


        // ==========================================
        // CREATE STUDENT
        // ==========================================

        const student = new Student({

            name: name,

            email: email
                .toLowerCase()
                .trim(),

            phone: phone,

            password: hashedPassword,

            studentId: studentId,

            rollNumber: rollNumber,

            department: department,

            course: course,

            semester: semester,

            section: section

        });


        // ==========================================
        // SAVE TO MONGODB
        // ==========================================

        await student.save();


        console.log("Student saved to MongoDB:");

        console.log(student);


        // ==========================================
        // GO TO LOGIN
        // ==========================================

        res.redirect("/login");


    } catch (error) {

        console.log(
            "Student signup error:",
            error
        );

        res.status(500).send(
            "Student signup error"
        );

    }

});


// ==================================================
// TEACHER SIGNUP PAGE
// ==================================================

router.get("/signup/teacher", (req, res) => {

    res.render("teacherSignup");

});


// ==================================================
// TEACHER SIGNUP FORM
// ==================================================

// ==================================================
// TEACHER SIGNUP FORM
// ==================================================

router.post("/signup/teacher", async (req, res) => {

    try {

        console.log("Teacher Registration:");
        console.log(req.body);


        // ==========================================
        // GET FORM DATA
        // ==========================================

        const {
            name,
            email,
            phone,
            employeeId,
            department,
            designation,
            password,
            confirmPassword
        } = req.body;


        // ==========================================
        // CHECK PASSWORD
        // ==========================================

        if (password !== confirmPassword) {

            return res.status(400).send(
                "Passwords do not match"
            );

        }


        // ==========================================
        // CHECK EMAIL
        // ==========================================

        const existingTeacher =
            await Teacher.findOne({
                email: email.toLowerCase().trim()
            });


        if (existingTeacher) {

            return res.status(400).send(
                "Teacher email already registered"
            );

        }


        // ==========================================
        // CHECK EMPLOYEE ID
        // ==========================================

        const existingEmployee =
            await Teacher.findOne({
                employeeId: employeeId.trim()
            });


        if (existingEmployee) {

            return res.status(400).send(
                "Employee ID already registered"
            );

        }


        // ==========================================
        // HASH PASSWORD
        // ==========================================

        const hashedPassword =
            await bcrypt.hash(password, 10);


        // ==========================================
        // CREATE TEACHER
        // ==========================================

        const teacher = new Teacher({

            // Form uses "name"
            // Database model uses "fullName"

            fullName: name.trim(),

            email: email
                .toLowerCase()
                .trim(),

            phone: phone.trim(),

            employeeId: employeeId.trim(),

            department: department,

            designation: designation,

            password: hashedPassword

        });


        // ==========================================
        // SAVE TO MONGODB
        // ==========================================

        await teacher.save();


        console.log(
            "================================="
        );

        console.log(
            "TEACHER SAVED SUCCESSFULLY"
        );

        console.log(
            "MongoDB ID:",
            teacher._id
        );

        console.log(
            "Name:",
            teacher.fullName
        );

        console.log(
            "Email:",
            teacher.email
        );

        console.log(
            "Employee ID:",
            teacher.employeeId
        );

        console.log(
            "================================="
        );


        // ==========================================
        // REDIRECT TO LOGIN
        // ==========================================

        res.redirect("/login");


    } catch (error) {

        console.log(
            "Teacher signup error:",
            error
        );

        res.status(500).send(
            "Teacher signup error: " +
            error.message
        );

    }

});


// ==================================================
// LOGOUT
// ==================================================

router.get("/logout", (req, res) => {

        req.session.destroy((error) => {

                if (error) {
                    console.log(error);
                    return res.status(500).send("Logout failed");
                }

                res.redirect("/login");

            }
        );

    }
);


module.exports = router;