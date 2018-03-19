//globals
var inputField = document.getElementById('searchValue');

//functions
function searchFunction() {
  var searchValue = document.getElementById('searchValue').value;
  var wikiURL = 'https://en.wikipedia.org/wiki/';
  searchValue = wikiURL + searchValue;
  window.open(searchValue, '_self');
  // document.getElementById('wiki-window').data = searchValue;
}

//eventlisteners
document.getElementById('searchButton').onclick = function() {
  searchFunction();
};

document.getElementById('randomWikiButton').onclick = function() {
  window.open('https://en.wikipedia.org/wiki/Special:Random', '_self');
  // document.getElementById('wiki-window').data = "https://en.wikipedia.org/wiki/Special:Random";
};

inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchFunction();
  }
});
