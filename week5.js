let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

console.log("Should Rafael get Milo?")
let shouldGetDog = pottyTrained && !sheds && (likesFetch || likesSnuggles)
console.log(shouldGetDog)

dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

console.log("Should Rafael get Penny?")
console.log(pottyTrained && !sheds && (likesFetch || likesSnuggles))


let guess = ""

while(guess !== "pineapple") {
    guess = prompt("Guess!")
}

// It will only get here if guess === "pineapple"
alert("You guessed right!")


// let numCats = 0
// while(numCats < 3) {
//     alert("Here's a cat!")
//     numCats++ // i = i + 1
// }
// alert("You have enough!")
// console.log(numCats)

//for(let i = 0; i < AMOUNT TO LOOP; i++) {
// WHAT YOU WANT TO DO OVER AND OVER AGAIN
//}

// Walk through scratchpad
// total = 15 // 0 -> 1 -> 3 -> 6 -> 10 -> 15
// i = 6
// Logged out: 1 2 3 4 5

let total = 0
console.log(total) // 0

for (let i = 1; i <= 5; i++) {
    console.log(total) // 0 1 3 6 10
    total += i; // total = total + i
    console.log(total) // 1 3 6 10 15
}
  

console.log(total) // 15


let numCats = prompt("How many cats do you want?")
for(let i = 0; i < numCats + 2; i++) {
    alert("here's a cat")
}