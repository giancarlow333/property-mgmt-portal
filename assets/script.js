//var bodyElt = document.getElementsByTagName("body")[0];
var bodyElt = document.body;
console.log(bodyElt);
console.log(document.body);
var currentPage = bodyElt.getAttribute("data-page");

function navBarColor () {
if (currentPage == "reimbursement") {
    var menuElt = document.getElementById("reimbursement");
    menuElt.setAttribute("class", "navhere");
}
else if (currentPage == "search") {
    var menuElt = document.getElementById("search");
    menuElt.setAttribute("class", "navhere");
}
else if (currentPage == "rules") {
    var menuElt = document.getElementById("rules");
    menuElt.setAttribute("class", "navhere");
}
else if (currentPage == "properties") {
    var menuElt = document.getElementById("properties");
    menuElt.setAttribute("class", "navhere");
}
};


navBarColor ();

$(document).ready(function () {
    $("#nav").load("./assets/navbar.html")
});