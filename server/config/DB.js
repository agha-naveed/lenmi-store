const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://lenmi-store:Yaali110@cluster0.0lcnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Successfully connected to MongoDB")
})
.catch((err) => {
    console.log(`Some Error Occurred : ${err}`)
})