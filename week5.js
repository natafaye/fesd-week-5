
// let userAnswer = prompt("What's your favorite food? 🍕 or 🍦 or 🍝")

// if(userAnswer === "🍕") {
//     alert("Correct answer!")
// } else {
//     alert("What is wrong with you")
// }


// let numberOfFriends = prompt("How many friends are coming to the party?")

// // 200
// // Whoa calm down

// // if friends is less than 3 then say how sad
// if(numberOfFriends < 3) { // 0 - 2
//     alert("how sad")
// }
// else if(numberOfFriends > 20) { // 21 - infinity
//     alert("Whoa calm down")
// }
// // It can't get here without numberOfFriends being LESS OR EQUAL to 20
// else if(numberOfFriends > 5) { // 6 - 20      && numberOfFriends <= 20
//     alert("Perfect")
// }
// else { // 3, 4, 5
//     alert("That's fine")
// }



// let numberOfFriends = 0 //prompt("How many friends are here right now?")
// while(numberOfFriends < 10) {
//     console.log("New arrival coming! Right now there are " + numberOfFriends + " friends")
//     numberOfFriends++
// }

// for(let numberOfFriends = 0; numberOfFriends < 10; numberOfFriends++) {
//     console.log("New arrival coming! Right now there are " + numberOfFriends + " friends")
// }


// for(let i = 0; i < 10; i++) {
//     console.log("New arrival coming! Right now there are " + i + " friends")
// }


let partyLimit = prompt("How many people max can come to the party?")

for (let i = 0; i < partyLimit; i++) {
    console.log("New arrival coming! Right now there are " + i + " friends")
}



// Loops
// Learning to read them so that you can write and debug them
// Make sure you ask yourself what should be IN the loop and what should OUTSIDE the loop

let total = 0

console.log(total) // CONSOLE: 0

for (let i = 1; i <= 5; i++) {
    console.log(total) // CONSOLE: 0, 1, 3, 6, 10
    total += i;
    console.log(total) // CONSOLE:    1, 3, 6, 10, 15
}

console.log(total) // CONSOLE: 15

alert("The total is " + total)