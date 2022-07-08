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

function game() {
    console.log('Start game:')
    let computerSelection = ''
    let playerSelection = ''
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}:`)
        computerSelection = computerPlay();
        playerSelection = playerSelect();
        if (playerSelection === 'Cancel') {
            console.log('Game canceled!')
            break
        }
        console.log(`You chose: ${playerSelection}`)
        console.log(`Computer chose: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
     }
    console.log('Game over!')
}

function playerSelect() {
    let playerSelection = 0;
    let playerMove = '';
    let loopDone = false;
    while (loopDone === false) {
        playerInput = prompt('Enter 1 for Rock, 2 for Paper, 3 for Rock: ');
        if (playerInput === null) { //cancel game when cancel pressed. 
            playerMove = 'Cancel'
            break
        }
        playerSelection = parseInt(playerInput);
        if (playerSelection === 1) {
            playerMove = 'Rock';
            loopDone = true;
        } else if (playerSelection === 2) {
            playerMove = 'Paper';
            loopDone = true;
        } else if (playerSelection === 3) {
            playerMove = 'Scissors';
            loopDone = true;
        } else { //make user enter 1, 2, or 3
            console.log('Must enter 1, 2, or 3')
        }
    }
    return playerMove
}

game()