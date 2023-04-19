import { register, login, logout } from '../controllers/authenticationController';
import express from 'express';
import { query, body } from 'express-validator';


export default (router: express.Router) => {
    const createEmailChain = () => body('email')
        .trim()
        .isEmail()
        .notEmpty()
    const createPasswordChain = () => body('password')
        .trim()
        .notEmpty()
        
    router.post('/auth/register',
        createPasswordChain(),
        createEmailChain()
        , register)
    router.post('/auth/login',[ createEmailChain(),createPasswordChain()], login)
    router.get('/auth/logout', logout)
}
