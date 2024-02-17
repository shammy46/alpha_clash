function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("hidden");
}

function showElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove("hidden");
}

function setBackgroundCokor(elementID){

    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
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