const express = require("express")
const router = express.Router()
const addUserData = require("./controllers/userdata")

router.route("/")
.post(addUserData)

module.exports = router