
// let paysWell = true
// let isLegal = false

// let takeJob = paysWell && isLegal

// alert(takeJob)



// dogName = "Milo"
// likesFetch = true
// sheds = true
// pottyTrained = true
// likesSnuggles = true


// // He wants it to be potty trained
// // He wants it to like to snuggle or like to play fetch (or both)
// // He doesn’t want it to shed

// alert("Should he get Milo? " + (pottyTrained && !sheds && (likesSnuggles || likesFetch)))

// dogName = "Penny"
// likesFetch = true
// sheds = false
// pottyTrained = false
// likesSnuggles = true

// alert("Should he get Penny? " + (pottyTrained && !sheds && (likesSnuggles || likesFetch)))


// let age = 40
// let country = "USA"
// let money = 1

// if ((age >= 21 || country === "Germany") && money >= 4.99) {
//     alert("You can have it!")
// }




// let sunny = true
// let rainy = true

// if (sunny && rainy) {
//     alert("Weird day!")
// }
// else if (sunny) {
//     alert("Wear sunscreen!")
// }
// else if (rainy) {
//     alert("Bring an umbrella!")
// }
// else { // implied else if(!rainy && !sunny)
//     alert("What do we know") // we know that sunny and rainy are both false if we get here
// }

// alert("You’re ready!")


// const age = prompt("What's your age?")
// let grade = 0

// switch (age) {
//     case 6:
//         grade = 1
//         break
//     case 7:
//         grade = 2
//         break
//     case 6:
//         grade = 1
//         break
//     case 8:
//         grade = 1
//         break
//     case 9:
//         grade = 1
//         break
//     case 6:
//         grade = 1
//         break
// }


// if(false) {
//     alert("never run")
// }

// while(false) {
//     alert("never run")
// }



// let guess = ""

// while(guess.toLowerCase() !== "pineapple") { // guess !== "pineapple" && guess !== "Pineapple"
//     guess = prompt("Guess!")
// }

// alert("You guessed right!")



// total = 15
// i = 6


// let total = 0

// for(let i = 1; i <= 5; i++) {
//    total += i; 
// }

// alert("The total is " + total)


// guess = "pineapple"

// let guess = ""

// do {
//     guess = prompt("Guess!")
// } while(guess !== "pineapple")

// alert("You guessed right!")


// pointsReset = true
// points = 125
// i = 31

var points = 0
var pointsReset = false



// IMPORTANT: The code below is not fully functional, there were some tweaks we had to make on BJs screen to get it to match the expected output exactly
// Can you get it working without watching the recording? :)


for(let i = 0; i < 100; i++) { // i < 100 && points < 290
    if(i % 2 === 0) {
        points += 5
    } else {
        points += 3
    }

    // Wouldn't recommend - but it will work
    // if(points === 125) {
    //     if(!pointsReset) {
    //         points = 25
    //         pointsReset = true
    //     }
    // }

    // Recommend this way
    if(points === 125 && !pointsReset) { // pointsReset === false (another option to make that check)
        points = 25
        pointsReset = true
    }

    if(points >= 290) { // or you can do it with the emergency exit
        break // emergency exit from looping or switch
    }
}
  

alert(points)