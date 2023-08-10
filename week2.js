let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// He wants it to be potty trained
// He wants it to like to snuggle or like to play fetch (or both)
// He doesn’t want it to shed


dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

console.log(dogName)
console.log(!sheds && pottyTrained && (likesSnuggles || likesFetch) )

dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

console.log(dogName)
console.log(!sheds && pottyTrained && (likesSnuggles || likesFetch) )


// = compares
3 === 6 // false
4 >= 2 // true

let age

// = assigns
age = 3
//+= is shorthand for =    +
age += 2
age = age + 2


age = 40
let country = "USA"
let money = 1

let canDrink = (age >= 21 || country === "Germany") && money >= 4.99

if((age >= 21 || country === "Germany") && money >= 4.99) {
    alert("Here's a drink")
} else {
    alert("Go home")
}

let sunny = true
let rainy = true

if(sunny) {
    alert("Wear sunscreen!")
}
else if(rainy) {
    alert("Bring an umbrella!")
}
else {
    alert("Wear a coat!")
}

alert("You're ready!")





let numCats = prompt("How many cats do you have?")

// shame them for having a bad number of cats
if(numCats < 2) {
    alert("You don't have enough cats")
} else if(numCats > 10) {
    alert("You have a problem.")
} else if(numCats > 4) {
    alert("You have too many cats. Calm down.")
}  else {
    alert("We're friends")
}

for(let i = 1; i <= 10; i++) {
    console.log(i)
  }
  