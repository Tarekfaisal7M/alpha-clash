function play(){
    //step-1 hide the home screen
    const homeContainer = document.getElementById(`home`);
    homeContainer.classList.add(`hidden`);
    // console.log(homeContainer.classList);

    // show the play-ground
    const groundSection = document.getElementById(`play-ground`);
    groundSection.classList.remove(`hidden`);
}