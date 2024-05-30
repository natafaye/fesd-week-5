

let something = 3

something = 4


// what a variable is in the problem given


/*
fdsf

fdsfds
*/


/**
 * 
 * fdsfds
 * 
 * fdsfd
 * fdsfd
 */


let isSweet = false
let hasDairy = true
let isCooked = false
let isHot = true


isSweet && (hasDairy || isCooked && !isHot)



dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

console.log("Should Rafael get Milo?")
if(pottyTrained && !sheds && ( likesSnuggles || likesFetch )) {
    alert("We found a dog for you! Its name is " + dogName)
}


dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

console.log("Should Rafael get Penny?")
if(pottyTrained && !sheds && ( likesSnuggles || likesFetch )) {
    alert("We found a dog for you! Its name is " + dogName)
}



// if (CONDITION) {
//     // the code to run if the CONDITION is true
// } else { // NO CONDITION ON AN ELSE
//     // the condition must have not been true to get here
//     // code to run in the else case
// }

let i = 0
while(i < 3) {
    alert("Here's a cat!")
    i++ // i = i + 1
}
alert("You have enough!")



// What are my variables right now?
// total = 15
// i = 6


let total = 0

for(let i = 1; i <= 5; i++) {
   total += i; // total = total + i
}

alert("The total is " + total)
