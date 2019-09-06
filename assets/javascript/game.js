//1. WHat will I need to make this game?
//alphabet array for computer to choose random letter
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compIndex;
var compChoice;

displayGuesses();
setLetter();

function displayGuesses() {
    document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
    
}
function setLetter(){
    compIndex = Math.floor(Math.random() * alphabet.length);
    compChoice = alphabet[compIndex];
    console.log("comp choice " + compChoice);

}
document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
// console.log("comp index " + compIndex);
// console.log("comp choice " + compChoice);

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    //console.log(letter);
    if(letter === compChoice){
        wins++
        guessesRemaining = 9;
        console.log("Num win " + wins);
        setLetter()
    } else{
        guessesRemaining--
        displayGuesses()
        console.log("remaining lives " + guessesRemaining)
        if(guessesRemaining === 0){
            console.log("You lose")
            losses++
            guessesRemaining = 9;
            setLetter()
        }
    }
}