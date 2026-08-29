const Student = require("../models/Student");
const Teacher = require("../models/Teacher");


// ==========================================
// TEACHER DASHBOARD
// ==========================================

exports.dashboard = async (req, res) => {

    try {

        // ======================================
        // CHECK TEACHER SESSION
        // ======================================

        if (!req.session.teacherId) {
            return res.redirect("/login");
        }


        // ======================================
        // GET LOGGED-IN TEACHER
        // ======================================

        const teacher = await Teacher.findById(
            req.session.teacherId
        );


        if (!teacher) {
            return res.redirect("/login");
        }


        // ======================================
        // GET RECENT STUDENTS
        // ======================================

        const recentStudents = await Student.find()
            .sort({ _id: -1 })
            .limit(5);


        // ======================================
        // TOTAL STUDENTS
        // ======================================

        const totalStudents =
            await Student.countDocuments();


        // ======================================
        // TEMPORARY ATTENDANCE DATA
        // ======================================
        // We will connect this to Attendance.js
        // after confirming your dashboard works.

        const presentToday = 0;

        const absentToday = 0;

        const attendancePercentage = 0;

        const averageAttendance = 0;


        // ======================================
        // TEMPORARY PENDING TASKS
        // ======================================
        // Later this will come from syllabus,
        // resources and quiz collections.

        const pendingTasks = 0;


        // ======================================
        // SEND DATA TO EJS
        // ======================================

        res.render(
            "teacher/dashboard",
            {

                teacher,

                recentStudents,

                totalStudents,

                presentToday,

                absentToday,

                attendancePercentage,

                averageAttendance,

                pendingTasks

            }
        );


    } catch (error) {

        console.log(
            "Teacher Dashboard Error:",
            error
        );

        res.status(500).send(
            "Teacher dashboard error: " +
            error.message
        );

    }

};


module.exports = {
    dashboard: exports.dashboard
};