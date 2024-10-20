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
			
		}
	}
}