const express = require("express")
const app = express()
const route = require("./routes")

const cors = require("cors")
const port = 3000;

app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.use("/api/user-signup", route)


app.listen(port, () => console.log(`Server Running on port: ${port}`))