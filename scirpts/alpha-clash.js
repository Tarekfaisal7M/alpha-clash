
// option-1

// function play(){
//     // step-1 hide the home screen
//     const homeContainer = document.getElementById(`home`);
//     homeContainer.classList.add(`hidden`);
//     // console.log(homeContainer.classList);

//     // show the play-ground
//     const groundSection = document.getElementById(`play-ground`);
//     groundSection.classList.remove(`hidden`);
// }

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(`Your random alphabet`, alphabet);

    const nowAlphabet = document.getElementById(`now-alphabet`);
    nowAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}


function play(){
    hideElementById(`home`);
    showElementById(`play-ground`);
    continueGame();
}