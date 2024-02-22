import mongoose from "mongoose"

export async function connect(){
    try {
        const db =await  mongoose.connect(process.env.MONGO_URI);

        console.log(db.connection.host);
        //for check purpose only
        console.log(process.env.MONGO_URI);
        db.connection.on("connected", ()=>{
            console.log("Connected to MongoDB");
        })
        db.connection.on("error", (err)=>{
            console.log("Error is occured while making connection "+err);
        })


    } catch (error) {
        console.log(error)
    }
}