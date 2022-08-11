
var numberOfCats = prompt("How many cats do you have?")
var areYouACatDoctor = prompt("Are you a cat doctor?") // "yes" or "no"

//  && areYouACatDoctor === "no"

if (numberOfCats > 10) {
    alert("That's too many")
}
else if (numberOfCats >= 5) {
    alert("You have kind of a lot of cats")
}
else if (numberOfCats < 2) {
    alert("That's too few")
}
else {
    alert("You have a great number of cats")
}

for(let i = 0; i < numberOfCats; i++) {
    // petting every third cat
    if(i % 3 === 0) {
        alert("petting a cat " + i)
    }
}
