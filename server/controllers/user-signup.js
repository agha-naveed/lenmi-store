const User = require('../config/UserSchema')
const bcrypt = require("bcrypt")

async function  addUserData(req, res) {
    let { first_name, last_name, phone_number, email, password, account_type } = req.body

    try {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                User.insertMany([{
                    first_name,
                    last_name,
                    phone_number,
                    email,
                    password: hash,
                    account_type
                }]).then(() => res.json(req.body))
            });
        });
    }

    catch(e) {
        res.json({
            error: "Duplicate Email is not Allowed!"
        })
    }
}

async function getUserData(req, res) {
    let data = await User.find({})
    return res.json(data)
}

module.exports = {
    addUserData,
    getUserData
}