## 인접 리스트
**간선이 많지 않고 퍼져있는 그래프에 적절**(노드(정점)의 개수가 아주 많지만 서로 다 연결이 되어있지 않은 경우)

**공간을 적게 차지한다.**

**모든 간선을 순회하는 속도가 빠르다.**

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/109d6122-5600-4896-8d7d-56070ad55ced)

```
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}
```

인접 행렬

특정 간선을 확인해야 할 때 빠르다.

![image](https://github.com/jhchoi1182/next-blog/assets/116577489/551e0462-051c-47a4-b858-7baa8d2afd92)