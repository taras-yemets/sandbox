
class DoubleLinkedListItem<T> {
    public next: DoubleLinkedListItem<T> | null
    public prev: DoubleLinkedListItem<T> | null
    public value: T

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList<T> {
    private head: DoubleLinkedListItem<T> | null;
    private tail: DoubleLinkedListItem<T> | null;
    private length: number;

    constructor (value: T) {
        this.head = new DoubleLinkedListItem<T>(value);
        this.tail = this.head;
        this.length = 1;
    }

    private getItemByIndex(index: number): LinkedListItem<T> | null {
        let i = 0;
        let item: LinkedListItem<T> | null = this.head;

        while (item) {
            if (i === index) {
                break;
            }

            item = item.next;
            i++;
        }

        return item;
    }

    public prepend(value: T): DoubleLinkedList<T> {
      const newItem = new DoubleLinkedListItem<T>(value);

      if (this.head) {
        this.head.prev = newItem;
        newItem.next = this.head;
        this.head = newItem;
        this.length++;
      } else {
        this.head = newItem;
        this.tail = this.head;
        this.length = 1;
      }

      return this;
    }

    public append(value: T): DoubleLinkedList<T> {
        const newItem = new DoubleLinkedListItem<T>(value);

        if (this.tail) {
            this.tail.next = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
            this.length++;
        } else {
            this.head = newItem;
            this.tail = this.head;
            this.length = 1;
        }
    }

    public insert(position: number, value: T) {
      if (position <= 0) {
        return this.prepend(value);
      }

      if (position >= this.length) {
        return this.append(value);
      }
      
      const prevItem = this.getItemByIndex(position - 1);

      if (prevItem) {
        const newItem = new DoubleLinkedListItem<T>(value);
        newItem.prev = prevItem;
        newItem.next = prevItem.next;
        prevItem.next = newItem;
        this.length++;
      }

      return this;
    }

    public remove(position: number): DoubleLinkedList<T> {
      if (position < 0 || position >= this.length) {
        return this;
      }

      const itemToRemove = this.getItemByIndex(position);

      if (itemToRemove) {
        const prevItem = itemToRemove.prev;
        const nextItem = itemToRemove.next;

        if (prevItem) {
          prevItem.next = nextItem;
        } else {
          this.head = nextItem;
        }

        if (nextItem) {
          nextItem.prev = prevItem;
        } else {
          this.tail = prevItem;
        }

        this.length--;
      }

      return this;
    }

    public print(): void {
      const items = [];
      let item = this.head;

      while (item) {
        items.push(item.value);
        item = item.next;
      }

      console.log(items);
    }

    public reverse(): DoubleLinkedList<T> {
      this.tail = this.head;
      this.tail.prev = this.head.next;
      let first = this.head;
      let second = first.next;

      while (second) {
        const trailing = second.next;
        const leading = first.prev;
        
        second.next = first;
        second.prev = leading;

        first = second;
        first.prev = trailing;
        second = trailing;
      }

      this.head.next = null;
      this.head = first;


      return this;
    }
}

const list = new DoubleLinkedList<number>(10);
list.append(5);
list.append(15);
list.append(25);
list.reverse();




// list.append(2);
// list.append(15);
// list.prepend(100);
// list.insert(1, 4);
// list.remove(3);
list.print();
// console.log(list);
