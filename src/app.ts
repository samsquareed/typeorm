import express, { Request, Response } from "express";
import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import dotenv from "dotenv"

//middleware imports
import userRoute from "./routes/userRoute"

dotenv.config();
const app = express();
app.use(express.json())
const PORT = 8080

//middlewares
app.use("/users", userRoute);


app.get("/", (req : Request, res : Response) => {
    res.status(200).json({
        message: "home route!"
    })
})

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD, 
    database: process.env.DATABASE,
    entities : [User],
    synchronize : true,
})

AppDataSource.initialize().then(()=> {
    console.log("Connected to database");
}).catch((err)=> {
    console.log('Error connecting to database',err);
}
)

app.listen(PORT, ()=> {
    console.log(`Server listening on port : ${PORT}`);  
})