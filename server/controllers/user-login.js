const User = require('../config/UserSchema')
const bcrypt = require("bcrypt")

async function checkUser(req, res) {
    let { email, password } = req.body
 
    const isExist = await User.findOne({email})

    if(isExist) {
        bcrypt.compare(password, isExist.password, (err, result) => {
            if(result) {
                res.cookie("email", email,
                    {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: "None"
                    })
                return res.json(isExist)
            }

            else
                res.json({error: "error"})
        })
    }
    else res.json({error: "error"})
}

module.exports = checkUser