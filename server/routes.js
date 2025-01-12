const express = require("express")
const route = express.Router()
const addUserData = require("./controllers/userdata")


route.post('/', addUserData)

.get("/get", (req, res) => {
    return res.json(res.body)
})

module.exports = route