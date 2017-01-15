let formatedState = {};
function formatState(){
  
    //formatedState.title = state.title;
    for(let i =1; i<11; i++){
      let prop = "job" + i;
      let prop2 = "jobTitle" + i;
      formatedState[prop] = {};
        formatedState[prop].job = state[prop2]
        formatedState[prop].link = state[prop]
    }
    console.log(formatedState);
}



const hey = document.body.querySelector('.results');
function renderResults(){
   let form='';
  function results(){
    
     for (key in formatedState) 
    {
            form+='<li>'+
                '<div class="row">'+
                    '<div class="col-xs-12 col-sm-9 no-margin">'+
                        '<a href="'+formatedState[key].link +'">'+formatedState[key].job+'</a>'+
            '</li>';
    }
   
   
  }
 results();
 console.log(form);
hey.innerHTML = form;
}


let state = {};
const buttonPress = document.querySelector('button');
const searchInput = document.querySelector('.search');
function query(){
  return searchInput.value.replace(/ /g,'+');
}
function createBody(){
  query();
  let val = ''
  for(let i=1; i < 11; i++){
     val +=' "jobTitle'+i+'":"#serp div:nth-child('+ i +') li  h3", "job'+i+'":"a#position'+(i-1)+'",'
  }
    console.log(val);
return val;
}
buttonPress.addEventListener('click', function (event){
 event.preventDefault();
let json_data = '{'+ createBody() + '"title": "title"}'
fetch('https://www.jamapi.xyz', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://www.dice.com/jobs?q=' + query() +'&l=MI&djtype=Full+Time&searchid=3465206207773',
      json_data:json_data
    })
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    state = json;
    console.log(state);
    formatState();
    renderResults();
  });  })

