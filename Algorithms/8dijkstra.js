const WeightedGraph = require("../DataStructures/13weightedGraph");
const PriorityQueue = require("../DataStructures/10priorityQueue");

function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const queue = new PriorityQueue();
    queue.enqueue([start, 0]);

    for (let node in graph.getList()) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (!queue.isEmpty()) {
        let curr = queue.dequeue()[0];
        if (!visited.has(curr)) {
            visited.add(curr);
            let neighbours = graph.neighbours(curr);
            for (let [neighbour, weight] of neighbours) {
                let newDist = distances[curr] + weight;
                if (newDist < distances[neighbour]) {
                    distances[neighbour] = newDist;
                    queue.enqueue([neighbour, newDist]);
                }
            }
        }
    }

    return distances;
}

const graph = new WeightedGraph();

graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 4);
graph.addEdge(2, 3, 1);
graph.addEdge(3, 5, 3);
graph.addEdge(2, 4, 7);
graph.addEdge(4, 6, 1);
graph.addEdge(5, 4, 2);
graph.addEdge(5, 6, 5);

console.log(dijkstra(graph, 1));