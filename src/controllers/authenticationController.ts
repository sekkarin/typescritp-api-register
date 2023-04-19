import { createUser, getUserByEmail } from "../db/users";
import express from "express";
import { random, authentication } from "../helpers";


export const login = async (req: express.Request, res: express.Response,next:express.NextFunction) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }
        // select('+authentication.salt +authentication.password') เลือกข้อมูลที่ที่เราซ้อนไว้
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')

        if (!user) {
            return res.sendStatus(400);
        }
        if (!user?.authentication?.salt || !user?.authentication?.password) {
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user?.authentication?.salt,password);
        if (user.authentication.password !== expectedHash) {
            return res.sendStatus(403);
        }
        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        await user.save()
        res.cookie('TEST-AUTHENTICATION', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
        return res.status(200).json(user);


    } catch (error) {
        console.log(error);
        return res.sendStatus(400);

    }
}

export const register = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400)
        }
        // ตวจสอบว่ามี email หรือ ยัง
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.sendStatus(400)
        }
        const salt = random();
        const user = await createUser({
            email: email,
            username: username,
            authentication: {
                salt: salt,
                password: authentication(salt, password)
            }
        })
        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
        next();

    }
}

export const logout = async (req: express.Request, res: express.Response,next:express.NextFunction) => {
    try {
        
        res.clearCookie('TEST-AUTHENTICATION', { domain: 'localhost', path: '/' });
        return res.status(200).json({message:"logged out!"});
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);

    }
}
