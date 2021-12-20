const Point = require('./point.js');

class Field {
    constructor(field) {
        this._field = field;
        this._posPlayer = new Point();
    }

    get field() {
        return this._field;
    }

    get posPlayer(){
        return this._posPlayer;
    }

    updatePlayerPos() {
        this._field[this._posPlayer.y][this._posPlayer.x] = '*';
    }

    print() {
        let rowsArray = [];

        for(let row of this._field){
            rowsArray.push(row.join(''));
        }

        console.log(rowsArray.join('\n'));
    }

    getChar(currY, currX) {
        let charPos = '';

        for(let y = 0; y < this._field.length; y++) {
            for(let x = 0; x < this._field[y].length; x++) {
                if(y === currY && x === currX) {
                    charPos = this._field[y][x];
                }
            }
        }

        

        return charPos;
    }
    
}

module.exports = Field;