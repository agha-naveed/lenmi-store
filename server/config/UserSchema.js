const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        enum: ['personal', 'business'],
        default: "personal"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

module.exports = User