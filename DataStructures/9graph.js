class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            // Could be an array but use set for better performance
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            for (let adjacentVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        );
    }

    bfs(start) {
        const visited = new Set();
        const queue = [start];

        while (queue.length) {
            const node = queue.shift();

            if (!visited.has(node)) {
                visited.add(node);

                for (let neighbour of this.adjacencyList[node]) {
                    if (!visited.has(neighbour)) {
                        queue.push(neighbour);
                    }
                }
            }
        }

        return Array.from(visited);
    }

    dfs(start, visited = new Set()) {
        if (start in this.adjacencyList) {
            visited.add(start);
            for (let neighbour of this.adjacencyList[start]) {
                if (!visited.has(neighbour)) {
                    this.dfs(neighbour, visited);
                }
            }
        }
        return visited;
    }
}

const graph = new Graph();
["A", "B", "C", "D", "E", "F"].forEach(v => graph.addVertex(v));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "E");
graph.addEdge("B", "F");

console.log("BFS:", graph.bfs("A"));
console.log("DFS:", Array.from(graph.dfs("A")));