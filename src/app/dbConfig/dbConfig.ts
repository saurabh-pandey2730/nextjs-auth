import mongoose from "mongoose";
export async function connect(){
    try {
        mongoose.connect(process.env.Mongo_URI!)
       const connection = mongoose.connection
       connection.on('connected',()=>{
         console.log('Database Connected Successfully')
       })
       connection.on('error',(err)=>{
        console.log('Connection Error'+err)
        process.exit()
       })
    } catch (error) {
         console.log('Something went wrong !')
         console.log(error)
    }
}