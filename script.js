var word= "";

var words= ["dog", "bunny", "cat", "goldfish", "bird"];

var guesses=5;

var guessedLetters= [];



function startGame(){
    word = words[Math.floor(Math.random()* words.length)];
    console.log(word);

    document.getElementById("guessedLetters").innerHTML="";
    document.getElementById("guesses").innerHTML = "";



    printWord();


}

//fine!
function printWord(){
    var answer = "";
    for(var i=0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            answer += word[i];
        }else{
            answer += " _ ";
        }
    }
    document.getElementById("guess").innerHTML  = answer;

}

function guessLetter(){
    var letter = document.getElementById("guessedLetter").value;

    guessedLetters.push(letter);

    printWord();

    document.getElementById("guessedLetters").innerHTML= guessedLetters;

    document.getElementById("guesses").innerHTML= guesses;
    //track guesses and tell user

    //did they win/lose

    //display images?

    //start a new game


}




