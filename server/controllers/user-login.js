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
                        secure: true,
                    })
                return res.json("Done")
            }

            else
                res.json({error: "error"})
        })
    }
    else res.json({error: "error"})
}


async function getUser(req, res) {
    let cookie = await req.cookies.email
    
    if(cookie) {
        const data = await User.findOne({email: cookie})    
        return res.json(data)
    }
    else {
        return res.json({error: "error"})
    }
}

module.exports = {
    checkUser,
    getUser
}