//constructor function that displays "_" or user guessed character based on what the user inputs.

var Letter = function(char){
    var that = this;
    this.char = char;
    this.displayLetter = false;
    this.showLetter = function(){
        if(that.displayLetter === that.char){
            return that.char;
        }else if(that.displayLetter !== that.char){
            return "_";
        }
    }
};
console.log(Letter);
module.exports = Letter;