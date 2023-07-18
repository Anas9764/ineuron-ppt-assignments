class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	add(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	deleteMiddle() {
		let current = this.head;
		let middle = this.head;
		let prev = null;
		while (current && current.next) {
			current = current.next.next;
			prev = middle;
			middle = middle.next;
		}
		prev.next = middle.next;
		this.size--;
	}
}

const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.add(10);
ll.deleteMiddle();
ll.print();