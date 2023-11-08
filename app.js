import app from "./server.js";
import {sequelize} from './app/v1/config/DatabaseConfig.js';

// Importing Services
import dbSyncService from './app/v1/service/DbSyncService.js';

// Importing Routes
import UserRouter from "./app/v1/route/UserRoutes.js";
import express from "express";

// Reading the PORT to listen from the .env file
const PORT = process.env.PORT === '' ? 4000 : process.env.PORT;

/**
 * Connecting to DB
 *
 * @summary
 * sequelize config object has been used in order to create a connection between application and database.
 * Asynchronous and hence the connection take place after the server listening code.
 */
sequelize.authenticate().then(
    () => console.log("-----\nConnected to Database.\n-----")
).catch(
    err => console.log("Database Connection Failed.")
);

/**
 * Syncing Tables ...
 *
 * @summary
 * Using the dbSyncService created we can create the tables on the fly
 */
dbSyncService().then(() => console.log("DB Sync Process has been completed.\n------")).catch(err => console.log(err.message));

// JSON Middleware:     In order to access req.body in the Controllers ....
app.use(express.json());

// Setting up API End Points ...
app.use("/api/v1/user", UserRouter);

/**
 * Initiate Server
 *
 * @summary
 * Creating a server for listening to the PORT for request (listen)
 * For handling error via. global middleware such that application doesn't Crash for Uncaught Exceptions (on method)
 */
const server = app.listen(PORT,
    () => console.log(`${process.env.APP_NAME}: listening to 127.0.0.1:${PORT}.\n-----`)
);
server.on('error', err => console.error("\n-----\nCaught by Global Error Middleware.\nMessage: " + err.message + "\n-----\n"));