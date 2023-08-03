
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

    //send first transactional
    fetch("https://mandrillapp.com/api/1.0/messages/send", {
        method: "POST",
        body: JSON.stringify({
            "key": "$md-NbUjRtqyFGcJ8YTmbRAu7A", "message": {"from_email": "jennywnba@gmail.com", "subject": "Hello World", "text": "Welcome to Mailchimp Transactional!", "to": [{ "email": "jennywnba@gmail.com", "type": "to"}]}
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        .then((response))
      });




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

//const APIKey = "";
//const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
//const senderURL = "https://api.mailjet.com/v3/REST/sender"

//string userAgent = "mailjet-apiv3-java/v5.2.3"

//var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
//var searchTerm = "plumber";

//var requestURL = baseURL + "key=" + APIKey + "&cx=" + searchEngineID + "&q=\"" + searchTerm + "%20AND%20" + searchLocation + "\"";


// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
fetch(requestURL)
