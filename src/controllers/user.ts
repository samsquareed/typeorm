import { Request, Response } from "express";
import { request } from "http";
import { getUserFromRepository, saveUserToRepository, updateUserRepository } from "../repository/userRepository";


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

export const updateUser = async (req : Request, res : Response) => {
    try {
        const {first_name, last_name, email} = req.body;
        const updateResponse = await updateUserRepository(parseInt(req.params.id), first_name,last_name,email);
        updateResponse && res.status(200).json(updateResponse)
    } catch (error) {
        res.status(400).json({
            message : "failed to create new user"
        })
    } 
}