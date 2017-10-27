//constructor function that displays "_" or user guessed character

var Letter = function(char){
    this.char = char;
    this.displayLetter = false;
    this.showLetter = function(){
        if(this.displayLetter === this.char){
            return this.char;
        }else if(this.displayLetter !== this.char){
            return "_";
        }
    }
};

module.exports = Letter;