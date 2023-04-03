let numberOfPassengers = document.getElementById("numberOfPassengers");
let saveEl = document.getElementById("save-el");
let count = 0;

function pumpIt() {
    count++;
    numberOfPassengers.textContent = count;
}

function saveIt() {
    let saved = count + " - ";
    saveEl.textContent += saved;
    //console.log(count);
    count = 0;
    numberOfPassengers.textContent = count;
}

