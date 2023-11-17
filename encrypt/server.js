// index.js
const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Replace 'mysecretkey' with your own secret key
const secretKey = '12345';

// Function to encrypt a file
const encryptFile = (inputPath, outputPath) => {
  const inputBuffer = fs.readFileSync(inputPath);
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  const encryptedBuffer = Buffer.concat([cipher.update(inputBuffer), cipher.final()]);
  fs.writeFileSync(outputPath, encryptedBuffer);
  console.log('File encrypted successfully.');
};

// Function to decrypt a file
const decryptFile = (inputPath, outputPath) => {
  const encryptedBuffer = fs.readFileSync(inputPath);
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  const decryptedBuffer = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
  fs.writeFileSync(outputPath, decryptedBuffer);
  console.log('File decrypted successfully.');
};

// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  const { path } = req.file;
  const encryptedPath = `uploads/encrypted_${req.file.originalname}`;

  // Encrypt the uploaded file
  encryptFile(path, encryptedPath);

  res.json({ message: 'File uploaded and encrypted successfully', encryptedPath });
});

// API endpoint for sending chat messages
app.post('/send-message', (req, res) => {
  const { user_id, message } = req.body;
  const sql = 'INSERT INTO messages (user_id, message) VALUES (?, ?)';
  
  db.query(sql, [user_id, message], (err, results) => {
    if (err) {
      console.error('Error inserting message:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ message: 'Message sent successfully' });
  });
});

// API endpoint for getting chat messages
app.get('/get-messages', (req, res) => {
  const sql = 'SELECT messages.*, users.username FROM messages JOIN users ON messages.user_id = users.id ORDER BY timestamp DESC LIMIT 10';
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ messages: results });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
