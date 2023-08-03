
const APIKey = "md-NbUjRtqyFGcJ8YTmbRAu7A";
const baseURL = "https://customsearch.googleapis.com/customsearch/v1?";
const searchEngineID = "54f51fe0be357423e";
var searchLocation;
var searchTerm;
var requestURL;

# Run:
curl -s \
-X POST \
--user "$MJ_APIKEY_PUBLIC:$MJ_APIKEY_PRIVATE" \
https://api.mailjet.com/v3.1/send \
-H 'Content-Type: application/json' \
-d '{


    curl -sS -X POST "https://mandrillapp.com/api/1.0/users/ping" \
    --header 'Content-Type: application/json' \
    --data-raw '{ "key": "YOUR_API_KEY" }'


    const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
        "md-NbUjRtqyFGcJ8YTmbRAu7A"
      );
      
      const run = async () => {
        const response = await mailchimpClient.messages.send({ message: {} });
        console.log(response);
      };
      
      run();
      
}
]
}'

=================================

var options = {
  hostname: 'posttestserver.com',
  port: 443,
  path: '/post.php',
  method: 'POST',
  headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': postData.length
     }
};





// JS email send option

var submitB = getElementbyID("button")

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

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
