var Letter = require("./letter");

//constructor that represents current word the user is guessing
var Word = function(word){

    //initializing foundWord to false to start
    this.foundWord = false;

    //so we can access functions within functions in below object
    var that = this;
    //
    this.word = word;

    //array to hold guessed letters
    this.letters = [];

    //adding guessed letters to letters array
    this.getLetters = function(){
        for(var i = 0; i < that.word.length; i++){
            this.letters.push()
        }
    };
    this.getWords = function(){

    };
};

module.exports = Word;