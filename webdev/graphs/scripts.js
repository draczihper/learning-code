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

	dfs(startVertexData){
		let visited = new Array(this.size).fill(false);
		let startVertex = this.vertexData.indexOf(startVertexData);
		this.dfsUtil(startVertex, visited);
	}
}

