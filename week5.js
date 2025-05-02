let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Rafael's preferences
// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)

// Puzzle Pieces
// && || ! ()
// likesFetch sheds pottyTrained likesSnuggles

// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

let rafaelShouldGetMilo = pottyTrained && !sheds && (likesFetch || likesSnuggles)

// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

let rafaelShouldGetPenny = pottyTrained && !sheds && (likesFetch || likesSnuggles)

console.log("Get milo?", rafaelShouldGetMilo)
console.log("Get penny?", rafaelShouldGetPenny)



let age = 40
let country = "USA"
let money = 1

let canBuyBeer = (age >= 21 || country === "Germany") && money >= 4.99
// false


let smoking = prompt("Do you smoke?")
let chocolate = prompt("Do you eat chocolate in bed?")
let rich = prompt("Are you rich?")
let smart = prompt("Are you smart?")
let splurger = prompt("Do you buy crap you don't need?")
// These variables will have "y" or "n"

// Requirements for Bob

// Harder deal breaker: not smoking, 
// Harder deal breaker: Not a splurger unless you're rich
if(smoking === "y" || (splurger === "y" && rich === "n")) {
    alert("No thank you!")
}
// Soft deal breaker: Smart or rich
// Soft deal breaker: not chocolate
else if((smart === "n" && rich === "n") || chocolate === "y") {
    alert("Tell me more, but you're on thin ice")
}
else {
    alert("Marry me baby!")
}


// Practicing "reading" loops helps you write them correctly and debug them when they're not correct




let i = 0
while(i < 3) {
    alert("Here's a cat!")
    i++ // i = i + 1
}
alert("You have enough!")



// i = 3
// here's a cat, here's a cat, here's a cat, you have enough

for(let i = 0; i < 3; i++) {
    alert("Here's a cat!")
}
alert("You have enough!")


// total = 15
// i = 6

let total = 0
console.log(total) // 0
for(let i = 1; i <= 5; i++) {
   console.log(total) // 0, 1, 3, 6, 10
   total += i; // total = total + i
   console.log(total) // 1, 3, 6, 10, 15
}
console.log(total) // 15

alert("The total is " + total)
