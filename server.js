const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db'); // Your db.js connection

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname));

// Route to serve HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'engform.html'));
});

app.get('/hindi', (req, res) => {
  res.sendFile(path.join(__dirname, 'hiform.html'));
});

app.get('/tamil', (req, res) => {
  res.sendFile(path.join(__dirname, 'tamilform.html'));
});

app.get('/telugu', (req, res) => {
  res.sendFile(path.join(__dirname, 'telform.html'));
});

app.get('/malayalam', (req, res) => {
  res.sendFile(path.join(__dirname, 'malaform.html'));
});

app.get('/kannada', (req, res) => {
  res.sendFile(path.join(__dirname, 'kanform.html'));
});



// Handle form submission
app.post('/submit', (req, res) => {
  const {
    firstname,
    lastname,
    phone,
    city,
    pincode,
    state,
    country
  } = req.body;

  const sql = `
    INSERT INTO users (firstname, lastname, phone, city, pincode, state, country)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [firstname, lastname, phone, city, pincode, state, country],
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send('Database error');
      }
      console.log('Form data saved successfully!');
      res.send('Form submitted successfully!');
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
