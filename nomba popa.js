function popper(numArray, newNum) {
    numArray.push(newNum);
    return numArray.shift();
};

let numArray = [1,2,3,4,5];

console.log("Before Popper: " + JSON.stringify(numArray));
popper(numArray, 98);
console.log("After Popper: " + JSON.stringify(numArray));



