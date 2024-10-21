class Graph {
	constructor(size){
		this.adjMatrix = Array.from({ length: size}, () => Array(size).fill(0));
		this.size = size;
		this.vertexData = new Array(size).fill("")
	}

	addEdge(u, v) {
		if(u >= 0 && u < this.size && v >= 0 && v < this.size){
			this.adjMatrix[u][v] = 1;
			this.adjMatrix[v][u] = 1; // Remove this line for directed graph and for cycle detection directed graph
		}
	}

	addVertex(vertex, data){
		if (vertex >= 0 && vertex < this.size){
			this.vertexData[vertex] = data;
		}
	}

	printGraph() {
		console.log("\nAdjacency Matrix:");
		this.adjMatrix.forEach(row => {
			console.log(row.join(" "))
		})

		console.log("\nVertex Data:");
		for(let i = 0; i < this.size; i++){
			console.log(`Vertex Data ${i}: ${this.vertexData[i]} `);
		}
	}

	dfsUtil(v, visited){
		visited[v] = true;
		console.log(this.vertexData[v] + " ");
		for(let i = 0; i < this.size; i++){
			if (this.adjMatrix[v][i] == 1 && !visited[i]){
				this.dfsUtil(i, visited);
			}
		}
	}


	dfs(startVertexData){
		let visited = new Array(this.size).fill(false);
		let startVertex = this.vertexData.indexOf(startVertexData);
		this.dfsUtil(startVertex, visited);
	}

	bfs(startVertexData) {
		let queue = [this.vertexData.indexOf(startVertexData)];
		let visited = new Array(this.size).fill(false);
		visited[queue[0]] = true;

		while (queue.length) {
			let currentVertex = queue.shift(0);
			console.log(this.vertexData[currentVertex] + " ");
			for (let i = 0; i < this.size; i++) {
				if (this.adjMatrix[currentVertex][i] === 1 && !visited[i]){
					queue.push(i);
					visited[i] = true;
				}
			}
		}
	}

}

g = new Graph(7);


g.addVertex(0, "A");
g.addVertex(1, "B");
g.addVertex(2, "C");
g.addVertex(3, "D");
g.addVertex(4, "E");
g.addVertex(5, "F");
g.addVertex(6, "G");


g.addEdge(3, 0);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(0, 4);
g.addEdge(4, 2);
g.addEdge(2, 5);
g.addEdge(2, 1);
g.addEdge(2, 6);
g.addEdge(1, 5);

g.printGraph();

console.log("\nDepth First Search starting from vertex D:")
g.bfs("D")