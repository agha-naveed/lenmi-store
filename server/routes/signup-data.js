const express = require("express")
const userdata = express.Router()
const { addUserData, getUserData } = require("../controllers/user-signup")


userdata.route("/")
.post(addUserData)
.get(getUserData)

module.exports = userdata