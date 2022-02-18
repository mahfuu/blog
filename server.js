const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Connect to DB blogdb
mongoose.connect("mongodb://localhost:27017/blogdb",
    () => console.log("Connected to DB")
)

// Routes
app.use("/daughter", require("./routes/daughterRouter.js"))

// Error Handler
app.use((err, req, res) => {
    // console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})