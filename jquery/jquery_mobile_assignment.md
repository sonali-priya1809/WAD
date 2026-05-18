# Simple Mobile Website using jQuery Mobile

# Aim

Create a simple Mobile Website using jQuery Mobile.

---

# Objective

The objective of this assignment is to:

- Understand jQuery Mobile framework
- Create mobile-friendly web pages
- Implement mobile navigation
- Use jQuery Mobile UI components
- Build responsive mobile websites

---

# Technologies Used

- HTML
- CSS
- jQuery
- jQuery Mobile

---

# Software Requirements

- VS Code
- Web Browser
- Internet Connection

---

# What is jQuery?

jQuery is a JavaScript library used to simplify HTML manipulation, event handling and animations.

---

# What is jQuery Mobile?

jQuery Mobile is a mobile UI framework built on top of jQuery.

It helps create:
- responsive websites
- touch-friendly UI
- mobile applications

---

# Features of jQuery Mobile

- Responsive design
- Mobile navigation
- Touch support
- Mobile-friendly buttons
- Listviews
- Form styling

---

# Project Folder Structure

```text
jquery-mobile-website
│
├── index.html
├── style.css
```

---

# Step 1 — Create Project Folder

Create folder:

```text
jquery-mobile-website
```

Open it in VS Code.

---

# Step 2 — Create Files

Create:

```text
index.html
style.css
```

---

# Step 3 — Add jQuery and jQuery Mobile CDN Links

CDN links are added inside the `<head>` section.

---

# What is CDN?

CDN stands for:
(Content Delivery Network)

It allows online loading of:
- CSS libraries
- JavaScript libraries

without downloading files manually.

---

# Official CDN Sources

## jQuery Official Website

https://jquery.com/

---

## jQuery CDN

https://code.jquery.com/

---

## jQuery Mobile Official Website

https://jquerymobile.com/

---

# CDN Links Used in This Assignment

## jQuery CDN

```html
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
```

---

## jQuery Mobile CSS CDN

```html
<link rel="stylesheet"
href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
```

---

## jQuery Mobile JavaScript CDN

```html
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
```

---

# Complete HTML Code

## index.html

```html
<!DOCTYPE html>
<html>

<head>

    <title>AIT Mobile Website</title>

    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <!-- jQuery -->

    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>

    <!-- jQuery Mobile CSS -->

    <link rel="stylesheet"
          href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">

    <!-- jQuery Mobile JS -->

    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

    <!-- Custom CSS -->

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <!-- HOME PAGE -->

    <div data-role="page" id="home">

        <div data-role="header">

            <h1>AIT Pune</h1>

        </div>

        <div role="main" class="ui-content">

            <h2>Welcome to Army Institute of Technology</h2>

            <p>
                This is a simple mobile website created using jQuery Mobile.
            </p>

            <a href="#about"
               class="ui-btn ui-btn-b ui-corner-all">
               About Us
            </a>

            <a href="#courses"
               class="ui-btn ui-btn-b ui-corner-all">
               Courses
            </a>

            <a href="#contact"
               class="ui-btn ui-btn-b ui-corner-all">
               Contact
            </a>

        </div>

        <div data-role="footer">

            <h4>AIT Mobile Website</h4>

        </div>

    </div>

    <!-- ABOUT PAGE -->

    <div data-role="page" id="about">

        <div data-role="header">

            <a href="#home"
               data-icon="home">
               Home
            </a>

            <h1>About</h1>

        </div>

        <div role="main" class="ui-content">

            <h2>About AIT</h2>

            <p>
                Army Institute of Technology is one of the leading engineering colleges.
            </p>

        </div>

        <div data-role="footer">

            <h4>About Page</h4>

        </div>

    </div>

    <!-- COURSES PAGE -->

    <div data-role="page" id="courses">

        <div data-role="header">

            <a href="#home"
               data-icon="home">
               Home
            </a>

            <h1>Courses</h1>

        </div>

        <div role="main" class="ui-content">

            <ul data-role="listview">

                <li>Computer Engineering</li>

                <li>Information Technology</li>

                <li>Electronics & Telecommunication</li>

                <li>Mechanical Engineering</li>

            </ul>

        </div>

        <div data-role="footer">

            <h4>Courses Page</h4>

        </div>

    </div>

    <!-- CONTACT PAGE -->

    <div data-role="page" id="contact">

        <div data-role="header">

            <a href="#home"
               data-icon="home">
               Home
            </a>

            <h1>Contact</h1>

        </div>

        <div role="main" class="ui-content">

            <form>

                <label>Name:</label>

                <input type="text"
                       placeholder="Enter Name">

                <label>Email:</label>

                <input type="email"
                       placeholder="Enter Email">

                <label>Message:</label>

                <textarea placeholder="Enter Message"></textarea>

                <button class="ui-btn ui-btn-b">
                    Submit
                </button>

            </form>

        </div>

        <div data-role="footer">

            <h4>Contact Page</h4>

        </div>

    </div>

</body>

</html>
```

---

# CSS Code

## style.css

```css
body {

    font-family: Arial;
}

h2 {

    text-align: center;
}

p {

    text-align: center;
}

.ui-content {

    padding: 20px;
}
```

---

# Step 4 — Run the Website

Simply open:

```text
index.html
```

in browser.

OR

Use:
- VS Code Live Server Extension

---

# Important jQuery Mobile Components Used

| Component | Purpose |
|---|---|
| data-role="page" | Creates mobile page |
| data-role="header" | Header section |
| data-role="footer" | Footer section |
| data-role="listview" | Mobile list |
| ui-btn | Styled mobile button |

---

# How Navigation Works

Example:

```html
<a href="#about">
```

navigates to:

```html
<div id="about">
```

inside the same file.

---

# Advantages of jQuery Mobile

- Mobile responsive
- Easy UI development
- Touch support
- Lightweight framework
- Cross-platform support

---

# Expected Output

The website displays:
- Home page
- About page
- Courses page
- Contact page

with:
- mobile styling
- responsive buttons
- listview
- forms

---

# Viva Questions

## 1. What is jQuery?
jQuery is a JavaScript library used for simplifying JavaScript operations.

## 2. What is jQuery Mobile?
jQuery Mobile is a framework used for creating mobile-friendly websites.

## 3. What is CDN?
CDN stands for Content Delivery Network.

## 4. Why are CDN links used?
CDN links allow external libraries to load directly from internet servers.

## 5. What is data-role in jQuery Mobile?
It defines UI components such as pages, headers and listviews.

## 6. What is ui-btn?
ui-btn creates styled mobile buttons.

## 7. What is responsive design?
Responsive design automatically adjusts UI according to screen size.

## 8. Difference between jQuery and jQuery Mobile?
jQuery handles JavaScript functionality while jQuery Mobile provides mobile UI components.

---

# Conclusion

Thus, a simple mobile website was successfully created using jQuery Mobile with responsive pages, navigation, buttons, listview and forms.
