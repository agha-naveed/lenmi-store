const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
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

const User = mongoose.model('Users', userSchema)

module.exports = User