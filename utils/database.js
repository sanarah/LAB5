const { Pool } = require('pg');

const pool = new Pool({
    user: 'rahul',     //your postgres username
    host: 'localhost', 
    database: 'eshop', //your local database 
    password: 'rahul', //your postgres user password
    port: 6882, //your postgres running port
});

pool.connect();


module.exports = pool;