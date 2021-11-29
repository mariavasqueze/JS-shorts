// Create graph of train stations and routes ad Edges 
const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    constructor(isWeigthed = false) {
      this.vertices = [];
      this.isWeighted = isWeigthed;
    }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    return newVertex;
  }

  //Iterate through the list of vertices and remove the vertex that is equal to the vertex given in the parameter.
  removeVertex(vertex) {
    this.vertices = this.vertices.filter(i => i !== vertex);
      }

  // Add edge with weight
  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      vertexTwo.addEdge(vertexOne, edgeWeight);
    } else {
      throw new Error('Expected Vertex arguments.');
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      vertexTwo.removeEdge(vertexOne);
    } else {
      throw new Error('Not vertex intances');
    }
  }

  print() {
    this.vertices.forEach(vertex => vertex.print());
  }
}

const trainNetwork = new Graph;
const atlantaStation = trainNetwork.addVertex('Atlanta'); //add
const newYorkStation = trainNetwork.addVertex('New York'); //add 
trainNetwork.removeVertex(atlantaStation); //remove


trainNetwork.print();

module.exports = Graph;
