
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let num = getRandomInt(3);
console.log(num);

function getRandomClass() {//get random number between 0-3, and return one of the 3 bg-color classes
  num = getRandomInt(3);
  console.log(num);

  if (num == 0) {
    return 'bg-color-0';
  } else if (num == 1) {
    return 'bg-color-1';
  } else {
    return 'bg-color-2';
  }
}

/**********************************
    CONFIGURE JSON CALL
  **********************************/
// The API feed
const getStuff = 'https://gist.githubusercontent.com/danielleflinn/60468063aec31c84e55e880a29340573/raw/29c1f4443350b2d9fd1f006bf74f78b3b1d5db35/jokes';

// Do stuff with returned data
let doStuff = function (data) {

  // How big is array?      
  // console.log( data );
  console.log(data.results.length);
  console.log(data.results[1].title); //Joke
  console.log(data.results[1].joke); //Joke

  for (i = 1; i < data.results.length; i++) {

    let color = getRandomClass();

    const template =
    `<div id='joke' class='${color}'>
        <h3> ${data.results[i].title}</h3> 
        <p> ${data.results[i].joke} </p>
      </div>
    `;


    $('#app').append(template);

  }

};



/************************************
     GET JSON FROM API
   ************************************/
$.getJSON(getStuff, doStuff);


/************************************
                                SHOW (DISPLAY ON PAGE)
                              ************************************/
let showStuff = function (data) {

  console.log(data);

};