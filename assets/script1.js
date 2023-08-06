

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


//function SendGrid () {
  //var Key = "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"
//var Server = "smtp.sendgrid.net"
//var Ports = [25, 587]
//UserName = "apikey"
//Password = "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"
//}

//testing API
function TestAPI () {
  fetch("https://mandrillapp.com/api/1.0/users/ping", {
  method: "POST",
  body: JSON.stringify({
  key: "md-NbUjRtqyFGcJ8YTmbRAu7A"
  }),
  headers: {
  "Content-Type": "application/json"
  }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  TestAPI ()
  console.log("tested")

   //send first transactional
   function Email () {
    fetch("https://mandrillapp.com/api/1.0/messages/send", {
        method: "POST",
        body: JSON.stringify({
            key: "md-NbUjRtqyFGcJ8YTmbRAu7A", message: 
            {from_email: "jennywnba@gmail.com", subject: "Hello World", 
            text:"Sending our first email:", to: 
            [{ email: "jennywnba@gmail.com", type: "to"}]}
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json))}

      // to add into text once a text email sends:
      //"name:+ inputName + "  phone: " + inputPhone + "   email: " + inputEmail + "  issue-type: " + inputIssueType + "  description:" + inputDescription


// Run script when button is clicked
$(function () {
  // select button
  var btnElt = $('#button');

  // add listener to button
  btnElt.on("click", function(event) {
    event.preventDefault();

    Email()

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
        console.log(emailSubject)
        console.log(emailID)

    })
    console.log("button listening")
  })

  //alt using FormData to stringify form output??
//document.querySelector('button').addEventListener("click", function (event) {
  //event.preventDefault();
  //console.log("button heard")
//
	//var ajax = new XMLHttpRequest();

 // console.log(ajax.responseText)

 // var myForm = $("#form")[0]
  // new FormData(myForm)

 // console.log("adding alternate forms path")
	
//	ajax.onload = function() {
	//	document.querySelector("#formsReturn").value = "(Success1)" + ajax.responseText;
//	};
	
	//ajax.onerror = function() {
	//	document.querySelector("#formsReturn").value = "(Error)" + ajax.responseText;
	//};

  //ajax.open("post", document.querySelector("#formsReturn").value = "(Success2)" + ajax.responseText, true);

 // ajax.send(new FormData(myForm));

 // console.log (document.querySelector("#formsReturn").value)
 // console.log(new FormData(myForm));
//});

// JS email send option

//var submitB = getElementbyID("button")

//
//
//
//            ALTERNATE OPTION: 
// Send email via javascript library rather than API
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

form.addEventListener("click", Email.send)


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11

//fetch(requestURL)
