# Multilingual-User-Form
A multilingual user details form built with HTML, CSS, JS, Node.js, and MySQL. Supports 6 Indian languages (English, Telugu, Hindi, Tamil, Kannada, Malayalam). Submits data via POST to a Node server and stores it in a MySQL database.

Multilingual User Details Form is a web application that allows users to submit their personal details in six Indian languages:
🇬🇧 English, 🇮🇳 Telugu, 🇮🇳 Hindi, 🇮🇳 Tamil, 🇮🇳 Kannada, and 🇮🇳 Malayalam.

This project is built with HTML, CSS, and JavaScript on the frontend, and uses Node.js with Express for the backend. The submitted form data is stored in a MySQL database.

✅ Key Highlights:
🔁 Seamless language switching

🧾 Form validations using HTML5

🔗 Backend form submission using POST

💾 Data saved securely in MySQL

🌍 Easy to expand with more languages

🖥️ Live server at http://localhost:3000


 ️Project Structure:
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


 Install Node.js Dependencies:
 npm install express mysql2 body-parser

 Set Up MySQL Database:
 Open MySQL Workbench or terminal and run:
 
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

 Run the Server:
 node server.js
