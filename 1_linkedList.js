class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

head = new Node(1);
secondNode = new Node(2);
thirdNode = new Node(3);
fourthNode = new Node(4);

head.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

function traverse(current) {
  while (current != null) {
    console.log(current.data);
    current = current.next;
  }
}
// traverse(head);

function search(element, current) {
  while (current != null) {
    if (current.data == element) {
      console.log("Match found at:", current.data);
    }
    current = current.next;
  }
}
// search(2, head);

function insertAtStart(key) {
  newNode = new Node(key);
  newNode.next = head;
  head = newNode;
}
// insertAtStart(11);
// traverse(head);

function insertAtEnd(key, current) {
  newNode = new Node(key);

  while (current.next) {
    current = current.next;
  }

  current.next = newNode;
}
// insertAtEnd(4, head);
// traverse(head);

function insertAtAPoint(current, prevNode, key) {
  newNode = new Node(key);

  while (current.data !== prevNode) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;
}
// insertAtAPoint(head, 3, 9);
// traverse(head);

function deletion(head, node) {
  
  let current = head;

  if (current === node) {
    head = head.next;   
    return head;
  }

  while (current.next !== node && current.next !== null) {
    current = current.next;
  }

  if (current.next !== null) {
    current.next = current.next.next;
  }

}

deletion(head, head);
// traverse();
