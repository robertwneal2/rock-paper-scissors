function computerPlay() {
    let randomNum = Math.random()

    if (randomNum >= 0.66) {
        return 'Rock'
    } else if (randomNum >= 0.33) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    let playerMove = capitalize(playerSelection)
    let computerMove = capitalize(computerSelection)
    let result = ''
    let winner = 'tie'
    let output = {}
    
    if (playerMove === computerMove) {
        result = `Tie! (${playerMove})`
        winner = 'tie'
    } else if (playerMove === 'Rock' && computerMove === 'Paper'){
        result = 'You lose! Paper beats rock!'
        winner = 'computer'
    } else if (playerMove === 'Rock' && computerMove === 'Scissors'){
        result = 'You win! Rock beats scissors!'
        winner = 'player'
    } else if (playerMove === 'Paper' && computerMove === 'Scissors'){
        result = 'You lose! Scissors beats rock!'
        winner = 'computer'
    } else if (playerMove === 'Paper' && computerMove === 'Rock'){
        result = 'You win! Paper beats rock'
        winner = 'player'
    } else if (playerMove === 'Scissors' && computerMove === 'Rock'){
        result = 'You lose! Rock beats scissors!'
        winner = 'computer'
    } else if (playerMove === 'Scissors' && computerMove === 'Paper'){
        result = 'You win! Scissors beats paper!'
        winner = 'player'
    } else {
        result = 'Something went wrong!'
        winner = 'Something went wrong'
    }
    output.result = result
    output.winner = winner
    return output
}

function capitalize(str) {
    let firstLetter = str.substr(0,1)
    firstLetter = firstLetter.toUpperCase()
    restOfStr = str.substr(1).toLowerCase()
    return (firstLetter + restOfStr)
}

function game() {
    console.log('Start game:')
    let computerSelection = ''
    let playerSelection = ''
    console.log(`Round ${i+1}:`)
    computerSelection = computerPlay()
    playerSelection = playerSelect()
    if (playerSelection === 'Cancel') {
        console.log('Game canceled!')
        // break
    }
    console.log(`You chose: ${playerSelection}`)
    console.log(`Computer chose: ${computerSelection}`)
    console.log(playRound(playerSelection, computerSelection))
    console.log('Game over!')
}

function playerSelect() {
    let playerSelection = 0
    let playerMove = ''
    let loopDone = false
    while (loopDone === false) {
        playerInput = prompt('Enter 1 for Rock, 2 for Paper, 3 for Rock: ')
        if (playerInput === null) { //cancel game when cancel pressed. 
            playerMove = 'Cancel'
            break
        }
        playerSelection = parseInt(playerInput)
        if (playerSelection === 1) {
            playerMove = 'Rock'
            loopDone = true
        } else if (playerSelection === 2) {
            playerMove = 'Paper'
            loopDone = true
        } else if (playerSelection === 3) {
            playerMove = 'Scissors'
            loopDone = true
        } else { //make user enter 1, 2, or 3
            console.log('Must enter 1, 2, or 3')
        }
    }
    return playerMove
}

function outputResults(resultHash) {
    currentRound = document.querySelector("#round").textContent  
    newRound = parseInt(currentRound) + 1
    document.querySelector("#round").textContent  = newRound
    
    document.querySelector("#result").textContent  = resultHash.result

    winner = resultHash.winner
    if (winner === 'player') {
        currentPlayerScore = document.querySelector("#playerScore").textContent  
        newPlayerScore = parseInt(currentPlayerScore) + 1
        document.querySelector("#playerScore").textContent  = newPlayerScore
        if (newPlayerScore === 5) {
            alert('You win!')
        }
    } else if (winner === 'computer') {
        currentComputerScore = document.querySelector("#computerScore").textContent  
        newComputerScore = parseInt(currentComputerScore) + 1
        document.querySelector("#computerScore").textContent = newComputerScore
        if (newComputerScore === 5) {
            alert('You lose!')
        }
    } else {
        currentTies = document.querySelector("#ties").textContent  
        newTies = parseInt(currentTies) + 1
        document.querySelector("#ties").textContent  = newTies
    }
}

function removeEvents() {
    buttons = document.querySelectorAll('button')
    buttons.forEach(button => button.removeEventListener('click', play, true))
}
let currentPlayerScore = document.querySelector("#playerScore").textContent 
let currentComputerScore = document.querySelector("#computerScore").textContent  
buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', play => {
    currentPlayerScore = parseInt(document.querySelector("#playerScore").textContent )
    currentComputerScore = parseInt(document.querySelector("#computerScore").textContent )
    if (currentPlayerScore < 5 && currentComputerScore < 5) { //does not run if player or computer got 5 wins
        result = playRound(button.id, computerPlay())
        outputResults(result)
    }
}))