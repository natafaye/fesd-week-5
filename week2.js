// this is a thing you can do
let dogName, likesFetch, sheds, pottyTrained, likesSnuggles


dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

/*
 * He wants it to be potty trained
 * He doesn’t want it to shed
 * He wants it to like to snuggle or like to play fetch (or both)
 */

// Use && || ! () and variables above


const shouldGetMilo = pottyTrained && !sheds && (likesFetch || likesSnuggles)

console.log("Should he get Milo?", shouldGetMilo)


dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

const shouldGetPenny = pottyTrained || !sheds || (likesFetch || likesSnuggles)
// sort by best match
// use a loop to do this

console.log("Should he get Penny?", shouldGetPenny)




// what is inside the loop and what is not inside the loop
// how the computer exactly runs this

// i: 3

// let i = 0
// while(i < 3) {
//     alert("Here's a cat!")
//     i++ // i = i + 1
// }
// console.log(i)
// alert("You have enough!")

// look at this with for loop


// while(!gameOver) {
//     // do another turn
// }
// // oops game over

// while(userPick !== "EXIT") {
//     // handle the user's pick
// }
// // say goodbye

// while(currentDiscountCode doesnt work) {
//     // check the next one
// }


// for(let i = 0; i < numFriendsAtHouse; i++) {
//     // make a sandwich
// }


// total: 0
// i: 1

let total = 0
// logging total here would give: 0
for(let i = 1; i <= 5; i++) {  
   console.log("total", total) // 0, 1, 3, 6, 10
   console.log("i", i)
   total += i
    // logging total here would give: 1, 3, 6, 10, 15
}
// logging total here would give: 15
alert("The total is " + total)


let userResponse = ""

// Keep prompting until they give a name
while(userResponse !== "cat" && userResponse !== "dog") {
    userResponse = prompt("What's the best animal?")
}

console.log(userResponse)




