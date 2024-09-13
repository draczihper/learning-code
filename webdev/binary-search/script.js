// Binary search algorithm

const binarySearch = (arr, target) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === target) {
			return `Found the target ${target} at index ${pivot}`;
		} else if (arr[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return false;


	
};
