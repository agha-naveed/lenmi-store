const express = require("express")
const route = express.Router()

route.post('/', (req, res) => {
    let { first_name, last_name, phone_number, email, password, account_type } = req.body

    


    return res.json({msg: "done"})
})

.get("/get", (req, res) => {
    return res.json(res.body)
})

module.exports = route