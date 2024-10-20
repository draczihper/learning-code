class Graph {
	constructor(size){
		this.adjMatrix = Array.from({ length: size}, () => Array(size).fill(0));
		this.size = size;
		this.vertexData = new Array(size).fill("")
	}

	addEdge(u, v) {
		if(u >= 0 && u < this.size && v >= 0 && v < this.size){
			this.adjMatrix[u][v] = 1;
			this.adjMatrix[v][u] = 1;
		}
	}

	addVertex(vertex, data){
		if (vertex >= 0 && vertex < this.size){
			this.vertexData[vertex] = data;
		}
	}

	printGraph() {
		console.log("\nAdjacency Matrix:");
		for row of this.adjMatrix {
			row.map(cell => console.log(cell + " "));
		}

		console.log("\nVertex Data:");
		for(let i = 0; i < size; i++){
			console.log("Vertex " + i + ": " + this.vertexData[i]);
		}
	}

	dfsUtil(v, visited){
		visited[v] = true;
		console.log(vertexData[v] + " ");
		for(let i = 0; i < size; i++){
			if (this.adjMatrix[v][i] == 1 && !visited[i]){
				dfsUtil(i, visited);
			}
		}
	}

	dfs(startVertexData){
		let visited = new Array(this.size).fill(false);
		let startVertex = this.vertexData.indexOf(startVertexData);
		this.dfsUtil(startVertex, visited);
	}
}