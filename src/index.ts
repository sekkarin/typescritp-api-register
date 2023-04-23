import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import http from 'http';
import bodyPaser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { log } from 'console';
import { result } from 'lodash';
import { body } from 'express-validator';
import routers from './routers';

const app = express();

app.use(cors({
    credentials:true
}));

app.use(cookieParser());
app.use(bodyPaser.json());
app.use(compression());


const server = http.createServer(app);
server.listen(process.env.PORT as string, () => {
    log("server listener on port 👉", process.env.PORT);
})

// connect db
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL as string)
    .then(result => {
        log("db connected! 👌");
    })
    .catch(err => log(err));
    
app.use('/',routers())