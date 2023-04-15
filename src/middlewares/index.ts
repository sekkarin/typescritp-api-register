import express from 'express';
import { get, merge } from 'lodash'
import { getUserBySessionToken } from '../db/users';
import { log } from 'console';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {

        const sessionToken = req.cookies['TEST-AUTHENTICATION'];
        if (!sessionToken) return res.sendStatus(403);
        const existingUser = await getUserBySessionToken(sessionToken);
        if (!existingUser) return res.sendStatus(403)
        merge(req, { identify: existingUser })
        // log("in file isAuthenticated existingUser",existingUser)
        // log("get req ",get(req,"identify._id"))
        // log("sessionToken  ",sessionToken)
        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}
export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // log(req.body)
        const { id } = req.params;
        const currentUserId = get(req,"identify._id" as string) as string;
        // log("currentUserId = " ,currentUserId.v,typeof currentUserId.toString());
        if (!currentUserId) {
            res.sendStatus(403);
        }
        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }
        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}