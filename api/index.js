import  Express  from "express";
import dotenv from "dotenv";

dotenv.config();
const app = Express();

const port = process.env.PORT ||5000 //process.env.PORT = port number in env file

app.listen(port, ()=> {
    console.log(`Connected to backend!, listening to PORT: ${port}`);
})