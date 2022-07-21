const express= require("express")
const app= express()
require("dotenv").config()
const connectDB =require("./config/connectDB")
app.use(express.json())
const port=process.env.port||5000;

connectDB()
app.use("/user",require("./routes/userRoutes"))

app.listen(port,(err)=>
err ? 
console.log(err) :
console.log(`Server is running on port ${port}!`))