require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");
const connectDB = require("./config/db");
const app = express();

const port = process.env.PORT || 3000;


// ===============================
// DATABASE
// ===============================

connectDB();

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


// ===============================
// SESSION
// ===============================

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,

        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);


// ===============================
// STATIC FILES
// ===============================

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// ===============================
// EJS
// ===============================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// ===============================
// AUTH ROUTES
// ===============================

const authRoutes = require("./routes/authRoutes");

app.use("/", authRoutes);

// ===============================
// TEACHER ROUTES
// ===============================

const teacherRoutes = require("./routes/teacherRoutes");

app.use("/", teacherRoutes);


// ===============================
// ATTENDANCE ROUTES
// ===============================

const attendanceRoutes = require("./routes/attendanceRoutes");

app.use("/", attendanceRoutes);

//Dashboard
const dashboardRoutes = require("./routes/dashboardRoutes");
app.use("/", dashboardRoutes);


// ===============================
// DASHBOARD
// ===============================

app.get("/dashboard", (req, res) => {

    res.render("dashboard");

});

// ===============================
// SYLLABUS 
// ===============================

app.get("/syllabus", (req, res) => {
    res.render("syllabus/index");
});



// ===============================
// HOME
// ===============================

app.get("/", (req, res) => {

    res.redirect("/login");

});

// ===============================
// PROFILE ROUTES
// ===============================

const profileRoutes = require("./routes/profileRoutes");

app.use("/", profileRoutes);


// ===============================
// SERVER
// ===============================

app.listen(port, () => {

    console.log(
        `Server running at http://localhost:${port}`
    );

});

