const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const signupData = require("./routes/signup-data")
const loginData = require("./routes/login-data")
const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api/user-signup", signupData)
app.use("/api/user-login", loginData)


app.listen(port, () => console.log(`Server Running on port: ${port}`))