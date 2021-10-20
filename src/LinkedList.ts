class LinkedListItem<T> {
    public value: T;
    public next: LinkedListItem<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: LinkedListItem<T>;
    private tail: LinkedListItem<T>;
    private length: number;

    constructor(value: T) {
        this.head = new LinkedListItem(value);
        this.tail = this.head;
        this.length = 1;
    }

    public prepend(value: T): LinkedList<T> {
        const item = new LinkedListItem(value)
        item.next = this.head;

        this.head = item;
        this.length++;

        return this;
    }

    public append(value: T): LinkedList<T> {
        const item = new LinkedListItem(value);

        if (this.tail) {
            this.tail.next = item;
            this.tail = item;
            this.length++;
        } else {
            this.head = new LinkedListItem(value);
            this.tail = this.head;
            this.length = 1;
        }
        
        return this;
    }

    private getItemByIndex(index: number): LinkedListItem<T> | null {
        let i = 0;
        let item: LinkedListItem<T> | null = this.head;

        while (item !== null) {
            if (i === index) {
                break;
            }

            item = item.next;
            i++;
        }

        return item;
    }

    public insert(index: number, value: T): LinkedList<T> {
        const newItem = new LinkedListItem(value);

        if (index <= 0) {
            this.prepend(value);
            return this;
        }

        if (index >= this.length) {
            this.append(value);
            return this;
        }

        const prevItem = this.getItemByIndex(index - 1);

        if (prevItem) {
            newItem.next = prevItem.next;
            prevItem.next = newItem;
            this.length++;
        } else {
            console.log(`Can't insert item at position ${index}`);
        }

        return this;
    }

    private getValues(): T[] {
        const values: T[] = [];
        let item: LinkedListItem<T> | null = this.head;

        while (item !== null) {
            values.push(item.value);
            item = item.next;
        }

        return values;
    }

    public printList() {
        console.log(this.getValues());
    }

    public remove(index: number) {
        if (index < 0 || index >= this.length) {
            return this;
        }

        if (index === 0 && this.head) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                console.log("Can't delete last item of linked list");
            }
            return this;
        }

        const prevItem = this.getItemByIndex(index-1);

        if (prevItem) {
            prevItem.next = prevItem.next?.next || null;
        }

        return this;
    }

    public reverse(): LinkedList<T> {
        const values = this.getValues();
        let reversedList = new LinkedList<T>(values[values.length - 1]);
        
        for (let i = values.length - 2; i >= 0; i--) {
            reversedList.append(values[i]);
        }

        this.head = reversedList.head;
        this.tail = reversedList.tail;
        
        return this;
    }

    public reverse2(): LinkedList<T> {       
        this.tail = this.head;
        let first = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        return this;
    }
}

const list = new LinkedList<number>(10);
list.append(5);
list.append(7);
list.printList();
list.reverse2();
// list.printList();
// list.remove(2);
// list.append(13);
// list.prepend(1);
// list.insert(4, 222);
// list.printList();

console.log(list);