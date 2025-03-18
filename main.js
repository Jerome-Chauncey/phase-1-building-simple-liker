// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const heartObject = {'♡': FULL_HEART, '♥': EMPTY_HEART}//if the heart is empty it becomes full, if the heart is full it becomes empty
const color = {"red": "", "": "red"}
const likeBtns = document.querySelectorAll(".like-glyph")
// console.log(likeBtns)
for (all of likeBtns){
  all.addEventListener("click", (e) =>{
    mimicServerCall()
    .then((respond) => {
      e.target.innerText = heartObject[e.target.innerText]
      e.target.style.color = color[e.target.style.color]
    })
    .catch((error) => {
      document.getElementById("modal").className = ""
      setTimeout(function() {
        document.getElementById("modal").className = "hidden"
      }, 3000)
    })
  })
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
