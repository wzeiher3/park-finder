'use strict';

const apiKey = "C6oTTKgA80bqgzIWeHDF5470atSSPALmUF30cgZG";
let searchURL = "https://developer.nps.gov/api/v1/parks?q=";




function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $('#js-search-term').val();
      const maxResults = $('#js-max-results').val();
      console.log(searchTerm);
      console.log(maxResults);
      getResults(searchTerm, maxResults);
    });
  }

  function getResults(searchTerm, maxResults){
   
    searchURL += searchTerm + "&limit=" + maxResults + "&api_key=C6oTTKgA80bqgzIWeHDF5470atSSPALmUF30cgZG";
    fetch(searchURL).then(function(response){
        return response.json();
    }).then(function(jsonData){
        render(jsonData);
        console.log(jsonData);
        console.log(jsonData.data[0].fullName);
    })
  }

  function render(jsonData){
    let htmlTemplate = [];
    for(let i = 0; i < jsonData.data.length; i++){
        htmlTemplate.push(`<li>
        <h3>${jsonData.data[i].fullName}</h3>
        <p>${jsonData.data[i].description}</p>
        <a href="${jsonData.data[i].url}">${jsonData.data[i].url}</a>
        </li>`);
    }
    
    console.log(htmlTemplate);
    $('#results-list').html(htmlTemplate);
  }

  $(watchForm);

