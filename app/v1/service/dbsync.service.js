/**
 * Importing Models to Sync to Database ...
 */
import {User} from "../model/index.js";

async function dbSyncService() {
    try {
        User.sync().then(() => console.log("Table User has been updated as per Models Created."))
    } catch (err) {
        throw new Error("Database Sync Failed")
    }
}

export default dbSyncService;
