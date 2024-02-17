// function play(){
//    // console.log('play now');
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardPress(event) {

    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);
    //console.log(currentAlphabetElement.innerText);

    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');


        const currentScore = getTextElementValue('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValue('current-score', updatedScore);

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // const newScore = currentScore+1;
        // currentScoreElement.innerText= newScore;




        removeBackgroundColor(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('you missed');

        const currentLife = getTextElementValue('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValue('current-life', updatedLife);

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeElementText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeElementText);

        // const newLife = currentLife-1;
        // currentLifeElement.innerText= newLife;
        // console.log(newLife);
    }

}

document.addEventListener('keyup', handleKeyboardPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);

}


function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}