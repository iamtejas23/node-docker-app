const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'testdb',
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit process with error
    }
    console.log('Connected to MySQL');
});

// API to insert a name
app.post('/api/names', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send({ message: 'Name is required' });
    }
    db.query('INSERT INTO names (name) VALUES (?)', [name], (err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: 'Name added successfully' });
    });
});

// API to fetch all names
app.get('/api/names', (req, res) => {
    db.query('SELECT * FROM names', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
