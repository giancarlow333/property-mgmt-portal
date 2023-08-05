//nav bar color

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

/* GOOGLE API SCRIPT */

const APIKey = "AIzaSyBpzAJtDlPPG6C2l0fUZM558KSRGdIRbT8";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const searchEngineID = "54f51fe0be357423e";
var searchLocation;
var searchTerm;
var requestURL;


// Run script when button is clicked
$(function () {
  // select button
  var btnElt = $("#button");

  // add listener to button
  btnElt.on("click", function(event) {
    event.preventDefault();
    var propertyID = $("#property").find(":selected").val();
    var serviceID = $("#issue-type").find(":selected").val();

    // set search location based on selection
    if (propertyID == "The Custom - Luxury Suites") {
      searchLocation = "90247";
    }
    else if (propertyID == "JW Lofts") {
      searchLocation = "90247";
    }
    else if (propertyID == "The Giancarlo") {
      searchLocation = "90042";
    }
    else if (propertyID == "Crystal Lake Apartments") {
      searchLocation = "90066";
    }

    // set search term based on selection
    if (serviceID == "Plumbing") {
      searchTerm = "plumber";
    }
    else if (serviceID == "Electrical") {
      searchTerm = "electrician";
    }

    requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + " " + searchLocation + "\"&callback=displayResults";
    $("#script-2").attr("src", requestURL);
  });
});

// Display the results on the page
function displayResults(response) {
  console.log(response);
  if (!response.items) {
    var paragraph = document.createElement("p");
    paragraph.textContent = "The search produced no results."
    document.getElementById("search-results").append(paragraph);
  }
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    console.log(item);
    document.getElementById("search-results").append(
      document.createElement("br"),
      document.createTextNode(item.htmlTitle)
    );
  }
}