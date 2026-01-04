class DirectedWeightedGraph {
    constructor() {
        this.adjacencyList = {};
        this.totalVertices = 0;
    }

    getList() {
        return this.adjacencyList;
    }

    getTotalVertices() {
        return this.totalVertices;
    }

    neighbours(vertex) {
        return this.adjacencyList[vertex] || new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Map();
            this.totalVertices++;
        }
    }

    addEdge(from, to, cost) {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacencyList[from].set(to, cost);
    }

    hasEdge(from, to) {
        return this.adjacencyList[from]?.has(to) || false;
    }

    removeEdge(from, to) {
        this.adjacencyList[from]?.delete(to);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;

        this.adjacencyList[vertex].clear();

        // remove incoming edges from all other vertices
        for (let v in this.adjacencyList) {
            this.adjacencyList[v].delete(vertex);
        }
        this.totalVertices--;
        delete this.adjacencyList[vertex];
    }

    display() {
        for (let v in this.adjacencyList) {
            let str = "";
            for (let [to, cost] of this.adjacencyList[v]) {
                str += ` (${to}, ${cost})`;
            }
            console.log(`${v} ->${str}`);
        }
    }
}

module.exports = DirectedWeightedGraph;