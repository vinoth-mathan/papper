let user=document.getElementById("user")
let computer=document.getElementById("computer")
let resultDisplay=document.getElementById("result")
let possibleChoices=document.querySelectorAll("div button");
let point=document.getElementById("point")
let reset=document.getElementById("reset")

possibleChoices.forEach(possibleChoice=>{
possibleChoice.addEventListener("click",(e)=>{
      console.log(e.target.id)
    let userChoice=e.target.id;
    user.innerHTML=userChoice;
playGame(userChoice);})})
let count=0;
function playGame(playerChoice) {
        const choices = {
          rock: {
            beats: 'scissors',
            losesTo: 'paper'
          },
          paper: {
            beats: 'rock',
            losesTo: 'scissors'
          },
          scissors: {
            beats: 'paper',
            losesTo: 'rock'
          }
        };
        const computerChoices = Object.keys(choices);
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computer.innerHTML=computerChoice;
        const playerWins = choices[playerChoice]?.beats === computerChoice;
        const computerWins = choices[playerChoice]?.losesTo === computerChoice;
            playerWins ? resultDisplay.innerHTML='Player wins!' : computerWins ? resultDisplay.innerHTML='Computer wins!' : resultDisplay.innerHTML= "It's a tie!";
        if(playerWins){
            count++
            point.innerHTML=`Your Score : ${count}`;
        }
      }
reset.addEventListener('click',()=>{
      computer.innerHTML=''
      user.innerHTML=''
      resultDisplay.innerHTML=""
      point.innerHTML="Your Score: 0"
      count=0;
})

     