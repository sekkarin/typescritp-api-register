import { createUser, getUserByEmail } from "../db/users";
import express from "express";
import { random, authentication } from "../helpers";
export const register = async (req:express.Request,res:express.Response,next:express.NextFunction) => {
    try {
        const {email,password,username} = req.body;
        if (!email||!password||!username) {
            return res.sendStatus(400)
        }
        // ตวจสอบว่ามี email หรือ ยัง
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.sendStatus(400)
        }
        const salt = random
        const user = await createUser({
            email: email,
            username:username,
            authentication:{
                salt: salt,
                password:authentication(salt,password)
            }
        })
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
        next();

    }
}
