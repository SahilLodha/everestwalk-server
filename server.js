import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

// Configured .env as we have read variables from the dotenv file below this ...
dotenv.config({
    path: '.env'
})

// Initiating an Express Application
const app = express()

/**
 * CORS Middleware Configuration
 *
 * @summary Setting up cors middleware ...
 */
app.use(cors({
    origin: process.env.NODE_ENV === "production" ? process.env.CLIENT_HOST : '*',
    methods: 'GET,PUT,PATCH,POST,DELETE'
}))

export default app;