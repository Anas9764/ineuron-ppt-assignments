class Solution {
	getNthFromLast(head, n) {
		let slow = head;
		let fast = head;
		let count = 0;
		while (count < n) {
			if (fast === null) {
				return -1;
			}
			fast = fast.next;
			count++;
		}
		while (fast) {
			slow = slow.next;
			fast = fast.next;
		}
		return slow.data;
	}
}