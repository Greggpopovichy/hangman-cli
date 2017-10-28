var Letter = require("./letter");

//constructor that represents current word the user is guessing
//WIP, ran out of time to finish unfortunately.

var Word = function(word){

    //initializing foundWord to false to start
    this.foundWord = false;

    //so we can access functions within functions in below object
    var that = this;

    //array to hold guessed letters
    this.letters = [];

    //adding guessed letters to letters array
    this.getLetters = function(){
        for(var i = 0; i < that.char.length; i++){
            var newLetter = new Letter(that.char[i]);
            that.letters.push(newLetter);
        }
    };
};

module.exports = Word;