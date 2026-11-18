const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "https://localhost:5173"
}));

app.get("/api/forex", async(req,res)=>{
    try {
        const response = await fetch(
            "https://api.apilayer.com/fixer/latest",
            {
                method: "GET",
                headers:{
                    "apiKey": process.env.FOREX_API_KEY
                }
            }
        );
        if(!response.ok){
            return res.status(response.status).json({
                message:"Failed to retrieve rates"
            });
        }

        const data = await response.json();
        return res.json(data);
    } catch (error) {
        console.error("Forex API error",error);

        res.status(500).json({
            message: "Forex API not found"
        });
    } 
})

app.listen(5050, ()=>{
    console.log("Backend running port 5050");
});






























