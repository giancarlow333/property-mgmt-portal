//var bodyElt = document.getElementsByTagName("body")[0];
var bodyElt = document.body;
console.log(bodyElt);
console.log(document.body);
var currentPage = bodyElt.getAttribute("data-page");
if (currentPage === "home") {
    var menuElt = document.getElementById("home");
    menuElt.setAttribute("style", "background-color: blue;");
};