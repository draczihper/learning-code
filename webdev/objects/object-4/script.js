// Example of a prototyping code with a benchmark using console.time
function proto() {
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2, 
    __proto__: table

  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  console.log(head.glasses);

  let sum = 0;
  for(let i = 0; i < 1000000; i++) {
    sum += i;
  }
}

console.time("proto");
proto();
console.timeEnd("proto");