import { Request, Response } from "express";
import { request } from "http";
import { getUserFromRepository, saveUserToRepository } from "../repository/userRepository";


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


export const createUser =async (req: Request, res : Response) => {
    try {
        const {first_name, last_name, email} = req.body;
        const user  = await saveUserToRepository(first_name, last_name, email)

        user && res.status(201).json(user)
    } catch (error) {
        res.status(400).json({
            message : "failed to create new user"
        })
    }   
}