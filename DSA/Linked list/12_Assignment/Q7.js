class Solution {
	merge(head1, head2) {
		let current1 = head1;
		let current2 = head2;
		while (current1 && current2) {
			let temp1 = current1.next;
			let temp2 = current2.next;
			current1.next = current2;
			current2.next = temp1;
			current1 = temp1;
			current2 = temp2;
		}
		return head1;
	}
}