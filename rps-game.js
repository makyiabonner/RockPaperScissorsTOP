//turning rock, paper, scissors logos to buttons for each choice
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const h3 = document.getElementsByTagName("h3")

let cpuWinCount = 0
let p1WinCount = 0
let i = 0
// establishing players and creating the functionality of the game
function rps(p1,cpu){
    //Create the gameplay choices for rock paper scissors
    let choices = ["rock","paper","scissors"]
    cpu = choices.at(Math.floor(Math.random()*3));
  
    //round count and rules
    i++
    console.log(i)

            if(p1 === cpu){}
            else if(p1 =="rock" && cpu =="scissors" || p1 =="paper" && cpu=="rock" || p1=="scissors" && cpu=="paper"){
                p1WinCount++;
            }
            else if(p1 =="scissors" && cpu =="rock" || p1=="rock" && cpu =="paper" || p1=="paper" && cpu=="scissors"){
                cpuWinCount++;
            }
               console.log(`${p1WinCount}:${cpuWinCount}`)
        }
        // giving buttons choices
         rock.addEventListener('click', () =>{
            rps("rock");})
         paper.addEventListener('click', () =>{
            rps("paper");})
         scissors.addEventListener('click', () =>{
            rps("scissors");})
           
            if(p1WinCount > cpuWinCount){
                console.log("you win")
            }
            else if(p1WinCount < cpuWinCount){
                console.log("you lose")
            }
            else{console.log("tie game")}    
        
    