function stringToNumber(string) {
	let hashCode = 0
	for(let i = 0; i < string.length; i++) {
		hashCode += string.charCodeAt(i);
		console.log(string.charCodeAt(i), string.charAt(i));
	}
	return hashCode;
}

function hash(name, surname) {
	return stringToNumber(name) + stringToNumber(surname);
}

console.log(hash("Fred", ""));