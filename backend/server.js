const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

// Connect to MySQL and start the server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

// Handle GET request for /home endpoint
app.get('/home', (req, res) => {
  const query = 'SELECT * FROM mails';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching mail data:', err);
      res.status(500).json({ error: 'Failed to fetch mail data.' });
      return;
    }
    res.json(results);
  });
});

// Handle PUT request for updating isStarred value
app.put('/mails/:id', (req, res) => {
  const { id } = req.params;
  const { isStarred } = req.body;
  const query = 'UPDATE mails SET isStarred = ? WHERE id = ?';
  connection.query(query, [isStarred, id], (err, result) => {
    if (err) {
      console.error('Error updating isStarred value:', err);
      res.status(500).json({ error: 'Failed to update isStarred value.' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Mail not found.' });
    } else {
      res.json({ message: 'isStarred value updated successfully.' });
    }
  });
});

app.put('/delete/:id', (req, res) => {
  const { id } = req.params;
  const { isDeleted } = req.body;
  const query = 'UPDATE mails SET isDeleted = ? WHERE id = ?';
  connection.query(query, [isDeleted, id], (err, result) => {
    if (err) {
      console.error('Error updating isDelted value:', err);
      res.status(500).json({ error: 'Failed to update isDeleted value.' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Mail not found.' });
    } else {
      res.json({ message: 'isDeleted value updated successfully.' });
    }
  });
});
