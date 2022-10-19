//turning rock, paper, scissors logos to buttons for each choice
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const score = document.getElementById("score")

let cpuWinCount = 0
let p1WinCount = 0


// establishing players and creating the functionality of the game

 //Create the gameplay choices for rock paper scissors
 let choices = ["rock","paper","scissors"]

function rps(p1,cpu){
    cpu = choices.at(Math.floor(Math.random()*3));
    if(p1 === cpu){}
    else if(p1 =="rock" && cpu =="scissors" || p1 =="paper" && cpu=="rock" || p1=="scissors" && cpu=="paper"){
      p1WinCount++;
    }
    else if(p1 =="scissors" && cpu =="rock" || p1=="rock" && cpu =="paper" || p1=="paper" && cpu=="scissors"){
         cpuWinCount++;
    }
    score.textContent = p1WinCount + "|" + cpuWinCount;
    if(p1WinCount === 5 && p1WinCount > cpuWinCount){
        score.textContent = "you win";
    }
    else if(cpuWinCount === 5 && p1WinCount < cpuWinCount){
        score.textContent = "you lose";
        }
        return score.textContent;
    }    

    
    //round count and rules
        
               
           
        
// giving buttons choices
         rock.addEventListener('click', () =>{
            rps("rock");})
         paper.addEventListener('click', () =>{
            rps("paper");})
         scissors.addEventListener('click', () =>{
            rps("scissors");})
          
    