export default async function handler(req,res){
    if(req.method !== "GET"){
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

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
        return res.status(200).json(data);
    } catch (error) {
        console.error("Forex API error",error);

        res.status(500).json({
            message: "Forex API not found"
        });
    } 
}
































