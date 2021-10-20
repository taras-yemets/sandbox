class Node<T = any> {
  value: T;
  next: Node | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack<T = any> {
  top: Node<T> | null;
  length: number;

  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek(): Node | null {
    return this.top;
  }

  push(value: T): number {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;

    return ++this.length;
  }

  pop(): Node | null {
    let itemToRemove: Node | null = null;

    if (this.length) {
      itemToRemove = this.top;
      this.top = this.top!.next;
      this.length--;
    }

    return itemToRemove;
  }

  isEmpty(): boolean {
    return this.length > 0;
  }
}
