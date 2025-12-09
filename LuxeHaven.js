var yearSpan = document.getElementById("year");
if (yearSpan) {
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}


var homeSearchInput = document.getElementById("home-search-input");
var homeSearchBtn = document.getElementById("home-search-btn");

if (homeSearchBtn && homeSearchInput) {
    homeSearchBtn.onclick = function () {
        alert("You searched for: " + homeSearchInput.value);
    };
}


var searchInput = document.getElementById("search-input");
var searchBtn = document.getElementById("search-btn");
var searchResult = document.getElementById("search-result");

if (searchBtn && searchInput && searchResult) {
    searchBtn.onclick = function () {
        searchResult.textContent = "You searched for: " + searchInput.value;
    };
}


var loginUser = document.getElementById("login-username");
var loginPass = document.getElementById("login-password");
var loginBtn = document.getElementById("login-btn");

if (loginBtn && loginUser && loginPass) {
    loginBtn.onclick = function (event) {
        event.preventDefault();
        alert("Username: " + loginUser.value + "\nPassword: " + loginPass.value);
    };
}


var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

if (btn1 && card1) {
    btn1.onclick = function () {
        card1.classList.add("highlight");
    };
}

if (btn2 && card2) {
    btn2.onclick = function () {
        card2.classList.add("highlight");
    };
}

if (btn3 && card3) {
    btn3.onclick = function () {
        card3.classList.add("highlight");
    };
}

if (btn4 && card4) {
    btn4.onclick = function () {
        card4.classList.add("highlight");
    };
}