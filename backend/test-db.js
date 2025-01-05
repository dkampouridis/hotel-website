const pool = require('./db');

// Example function to get all rooms
async function getRooms() {
    try {
        const result = await pool.query('SELECT * FROM rooms');
        console.log(result.rows);
    } catch (error) {
        console.error('Error executing query:', error.stack);
    }
}

getRooms();
