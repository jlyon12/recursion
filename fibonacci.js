// Fibonacci sequence by iteration
const fibs = (n) => {
	let seq = [0, 1];

	for (let i = seq.length; i < n; i++) {
		seq[i] = seq[i - 1] + seq[i - 2];
	}
	return seq;
};

fibs(8);
// Output : [ 0, 1, 1, 2, 3, 5, 8, 13 ]

const fibsRec = (n, seq = [0, 1]) => {
	let currentSequence = seq.length;
	if (currentSequence >= n) return seq;
	return fibsRec(n, [
		...seq,
		seq[currentSequence - 1] + seq[currentSequence - 2],
	]);
};
fibsRec(8);
// Output : [ 0, 1, 1, 2, 3, 5, 8, 13 ]
