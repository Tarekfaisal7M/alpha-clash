
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
function handleKeyBoardPress(event){
    const playerPressed = event.key;
    console.log(`button pressed`, playerPressed);
    // get to the expected to press
    const nowAlphabet1 = document.getElementById(`now-alphabet`);
    const nowAlphabet = nowAlphabet1.innerText;
    const expectedAlphabet = nowAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // cheak the match word
    if(playerPressed === expectedAlphabet){
        console.log(`you win the game & get 1 point`);

        // get a current score
        const currentScoreElementID = document.getElementById(`current-score`);
        const currentScoreText = currentScoreElementID.innerText;
        const currentScore =parseInt(currentScoreText);
        console.log(currentScore);

        const newScore = currentScore + 1;
        currentScoreElementID.innerText = newScore;

        console.log(`you have pressed correctly`, expectedAlphabet);
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log(`you lost the game & lost point`);
        // get the current life number
        const currentLifeElement = document.getElementById(`current-life`);
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener(`keyup`, handleKeyBoardPress);

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log(`Your random alphabet`, alphabet);

    const nowAlphabet = document.getElementById(`now-alphabet`);
    nowAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}


function play(){
    hideElementById(`home`);
    showElementById(`play-ground`);
    continueGame();
}