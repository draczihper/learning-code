function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};

let blackRabbit = new Rabbit("black")

console.log(String(blackRabbit));