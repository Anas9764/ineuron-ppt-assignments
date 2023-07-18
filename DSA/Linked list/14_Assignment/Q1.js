class Solution {
	removeLoop(head) {
		let slow = head;
		let fast = head;
		let loop = false;
		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) {
				loop = true;
				break;
			}
		}
		if (loop) {
			slow = head;
			if (slow === fast) {
				while (fast.next !== slow) {
					fast = fast.next;
				}
			} else {
				while (slow.next !== fast.next) {
					slow = slow.next;
					fast = fast.next;
				}
			}
			fast.next = null;
		}
	}
}