// https://leetcode.com/problems/add-two-numbers/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;

  let currentL1 = l1;
  let currentL2 = l2;
  let head = new ListNode();
  let tail = head;

  while (currentL1 || currentL2) {
    const sum = (currentL1?.val || 0) + (currentL2?.val || 0) + carry;
    const newNode = new ListNode(sum % 10);

    tail.next = newNode;
    tail = newNode;

    carry = sum >= 10 ? 1 : 0;
    currentL1 = currentL1?.next || null;
    currentL2 = currentL2?.next || null;
  }

  if (carry) {
    const newNode = new ListNode(carry);
    if (tail) {
      tail.next = newNode;
    }
  }

  return head.next;
}

const result = addTwoNumbers(
  // new ListNode(2, new ListNode(4, new ListNode(3))),
  // new ListNode(5, new ListNode(6, new ListNode(4)))
  // new ListNode(5),
  // new ListNode(5)
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  ),
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
);
// console.log(result);

// export default addTwoNumbers;
