const testArray = [6, 3, 2, 1, 5, 7, 8, 9, 0, 10, 4];

const mergeSort = (array) => {
	const length = array.length;
	const midPoint = length / 2;
	const leftSide = array.splice(0, midPoint);
	if (length < 2) return array;
	const merge = (leftArray, rightArray) => {
		let mergeArray = [];
		while (leftArray.length && rightArray.length) {
			if (leftArray[0] < rightArray[0]) {
				mergeArray.push(leftArray.shift());
			} else mergeArray.push(rightArray.shift());
		}
		return [...mergeArray, ...leftArray, ...rightArray];
	};

	return merge(mergeSort(leftSide), mergeSort(array));
};

mergeSort(testArray);
// Output
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
