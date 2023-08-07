

//setting up API variables

var apiMC = "md-NbUjRtqyFGcJ8YTmbRAu7A";
var baseURL = "https://customsearch.googleapis.com/customsearch/v1?";


var responseLog = document.querySelector("#formsReturn").value 
responseLog = "We respond to submissions within 6 hours"


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
      .then((json) => console.log(json))
    }

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

    var inputEmail = $("#email").val();

var inputName= $("#username").val();

var inputPhone= $("#phone").val();

var inputProperty= $("#property").val();
localStorage.setItem("property", inputProperty.value);

var inputDescription= $("#description").val();
localStorage.setItem("description", inputDescription.value);

    // set issue type based on selection
    var issueType = $("#issue-type").find(":selected").val();


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

        document.querySelector("#formsReturn").value = "(Email Sent) "+ " name:" + inputName + "  phone: " + inputPhone + "   email: " + inputEmail + "  issue-type: " + issueType + "  description:  " + inputDescription;

        console.log("button pressed")
        console.log(emailSubject)
        console.log(inputEmail)
    })
    console.log("button listening")
  })


  const form = document.querySelector('form');

function logForm(event) {
  event.preventDefault();

  const data = new FormData(form);

  const formValues = data.get('email');

  console.log(formValues);
  console.log("form")
}

form.addEventListener('click', logForm);


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

//form.addEventListener("click", Email.send)



// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11

//fetch(requestURL)
