const yearSpan = document.getElementById("year")
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


const searchInput = document.getElementById("home-search-input");
const searchBtn = document.getElementById("home-search-btn");
if (searchBtn) {
    searchBtn.onclick = function() {
        alert("You searched for: " + searchInput.value);
    };
}


const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("search-result");
if (searchBtn) {
    searchBtn.onclick = function() {
        result.textContent = "You searched for: " + searchInput.value;
    };
}


const loginUser = document.getElementById("login-username");
const loginPass = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
    loginBtn.onclick = function () {
        alert("Username: " + loginUser.value + "\nPassword: " + loginPass.value);
    };
}


var btn1 = document.getElementById("btn1");
var card1 = document.getElementById("card1");

btn1.onclick = function () {
    card1.classList.add("highlight");
};


var btn1 = document.getElementById("btn2");
var card1 = document.getElementById("card2");

btn1.onclick = function () {
    card1.classList.add("highlight");
};


var btn1 = document.getElementById("btn3");
var card1 = document.getElementById("card3");

btn1.onclick = function () {
    card1.classList.add("highlight");
};


var btn1 = document.getElementById("btn4");
var card1 = document.getElementById("card4");

btn1.onclick = function () {
    card1.classList.add("highlight");
};