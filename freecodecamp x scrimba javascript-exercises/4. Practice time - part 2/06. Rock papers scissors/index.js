let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function aiPlay() {
    let rando = Math.floor(Math.random()*3);
    return hands[rando];
}

console.log(aiPlay());
