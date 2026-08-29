const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    studentId: {
        type: String,
        required: true,
        unique: true
    },

    rollNumber: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    semester: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    }

});

module.exports =
    mongoose.model("Student", studentSchema);