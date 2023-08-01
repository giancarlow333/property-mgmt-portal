/* GOOGLE API SCRIPT */

const APIKey = "AIzaSyBpzAJtDlPPG6C2l0fUZM558KSRGdIRbT8";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const searchEngineID = "54f51fe0be357423e";

var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
var searchTerm = "plumber";

var requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation;


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
/*fetch(requestURL)
  .then(function (response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
  /*
  <script async src="https://cse.google.com/cse.js?cx=54f51fe0be357423e">
</script>
<div class="gcse-search"></div>
*/



// Run script when button is clicked
$(function () {
  // select button
  var btnElt = $("#button");

  // add listener to button
  btnElt.on("click", function(event) {
    event.preventDefault();
    //https://stackoverflow.com/questions/10659097/jquery-get-selected-option-from-dropdown
    var propertyID = $("#property").find(":selected").val();
    var serviceID = $("#issue-type").find(":selected").val();

    // set search location based on selection
    if (propertyID == "The Custom - Luxury Suites") {
      searchLocation = "2424%2077th%20Street%20Los%20Angeles,%20CA%2090247";
    }
    else if (propertyID == "JW Lofts") {
      searchLocation = "7117%20Sepulveda%20Ave.%20Los%20Angeles,%20CA%2090247";
    }
    else if (propertyID == "The Giancarlo") {
      searchLocation = "4242%20Robinson%20Way%20Los%20Angeles,%20CA%2090042";
    }
    else if (propertyID == "Crystal Lake Apartments") {
      searchLocation = "1313%20Elm%20Street%20Los%20Angeles,%20CA%2090066";
    }

    // set search term based on selection
    if (serviceID == "Plumbing") {
      searchTerm = "plumber";
    }
    else if (serviceID == "Electrical") {
      searchTerm = "electrician";
    }

    requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation + "&callback=displayResults\"";
    //$("#search-results").text(requestURL);
    
    // run the search
    fetch(requestURL).then(function (response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        document.getElementById("search-results").append(
          document.createElement("br"),
          document.createTextNode(item.htmlTitle)
        );
      }
    });
  });
});

// https://developers.google.com/custom-search/v1/using_rest
/*function displayResults(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    document.getElementById("search-results").append(
      document.createElement("br"),
      document.createTextNode(item.htmlTitle)
    );
  }
}*/