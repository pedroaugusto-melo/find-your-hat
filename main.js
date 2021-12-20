const prompt = require('./node_modules/prompt-sync')();
const Field = require('./my_modules/field.js');
const generateMap = require('./my_modules/map.js').generateMap;

const handleInput = ipt => {
    ipt = ipt.toLowerCase().trim();
    let charFutPos = '';

    switch(ipt) {
        case 'u':
            charFutPos = myField.getChar(myField.posPlayer.y - 1, myField.posPlayer.x);
            
            if(charFutPos === '░') {
                myField.posPlayer.y--;
                return;
            }

            break;
        case 'd':
            charFutPos = myField.getChar(myField.posPlayer.y + 1, myField.posPlayer.x);
            
            if(charFutPos === '░') {
                myField.posPlayer.y++;
                return;
            }

            break;
        case 'l':
            charFutPos = myField.getChar(myField.posPlayer.y, myField.posPlayer.x - 1);

            if(charFutPos === '░') {
                myField.posPlayer.x--;
                return;
            }

            break;
        case 'r':
            charFutPos = myField.getChar(myField.posPlayer.y, myField.posPlayer.x + 1);

            if(charFutPos === '░') {
                myField.posPlayer.x++;
                return;
            }

            break;
        case 'q':
            return;
        default:
            console.log('Invalid comand!');
            return;
    }

    if(charFutPos === 'O') {
        console.log('You lost! You fall down in a hole!');
    } else if(charFutPos === '^') {
        console.log('You win! You found your hat!');
    } else if (charFutPos === ''){
        console.log('You lost! You got out of the map!');
    } else return;

    way = 'q';
}

const mapW = prompt('What is the map width? ');
const mapH = prompt('What is the map height? ');
const perHoles = prompt('What is the percentage of holes in the map? ');

const myField = new Field(generateMap(mapW, mapH, perHoles));
let way;

do {
    myField.updatePlayerPos();
    myField.print();
    way = prompt('Which way? ');
    handleInput(way);
    console.log('\n');
} while(way != 'q');