const User = require('../config/UserSchema')

async function  addUserData(req, res) {
    try {
        let { first_name, last_name, phone_number, email, password, account_type } = req.body
        console.log("first name: "+first_name)
        User.insertMany([{
            first_name,
            last_name,
            phone_number,
            email,
            password,
            account_type
        }])
        return res.json({msg: "done"})
    } catch(e) {
        console.log(e)
    }
}

module.exports = addUserData