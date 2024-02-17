// function play(){
//    // console.log('play now');
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;

    setBackgroundCokor(alphabet);

}


function play(){
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}