// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

import { showOutput } from "../utils";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head?.next) return null;

  let current = head;
  let candidateParent = head;
  let size = 1;

  while (current.next) {
    current = current.next;
    size++;
    if (size > n + 1) candidateParent = candidateParent.next as ListNode;
  }

  if (size === n) head = candidateParent.next;
  else candidateParent.next = candidateParent.next?.next || null;

  return head;
}

// console.log(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2));

showOutput(removeNthFromEnd, new ListNode(1, new ListNode(2)), 2);
