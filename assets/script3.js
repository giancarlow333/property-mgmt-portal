

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

//setting up forms API

var documentUrl = 'https://file.io/667ba0ec-2c9e-4b50-a3fc-c10410b47ce0';
var mainURL = "https://file.io";
var APIkey = "4DAVH2K.YSYNBD6-EKPMT8E-JFGXKR5-7XCGTZX"

navBarColor ();

//forms API call
var responseText = document.getElementById('formsReturn');

function getDocuments() {
  fetch(documentUrl)
  console.log("fetching")
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      if (response.status === 404) {
        alert("Houston, We Have A Problem!")
        responseText.textContent = response.status;
      };
  return response.JSON
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
    
    .then(function (data) {
    console.log(data);
  });})
}

var docList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });

fetchButton.addEventListener('click', getDocuments);
