let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    Object.getPrototypeOf(rabbit): animal // Doesn't work until the deprecated __proto__
};