import { getAllUser,updateUser } from '../controllers/user';
import express,{Router} from 'express';
import { isAuthentication } from '../middlewares';
export default (route:Router)=>{
    route.get("/users",isAuthentication,getAllUser)
    route.patch("/users/:id",isAuthentication,updateUser)

}