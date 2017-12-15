//https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&format=json&callback=?
const SEARCH_VIEW  = document.getElementById('search_view');
const RESULTS_VIEW = document.getElementById('results_view');

const userSearchedWord = document.getElementById('search_input');

const API_BASE = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json';

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message;
    }
}

function pageLoaded() {
    RESULTS_VIEW.style.visibility = "hidden";
}

function getInfo() {
    
    const URL = API_BASE + '&search=' + userSearchedWord.value;
    console.log(URL);
    
    fetch(URL).then((response) => {
        console.log(response);
        if (response.status !== 200) {
            console.error('API failed');
        }
        
        response.json().then((data) => {
            console.log(data);

            assert(((data[1].length === data[2].length) && 
                    (data[1].length === data[3].length) &&
                    (data[2].length === data[3].length)), 
                    "Response is not well-structured.");

            let result = "";
            const titles = data[1];
            const descriptions = data[2];
            const links = data[3];

            // or use a regular for loop
            titles.forEach((el, index) => {
                result += "<div>" 
                       +    "<a href=" + '"' + links[index] + '">' + el + "</a>"
                       +     "<br />"
                       +     "<p>" + descriptions[index] + "</p>"
                       + "</div>";
            });

            RESULTS_VIEW.style.visibility = "visible";
            if (result !== "") {
                RESULTS_VIEW.innerHTML = result;
            } else {
                RESULTS_VIEW.innerHTML = "<p>There was an error while processing the output.</p>";
            }
        });
    }).catch((err) => {
        console.error('Data failed', err);
    });
}
