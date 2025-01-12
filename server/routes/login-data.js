const express = require("express")
const userdata = express.Router()
const checkUser = require("../controllers/user-login")

userdata.route("/")
.post(checkUser)

module.exports = userdata