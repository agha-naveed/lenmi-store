const User = require('../config/UserSchema')
const bcrypt = require("bcrypt")

async function checkUser(req, res) {
    let { email, password } = req.body
 
    const isExist = await User.findOne({email})

    if(isExist) {
        bcrypt.compare(password, isExist.password, (err, result) => {
            return result ? res.json(isExist) : res.json({msg: "Email or Password is incorrect"})
        })
    }

    else
        return res.json({msg: "Email or Password is incorrect"})
}

module.exports = checkUser