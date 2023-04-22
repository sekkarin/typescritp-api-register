import express, { Router } from 'express'
import authRouter from './authRouter'

const router = Router()

export default (): Router => {
    authRouter(router)
    return router
}