import app from "./server.js";
import sequelize from './app/v1/config/database.config.js';

// Importing Services
import dbSyncService from './app/v1/service/dbsync.service.js';

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
    () => {
        console.log("Connected to Database.");
    }
).catch(
    err => console.log("Database Connection Failed.")
);

console.log("/n/n/nDB Processes starts here ..");
/**
 * Syncing Tables ...
 *
 * @summary
 * Using the dbSyncService created we can create the database on the fly
 */
dbSyncService().then(() => console.log("Sync Process has been completed.")).catch(err => console.log(err.message));

/**
 * Initiate Server
 *
 * @summary
 * Creating a server for listening to the PORT for request (listen)
 * For handling error via. global middleware such that application doesn't Crash for Uncaught Exceptions (on method)
 */
const server = app.listen(PORT,
    () => {
        console.log(`${process.env.APP_NAME}: listening to 127.0.0.1:${PORT}`);
    }
);
server.on('error', err => console.error("Caught by Global Error Middleware.\nMessage: " + err.message));