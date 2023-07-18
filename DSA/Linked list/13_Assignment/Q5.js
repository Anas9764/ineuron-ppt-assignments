class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

{
	let temp = head;
	let prt = null;
	while (temp != null) {
		if (temp.data == x) ptr = temp;
		temp = temp.next;
	}

	if (ptr != null && ptr.next == null) {
		temp = head;
		while (temp.next != ptr) {
			temp = temp.next;
		}
		temp.next = null;
	}

	if (ptr != null && ptr.next != null) {
		ptr.data = ptr.next.data;
		temp = ptr.next;
		ptr.next = ptr.next.next;
	}
	return head;
}

function display(head) {
	let temp = head;
	if (head == null) {
		document.write("NULL<br>");
		return;
	}
	while (temp != null) {
		document.write(temp.data, " --> ", (end = ""));
		temp = temp.next;
	}
	document.write("NULL<br>");
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.next = new Node(4);

document.write("Created Linked list: ");
display(head);

head = deleteLast(head, 4);
document.write("List after deletion of 4: ");
display(head);