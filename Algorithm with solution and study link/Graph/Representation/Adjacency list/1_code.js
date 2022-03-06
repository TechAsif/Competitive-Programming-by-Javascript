class Graph {

  constructor(noOfVertices) {

    this.noOfVertices = noOfVertices;
    this.adjList = new Map();

  }

  //Add Vetext into map key and initiliaze map key value in empty array
  addVertex(v) {
    this.adjList.set(v, [])
  }

  addEdge(v, w) {

    this.adjList.get(v).push(w);

    //if graph is undirected then put w vertex to v edge connection also

    this.adjList.get(w).push(v);

  }

  printGraph() {

    //get the key of adjacency list that means a vertex
    let getKeys = this.adjList.keys();

    for (let i of getKeys) {
      let getValues = this.adjList.get(i);

      let concateSameAdjdata = '';

      for (let j of getValues) {
        concateSameAdjdata += j + " ";
      }

      console.log(i+ '->'+concateSameAdjdata);

    }


  }


}


let graph = new Graph(6);

let vertices = ["A", "B", "C", "D", "E", "F"];

//Adding Vertices
for(i = 0; i<vertices.length; i++){
  graph.addVertex(vertices[i]);
}

//Adding Edges
graph.addEdge("A",'B')
graph.addEdge("A",'D')
graph.addEdge("A",'E')
graph.addEdge("B",'C')
graph.addEdge("D",'E')
graph.addEdge("E",'F')
graph.addEdge("E",'C')
graph.addEdge("C",'F')

//Print The Graph
graph.printGraph();




