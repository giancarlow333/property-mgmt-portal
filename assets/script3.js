var documentUrl = 'https://file.io/Y4cj8ay4VKBV';
var mainURL = "https://file.io";


var responseText = document.getElementById('formsReturn');

function getDocuments() {
  fetch(documentUrl)
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

getApi(badRequestUrl);


fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });


  var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

//getApi function is called when the fetchButton is clicked

function getApi() {
  var requestUrl = 'https://api.github.com/users/alathea23/repos';

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
}

fetchButton.addEventListener('click', getApi);
