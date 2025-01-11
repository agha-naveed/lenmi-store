const express = require("express")
const app = express()
const db = require("./config/DB")
const cors = require("cors")
const bodyParser = require("body-parser")
const route = require("./routes")

const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api/user-signup", route)


app.listen(port, () => console.log(`Server Running on port: ${port}`))