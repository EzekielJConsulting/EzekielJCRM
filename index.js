const database = require('./backend/database');

async function zeke () { return await database.getEmployee(1); };

console.log(zeke);