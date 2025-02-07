// Nothing data types
// 1) null - intentional nothing
// 2) undefined - never had anything
// but they're basically the same thing


// parseInt converts a string to a number
parseInt("3") === 3 // true
"3" === 3 // false
// Using double equals == is bad and wrong and you will go to jail



// let howManyCats = prompt("How many cats do you have?") // Note: this will always be a string

// if(parseInt(howManyCats) === 0) {
//     alert("How could you, they need a home!")
// } else if(parseInt(howManyCats) > 100) {
//     alert("Aaaaaaaah")
// } else if(parseInt(howManyCats) > 10) { // if the code gets here, we know it's NOT greater than 100
//     alert("I have questions")
// } else { // it must not be zero and it must be less than 10
//     alert("You're the best")
// }


// i = 3

// for(let i = 0; i < 3; i++) {
//     alert("Here's a cat!")
// }
// alert("You have enough!")

// total = 15
// i = 6

// Global Variables = variables created outside of any curly brackets
// pros - it's available everywhere
// con - it's everywhere, you can't really reuse that name anywhere
let total = 0 // outside of any curly brackets - so it's completely free and available everywhere
let special // not trapped inside the for loop curly brackets

for(let i = 1; i <= 5; i++) {
   total += i; // total = total + i
   console.log(i)
   special = "hi" 
}
console.log(special)

console.log("The total is " + total)


// total++ // total = total + 1
// total += 2 // total = total + 2
// total += 3 // total = total + 3

// total++ // total += 1   total = total + 1

// cost1 = 3
// cost2 = 4
// total += cost1
// total += cost2


// while(true) {
//     // this will run forever and your computer will get loud and mad
//     if(fdsfds) {
//         break // emergency exits from the loop
//     }
// }


for(let i = 0; i < 10; i++) {
    if(i === 3) {
        alert("You're a third of the way through")
        while(false) {
            // The sky's the limit
        }
    }
}