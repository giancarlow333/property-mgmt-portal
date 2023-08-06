//var bodyElt = document.getElementsByTagName("body")[0];
var bodyElt = document.body;
console.log(bodyElt);
console.log(document.body);
var currentPage = bodyElt.getAttribute("data-page");


$(document).ready(function () {
    $("#nav").load("./assets/navbar.html")
});