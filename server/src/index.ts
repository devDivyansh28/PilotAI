import express from "express"
import "dotenv/config";



const app = express();
const PORT = process.env.PORT


app.get("/",(req,res)=>{
    res.send("Hello World!")
    
})

app.get('/health',(req,res)=>{
    res.send("Hello I am Healthy...")
})

app.listen(PORT , ()=>{
    console.log(`Serer is Running on PORT ${PORT}`);
})