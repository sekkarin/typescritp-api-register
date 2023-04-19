import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import http from 'http';
import bodyPaser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
import { log } from 'console';


const app = express();

// app.use(cors());
app.use(cors({
    credentials: true,
}));
app.use(cookieParser());
app.use(cookieParser());
app.use(bodyPaser.json())
app.use(compression())

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log('====================================');
    console.log(`server listening on port http://localhost:${process.env.PORT}`);
    console.log('====================================');
});
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL as string)
    .then(result => {
        log("db connected!")
    })
    .catch(err => log(err))

app.use('/', router());