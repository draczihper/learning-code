// ES5 ANIMAL CONSTRUCTOR
function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
    
    // let animal = Object.create(Animal.prototype);
    // animal.name = name;
    // animal.energy = energy;

    // return animal;
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
}

// With using the new keyword, you save yourself from using Object.create and returning the object as it does that for you.
const leo = new Animal('Leo', 7);


// ES6
class Animal {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    ea(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
    }
    play() {
        console.log(`${this.name} is playing.`);
        this.energy -= length;
    }
}

const leo = new Animal('Leo', 7);

// For a specific instance of an animal we need to recreate the ES5 syntax like
// You will need to create all this for every animal (Camel, Cat, Weasel) you have
function Dog (name, energy, breed) {
    this.name = name;
    this.energy = energy;
    this.breed = breed;
}

Dog.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
}

Dog.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
}

Dog.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
}

Dog.prototype.bark = function () {
    console.log(`Woof-Woof!`);
    this.energy -= .1;
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle');


// Since that is tediou, wasteful and memory resourceful
function Dog(name, energy, breed) {
    Animal.call(this, name, energy)

    this.breed = breed;
}

// And then call the instance like
const charlie = new Dog('Charlie', 10, 'Goldendoodle');
