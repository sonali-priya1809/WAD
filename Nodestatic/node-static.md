# Node.js Static Website Assignment

# Aim
Create a Node.js Application which serves a static website.

---

# Objective
The objective of this assignment is to:

- Understand the basics of Node.js
- Learn how to create a server using Express.js
- Serve static files like HTML and CSS
- Build a simple college website interface

---

# Technologies Used

- Node.js
- Express.js
- HTML
- CSS

---

# What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

It is commonly used for:

- Web servers
- APIs
- Real-time applications
- Backend development

---

# What is Express.js?

Express.js is a lightweight framework for Node.js used to create web applications and servers easily.

---

# What is a Static Website?

A static website contains fixed content that is directly served to the browser.

Examples of static files:

- HTML
- CSS
- JavaScript
- Images

---

# Folder Structure

```text
NodeStaticWebsite
│
├── public
│   ├── index.html
│   ├── style.css
│
├── server.js
├── package.json
```

---

# Step 1: Create Project Folder

Create a new folder:

```text
NodeStaticWebsite
```

Open the folder in VS Code.

---

# Step 2: Initialize Node.js Project

Open terminal and run:

```bash
npm init -y
```

This creates the `package.json` file.

---

# Step 3: Install Express.js

Run:

```bash
npm install express
```

---

# Step 4: Create server.js

Create a file named:

```text
server.js
```

Add the following code:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

---

# Step 5: Create index.html

Create:

```text
public/index.html
```

Add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Army Institute of Technology</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <header>
        <div class="logo">
            <h2>ARMY INSTITUTE OF TECHNOLOGY</h2>
        </div>

        <nav>
            <a href="#">Home</a>
            <a href="#">Departments</a>
            <a href="#">Admissions</a>
            <a href="#">Placements</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">

        <div class="overlay">

            <h1>Welcome to Army Institute of Technology</h1>

            <p>
                Empowering Future Engineers with Knowledge, Discipline and Innovation.
            </p>

            <button>Explore Campus</button>

        </div>

    </section>

    <!-- Features -->
    <section class="features">

        <div class="card">
            <h2>Top Placements</h2>
            <p>Leading companies recruit AIT students every year.</p>
        </div>

        <div class="card">
            <h2>Modern Campus</h2>
            <p>Smart classrooms, labs and excellent infrastructure.</p>
        </div>

        <div class="card">
            <h2>Quality Education</h2>
            <p>Experienced faculty focused on academic excellence.</p>
        </div>

    </section>

    <!-- Footer -->
    <footer>
        <p>© 2026 Army Institute of Technology | Node.js Static Website</p>
    </footer>

</body>
</html>
```

---

# Step 6: Create style.css

Create:

```text
public/style.css
```

Add the following code:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

/* Navbar */

header {
    background-color: #1b4332;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
}

.logo h2 {
    font-size: 24px;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 16px;
}

nav a:hover {
    color: #95d5b2;
}

/* Hero Section */

.hero {
    height: 85vh;

    background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1');

    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 50px;
    text-align: center;
    color: white;
    border-radius: 10px;
}

.overlay h1 {
    font-size: 45px;
    margin-bottom: 20px;
}

.overlay p {
    font-size: 20px;
    margin-bottom: 25px;
}

.overlay button {
    padding: 12px 25px;
    border: none;
    background-color: #2d6a4f;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

.overlay button:hover {
    background-color: #40916c;
}

/* Features Section */

.features {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 40px;
    flex-wrap: wrap;
}

.card {
    background-color: white;
    width: 300px;
    padding: 25px;
    border-radius: 10px;
    text-align: center;

    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.card h2 {
    color: #1b4332;
    margin-bottom: 15px;
}

.card p {
    color: #555;
}

/* Footer */

footer {
    background-color: #1b4332;
    color: white;
    text-align: center;
    padding: 15px;
}
```

---

# Step 7: Run the Application

Open terminal and run:

```bash
node server.js
```

Output:

```text
Server running at http://localhost:3000
```

---

# Step 8: Open Website

Open browser and visit:

```text
http://localhost:3000
```

---

# Explanation of Code

## express.static()

```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

This line tells Express.js to serve all files inside the `public` folder.

---

# Features of the Website

- Responsive navigation bar
- Hero section with background image
- College information cards
- Footer section
- Clean and modern UI

---

# Commands Summary

```bash
npm init -y
npm install express
node server.js
```

---

# Expected Output

The application displays:

- A college homepage for Army Institute of Technology
- Navigation bar
- Welcome section
- Information cards
- Styled layout using CSS

---

# Viva Questions

## 1. What is Node.js?
Node.js is a JavaScript runtime environment used to execute JavaScript outside the browser.

## 2. What is Express.js?
Express.js is a Node.js framework used for creating servers and web applications.

## 3. What is a static website?
A website with fixed content served directly to the browser.

## 4. Why do we use express.static()?
To serve static files such as HTML, CSS, JavaScript and images.

## 5. What is localhost?
Localhost refers to the local computer used for development and testing.

---

# Conclusion

Thus, a Node.js application was successfully created to serve a static college website using Express.js.

