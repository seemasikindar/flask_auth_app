function validateSignUpForm() {
    var username = document.forms["signUpForm"]["username"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format");
        return false;
    }

    if (password.length < 6 || !/\d/.test(password)) {
        alert("Password must be at least 6 characters long and contain a number");
        return false;
    }

    return true;
}

function validateLoginForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}
