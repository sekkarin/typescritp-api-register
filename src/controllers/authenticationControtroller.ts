import { log } from 'console';
import { createUser } from 'db/user';
import { getUserByEmail } from 'db/user';
import express, { Request, Response, NextFunction } from 'express';
import { authentication } from 'helpers';
import { random } from 'helpers';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, username } = req.body
        //? ตรวจสอบข้อมูลว่ามีมั้ย
        if (!email || !password || !username) res.sendStatus(400)

        //? ตรวจสอบว่ามีการใช้งาน email แล้วรึยัง
        const existingUser = await getUserByEmail(email)
        if(existingUser){
            return res.sendStatus(400)
        }
        const salt = random();
        const user = await createUser({
            email:email,
            username:username,
            authentication:{
                salt:salt,
                password:authentication(salt,password),
            }
        })
        


    } catch (error) {
        log(error)
        res.sendStatus(400)
    }
}