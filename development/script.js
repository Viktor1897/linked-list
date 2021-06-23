class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail = this.tail.next = node;
    } else {
      this.tail = node;
    }

    if (!this.head) {
      this.head = node;
    }
    
  }

  prepend(data) {
    const node = new Node(data);

    if (!this.head) {
      this.append(data);
    } else {
      node.next = this.head;
      this.head = node;
    }

  }

  toArray() {
    let current = this.head;
    const output = [];

    while(current) {
      output.push(current);
      current = current.next;
    }
    
    return output;
  }
}

const list = new LinkedList();