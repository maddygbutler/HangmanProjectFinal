var word= "";

var words= ["dog", "bunny", "cat", "goldfish", "bird"];

var guesses=5;

var guessedLetters= [];



function startGame(){
    document.getElementById("result").innerHTML="";
    document.getElementById("guessedLetter").innerHTML="";

    document.getElementById("guessedLetters").innerHTML="";
    document.getElementById("guesses").innerHTML = "";

    guessedLetters=[];
    word=[];


    word = words[Math.floor(Math.random()* words.length)];
    console.log(word);


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
    var end= document.getElementById("result");
    if(answer.indexOf("_")== -1){
        end.innerHTML= "You Win!"
    }

}

function guessLetter(){
    var letter = document.getElementById("guessedLetter").value;

    guessedLetters.push(letter);

    printWord();

    document.getElementById("guessedLetters").innerHTML= guessedLetters;

    if(word.indexOf(letter)== -1){
        guesses = (guesses-1);
    }
    var end= document.getElementById("result");
    if(guesses==0){
        end.innerHTML="You Loose!"
    }
    document.getElementById("guesses").innerHTML= guesses;
    console.log(word);
    console.log(guesses);
}





