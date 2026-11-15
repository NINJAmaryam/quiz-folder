/* 
Quiz 8: Sorting fruits

1. Create a function that puts the apples onto the appleShelf
  and the oranges onto the orangeShelf. 
2. Use a for loop, a conditional statement and the textContent property  
*/

let fruits = ["🍊", "🍎", "🍊", "🍎", "🍎"]

let appleShelf =document.getElementById("apple-shelf")
let orangeShelf =document.getElementById("orange-shelf")

function sorting() {
    for(let i = 0; i < fruits.length; i++){
        // console.log(fruits[i]);
        if(fruits[i] === "🍎"){
        appleShelf.textContent+="🍎"
        }else{
           orangeShelf.textContent+= "🍊"
            
        }
            
    }
}
sorting()