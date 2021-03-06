const { Pool } = require('pg');

const pool = new Pool({
    user: 'rahul',
    host: 'localhost',
    database: 'eshop',
    password: 'rahul',
    port: 6882,
});

pool.connect();


module.exports = pool;