/**
 * Importing Models to Sync to Database ...
 */
import {User} from "../model/index.js";

/**
 * @returns {Promise<void>}
 *
 * @summary
 * This function is created in order to create proper DB tables in accordance to the models defined.
 */
async function dbSyncservice() {
    try {
        await User.sync({force: false});
    } catch (err) {
        throw new Error("Database Sync Failed")
    }
}

export default dbSyncservice;
