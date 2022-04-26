let playerChoice = userInput => {


    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('pplease type: rock, paper or scissors ');
    }
}

let ComputerPlay = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';


    }



};

const determineWinner = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return 'its a draw!'
    }
    if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return 'Sorry, computer won!'
        } else{
            return 'congratulations, you won!'
        }

    }

    if (playerSelection === 'paper')
        if (computerSelection === 'scissors'){
            return 'sorry, computer won!'
        }else {
            return 'congratulations, you won!'
        }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return 'sorry, computer won!'
        }else {
            return 'congratulations, you won!'
        }
    }


};









/*function computerPlay(){
   const randomNumber= math.floor(math.random() *3 + 1) 
    console.log(randomNumber)
   
}//

function ComputerSelection(){
    if (randomNumber===1){
    computerPlay="Rock"
     }
    if (randomNumber===2){
    computerPlay="paper"
    }
    if (randomNumber===3){
    computerPlay="scissors"
    }
}

function playGame(playerSelection, ComputerSelection){
  if (ComputerSelection===playerSelection)
   

 

}*/