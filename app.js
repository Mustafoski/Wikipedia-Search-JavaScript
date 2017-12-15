//https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&format=json&callback=?


const SEARCH_VIEW  = document.getElementById('search_view');
const RESULTS_VIEW = document.getElementById('results_view');

const userSearchedWord = document.getElementById('search_input');

const API_BASE = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json';

function pageLoaded(){
      // page started hide results_view and gallery_view
   
   
}

function getInfo(){
    
    var url = API_BASE + '&search=' + userSearchedWord.value;
    
    fetch(url)
        .then((response) => {
        console.log(response);
        if(response.status !== 200){
            console.error('API failed');
        }
        
        response.json().then( (data) => {
            console.log(data);
            
            
//           var title = '';
//            var titles = data[0];
//            
//            titles.forEach( (t) => {
//                title += '<h1>' + t + '</h1>';
//            });
//             SEARCH_VIEW.innerHTML = title;
            
            var list = '';
            var lists = data[1];
            
            lists.forEach( (li) => {
                list+= '<li>' + li + '</li>';
            });
            SEARCH_VIEW.innerHTML.list;
            
            
            
            var link = '';
            var links = data[3];
            
            links.forEach( (l) => {
                 link += "<div class='link'> "
                   	+ "<br />"
                   	+ "<a href= >" + l + "</a>"
                   	+ '</div>';
            });
            SEARCH_VIEW.innerHTML = link;
                
            
            var info = '';
            var information = data[2];
            information.forEach( (i) => {
                
                info+= "<div class='info'> "
                + "<br /">
                + "<p>" + i + "</p"
                + "</div>";
                
            });
            SEARCH_VIEW.innerHTML = info;
           
        
            
           
            
            
           
            
            
        

            
        });
        
        
       
        
        }).catch((err) => {
            console.error('Data failed', err);
    
    });
}