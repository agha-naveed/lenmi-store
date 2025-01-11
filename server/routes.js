const express = require("express")
const route = express.Router()
const User = require("./config/UserSchema")


route.post('/', (req, res) => {
    let { first_name, last_name, phone_number, email, password, account_type } = req.body
    User.insertMany({
        first_name: first_name,
        
    })

    return res.json({msg: "done"})
})

.get("/get", (req, res) => {
    return res.json(res.body)
})

module.exports = route