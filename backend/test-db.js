const pool = require('./db');

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Database connected:', res.rows);
    }
    pool.end(); // Close the connection
});
