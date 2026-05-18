# Cloud Computing ASS06 - Design and Deploy a Web Application in PaaS

## Assignment Objective
Design and deploy a simple login web application in a PaaS (Platform as a Service) environment.

---

# Technologies Used
- Python
- Flask
- HTML
- Git & GitHub
- Render (PaaS platform)

---

# Step 1: Install Required Software

## 1. Install Python
Download Python from:
https://www.python.org/downloads/

During installation:
- Enable **Add Python to PATH**

Verify installation:
```bash
python --version
```

---

## 2. Install VS Code
Download from:
https://code.visualstudio.com/

---

## 3. Install Git
Download from:
https://git-scm.com/downloads

Verify installation:
```bash
git --version
```

---

# Step 2: Create Project Folder

Create a folder named:
```text
login-app
```

Inside it create:
```text
app.py
requirements.txt
templates/login.html
```

---

# Folder Structure

```text
login-app/
│
├── app.py
├── requirements.txt
└── templates/
    └── login.html
```

---

# Step 3: Write Code

## login.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>

    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Enter Username" required><br><br>

        <input type="password" name="password" placeholder="Enter Password" required><br><br>

        <button type="submit">Login</button>
    </form>
</body>
</html>
```

---

## app.py

```python
from flask import Flask, request, render_template

app = Flask(__name__)

USERNAME = "admin"
PASSWORD = "1234"

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if username == USERNAME and password == PASSWORD:
        return "<h2>Login Successful ✅</h2>"
    else:
        return "<h2>Invalid Username or Password ❌</h2>"

if __name__ == '__main__':
    app.run(debug=True)
```

---

## requirements.txt

```text
Flask
gunicorn
```

---

# Step 4: Run the Application Locally

Open terminal inside the `login-app` folder and run:

```bash
pip install flask
python app.py
```

Open browser:
```text
http://127.0.0.1:5000
```

Test credentials:
```text
Username: admin
Password: 1234
```

---

# Step 5: Upload Project to GitHub

## Create GitHub Repository
1. Open GitHub
2. Click New Repository
3. Repository name:
```text
login-app
```

---

## Run Git Commands

Open terminal in `login-app` folder:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/login-app.git
```

```bash
git push -u origin main
```

---

# Step 6: Deploy on Render (PaaS)

Go to:
https://render.com

## Steps
1. Login using GitHub
2. Click:
```text
New → Web Service
```

3. Select your GitHub repository

4. Configure:

| Field | Value |
|---|---|
| Runtime | Python |
| Build Command | pip install -r requirements.txt |
| Start Command | gunicorn app:app |

5. Click Deploy

Deployment takes around 1–2 minutes.

Render will generate a live URL like:
```text
https://login-app.onrender.com
```

---

# Expected Output

A working online login page deployed on Render.

---

# Viva Questions

## What is PaaS?
Platform as a Service provides a platform to develop and deploy applications without managing infrastructure.

---

## What is Flask?
Flask is a lightweight Python web framework.

---

## What is GitHub?
GitHub is a cloud-based version control platform.

---

## Why use requirements.txt?
It stores dependencies required for deployment.

---

## What is Gunicorn?
Gunicorn is a production server for Python applications.

---

# Common Errors and Fixes

## ModuleNotFoundError
Install missing package:
```bash
pip install flask
```

---

## TemplateNotFound Error
Ensure:
```text
templates/login.html
```

---

## Git Authentication Failed
Use GitHub Personal Access Token instead of password.

---

## Render Deployment Failed
Check:
```text
Build Command:
pip install -r requirements.txt

Start Command:
gunicorn app:app
```

---

# Conclusion

In this assignment, a Flask login application was created, uploaded to GitHub, and deployed successfully using Render in a PaaS cloud environment.
