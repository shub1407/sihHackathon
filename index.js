import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import fileUpload from "express-fileupload"
import cloudinaryConnect from "./config/cloudinary.js"
import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
// Load environment variables from.env file
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000
//middleware
app.use(cors())
app.use(express.json())

//db connection
import connectDB from "./config/db.js"
connectDB()
cloudinaryConnect()
//routes for user
import userRouter from "./routes/userRoutes.js"
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
  res.send("Hello, Express!")
})

//checking file upload with multer

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
