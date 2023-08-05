//putting in the nav bar color
var bodyElt = document.body;
console.log(bodyElt);
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


navBarColor ();

//setting up API variables

const APIKey = "md-NbUjRtqyFGcJ8YTmbRAu7A";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const searchEngineID = "54f51fe0be357423e";
var searchLocation;
var searchTerm;
var requestURL;


//testing API
//fetch ("https://mandrillapp.com/api/1.0/users/ping"), {
//method:"POST"
//header: 'Content-Type: application/json' 
//data-raw: '{ "key": "YOUR_API_KEY" }'}
var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);

var inputName= document.getElementById("username");
localStorage.setItem("email", inputName.value);

var inputPhone= document.getElementById("phone");
localStorage.setItem("email", inputPhone.value);

var inputProperty= document.getElementById("property");
localStorage.setItem("email", inputProperty.value);

var inputIssueType= document.getElementById("issue-type");
localStorage.setItem("email", inputIssueType.value);

var inputDescription= document.getElementById("description");
localStorage.setItem("email", inputDescription.value);

var inputDescription= document.getElementById("");
localStorage.setItem("email", inputE.value);

var inputDescription= document.getElementById("description");
localStorage.setItem("email", inputEmail.value);

var form = document.querySelector("form");

formData = new FormData(form);
//checking formData function
console.log(formData)

document.querySelector('button').addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button heard")

	var ajax = new XMLHttpRequest();
	
	ajax.onload = function() {
		document.querySelector("#formsReturn").value = "(Success)" + ajax.responseText;
	};
	
	ajax.onerror = function() {
		document.querySelector("#formsReturn").value = "(Error)" + ajax.responseText;
	};

  ajax.open("post", document.querySelector("#formsReturn").value = "(Success)" + ajax.responseText, true);

  ajax.send(new FormData(this));

  console.log (document.querySelector("#formsReturn").value)
  console.log(new FormData(this));
	
});


    //send first transactional
    function Email () {
    fetch("https://mandrillapp.com/api/1.0/messages/send", {
        method: "POST",
        body: JSON.stringify({
            "key": "$md-NbUjRtqyFGcJ8YTmbRAu7A", "message": {"from_email": "jennywnba@gmail.com", "subject": "Hello World", "text": "Welcome to Mailchimp Transactional!", "to": [{ "email": "jennywnba@gmail.com", "type": "to"}]}
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        .then((response))
      });}




// JS email send option

//var submitB = getElementbyID("button")

//Email.send({
  //  Host : "smtp.elasticemail.com",
  //  Username : "username",
  // // Password : "password",
  //  To : 'them@website.com',
  //  From : "you@isp.com",
  //  Subject : "This is the subject",
  //  Body : "And this is the body"
//}).then(
  //message => alert(message)
//);

addEventListener.submitB("click", Email.send)


//const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
//const senderURL = "https://api.mailjet.com/v3/REST/sender"

//string userAgent = "mailjet-apiv3-java/v5.2.3"

//var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
//var searchTerm = "plumber";

//var requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation + "\"";


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
fetch(requestURL)
