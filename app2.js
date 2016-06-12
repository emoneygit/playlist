var clear =  document.getElementById('clear');
clear.addEventListener('click', function(clear) {
bucket.innerHTML = "";
})
var title = document.getElementById('covers')
var bucket = document.getElementById('box')
//var A1 = document.getElementById('A1')

var request = new XMLHttpRequest()

request.open("GET", "https://lit-fortress-6467.herokuapp.com/object")
request.send()

request.onreadystatechange = function(){
  if(request.readyState === 4 && request.status < 400){
    var response  = JSON.parse(request.responseText)
    var array = response.results

function clicker(peram){
  title.addEventListener('click', function(event) {
    var addTracks = document.createElement("h2");
    addTracks.innerHTML = event.target.id;
    bucket.appendChild(addTracks);
  })
    }


    for (var i = 0; i < array.length; i++) {
    //  var random = array[Math.floor(Math.random()*array.length)];
      var pic = document.createElement("img")
      pic.id = array[i].artist + ": " + array[i].title
      title.appendChild(pic)
      pic.src = "images/" + array[i].cover_art

      }
      clicker(pic)
    }
  };

//POST
var success =  document.getElementById('submit');
success.addEventListener('click', function() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status < 400) {
      bucket.innerHTML = "";
      console.log(xhttp.responseText);
      document.getElementById('post').innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("POST", "https://lit-fortress-6467.herokuapp.com/post", true);
  xhttp.send();
})
