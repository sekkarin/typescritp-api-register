import { register } from '../controllers/authenticationControtroller';
import express,{Router} from 'express';

export default (route:Router)=>{
    route.post("/auth/register",register)
}