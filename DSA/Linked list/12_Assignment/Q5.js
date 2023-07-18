class Solution {
	removeLoop(head) {
		let slow = head;
		let fast = head;
		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;
			if (slow === fast) {
				break;
			}
		}
		if (slow !== fast) {
			return;
		}
		slow = head;
		while (slow.next !== fast.next) {
			slow = slow.next;
			fast = fast.next;
		}
		fast.next = null;
	}
}