const User = require('../config/UserSchema')

function addUserData() {
    return (req, res) => {
        let { first_name, last_name, phone_number, email, password, account_type } = req.body
    
        User.insertOne({
            first_name,
            last_name,
            phone_number,
            email,
            password,
            account_type
        })
    }
}

module.exports = addUserData