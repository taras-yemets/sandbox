export default class Graph {
  adjacentList: Map<number, Set<number>>;

  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(node: number): Graph {
    if (!this.adjacentList.has(node)) {
      this.adjacentList.set(node, new Set());
    }

    return this;
  }

  addEdge(node1: number, node2: number): Graph {
    const node1Edges = this.adjacentList.get(node1);
    const node2Edges = this.adjacentList.get(node2);

    // both exist and are not the same
    if (node1Edges && node2Edges && node1 !== node2) {
      this.adjacentList.set(node1, node1Edges.add(node2));
      this.adjacentList.set(node2, node2Edges.add(node1));
    }

    return this;
  }

  printConnections(): void {
    for (let [node, edges] of this.adjacentList) {
      console.log(`${node} ==> ${[...edges].join(",")}`);
    }
  }
}
