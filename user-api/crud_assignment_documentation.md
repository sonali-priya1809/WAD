# CRUD Operations using Node.js, Express.js and MongoDB

# Aim

Create four APIs using Node.js, Express.js and MongoDB for performing CRUD Operations.

CRUD stands for:

- Create
- Read
- Update
- Delete

---

# Objective

The objective of this assignment is to:

- Understand REST APIs
- Learn backend development using Node.js and Express.js
- Connect Node.js application with MongoDB
- Perform CRUD operations on database
- Create a simple frontend UI to interact with APIs

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript

---

# Software Requirements

- Node.js
- VS Code
- MongoDB Community Server
- MongoDB Compass
- Web Browser

---

# What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

It is mainly used for:
- backend development
- APIs
- real-time applications
- servers

---

# What is Express.js?

Express.js is a lightweight framework built on Node.js.

It helps to:
- create servers
- build APIs
- handle requests and responses

---

# What is MongoDB?

MongoDB is a NoSQL database that stores data in the form of collections and documents.

Example document:

```json
{
  "name": "Sonali",
  "email": "sonali@gmail.com"
}
```

---

# What is Mongoose?

Mongoose is a library used to connect Node.js with MongoDB.

It helps to:
- create schemas
- define models
- interact with MongoDB easily

---

# Project Folder Structure

```text
crud-project
│
├── models
│   └── User.js
│
├── index.html
├── style.css
├── script.js
│
├── server.js
├── package.json
```

---

# Step 1 — Create Project Folder

Create a folder named:

```text
crud-project
```

Open it in VS Code.

---

# Step 2 — Initialize Node.js Project

Open terminal in VS Code and run:

```bash
npm init -y
```

This creates the `package.json` file.

---

# Step 3 — Install Required Packages

Run:

```bash
npm install express mongoose cors nodemon
```

---

# Package Explanation

| Package | Purpose |
|---|---|
| express | Creates server and APIs |
| mongoose | Connects Node.js with MongoDB |
| cors | Allows frontend-backend communication |
| nodemon | Automatically restarts server |

---

# Step 4 — Install MongoDB

Download MongoDB Community Server from:
https://www.mongodb.com/try/download/community

Choose:
- Windows
- MSI Package

Install using:
- Complete Setup
- Keep “Install MongoDB Compass” checked

---

# Step 5 — Start MongoDB Service

Open Command Prompt as Administrator.

Run:

```bash
net start MongoDB
```

Expected output:

```text
The MongoDB service was started successfully.
```

---

# Step 6 — Create Database

Open MongoDB Compass.

Connect using:

```text
mongodb://localhost:27017
```

Create:
- Database Name → `cruddb`
- Collection Name → `users`

---

# Step 7 — Create Model Folder

Create:

```text
models
```

Inside it create:

```text
User.js
```

---

# Step 8 — Create User Model

## models/User.js

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String

});

module.exports = mongoose.model('User', UserSchema);
```

---

# Step 9 — Create Server File

Create:

```text
server.js
```

---

# Step 10 — Add Server Code

## server.js

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const User = require('./models/User');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

mongoose.connect('mongodb://127.0.0.1:27017/cruddb')

.then(() => console.log('MongoDB Connected'))

.catch((err) => console.log(err));

app.post('/register', async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json(user);

    } catch (error) {

        res.status(500).json(error);
    }
});

app.get('/users', async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json(error);
    }
});

app.put('/update/:id', async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json(updatedUser);

    } catch (error) {

        res.status(500).json(error);
    }
});

app.delete('/delete/:id', async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({

            message: 'User Deleted Successfully'

        });

    } catch (error) {

        res.status(500).json(error);
    }
});

app.listen(3000, () => {

    console.log('Server running on port 3000');

});
```

---

# Step 11 — Create Frontend Files

Create:
- `index.html`
- `style.css`
- `script.js`

---

# Step 12 — Create Frontend UI

## index.html

```html
<!DOCTYPE html>
<html>

<head>

    <title>CRUD Application</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="container">

        <h1>User Management System</h1>

        <input type="text" id="name" placeholder="Enter Name">

        <input type="email" id="email" placeholder="Enter Email">

        <input type="password" id="password" placeholder="Enter Password">

        <button onclick="registerUser()">
            Register User
        </button>

        <button onclick="getUsers()">
            Show Users
        </button>

        <div id="users"></div>

    </div>

    <script src="script.js"></script>

</body>

</html>
```

---

# Step 13 — Add CSS

## style.css

```css
body {

    font-family: Arial;
    background-color: #f4f4f4;
}

.container {

    width: 400px;

    margin: 50px auto;

    padding: 30px;

    background-color: white;

    border-radius: 10px;

    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

input {

    width: 100%;

    padding: 10px;

    margin: 10px 0;
}

button {

    width: 100%;

    padding: 10px;

    margin-top: 10px;

    background-color: teal;

    color: white;

    border: none;

    cursor: pointer;
}

button:hover {

    background-color: darkcyan;
}

.user-card {

    margin-top: 15px;

    padding: 10px;

    border: 1px solid gray;

    border-radius: 5px;
}
```

---

# Step 14 — Add Frontend Logic

## script.js

```javascript
const API = 'http://localhost:3000';

async function registerUser() {

    const user = {

        name: document.getElementById('name').value,

        email: document.getElementById('email').value,

        password: document.getElementById('password').value
    };

    await fetch(`${API}/register`, {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(user)
    });

    alert('User Registered');
}

async function getUsers() {

    const response = await fetch(`${API}/users`);

    const users = await response.json();

    let output = '';

    users.forEach(user => {

        output += `

        <div class="user-card">

            <h3>${user.name}</h3>

            <p>${user.email}</p>

            <button onclick="deleteUser('${user._id}')">
                Delete
            </button>

        </div>
        `;
    });

    document.getElementById('users').innerHTML = output;
}

async function deleteUser(id) {

    await fetch(`${API}/delete/${id}`, {

        method: 'DELETE'
    });

    getUsers();
}
```

---

# Step 15 — Run Application

Run server:

```bash
npx nodemon server.js
```

OR

```bash
node server.js
```

Expected output:

```text
MongoDB Connected
Server running on port 3000
```

---

# Step 16 — Open Application

Open browser:

```text
http://localhost:3000
```

---

# CRUD APIs Summary

| Method | API | Purpose |
|---|---|---|
| POST | `/register` | Create User |
| GET | `/users` | Read Users |
| PUT | `/update/:id` | Update User |
| DELETE | `/delete/:id` | Delete User |

---

# Viva Questions

## 1. What is Node.js?
Node.js is a JavaScript runtime environment used for backend development.

## 2. What is Express.js?
Express.js is a Node.js framework used to create web servers and APIs.

## 3. What is MongoDB?
MongoDB is a NoSQL database that stores data in collections and documents.

## 4. What is Mongoose?
Mongoose is a library used to connect Node.js applications with MongoDB.

## 5. What are CRUD operations?
CRUD stands for:
- Create
- Read
- Update
- Delete

## 6. What is REST API?
REST API is a communication method between client and server.

## 7. Why is CORS used?
CORS allows frontend and backend to communicate with each other.

## 8. What is middleware?
Middleware functions execute during the request-response cycle.

## 9. What is nodemon?
Nodemon automatically restarts server whenever code changes.

## 10. Difference between SQL and MongoDB?
SQL uses tables and rows while MongoDB uses collections and documents.

---

# Conclusion

Thus, a CRUD application was successfully created using Node.js, Express.js and MongoDB with APIs for Create, Read, Update and Delete operations.
