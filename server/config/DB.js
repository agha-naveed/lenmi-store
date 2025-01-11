const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/lenmi-store", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Successfully connected to MongoDB")
})
.catch((err) => {
    console.log(`Some Error Occurred : ${err}`)
})