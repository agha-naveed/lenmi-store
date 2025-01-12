const User = require('../config/UserSchema')

async function  addUserData(req, res) {
    let { first_name, last_name, phone_number, email, password, account_type } = req.body
    User.insertMany([{
        first_name,
        last_name,
        phone_number,
        email,
        password,
        account_type
    }])
    
    return res.json({msg: "done"})
}

async function getUserData(req, res) {
    let data = await User.find({})
    return res.json(data)
}

module.exports = {
    addUserData,
    getUserData
}