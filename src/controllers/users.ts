import express from 'express';
import {deleteUserById, getUser, getUserById,updateUser as methodUpdateUser } from '../db/users'
import { log } from 'console';

export const getAllUsers = async (req: express.Request, res: express.Response)=>{

    try {
        // log(req.body);
        // log("isAuthenticated",req.cookies['TEST-AUTHENTICATION']);
        const users = await getUser();
        return res.status(200).json(users);
    } catch (error) {
        log(error)
        res.sendStatus(400)
    }
}
export const deleteUser = async (req: express.Request, res: express.Response)=>{

    try {
        const {id} = req.params
        const deleteUser = await deleteUserById(id);

        // const users = await getUser();
        return res.status(200).json(deleteUser);
    } catch (error) {
        log(error)
        res.sendStatus(400)

    }
}
export const updateUser = async (req: express.Request, res: express.Response)=>{

    try {
        const {id} = req.params
        const {username}:{username:string} = req.body;

        if(!username){
            return res.sendStatus(400);
        }
        const user = await getUserById(id);
        // const user = await methodUpdateUser(id,{username:username}).then(result => result)
        if (!user) {
            return res.sendStatus(400);
        }
        user.username = username;
        await user.save();
        return res.status(200).json(user).end();

    } catch (error) {
        log(error)
        res.sendStatus(400)
    }
}