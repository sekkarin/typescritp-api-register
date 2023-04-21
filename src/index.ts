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
