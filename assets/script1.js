

//setting up API variables

var apiMC = "md-NbUjRtqyFGcJ8YTmbRAu7A";
var baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
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

var inputDescription= document.getElementById("description");
localStorage.setItem("email", inputEmail.value);

const form = document.getElementById("myForm");

formData = new FormData(form);
//checking formData function
console.log(formData)

form.addEventListener('submit', async (event) => {
  event.preventDefault();})

console.log("stop default")

// Run script when button is clicked
$(function () {
  // select button
  var btnElt = $('#button');

  // add listener to button
  btnElt.on("click", function(event) {
    event.preventDefault();
    var emailID = $("#email").val();

    var issueType = $("#issue-type").find(":selected").val();

    // set search location based on selection
    if (issueType == "Reimbursement") {
      emailSubject = "Reimbursement Request";
    }
    else if (issueType == "Plumbing") {
      emailSubject = "Plumbing Service Request";
    }
    else if (issueType == "Electrical") {
      emailSubject = "Electrical Service Request";
    }
    else if (issueType == "Complaint") {
      searchLocation = "Tenant Complaint";}

    else if (issueType == "Other Issue") {
        emailSubject = "Tenant Issue"; };

        console.log("button pressed")

    })
    console.log("button listening")
  })

document.querySelector('button').addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button heard")

	var ajax = new XMLHttpRequest();

  console.log("adding alternate forms path")
	
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
            "key": "md-NbUjRtqyFGcJ8YTmbRAu7A", "message": {"from_email": "jennywnba@gmail.com", "subject": "Hello World", "text": "Welcome to Mailchimp Transactional!", "to": [{ "email": "jennywnba@gmail.com", "type": "to"}]}
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


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11

//fetch(requestURL)
