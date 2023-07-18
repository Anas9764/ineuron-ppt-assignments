class Solution {
	flatten(root) {
		if (root === null || root.next === null) {
			return root;
		}
		root.next = this.flatten(root.next);
		root = this.merge(root, root.next);
		return root;
	}
	merge(a, b) {
		if (a === null) {
			return b;
		}
		if (b === null) {
			return a;
		}
		let result;
		if (a.data < b.data) {
			result = a;
			result.bottom = this.merge(a.bottom, b);
		} else {
			result = b;
			result.bottom = this.merge(a, b.bottom);
		}
		result.next = null;
		return result;
	}
}