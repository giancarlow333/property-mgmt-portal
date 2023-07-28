/* YELP API SCRIPT */

const APIKey = "TD7vrnDl1KyIr9EMYMgxF0dc7ChZPzZOsRLIDJqnej4Iclbtgxv7coJzTOpVv2jJXojL6nkjHyXQAXeuN__P2qlrtmh2uDadaFMxeea5OmEa3HTV4_FFRwLkhirDZHYx";
const baseURL = "https://api.yelp.com/v3/businesses/search?";

var searchLocation = "350%205th%20Ave,%20New%20York,%20NY%2010118";
var searchTerm = "plumber";

var requestURL = baseURL + "location=" + searchLocation + "&categories=" + searchTerm;

const options = {
    headers: {
      Authorization: "Bearer " + APIKey,
      accept: "application/json"
    }
  };

// https://stackoverflow.com/questions/25515936/perform-curl-request-in-javascript
// by user https://stackoverflow.com/users/1244127/json-c11
fetch(requestURL, options)
  .then(response => response.json())
  .then(data => console.log(data));