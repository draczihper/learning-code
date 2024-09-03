// Collatz conjecture pseudocode
// if n is 1 stop
// otherwise, is even, repeat this process on n/2
// otherwise, if n is odd, repeat this process on 3n +1

function collatzRecursive(n) {
	if (n == 1) return;
	else if (n % 2 == 0) return 1 + collatzRecursive(n / 2);
	else return 1 + collatzRecursive(3 * n + 1);
}

console.log(collatzRecursive(3));
