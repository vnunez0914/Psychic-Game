//1. WHat will I need to make this game?
//alphabet array for computer to choose random letter
//variable counters for wins, losses, guesses remaining
//on keyup to display keys guessed???

let wins = 0; //will increase +1 when correct letter is chosen
let losses = 0; //will increase by won when 
let guessesRemaining = 9;
let guessedLetter = []

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let compIndex;
let compChoice;

displayGuesses();
setLetter();
//<-----------displays results to html page <span> tags.querySelector() is a method for HTML DOM. getElementById() is another.
function displayGuesses() {
    document.querySelector("#guessesLeft").innerHTML = guessesRemaining;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
}

// <--------computer picks a letter at the start of the game-------->
function setLetter(){
    compIndex = Math.floor(Math.random() * alphabet.length);
    compChoice = alphabet[compIndex];
   console.log("comp choice: " + compChoice);
};
// console.log("comp index " + compIndex);
// console.log("comp choice " + compChoice);
//<---------listens for the letter pressed. if pressed correctly win counter goes up by one---->
document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    //console.log(letter);
    var user = event.key.toLowerCase();
    if(letter === compChoice){
        wins++
        guessesRemaining = 9;
                //console.log("Num of win " + wins);
        setLetter()
 //<-------if player guesses wrong they lose a "life". when 9 is (===) to 0, Loss goes up by +1.       
    } else{
        guessesRemaining--
        displayGuesses()
       // console.log("remaining lives " + guessesRemaining)
        if(guessesRemaining === 0){
            //console.log("You lose")
            losses++
            guessesRemaining = 9;
            setLetter()
        }
    }

} //I think i need a for loop to display in the guessedLetter array that is set up and use .push

