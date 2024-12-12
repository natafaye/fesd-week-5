
// let total = 4 + 3 // 7

// let message = "How are you " + "Natalie" // "How are you Natalie"

// let isAvailable = true && false // false

// start on the right hand side of the equal sign
// simplify that right hand side down to a value (string, number, boolean, null, undefined, etc)
// That goes into the variable on the left hand side


/*** THE GUESSING GAME  ***/
let correctNumber = 4

// Make guess and give it an empty string to start things out
let guess = ""

while(guess !== correctNumber) {
    // a string of what the user typed in OR null
    guess = prompt("Guess a number between 1 and 10")

    // Potential bug: 4.xxxx is accepted
    // some kind of if here to check if it's a decimal
    // Sanitizing input = trying to stop users from breaking things

    // turn guess into a number
    guess = parseInt(guess)

    if(guess > correctNumber + 5) {
        alert("Your number was WAY too high, calm down")
    } else if(guess > correctNumber) { // Javascript will be a little buggy if they're strings so they're numbers
        alert("Your number was too high")
    } else if(guess < correctNumber) {
        alert("Your number was too low")
    } else if(isNaN(guess)) {
        alert("That wasn't even a number bro")
    }
}

// If they get out of the while loop and make it down here
// then guess must be the correct number because that's
// the only way that guess !== correctNumber can be false
alert("You did it! That's the number!") 




/*** FOR LOOP PRACTICE ***/

let total = 0

console.log(total) // 0

for (let i = 0; i < 5; i++) {
    console.log(total) // 0, 0, 1, 3, 6
    total += i // total = total + i
    console.log(total) // 0, 1, 3, 6, 10
}

console.log(total) // 10

alert("The total is " + total)