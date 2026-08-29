const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    phone: {
        type: String,
        required: true
    },

    employeeId: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    qualification: {
        type: String,
        default: ""
    },

    specialization: {
        type: String,
        default: ""
    },

    experience: {
        type: Number,
        default: 0
    },

    subjects: {
        type: String,
        default: ""
    },

    semester: {
        type: String,
        default: ""
    },

    sections: {
        type: String,
        default: ""
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports =
    mongoose.model("Teacher", teacherSchema);