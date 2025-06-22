document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
```

---


```js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// Database setup
const db = new sqlite3.Database('./server/database.db');
db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT
)`);

// POST endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  db.run(`INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)`,
    [name, email, message],
    function (err) {
      if (err) return res.status(500).json({ message: 'Database error' });
      res.json({ message: 'Contact saved successfully!' });
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));