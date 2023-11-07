/**
 * Importing Models to Sync to Database ...
 */
import {User} from "../model/index.js";

async function dbSyncService() {
    try {
        await User.sync({force: false});
    } catch (err) {
        throw new Error("Database Sync Failed")
    }
}

export default dbSyncService;
