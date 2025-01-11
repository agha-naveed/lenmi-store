const express = require("express")
const route = express.Router()

route.post('/', (req, res) => {
    return res.json(res.body)
})

.get("/get", (req, res) => {

})

module.exports = route