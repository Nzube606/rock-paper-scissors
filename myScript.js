    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const outcome = document.querySelector('p');

    const scoreDiv = document.createElement("div");
    const body = document.querySelector('body');
    body.appendChild(scoreDiv);

    const finalScore = document.createElement('div');
    body.appendChild(finalScore);

    // declare variables(and initialize to 0) to keep track of the players score.
    let computerScore = 0;
    let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    // To make the function play until the player or the computer wins five times
   if(humanScore < 5 && computerScore < 5){ 
        if (humanChoice === 'rock' && computerChoice === 'paper'){
            ++computerScore;
            outcome.textContent = 'Paper beats Rock, You lose!' ;
        }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
            ++computerScore;
           outcome.textContent = 'Scissors slices through paper, You lose! ';
        }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
            ++computerScore;
        outcome.textContent = 'Rock beats scissors, You lose! ';
        }else if(humanChoice === 'paper' && computerChoice === 'rock'){
            ++humanScore;
           outcome.textContent = "Paper beats rock, you win! ";
        }else if (humanChoice === 'rock' && computerChoice === 'scissors'){
            ++humanScore;
           outcome.textContent = 'Rock beats scissors, you win! ';
        }else if( humanChoice === 'scissors' && computerChoice === 'paper'){
            ++humanScore;
           outcome.textContent = 'Scissors slices through paper, you win!';
        }else if(humanChoice === 'paper' && computerChoice === 'paper') {
            outcome.textContent = "It's a tie";
        }else if(humanChoice === 'rock' && computerChoice === 'rock') {
           outcome.textContent = "It's a tie" ;
        }else if(humanChoice === 'scissors' && computerChoice === 'scissors') {
           outcome.textContent = "It's a tie";
        }
        else{
           outcome.textContent = 'Invalid!';
        }
    }
    else{
        outcome.textContent = " Refresh to play again";
    }
    // To display the result after the player or computer wins five times
    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            finalScore.textContent =`You won! Refresh to play again `;
            }
            else if(humanScore < computerScore){
            finalScore.textContent = `You lost! Refresh to play again`;
            }
        }
    }
        

// A function that randomly returns "rock", "paper", or "scissors" using math.random() method
 
function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.4) {
        return "rock";
    } else if ( randomNum > 0.6 ) {
        return "paper";
    } else {
        return "scissors";
    }
}

    let humanSelection;

    rock.addEventListener('click', () => {
      let humanSelection = 'rock';
      // calling the function to play the game
    playRound(humanSelection, getComputerChoice());
    scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
    });
    paper.addEventListener('click', () => {
     let  humanSelection = 'paper';
       // calling the function to play the game
    playRound(humanSelection, getComputerChoice());
     scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
    });
    scissors.addEventListener('click', () => {
     let  humanSelection = "scissors";
       // calling the function to play the game
    playRound(humanSelection, getComputerChoice());
     scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
});
