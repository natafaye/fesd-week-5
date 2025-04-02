// if is a magic word
// if(SOMETHING THAT COMES OUT TO TRUE OR FALSE) {
//     // code that we may or may not want to run
// }
// else { <---- else does NOT get a condition with curly brackets

// }

// prompt("message") will simplify to whatever the user types in (or null)
// It will always be a string, even if they type in a number

// let numCats = prompt("How many cats do you have")
// // Shame or praise based on number of cats they have
// if (numCats < 3) {
//     alert("How rude of you, there are cats without homes 👀")
// }
// else if (numCats > 10) {
//     alert("I need to make a call real quick 🤨")
// }
// else if (numCats > 5) { // && numCats <= 10
//     alert("I have some questions")
// }
// else { // automatically says if every other check was false
//     // else if(numCats >= 3 && numCats <= 5) {
//     // It will only come inside this else, if they have 3 or 4 or 5 cats (or cancel or something weird)
//     alert("You are correct and the greatest 👑")
// }


// while is a magic word
// repeat steps 3 through 5 until finished
// while(SOMETHING THAT COMES OUT TO TRUE OR FALSE ISH) {
//     // the code we want to run as long as it is true
// }



// I highly recommend practice reading loops like you're a computer
// it'll really build your ability to write them and debug them

// pretending to be the computer
// i = 3
// cat alert, cat alert, cat alert

// option 1
// let i = 0
// while(i < 3) {
//     alert("Here's a cat!")
//     i++ // i = i + 1
// }

// option 2
// for(let i = 0; i < 3; i++) {
//     alert("Here's a cat!")
// }

// alert("You have enough!")
// alert("i is " + i)


// pretending the computer
// console: 1, 2, 3, 4, 5
// total = 15
// i = 6

let total = 0

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        total += i; // total = total + i
    }
}

alert("The total is " + total)

// number % 2 === 0
