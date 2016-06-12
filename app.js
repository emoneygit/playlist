
// var button = document.getElementById('output')
//   button.addEventListener('click', function() {
// var result = document.getElementById('input')
//   document.getElementById('box').innerHTML = result;
// })

var title = document.getElementById('cover')
//var A1 = document.getElementById('A1')

var request = new XMLHttpRequest()

request.open("GET", "https://lit-fortress-6467.herokuapp.com/object")
request.send()
request.onreadystatechange = function(){
  if(request.readyState === 4 && request.status < 400){
    var response  = JSON.parse(request.responseText)
      var array = response.results
        console.log(array);

    for (var i = 0; i < 3; i++) {
      var random = array[Math.floor(Math.random()*array.length)];
      // create an img element
      // set the src of that img element to array[i].Poster
      // append img to parent div
      var img = document.createElement("img")
      img.src = "images/" + array[Math.floor(Math.random()*array.length)].cover_art
      title.appendChild(img)
      }
    }
  }
