class Solution {
	linkdelete(head, M, N) {
		let current = head;
		while (current) {
			let count = 1;
			while (count < M && current) {
				current = current.next;
				count++;
			}
			if (current === null) {
				return;
			}
			let temp = current.next;
			count = 1;
			while (count <= N && temp) {
				temp = temp.next;
				count++;
			}
			current.next = temp;
			current = temp;
		}
		return head;
	}
}