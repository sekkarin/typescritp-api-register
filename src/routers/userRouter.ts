import { deleteUser, getAllUser,updateUser } from '../controllers/user';
import express,{Router} from 'express';
import { isAuthentication } from '../middlewares';
export default (route:Router)=>{
    route.get("/users",isAuthentication,getAllUser)
    // route.get("/users/:id",isAuthentication,getUserByMyId)
    route.patch("/users/:id",isAuthentication,updateUser)
    route.delete("/users/:id",isAuthentication,deleteUser)

}