
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
    console.log(`player pressed`, playerPressed);

    // stop the game
    if(playerPressed === `Escape`){
        gameOver();
    }

    // get to the expected to press
    const nowAlphabet1 = document.getElementById(`now-alphabet`);
    const nowAlphabet = nowAlphabet1.innerText;
    const expectedAlphabet = nowAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // cheak the match word
    if(playerPressed === expectedAlphabet){
        console.log(`you win the game & get 1 point`);
        const currentScore = getTextElementValueById(`current-score`);
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementVAlueById(`current-score`, updateScore);

        // get a current score
        // const currentScoreElementID = document.getElementById(`current-score`);
        // const currentScoreText = currentScoreElementID.innerText;
        // const currentScore =parseInt(currentScoreText);
        // console.log(currentScore);

        // const newScore = currentScore + 1;
        // currentScoreElementID.innerText = newScore;
        // ----------------------------------------------------

        // if eta must lagbe-----
        console.log(`you have pressed correctly`, expectedAlphabet);
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log(`you lost the game & lost point`);
        const currentLife = getTextElementValueById(`current-life`);
        const updateLife = currentLife - 1;
        setTextElementVAlueById(`current-life`, updateLife);

        if(updateLife === 0){
            gameOver();
        }



        // ------------------
        // get the current life number
        // const currentLifeElement = document.getElementById(`current-life`);
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);

        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
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
    // hide everything show only play ground
    hideElementById(`home`);
    hideElementById(`score`);
    showElementById(`play-ground`);

    // reset score & life
    setTextElementVAlueById(`current-life`, 5);
    setTextElementVAlueById(`current-score`,0);
    continueGame();
}

function gameOver(){
    hideElementById(`play-ground`);
    showElementById(`score`);

    // update final score
    // get the final score
    const finalScore = getTextElementValueById(`current-score`);
    console.log(finalScore);
    setTextElementVAlueById(`final-score`, finalScore);

    // clear the last seclected alphabet of highlights
    const CurrentAlphabet = getElementTextById(`now-alphabet`);
    // console.log(CurrentAl
    removeBackgroundColor(CurrentAlphabet);

}