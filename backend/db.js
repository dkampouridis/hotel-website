const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
    user: 'your_user',         // PostgreSQL username
    host: 'localhost',         // Host (local development)
    database: 'your_database', // Database name
    password: 'your_password', // PostgreSQL password
    port: 5432,                // Default PostgreSQL port
});

// Export the pool instance for use in other files
module.exports = pool;
