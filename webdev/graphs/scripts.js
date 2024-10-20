class Graph {
	constructor(size){
		this.adjMatrix = Array.from({ length: size}, () => Array(size).fill(0));
		this.size = size;
		this.vertexData = new Array(size).fill("")
	}

	addEdge(i, j) {
		if(i >= 0 && i < this.size && v >= 0 && v < this.size){
			this.adjMatrix[i][j] = 1;
			this.adjMatrix[j][i] = 1;
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
			console.log("Vertex " + i + ": " + vertexData[i]);
		}
	}
}