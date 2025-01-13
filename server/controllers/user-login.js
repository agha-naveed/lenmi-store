const User = require('../config/UserSchema')
const bcrypt = require("bcrypt")

async function checkUser(req, res) {
    let { email, password } = req.body
 
    const isExist = await User.findOne({email})
    console.log("is exist:   "+isExist)

    if(isExist) {
        bcrypt.compare(password, isExist.password, (err, result) => {
            if(result) {
                res.cookie("email", password)
                return res.json(isExist)
            }
            else
                res.json({error: "error"})
        })
    }
    else res.json({error: "error"})
}

module.exports = checkUser