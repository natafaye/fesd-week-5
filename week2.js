
let length = 23;
if(length > 15 || length < 0) {
    let maxLength = 15
    length = maxLength;
}


let numberOfCats = prompt("How many cats?")
for(let i = 0; i < numberOfCats; i++) {
    alert("Petting the cat")
}


let guess = "";
while(guess.toLowerCase() !== "pineapple") {
    guess = prompt("Guess!");
}
alert("You guessed right!");


let numCats = 0;
while(numCats < 3) {
    numCats++;
}


let something = 2
for(let i = 0; i < 3; i++) {
    if(something === 3) {
        break;
    }
    if(i == 2) {
        alert(i);
    }
}
alert("You have enough!");
