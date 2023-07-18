class Solution {
	copyList(head) {
		let curr = head;
		let next = null;
		while (curr) {
			next = curr.next;
			curr.next = new Node(curr.data);
			curr.next.next = next;
			curr = next;
		}
		curr = head;
		while (curr) {
			if (curr.next) {
				curr.next.arb = curr.arb ? curr.arb.next : curr.arb;
			}
			curr = curr.next ? curr.next.next : curr.next;
		}
		let original = head;
		let copy = head.next;
		let temp = copy;
		while (original && copy) {
			original.next = original.next ? original.next.next : original.next;
			copy.next = copy.next ? copy.next.next : copy.next;
			original = original.next;
			copy = copy.next;
		}
		return temp;
	}
}