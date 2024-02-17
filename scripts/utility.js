function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("hidden");
}

function showElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove("hidden");
}

function setBackgroundColor(elementID) {

    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementID) {

    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function getTextElementValue(elementID) {
    const element = document.getElementById(elementID);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setTextElementValue(elementID, value) {
    const element = document.getElementById(elementID);
    element.innerText = value;
}


function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqursuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}