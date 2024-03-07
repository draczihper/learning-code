/*
const obj = {
	name: "My Object",
	outerMethod: function() {
		console.log(this.name === "My Object");

		function innerFunction() {
			console.log(this.name);
		}
		innerFunction.call(this);
	}
};

obj.outerMethod();
*/


/*
const myObject = {
	name: "My Object",
	myMethod: function() {
		return console.log(this.name);
	}
};

myObject.myMethod();
*/


/*
const calc = {
	num: 0,
	increment() {
		console.log(this === calc);
		this.num += 1;
		return this.num;
	}
};


calc.increment();
calc.increment();
*/

/*
 const rabbit = { name: 'White Rabbit' };

function concatName(string) {
  console.log(this === rabbit); // => true
  return string + this.name;
}

// Indirect invocations
concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'
concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'
*/


/*
const hello = (name) => {
	return 'Hello ' + name;
}

console.log(hello('World'));
*/

// FILTER EVEN NUMBERS
[1, 2, 5, 6, 9].filter(item => item % 2 === 0);