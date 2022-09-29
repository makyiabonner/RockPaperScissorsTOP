// establishing players and creating the functionality of the game
function rps(p1,cpu){
   
    //Create the gameplay choices for rock paper scissors
let choices = ["rock","paper","scissors"]
cpu = choices.at(Math.floor(Math.random()*3));
  
    //round count and rules
    for(let i =1;i<=5;i++){
    console.log(`Round ${i}`)
    let cpuWinCount = 0
    let p1WinCount = 0
    switch (prompt() + cpu){
        case "paperrock": "paperrock"
        case "rockscissors": "rockscissors"
        case "scissorspaper": "scissorspaper"
        p1WinCount++
        
            console.log(`User Wins ${p1WinCount}:${cpuWinCount}`);
            break;
        case "rockpaper": "rockpaper"
        case "scissorsrock": "scissorsrock"
        case "paperscissors": "paperscissors"
        cpuWinCount++
            console.log(`Computer Wins ${p1WinCount}:${cpuWinCount}`);
            break;
        case "rockrock": "rockrock"
        case "paperpaper": "paperpaper"
        case "scissorsscissors": "scissorsscissors"
            console.log(`TIE!! ${p1WinCount}:${cpuWinCount}`);
            break;

    }
    }
}
rps()
