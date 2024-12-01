process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
}).on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

require('dotenv').config();


const mongooseLoader = require('./loaders/mongoose');
global.Mongo = require("./utils/mongo");

Promise.all([mongooseLoader.connect()]).then(async () => {
    global.masterDB = await mongooseLoader.switchDB({ dbName: process.env.MASTER_DB_NAME });
    require('./loaders/express');
}).catch((err) => {
    console.log("[ERROR] [DATA BASE CONNECTION]", err)
    return process.exit(1);
})