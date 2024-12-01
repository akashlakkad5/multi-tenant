const mongoose = require("mongoose");

let dbConnections = [];

exports.connect = async () => {
    return new Promise(async (resolve, reject) => {
        try {

            /** Store Database Connection */
            global.dbConnection = await mongoose.connect(process.env.MONGO_URI + `/${process.env.MASTER_DB_NAME}`, {
                family: 4
            });

            /** Store Database Connection into Memory */
            console.log('Connected to MongoDB', new Date());
            return resolve();
        } catch (err) {
            console.log("[ERROR] [DATABASE CONNECTION] -> ", err, new Date());
            return reject(err);
        }
    })
};


exports.switchDB = async ({dbName = process.env.MASTER_DB_NAME}) => {
    return new Promise(async (resolve, reject) => {
        try {

            /** Check if Database Connection is already Stored in Memory */
            if (dbConnections[dbName]) {
                return resolve(dbConnections[dbName]);
            } else {
                /** If not, Connect to Database */
                let newDB = await mongoose.connection.useDb(dbName, { useCache: true });

                /** Store Database Connection into Memory */
                dbConnections[dbName] = newDB;

                /** Return Database Connection */
                return resolve(newDB);
            }
        } catch (err) {
            console.log("[ERROR] [SWITCH] [DATABASE SWITCH] -> ", err);
            return reject(err);
        }
    })
};