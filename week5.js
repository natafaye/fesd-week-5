let myNewThing = 3

let paysWell = false
let isLegal = true
let takeJob = paysWell && isLegal

let isSnowy = true
let isRainy = true
let wearBoots = isSnowy || isRainy

let isHot = false
let isCool = !isHot

// () parenthesis is for conditions/check
// {} curly brackets are to make blocks of code
// [] square brackets later"


if (false) {
    alert("Wear sunscreen!")
    if (true) {
        alert("Wear sunscreen!")
        if (true) {
            alert("Wear sunscreen!")
        }
    }
}


// if(sunny && rainy) {
//     alert("????")
// }
// else if(sunny) {
//     alert("Bring a sunscreen!")
// }
// else if(rainy) {
//     alert("Bring an umbrella!")
// }

// alert("You're ready!")


// if(weatherId >= 200 && weatherId < 300)
//     return "⛈️"
// else if(weatherId >= 300 && weatherId < 400)
//     return "🌧️"
// else if(weatherId >= 500 && weatherId < 600)
//     return "🌧️🤣👀💖✨"
// else if(weatherId >= 600 && weatherId < 700)
//     return "❄️"
// else if(weatherId >= 700 && weatherId < 800)
//     return "🌫️"
// else if (weatherId === 800)
//     return "☀️"
// else if (weatherId >= 801 && weatherId < 810)
//     return "☁️🐶"
// else
//     return "?"

// total = 15
// i = 6

let total = 0

console.log("before the loop", total)

for(let i = 1; i <= 5; i++) {
   console.log("before adding", total)
   total += i // total = total + i
   console.log("after adding", total)
}
console.log("after the loop", total)



// 1
// 3
// 6
// 10
// 15

// 0
// 1
// 3
// 6
// 10


alert("The total is " + total)


// Let - It is a newer keyword for 
// keyword = magic word
// declaring variables = make a new variable
// whose values can be changed. = we can use the equal sign to change it later
// In this, a variable cannot be declared multiple times; = can't reuse names in the same place/block
let friend = "fish"
//let friend = "hippo" // gets mad
friend = "hippo"
// however, they are declared once in a program. = duh? I don't know what this is trying to say


// keywords = for, while, let, var, if, else

// make a favorites list what would you need?
// arrays
// let or const doesn't matter



let food2 = "apple"

// typically we would do this for scope reasons (which we'll talk about soon)
let food1
food1 = "apple"