function wordSpit (noun, adjective, verb, adverb) {
    let result = "";
    result += "The " + noun + " is really " + adjective + " and it " + verb + " " + adverb;

    return result;

}

console.log(wordSpit("phone", "fast", "ran", "smoothly"));
console.log(wordSpit("cow", "slow", "chews", "annoyingly"));


let carArray = ["engine", "door", "windscreen", "steering wheel"];
let nestedCarArray = [ ["engine", "carburator", "fuel tank"], ["dashboard", "radio", "steering wheel"] ];

let powerDrive = carArray[3];
let underTheHood = nestedCarArray[0];

console.log(carArray);
console.log(underTheHood);
console.log(powerDrive);

carArray[1] = "gear stick";
console.log(carArray);

