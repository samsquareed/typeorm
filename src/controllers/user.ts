import { Request, Response } from "express";
import { getUserFromRepository } from "../repository/userRepository";


export const getUser = async (req : Request, res : Response) => {
    try {
        const user = await getUserFromRepository(parseInt(req.params.userId));
        user && res.status(200).json(user)
    } catch (error) {
        res.status(404).json({
            message: "User not found!"
        })
    }   
}