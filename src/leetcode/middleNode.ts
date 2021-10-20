// https://leetcode.com/problems/middle-of-the-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function middleNode(head: ListNode | null): ListNode | null {
//   if (head === null) return null;

//   let tail = head;
//   let count = 0;

//   while (tail.next) {
//     tail = tail.next;
//     count++;
//   }

//   let middle = head;
//   let i = 0;

//   while (i < Math.ceil(count / 2)) {
//     middle = middle.next as ListNode;
//     i++;
//   }

//   return middle;
// }

// function middleNode(head: ListNode | null): ListNode | null {
//   if (head === null) return null;

//   let current = head;
//   let currentIndex = 1;
//   let middle = head;
//   let middleIndex = 1;

//   while (current.next) {
//     current = current.next;
//     currentIndex++;

//     if (currentIndex / 2 === middleIndex) {
//       middle = middle.next as ListNode;
//       middleIndex++;
//     }
//   }

//   return middle;
// }

function middleNode(head: ListNode | null): ListNode | null {
  let middle = head;
  let current = head;
  while (current && current.next) {
    middle = middle.next;
    current = current.next?.next;
  }
  return middle;
}

// console.log(
//   middleNode(
//     new ListNode(
//       1,
//       new ListNode(
//         2,
//         new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
//       )
//     )
//   )
// );

// 1 2 3 4 5 6 7
