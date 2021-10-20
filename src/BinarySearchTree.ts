class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  private root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new BSTNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode: BSTNode | null = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return;
      }

      const pointer: "left" | "right" =
        value < currentNode.value ? "left" : "right";

      if (currentNode[pointer] === null) {
        currentNode[pointer] = newNode;
        return;
      }

      currentNode = currentNode[pointer];
    }
  }

  lookup(value: number) {
    if (this.root === null) {
      return null;
    }

    let currentNode: BSTNode | null = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      }

      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }

    return null;
  }

  // not tested
  recursiveLookup(value: number): BSTNode | null {
    const search = (node: BSTNode | null): BSTNode | null => {
      if (!node) return null;
      if (value === node.value) return node;
      return search(value < node.value ? node.left : node.right);
    };

    return search(this.root);
  }

  remove(value: number) {
    let nodeToBeRemovedParent: BSTNode | null = null;
    let currentNode: BSTNode | null = this.root;
    while (currentNode) {
      if (value !== currentNode.value) {
        nodeToBeRemovedParent = currentNode;
        currentNode =
          value < currentNode.value ? currentNode.left : currentNode.right;

        continue;
      }

      let nodeToReplaceCurrent: BSTNode | null = null;

      // try to find lowest to the right
      if (currentNode.right) {
        let nodeParent = currentNode;
        let node: BSTNode | null = currentNode.right;
        while (true) {
          if (!node.left) break;

          nodeParent = node;
          node = node.left;
        }

        if (node !== currentNode.right) {
          nodeToReplaceCurrent = node;

          nodeToReplaceCurrent.left = currentNode.left;
          nodeToReplaceCurrent.right = currentNode.right;

          nodeParent.left = null;
        }

        // if lowest to the right is not found, take the first to the left
      } else if (currentNode.left && nodeToReplaceCurrent === null) {
        nodeToReplaceCurrent = currentNode.left;
      }

      if (nodeToBeRemovedParent) {
        if (nodeToBeRemovedParent.left === currentNode) {
          nodeToBeRemovedParent.left = nodeToReplaceCurrent;
        } else if (nodeToBeRemovedParent.right === currentNode) {
          nodeToBeRemovedParent.right = nodeToReplaceCurrent;
        }
      } else {
        this.root = nodeToReplaceCurrent;
      }

      break;
    }

    return currentNode;
  }
}
