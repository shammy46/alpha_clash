function play(){
   // console.log('play now');
    const homeSection =document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGround=document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}