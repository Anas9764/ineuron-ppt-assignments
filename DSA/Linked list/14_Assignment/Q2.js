class Solution {
	addOne(head) {
		let curr = head;
		let prev = null;
		let next = null;
		let carry = 1;
		while (curr) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		head = prev;
		curr = head;
		while (curr) {
			let sum = curr.data + carry;
			carry = sum >= 10 ? 1 : 0;
			curr.data = sum % 10;
			if (curr.next === null && carry === 1) {
				curr.next = new Node(1);
				break;
			}
			curr = curr.next;
		}
		prev = null;
		curr = head;
		next = null;
		while (curr) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		head = prev;
		return head;
	}
}