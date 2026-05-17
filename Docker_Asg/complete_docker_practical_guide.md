# Complete Docker Practical — From Beginning

## Aim
To create Docker container environment using Docker Desktop and run a custom container.

---

# What You Are Going To Build

You will create:

Your HTML page
        ↓
Docker Image
        ↓
Docker Container
        ↓
Website running on localhost

---

# STEP 1 — Install Docker Desktop

Download Docker Desktop from:
https://www.docker.com/products/docker-desktop/

Install it normally.

During installation:
- Enable WSL2 if asked
- Restart PC if needed

---

# STEP 2 — Open Docker Desktop

After installation:
- Open Docker Desktop
- Wait until it says:

Engine running

---

# STEP 3 — Verify Docker Installation

Open:
- Command Prompt
OR
- PowerShell

Run:

```bash
docker --version
```

Expected output:

```text
Docker version xx.xx.xx
```

---

# STEP 4 — Create Project Folder

Create a folder anywhere.

Example:

```text
docker-practical
```

Open this folder.

---

# STEP 5 — Create HTML File

Inside docker-practical, create file:

```text
index.html
```

Paste this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Docker Practical</title>
</head>
<body>
    <h1>My Docker Container is Running!</h1>
    <p>This webpage is running inside Docker.</p>
</body>
</html>
```

Save file.

---

# STEP 6 — Create Dockerfile

Inside same folder, create another file:

```text
Dockerfile
```

IMPORTANT:
- No extension
- NOT Dockerfile.txt

Paste this:

```dockerfile
FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html
```

Save file.

---

# What This Does

## FROM nginx:latest
Downloads Nginx web server image.

## COPY
Copies your HTML page into container.

---

# STEP 7 — Open Terminal in Folder

Inside folder:
- Right click
- Open in Terminal

OR use:

```bash
cd path_to_folder/docker-practical
```

---

# STEP 8 — Build Your Docker Image

Run:

```bash
docker build -t mywebsite .
```

Explanation:

| Part | Meaning |
|---|---|
| docker build | create image |
| -t mywebsite | image name |
| . | current folder |

---

# Expected Output

You’ll see something like:

```text
Successfully built ...
Successfully tagged mywebsite:latest
```

That means your image was created successfully.

---

# STEP 9 — Check Images

Run:

```bash
docker images
```

You’ll see:

```text
REPOSITORY   TAG       IMAGE ID
mywebsite    latest    xxxxx
```

---

# STEP 10 — Run Your Container

Run:

```bash
docker run -d -p 8080:80 mywebsite
```

Explanation:

| Part | Meaning |
|---|---|
| -d | run in background |
| -p 8080:80 | connect port 8080 to container port 80 |
| mywebsite | image name |

---

# STEP 11 — Check Running Containers

Run:

```bash
docker ps
```

You’ll see your running container.

---

# STEP 12 — Open Website

Open browser and go to:

```text
http://localhost:8080
```

You’ll see:

```text
My Docker Container is Running!
```

Congratulations — your custom Docker container works.

---

# Important Commands For Practical

## Show Images

```bash
docker images
```

---

## Show Running Containers

```bash
docker ps
```

---

## Show All Containers

```bash
docker ps -a
```

---

## Stop Container

First copy CONTAINER ID from docker ps

Then:

```bash
docker stop CONTAINER_ID
```

---

## Remove Container

```bash
docker rm CONTAINER_ID
```

---

# Folder Structure Should Look Like

```text
docker-practical
│
├── Dockerfile
└── index.html
```

---

# What To Write In Practical Record

## Aim
To create Docker container environment using Docker Desktop.

---

## Software Required
- Docker Desktop
- Windows OS

---

## Files Used

### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Docker Practical</title>
</head>
<body>
    <h1>My Docker Container is Running!</h1>
</body>
</html>
```

---

### Dockerfile

```dockerfile
FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html
```

---

## Commands Used

```bash
docker --version
docker build -t mywebsite .
docker images
docker run -d -p 8080:80 mywebsite
docker ps
```

---

## Result
Docker container environment was created successfully and webpage was hosted inside the container.

---

# Viva Questions

## What is Docker?
Docker is a platform used to create and run containers.

---

## What is a Container?
A lightweight isolated environment for applications.

---

## What is Docker Image?
Template used to create containers.

---

## What is Dockerfile?
A file containing instructions to build Docker image.

---

## Why use Docker?
To run applications consistently across systems.

---

# Troubleshooting

If browser does not open:
- make sure Docker Desktop is running
- wait 1 minute after running container
- check using:

```bash
docker ps
```

If container is not running, run again:

```bash
docker run -d -p 8080:80 mywebsite
```

