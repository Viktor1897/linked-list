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

  remove(data) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }

    if (this.tail.data === data) {
      this.tail = current
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