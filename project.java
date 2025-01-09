Each of us will have two games options to start coding according that we already learnt with Tarek and Davor (please do not invent the wheel again. Work with the knowledge we have). 
Once we are done we unifu everything!
 
So far, here is the main instruction, the spine of everything:
 
// GAME RULES:
 
let humanChoice = "paper";
let computerChoice = "rock";
 
function compareChoices(humanChoice, computerChoice) {
    // scissors cut paper,
    if ((humanChoice === "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")) {
        if (humanChoice == "scissors") {
            console.log("scissors cut paper, You win!");
        } else {
            console.log("scissors cut paper, Computer wins!");
        }


 
