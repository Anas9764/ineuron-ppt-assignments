var findPeakElement = function (nums) {
	let size = nums.length;
	let left = 0;
	let mid = 0;
	let right = size - 1;
	while (left < right) {
		mid = Math.floor((left + right) / 2);
		if (nums[mid] > nums[mid + 1]) right = mid;
		else left = mid + 1;
	}
	return left;
};