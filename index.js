
let gameStarted = 0;
let score = 0;
let highscore = 0;
let number = 0;

let startGameButton = document.getElementById("start-button");
let higherButton = document.querySelector("#button-higher");
let lowerButton = document.querySelector("#button-lower");
let scoreElement = document.querySelector("#score");
let highscoreElement = document.querySelector("#highscore");
let numberDivElement = document.querySelector(".number");
let numberElement = document.querySelector("#number");
let playAgainButton = document.querySelector("#button-playAgain");

startGameButton.addEventListener("click", function(){
    console.log("start");
    startGame();
});

lowerButton.addEventListener("click", lower);

higherButton.addEventListener("click", higher);

playAgainButton.addEventListener("click", playAgain);


function getNumber(){
    return Math.floor(Math.random() * 20 + 1);
    //console.log(number);
}

function startGame(){
    gameStarted = 1;

    firstNumber();

    lowerButton.disabled = false;
    higherButton.disabled = false;

    let startElement = document.querySelector(".start");
    startElement.style.visibility = "hidden";
    startElement.style.position = "absolute";

    numberDivElement.style.visibility = "visible";
    numberDivElement.style.position = "static";
    numberDivElement.style.width = "100vw";

    let higherNumberButton = document.querySelector("#button-higher");
    higherNumberButton.style.backgroundColor = "red";

    let lowerNumberButton = document.querySelector("#button-lower");
    lowerNumberButton.style.backgroundColor = "green";

    console.log("Start game");

    //setTimeout(restartGame, 2000)
}


function endGame(){
    let restartButton = document.querySelector(".playAgain");
    restartButton.style.position = "static";
    restartButton.style.visibility = "visible";
    let higherNumberButton = document.querySelector("#button-higher");
    higherNumberButton.style.backgroundColor = "white";

    let lowerNumberButton = document.querySelector("#button-lower");
    lowerNumberButton.style.backgroundColor = "white";
    lowerButton.disabled = true;
    higherButton.disabled = true;
}

function firstNumber(){
    let numberElement = document.querySelector("#number");
    number = getNumber();
    numberElement.textContent = number;
    console.log(number);
}

function updateScore(score){
    scoreElement.textContent = score;
}

function updateHighScore(){
    if(parseInt(scoreElement.textContent) > parseInt(highscoreElement.textContent)){
        highscoreElement.textContent = scoreElement.textContent;
    }
}

function updateNumber(number){
    numberElement.textContent = number;
    console.log(number);
}

function higher(){
    let newNumber;
    while(true){
        let getNewNumber = getNumber();
        console.log(getNewNumber);
        if(number != getNewNumber){
            newNumber = getNewNumber;
            break;
        } 
    }
    updateNumber(newNumber);
    if(newNumber > number){
        score++;
        updateScore(score);
        updateHighScore();
        number = newNumber;
        
    } else {
        endGame();
    }
}

function lower(){
    let newNumber;
    while(true){
        let getNewNumber = getNumber();
        if(number != getNewNumber){
            newNumber = getNewNumber;
            break;
        } 
    }
    updateNumber(newNumber);
    if(newNumber < number){
        score++
        updateScore(score);
        updateHighScore();
        number = newNumber;
       
    } else {
        endGame();
    }
}

function playAgain(){
    firstNumber();

    lowerButton.disabled = false;
    higherButton.disabled = false;

    let restartButton = document.querySelector(".playAgain");
    restartButton.style.position = "absolute";
    restartButton.style.visibility = "hidden";

    let higherNumberButton = document.querySelector("#button-higher");
    higherNumberButton.style.backgroundColor = "red";

    let lowerNumberButton = document.querySelector("#button-lower");
    lowerNumberButton.style.backgroundColor = "green";

    score = 0;
    updateScore(score);
}

