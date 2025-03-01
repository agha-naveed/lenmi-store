const express = require("express")
const app = express()
const cors = require("cors")
const signupData = require("./routes/signup-data")
const loginData = require("./routes/login-data")
const cookieParser = require("cookie-parser")
const port = 3000;
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/lenmi-store").then(() => {
    console.log("Successfully connected to MongoDB")
}).catch((err) => {
    console.log(`Some Error Occurred : ${err}`)
})


app.use(cors(
    {
    origin: 'http://localhost:5173',
    credentials: true,
}
));
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/user-signup", signupData)

app.use("/api/user-login", loginData)

app.listen(port, () => console.log(`Server Running on port: ${port}`))