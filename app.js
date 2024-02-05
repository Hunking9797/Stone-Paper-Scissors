const elements = document.querySelectorAll('.element');
let userScore = 0;
let compScore = 0;

function generateCompChoice(){
    const choices = ['stone','paper','scissors'];
    let compChoiceIdx = Math.floor(Math.random() * 3);
    return choices[compChoiceIdx];
}

function playGame(userChoice,compChoice){
    let userWon = 1;
    if(userChoice === compChoice){
        // game is draw
        return -1;
    } // rest cases
    else if(userChoice === 'stone'){
        userWon = compChoice === 'scissors' ? 1 : 0;
    }
    else if(userChoice === 'scissors'){
        userWon = compChoice === 'paper' ? 1 : 0;
    }
    else if(userChoice === 'paper'){
        userWon = compChoice === 'stone' ? 1 : 0;
    }
    return userWon;
}

function displayMessage(userWon){
    let gameResult = document.querySelector('#gameResult');
    if(userWon === -1){
        document.querySelector('#gameResult').innerText = "Draw";
        gameResult.style.backgroundColor = 'black';
    }
    if(userWon === 1){
        gameResult.innerText = 'Won';
        userScore++;
        document.querySelector('#userScore').innerText = userScore;
        gameResult.style.backgroundColor = 'green';
    }
    else if(userWon === 0){
        gameResult.innerText = 'Lose';
        compScore++;
        document.querySelector('#compScore').innerText = compScore;
        gameResult.style.backgroundColor = 'red';
    }
}

elements.forEach( (element) => {
    element.addEventListener('click', (event) => {
        let userChoice = event.target.alt;
        let compChoice = generateCompChoice();

        let userWon = playGame(userChoice,compChoice);
        displayMessage(userWon);
    });
});