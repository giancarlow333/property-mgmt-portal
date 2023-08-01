/* GOOGLE API SCRIPT */

const APIKey = "AIzaSyBpzAJtDlPPG6C2l0fUZM558KSRGdIRbT8";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const searchEngineID = "54f51fe0be357423e";

var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
var searchTerm = "plumber";

var requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation + "\"";


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
fetch(requestURL)
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

// https://developers.google.com/custom-search/v1/using_rest
function displayResults(response) {
  for (var i = 0; i < 2; i++) {
    var item = response.items[i];
    document.getElementById("search-results").append(
      document.createElement("br"),
      document.createTextNode(item.htmlTitle)
    );
  }
}