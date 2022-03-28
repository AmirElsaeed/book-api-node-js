const { Pool } = require('pg');
require('dotenv').config();
//console.log(process.env) // remove this after you've confirmed it working

const db_config = {
    connectionString: process.env.DATABASE_URL, // e.g. postgres://user:password@host:5432/database
    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20,
    allowExitOnIdle: true
}

const pool = new Pool(db_config);

// test conection 
pool.on('connect', client => {
    console.log('database connected');
});

pool.on('remove', client => {
    console.log('database connection removed');
});

module.exports = pool;