import Stack from "./Stack";

export default class Queue<T = any> {
  stack: Stack;

  constructor() {
    this.stack = new Stack();
  }

  peek() {
    return this.stack.peek();
  }

  enqueue(value: T) {
    return this.stack.push(value);
  }

  dequeue() {
    const newStack = new Stack();

    while (this.stack.length > 0) {
      newStack.push(this.stack.pop());
    }

    this.stack = newStack;

    return this.stack.pop();
  }
}

// class Item<T = any> {
//   value: T;
//   next: Item | null;

//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }

// export default class Queue<T = any> {
//   first: Item | null;
//   last: Item | null;
//   length: number;

//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   enqueue(value: T): Queue {
//     const newItem = new Item(value);

//     if (this.length === 0) {
//       this.first = newItem;
//       this.last = newItem;
//     } else {
//       this.last!.next = newItem;
//       this.last = newItem;
//     }

//     this.length++;

//     return this;
//   }

//   dequeue(): Queue {
//     if (this.length > 0) {
//       if (this.length === 1) {
//         this.first = null;
//         this.last = null;
//       } else {
//         this.first = this.first!.next;
//       }

//       this.length--;
//     }

//     return this;
//   }

//   peek(): Item | null {
//     return this.first;
//   }
// }
