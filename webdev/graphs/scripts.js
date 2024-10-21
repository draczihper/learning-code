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

