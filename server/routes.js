const express = require("express")
const router = express.Router()
const { addUserData, getUserData } = require("./controllers/userdata")

router.route("/")
.post(addUserData)
.get(getUserData)

module.exports = router