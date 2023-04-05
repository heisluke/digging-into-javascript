//the double equality checker is lenient, it checks if the values passed into the function are the same, it doesn't matter if the data type is a string or a number
function checker(a, b) {
    if (a == b)  {
        return "These are basically the same."
    } else {
        return "huh....? These are not the same"
    }      
};

console.log(checker(3,3));

//the triple equality checker makes sure that whatever is passed into the function is exactly the same, down to it being a string or number
function strictChecker(a, b) {
    if (a === b)  {
        return "These are basically the same."
    } else {
        return "huh....? These are not the same"
    }      
};

console.log(strictChecker(3,"3"));
