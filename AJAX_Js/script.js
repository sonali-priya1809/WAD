let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("registrationForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
        name: name,
        email: email,
        password: password
    };

    // Push data into array
    users.push(userData);

    // Store in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Method
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {

        if(xhr.status == 201) {

            alert("Registration Successful!");

            window.location.href = "users.html";
        }
    };

    xhr.send(JSON.stringify(userData));

});