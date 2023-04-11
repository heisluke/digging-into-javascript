let firstCard = 12
let secondCard = 13
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a card? 🤔");
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack! 😎 🥳");
} else {
    console.log("You've lost, better luck next time. 🫠");
}
