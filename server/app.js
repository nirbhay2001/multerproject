require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/conn");

const cors = require("cors");
const router = require("./routes/router");
const port = 4004;

connectDB();


app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000", "https://upload-image-using-multer.vercel.app"],
    methods:['POST','GET','HEAD','PUT','DELETE'],
    credentials: true
}));
app.use('/api/v1',router);


app.listen(port,()=>{
    console.log(`server start at port no ${port}`)
})