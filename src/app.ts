import express, { Request, Response } from "express";

const app = express();
app.use(express.json())

const PORT = 8080

app.get("/", (req : Request, res : Response) => {
    res.status(200).json({
        message: "home route!"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server listening on port : ${PORT}`);  
})