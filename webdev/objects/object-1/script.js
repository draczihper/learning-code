/* OBJECT LITERAL
const playerOne = {
    name: 'tim',
    marker: 'X'
};

const playerTwo = {
    name: 'jenn',
    marker: 'O'
};


function printName(player) {
    console.log(player.name);
}

printName(playerTwo);
*/

/* OBJECT CONSTRUCTORS 
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

const player1 = new Player('balmer', 'X');
const player2 = new Player('steve', 'O');
player1.sayName();
player2.sayName();



/*
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R, Tolkien', '295', "not read yet");

console.log(theHobbit.info());
*/


function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        return `The name is ${this.name} with ${this.marker} marker`;
    };
}

const player1 = new Player('Tim', 'X');
const player2 = new Player('Berners', 'O');

console.log(player1.sayName());