import express from 'express';
import authentication from './authenticationRoute';

const router = express.Router();

export default ():express.Router =>{
    authentication(router);
    return router
}