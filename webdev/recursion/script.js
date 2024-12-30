// RECURSIVE EXERCISES

// Sum all number from 1 to n
function sumRange(num) {
	if (num == 1) return 1;
	else return num + sumRange(num - 1);
}
// console.log(sumRange(3)); //6

// Power of a number (base, exponent)
function power(base, exp) {
	if (exp == 0) return 1;
	else return base * power(base, exp - 1);
}
// console.log(power(2, 4)); //16

function factorial(num) {
	if (num == 1) return 1;
	else return num * factorial(num - 1);
}
// console.log(factorial(5)); //120

// Check whether the array meets criteria in callback
function all(array, callback) {
	var copy = copy || array.slice(); //Perform a shallow copy

	if (copy.length === 0) return true;

	if (callback(copy[0])) {
		copy.shift();
		return all(copy, callback);
	} else {
		return false;
	}
}

var areAllLessThanSeven = all([1, 2, 3], function (num) {
	return num < 7;
});
// console.log(areAllLessThanSeven); //true

// Find product of all number in array
function arrayProduct(array) {
	if (array.length === 0) return 1;

	return array.shift() * arrayProduct(array);
}
// console.log(arrayProduct([1, 2, 3])); //6

function contains(obj, val) {
	for (var key in obj) {
		if (typeof obj[key] === "object") {
			return contains(obj[key], val);
		}

		if (obj[key] === val) {
			return true;
		}
	}
	return false;
}

var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};
// let hasIt = console.log(contains(nestedObject, 44)); // true

// ALTERNATELY
function effectiveContains(obj, val) {
	if (typeof obj !== "object" || obj === null) {
		return object === val;
	}

	for (const value of Object.value(obj)) {
		if (contains(value, val)) return true;
	}

	return false;
}
// let hasIt = console.log(contains(nestedObject, 44)); // true

function totalIntegers(array) {
	if (array.length == 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)) {
		total += totalIntegers(first);
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return (total += totalIntegers(array));
}
var seven = console.log(
	totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]),
); // 7
