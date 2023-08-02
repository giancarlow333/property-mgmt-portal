if (currentPage === "reimbursement") {
    var menuElt = document.getElementById("reimbursement");
    menuElt.setAttribute("class", "bg-cyan-700");
}
else if (currentPage === "search") {
    var menuElt = document.getElementById("search");
    menuElt.setAttribute("class", "bg-cyan-700");
}
else if (currentPage === "rules") {
    var menuElt = document.getElementById("rules");
    menuElt.setAttribute("class", "bg-cyan-700");
}
else if (currentPage === "properties") {
    var menuElt = document.getElementById("properties");
    menuElt.setAttribute("class", "bg-cyan-700");
};


const APIKey = "";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const senderURL = "https://api.mailjet.com/v3/REST/sender"

string userAgent = "mailjet-apiv3-java/v5.2.3"

var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
var searchTerm = "plumber";

var requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation + "\"";


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
fetch(requestURL)
