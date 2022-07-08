function computerPlay() {
    let randomNum = Math.random();

    if (randomNum >= 0.66) {
        return 'Rock';
    } else if (randomNum >= 0.33) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerMove = capitalize(playerSelection);
    let computerMove = capitalize(computerSelection);
    
    if (playerMove === computerMove) {
        return 'Tie!';
    } else if (playerMove === 'Rock' && computerMove === 'Paper'){
        return 'You lose! Paper beats rock!';
    } else if (playerMove === 'Rock' && computerMove === 'Scissors'){
        return 'You win! Rock beats scissors!';
    } else if (playerMove === 'Paper' && computerMove === 'Scissors'){
        return 'You lose! Scissors beats rock!';
    } else if (playerMove === 'Paper' && computerMove === 'Rock'){
        return 'You win! Paper beats rock';
    } else if (playerMove === 'Scissors' && computerMove === 'Rock'){
        return 'You lose! Rock beats scissors!';
    } else if (playerMove === 'Scissors' && computerMove === 'Paper'){
        return 'You win! Scissors beats paper!';
    } else {
        return 'Something went wrong!'
    }
}

function capitalize(str) {
    // str = str.toLowerCase;
    let firstLetter = str.substr(0,1);
    firstLetter = firstLetter.toUpperCase();
    restOfStr = str.substr(1).toLowerCase();
    return (firstLetter + restOfStr);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));