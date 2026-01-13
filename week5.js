let isFull = true
let pizzaSlicesEaten = 0;

do {
    isFull = true
    pizzaSlicesEaten++ // pizzaSlicesEaten = pizzaSlicesEaten + 1
    console.log("Eat a pizza slice! You have eaten: " + pizzaSlicesEaten)
} while (!isFull)

// 2 options for showing stuff to the user
// neither of which are great right now
// console.log()
// alert()


// While loop runs until the condition is false




// Memory/variables:
// guess = "pineapple"


// let guess = ""

// while(guess !== "pineapple") {
//     guess = prompt("Guess!")
// }

// // If we've gotten to this line they MUST have typed in pineapple
// alert("You guessed right!")


// i = 3
// cat alert, cat alert, cat alert

let i = 0
while (i < 3) {
    alert("Here's a cat!")
    i++ // i = i + 1
}
alert("You have enough!")
console.log(i) // 3



// cannot
// can't

// i = i + 1
// i++

// part 1: very beginning once
// part 2: check at the beginning of every iteration/loop
// part 3: at the end of every iteration/looping


// i = 3
// cat alert, cat alert, cat alert

// for(let i = 0; i < 3; i++) {
//     alert("Here's a cat!")
// }
// alert("You have enough!")




// MEMORY
// total = 3
// i = 3


// If you had to guess, what does this code do?

// let total = 0

// console.log(total) // Console: 0

// for (let i = 1; i <= 5; i++) {
//     console.log(total) // Console: 0, 1, 3, 6, 10
//     total += i; // total = total + i
//     console.log(total) // Console: 1, 3, 6, 10, 15
// }

// console.log(total) // Console: 15

// alert("The total is " + total) // 15

// Global Variable
// Can be used anywhere, is never "out of scope"
let number = 0

if(true) {
  number = 3
  console.log(number) // Console: 3
} // number gets thrown away

console.log(number) // ERROR


// Uncaught ReferenceError: something is not defined
// =
// something? Never heard of it!


// For loop = we know how many times we're going to do it when we start
// While loop = we know when to keep going

// Making sandwiches for our friends that came over
// For loop because we know how many friends we have

// Doing the dishes
// While loop because we know when to keep going