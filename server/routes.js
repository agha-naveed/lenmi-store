const express = require("express")
const route = express.Router()
const addUserData = require("./controllers/userdata")
const User = require("./config/UserSchema")

route.post('/', addUserData)

module.exports = route