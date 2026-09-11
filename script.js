// Get the login form
let loginForm = document.getElementById("loginForm");

// When the form is submitted
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {

        alert("Please enter your email and password.");

    } else {

        alert("Sign in successful!");

    }

});


// Sign up button
let signUp = document.getElementById("signUp");

signUp.addEventListener("click", function() {

    alert("Sign up page will open soon.");

});


// Forgot password
let forgot = document.getElementById("forgot");

forgot.addEventListener("click", function(event) {

    event.preventDefault();

    alert("Password recovery will open soon.");

});


// Facebook button
let facebook = document.getElementById("facebook");

facebook.addEventListener("click", function() {

    alert("Facebook sign in selected.");

});


// Google button
let google = document.getElementById("google");

google.addEventListener("click", function() {

    alert("Google sign in selected.");

});