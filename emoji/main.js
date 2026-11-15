
/* 
Quiz 7: EmojiFighter

1. When the user clicks on the "pick Fighters" button, pick two 
   random emoji fighters and display them as i.e "🦂 vs 🐯" in the "stage" <div>

   2.comment out the emoji fighter function and try the addEventlistener
*/

let fighters = [ "🐯", "🦂","🐕","🐘", "🐺","🦊","🤖"]

let stage = document.getElementById("stage")
let fighterBtn = document.getElementById("fighter-btn")
// let emojiBtn =document.getElementById("emoji-Btn")
// console.log(emojiBtn);


// function emojiFighter() {
//   let  fighter1 = Math.floor( Math.random()  * fighters.length)
//   let  fighter2 = Math.floor( Math.random()  * fighters.length)

//   stage.innerHTML = fighters[fighter1] + " vs " + fighters[fighter2] 
// }

fighterBtn.addEventListener("click", function() {
  // console.log("the button was clicked");
  let randomFighter1 = Math.floor( Math.random() * fighters.length)
  let randomFighter2 = Math.floor( Math.random() * fighters.length)
  

   stage.textContent = fighters[randomFighter1] + " vs " + fighters[randomFighter2]
}) 



