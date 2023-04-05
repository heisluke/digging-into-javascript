//the double inequality checker is lenient, it checks if the values passed into the function are not the same, it doesn't matter if the data type is a string or a number
function savage(a) {
    if (a != (21))  {
        return "Okay, Go away."
    } else {
        return "Can you beg God for me?"
    }      
};

console.log(savage("21"));

//the triple inequality checker makes sure that whatever is passed into the function is exactly not the same, down to the data type

function superSavage(a) {
    if (a !== (21))  {
        return "Okay, Go away."
    } else {
        return "Can you beg God for me?"
    }      
};

console.log(superSavage("21"));