import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';


// Create an express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // or your MySQL host
  user: 'root', // your MySQL username
  password: '123456', // your MySQL password
  database: 'data1', // your database name
});

// Check MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

// Get movies data from MySQL
app.get('/movies', (req, res) => {
  const query = 'SELECT * FROM movies'; // Query to get movies data
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data from MySQL');
    } else {
      res.json(results);
    }
  });
});

// Start server
app.listen(5000, () => {
  console.log(`Backend server is running on http://localhost:5000`);
});
