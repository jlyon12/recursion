// Fibonacci sequence by iteration
const fibs = (n) => {
	let fibs = [0, 1];

	for (let i = fibs.length; i < n; i++) {
		fibs[i] = fibs[i - 1] + fibs[i - 2];
	}
	return fibs;
};

fibs(8);
// Output : [ 0, 1, 1, 2, 3, 5, 8, 13 ]
