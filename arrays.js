// an array inside an array is called a multidimensional array

// setup
let numberArray =[[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]];

// you should play around and select number 8, 10, 14, 2 and 4 together, then add 3 and 7 together

let pickEight = numberArray[2][1];
let pickTen = numberArray[3][0][0];
let pickFourteen = numberArray[3][2];
let pickTwoAndFour = numberArray[0][1] + " "+ String( numberArray[1][0]);
let threePlusSeven = numberArray[0][2] + numberArray[2][0];

console.log( "\n", pickEight,"\n", pickTen, "\n", pickFourteen, "\n", pickTwoAndFour, "\n", threePlusSeven  );

// you can manipulate arrays with the push()

let subjectInfo = [ ["Yonda", 28], ["Seinfield", 31], ["Henry", 24] ];
console.log("before push() \n" + subjectInfo);
subjectInfo.push(["Luke", 21]);
console.log("after push() \n" + subjectInfo);

// you can also manipulate arrays with pop(), but, like the name suggests, it removes the last array instead
let popSubjectInfo = [ ["Yonda", 28], ["Seinfield", 31], ["Henry", 24] ];
console.log("\n before pop() \n" + popSubjectInfo);
removeSubjectInfo = popSubjectInfo.pop();
console.log("after pop() \n" + popSubjectInfo);


// another way no manipulate arrays in shift(), this is like pop(), but from the front
let shiftSubjectInfo = [ ["Yonda", 28], ["Seinfield", 31], ["Henry", 24] ];
console.log("\n before shift() \n" + shiftSubjectInfo);
wozaSubjectInfo = shiftSubjectInfo.shift();
console.log("after shift() \n" + shiftSubjectInfo);


// finally, we can manipulate arrays with unshift(), this is push(), but from front, it basically reverses shift(), but needs an input

let artist = [["Bobby"], [" Shmurda"]];

console.log("\n \n before shift \n Hey, It's " + artist);
removeBobby = artist.shift();
artist.unshift(["Bella"]);
console.log("\n \n after shift \n Hey, It's " + artist);
