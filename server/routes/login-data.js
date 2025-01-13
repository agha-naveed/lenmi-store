const express = require("express")
const userdata = express.Router()
const { checkUser, getUser } = require("../controllers/user-login")

userdata.route("/")
.post(checkUser)
.get(getUser)

module.exports = userdata