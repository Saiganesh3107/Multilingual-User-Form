# 🌐 Multilingual User Details Form with Node.js & MySQL

This project is a **multilingual web form** built using **HTML, CSS, JavaScript, Node.js, and MySQL**. It allows users to fill in their details in 6 different Indian languages and stores the data in a MySQL database.

## 📌 Features

- Supports **English**, **Telugu**, **Hindi**, **Tamil**, **Kannada**, **Malayalam**
- Real-time language switching
- Input validation for required fields
- POST data submission to backend
- Stores user data in MySQL database
- Works with local Node.js server (`http://localhost:3000`)

---

## 🗂️ Project Structure

```
multilingual-user-form/
├── engform.html         # English Form
├── telform.html         # Telugu Form
├── hindiform.html       # Hindi Form
├── tamform.html         # Tamil Form
├── kanform.html         # Kannada Form
├── malform.html         # Malayalam Form
├── engform.css          # Common CSS styling
├── form.js              # Language redirect logic
├── server.js            # Node.js backend server
├── db.js                # MySQL DB connection file
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Saiganesh3107/Multilingual-User-Form.git
cd multilingual-user-form
```

### 2️⃣ Install Dependencies

```bash
npm install express mysql2 body-parser
```

### 3️⃣ Create MySQL Database & Table

```sql
CREATE DATABASE user_form;
USE user_form;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  phone VARCHAR(20),
  city VARCHAR(100),
  pincode VARCHAR(10),
  state VARCHAR(100),
  country VARCHAR(100)
);
```

### 4️⃣ Configure DB Credentials in `db.js`

```js
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'user_form'
});
connection.connect(err => {
  if (err) console.error('MySQL connection failed:', err);
  else console.log('Connected to MySQL database');
});
module.exports = connection;
```

---

## ▶️ Run the Server

```bash
node server.js
```

You should see:

```
Server running at http://localhost:3000
Connected to MySQL database
```

---

## 🌍 Open the Form

Open `engform.html` or other language forms in your browser.

🔗 Server endpoint: [http://localhost:3000/submit](http://localhost:3000/submit)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

