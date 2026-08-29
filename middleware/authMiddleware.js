const Teacher = require("../models/Teacher");

async function teacherAuth(req, res, next) {

    try {

        // Check login
        if (!req.session.teacherId) {

            return res.redirect("/login");

        }


        // Find teacher
        const teacher =
            await Teacher.findById(
                req.session.teacherId
            );


        // Teacher not found
        if (!teacher) {

            return req.session.destroy(() => {

                res.redirect("/login");

            });

        }


        // Make teacher available
        req.teacher = teacher;


        next();

    }

    catch (error) {

        console.log(
            "Teacher authentication error:",
            error
        );

        res.redirect("/login");

    }

}


module.exports = {
    teacherAuth
};