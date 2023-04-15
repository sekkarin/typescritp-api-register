import { register,login } from '../controllers/authenticationController';
import express from 'express';

export default (router:express.Router)=>{
    router.post('/auth/register',register)
    router.post('/auth/login',login)
}
