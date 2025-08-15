// let humanSelection;
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

// declare variables(and initialize to 0) to keep track of the players score.
    // let computerScore = 0;
    // let humanScore = 0;

    // variables to store the values of the functions in the first round 
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice(); 

    let humanSelection;

    rock.addEventListener('click', () => {
      let humanSelection = 'rock';
      // calling the function to play the first round
    playRound(humanSelection, getComputerChoice());
    scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
    });
    paper.addEventListener('click', () => {
     let  humanSelection = 'paper';
       // calling the function to play the first round
    playRound(humanSelection, getComputerChoice());
     scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
    });
    scissors.addEventListener('click', () => {
     let  humanSelection = "scissors";
       // calling the function to play the first round
    playRound(humanSelection, getComputerChoice());
     scoreDiv.textContent = "Your score = " + humanScore + " computer = "+ computerScore;
});



// A function that takes user choice and returns it
// function getHumanChoice(){
//     // let userInput = prompt("ROCK, PAPER OR SCISSORS?");
//     // let inputCase = userInput.toLowerCase();
//     // if (inputCase === 'rock'){
//     //     return 'rock';
//     // }else if (inputCase === 'paper'){
//     //     return 'paper';
//     // }else if(inputCase === 'scissors'){
//     //     return 'scissors';
//     // }else{
//     //     return "Invalid!";
//     // }
    
    

    
    
//     // //  logging the final score after the 5th(last) round 
//     //     if(humanScore > computerScore){
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You won!`);
//     //     }else if(humanScore < computerScore){
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You lost!`)
//     //     }else{
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}`); 
//     //     console.log("It's a tie. No victor no vanquished!");
//     //     }
//     }

//  logging the final score after the 5th(last) round 
//     if(humanScore > computerScore){
//         console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You won!`);
//     }else if(humanScore < computerScore){
//         console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You lost!`)
//     }else{
//         console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}`); 
//         console.log("It's a tie. No victor no vanquished!");
//     }





    
// function playGame(){
//     // declare variables(and initialize to 0) to keep track of the players score.
//     // let computerScore = 0;
//     // let humanScore = 0;
   
// // function that takes the human and computer player choices as arguments, plays a 
// // single round, increments the round winner’s score and logs a winner announcement.
//     // function playRound(humanChoice, computerChoice) {
//     //     if (humanChoice === 'rock' && computerChoice === 'paper'){
//     //         ++computerScore;
//     //         return 'Paper beats Rock, You lose!' ;
//     //     }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
//     //         ++computerScore;
//     //         return 'Scissors slices through paper, You lose! ';
//     //     }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
//     //         ++computerScore;
//     //     return 'Rock beats scissors, You lose! ';
//     //     }else if(humanChoice === 'paper' && computerChoice === 'rock'){
//     //         ++humanScore;
//     //         return"Paper beats rock, you win! ";
//     //     }else if (humanChoice === 'rock' && computerChoice === 'scissors'){
//     //         ++humanScore;
//     //         return 'Rock beats scissors, you win! ';
//     //     }else if( humanChoice === 'scissors' && computerChoice === 'paper'){
//     //         ++humanScore;
//     //         return 'Scissors slices through paper, you win!';
//     //     }else if(humanChoice === 'paper' && computerChoice === 'paper') {
//     //         return "It's a tie";
//     //     }else if(humanChoice === 'rock' && computerChoice === 'rock') {
//     //     return "It's a tie" ;
//     //     }else if(humanChoice === 'scissors' && computerChoice === 'scissors') {
//     //         return "It's a tie";
//     //     }
//     //     else{
//     //         return 'Invalid!';
//     //     }
//     // }
//     // // // calling the function to play the first round
//     // console.log(playRound(humanSelection, computerSelection));
//     // console.log("Your score = " + humanScore );
//     // console.log("computer = "+ computerScore);
//     // console.log('')
//     // // calling the function again (for the second time) to get a new choice
//     // console.log(playRound(getHumanChoice(), getComputerChoice()));
//     //  console.log("Your score = " + humanScore );
//     // console.log("computer = "+ computerScore);
//     // console.log('')
//     // // calling the function for the third time to get the third choice
//     // console.log(playRound(getHumanChoice(), getComputerChoice()));
//     //  console.log("Your score = " + humanScore );
//     // console.log("computer = "+ computerScore);
//     // console.log('')
//     // // calling the function for the fourth time to get the 4th choice
//     // console.log(playRound(getHumanChoice(), getComputerChoice()));
//     //  console.log("Your score = " + humanScore );
//     // console.log("computer = "+ computerScore);
//     // console.log('')
//     // // calling the function for the fifth time to get the 5th choice
//     // console.log(playRound(getHumanChoice(), getComputerChoice()));
//     //  console.log("Your score = " + humanScore );
//     // console.log("computer = "+ computerScore);
//     // console.log('')

    
//     // // logging the final score after the 5th(last) round 
//     // if(humanScore > computerScore){
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You won!`);
//     // }else if(humanScore < computerScore){
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}. You lost!`)
//     // }else{
//     //     console.log(`Final score; You = ${humanScore}: Computer = ${computerScore}`); 
//     //     console.log("It's a tie. No victor no vanquished!");
//     // }
// }
// playGame()
   