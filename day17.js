// Activity 1 Linked List

//Task1 Implement a Node class to represent an element in a linked list with properties value and next.

class Node
{
    constructor(value,next=null)
    {
        this.value=value;
        this.next=next;
    }
}

//Task2 Implement a LinkedList class with methods to add a node to the end, remove a node from the end and display all nodes.

class LinkedList{
    constructor(){
        this.head=null;
    }
    add(value)
    {
        const newnode=new Node(value);
        if (this.head==null)
        {
            this.head=newnode;
        }
        else
        {
            let temp=this.head;
            while(temp.next!=null)
            {
                temp=temp.next;
            }
            temp.next=newnode;

        }
    }
    display()
    {
            let temp=this.head;
            while(temp!=null)
            {
                console.log(temp.value);
                temp=temp.next;
            }
    }
    removeend()
    {
        if (this.head==null)
        {
            console.log('empty');
        }
        else if (this.head.next==null)
        {
            this.head=null;
        }
        else
        {
            let temp=this.head;
            while(temp.next.next!=null)
            {
                temp=temp.next;
            }
            temp.next=null;
        }
    }


}

const list=new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.display(); // Output: 10 20 30

console.log("After removing the end:");
list.removeend();
list.display(); // Output: 10 20

// Activity 3 Stack

//Task3 Implement a stack class with methods push(add element), pop(remove element) and peek (view the top element)

class stack{
    constructor()
    {
        this.top=-1;
        this.stack=[];
    }
    push(value)
    {
        this.top=this.top+1;
        this.stack[this.top]=value;

    }
    pop()
    {
        if (this.top==-1)
        {
            console.log('empty');
        }
        else
        {
            //console.log(this.stack[this.top]);
            let k=this.stack[this.top];
            this.top=this.top-1;
            return k;
        }
    }
    peek()
    {
        console.log(this.stack[this.top]);
    }
    display()
    {
        for(let i=this.top;i>=0;i--)
        {
            console.log(this.stack[i]);
        }
    }
}

const s=new stack;
s.push(3);
s.push(2);
s.push(5);
s.display();
console.log('popping');
console.log(s.pop());
s.display();
s.peek();
// 5
// 2
// 3
// popping
// 5
// 2
// 3
// 2

//Task4 Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off
function reverse(d)
{
    d=d.split('');
    const s=new stack;
    for(let i=0;i<d.length;i++)
    {
        s.push(d[i]);
    }
    for(let i=0;i<d.length;i++)
    {
            d[i]=s.pop();
    }
    d=d.join('');
    console.log(d);
}

reverse('hello');
//olleh

// Activity 3 Queue

//Task5 Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front (view the front element)

class Queue{
    constructor()
    {
        this.f=-1;
        this.queue=[];
        this.l=-1;
    }
    enqueue(value)
    {
        if (this.f==this.l && this.f==-1)
        {
            this.f=0;
            this.l=0;
            this.queue[this.l]=value;
        }
        else
        {
            this.l=this.l+1;
            this.queue[this.l]=value;
        }

    }
    dequeue()
    {
        if (this.l==-1 && this.f==-1)
        {
            console.log('empty');
        }
        else if (this.l==this.f)
        {
            let k=this.queue[this.f];
            this.f=-1;
            this.l=-1;
            return k;
        }
        else
        {
            let k=this.queue[this.f];
            this.f=this.f+1;
            return k;
        }
    }
    front()
    {
        console.log(this.queue[this.f]);
    }
    display()
    {
        for(let i=this.f;i<=this.l;i++)
        {
            console.log(this.queue[i]);
        }
    }
}

const q=new Queue;
q.enqueue(2);
q.enqueue(4);
q.enqueue(8);
q.display();
console.log('dequing');
console.log(q.dequeue());
q.display();
q.front();
// 2
// 4
// 8
// dequing
// 2
// 4
// 8
// 4

//Task6 Use the Queue class to simulate a simple a simple printer queue where print jobs are added to the queue and processed in order.

function printer(d)
{
    const q=new Queue;
    console.log(d);
    console.log('The printer command order execution is...')
    for(let i=0;i<d.length;i++)
    {
        q.enqueue(d[i]);
    }
    for(let i=0;i<d.length;i++)
    {
            console.log(q.dequeue());
    }
}

printer(['p','p3','p5','p2']);
// p
// p3
// p5
// p2

// Activity 4 

//Task7 Implement a TreeNode class to represent a node in binary tree with properties value, left and right

class TreeNode{
    constructor(value,left=null,right=null)
    {
        this.value=value;
        this.left=left;
        this.right=right;
    }

}

//Task8 Implement a BinaryTree class with methods for inserting values and performing in order traversal to display nodes
const readlineSync = require('readline-sync');

class BinaryTree{
    
    create()
    {
        const x = parseInt(readlineSync.question('Enter data for node (-1 to finish): '), 10);
        if (x==-1)
        {
            return null;
        }
        else
        {
            const node=new TreeNode(x);
            console.log(`The left node of ${x}`);
            node.left=this.create();
            console.log(`The right node of ${x}`);
            node.right=this.create();


            return node;
        }
    }
    inorder(root)
    {

	    if (root==null)
	    {
		    return;
    	}
    	else
	    {
		    this.inorder(root.left);
		    console.log(root.value +' ');
		    this.inorder(root.right);
	    }

    }

}

const b=new BinaryTree();
const k=b.create();
console.log('In-order traversal:');
b.inorder(k);

// Enter data for node (-1 to finish): 2
// The left node of 2
// Enter data for node (-1 to finish): 3
// The left node of 3
// Enter data for node (-1 to finish): -1
// The right node of 3
// Enter data for node (-1 to finish): -1
// The right node of 2
// Enter data for node (-1 to finish): 5
// The left node of 5
// Enter data for node (-1 to finish): -1
// The right node of 5
// Enter data for node (-1 to finish): -1
// In-order traversal:
// 3
// 2
// 5

// Activity 5

//Task9 Implement a Graph class with methods to add vertices, add edges and perform BFS

//taken help


//Task10 Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes

//taken help
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
        }
    }

    // Perform BFS starting from a given start vertex
    bfs(startVertex, endVertex = null) {
        const visited = new Set();
        const queue = [[startVertex]];
        const traversalOrder = [];

        visited.add(startVertex);

        while (queue.length > 0) {
            const path = queue.shift();
            const vertex = path[path.length - 1];

            traversalOrder.push(vertex);

            // If an end vertex is provided and reached, return the path
            if (vertex === endVertex) {
                return { path, traversalOrder };
            }

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    const newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }

        // If no endVertex is provided, return the traversal order
        return endVertex ? null : { traversalOrder };
    }

    // Find the shortest path between two nodes using BFS
    findShortestPath(startVertex, endVertex) {
        const result = this.bfs(startVertex, endVertex);
        return result ? result.path : null;
    }

    // Traverse the entire graph from a start vertex using BFS
    traverseGraph(startVertex) {
        const result = this.bfs(startVertex);
        return result.traversalOrder;
    }
}

// Example usage:
const graph = new Graph();

// Adding vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Finding the shortest path between two nodes
const startNode = 'A';
const endNode = 'F';
const shortestPath = graph.findShortestPath(startNode, endNode);

if (shortestPath) {
    console.log(`Shortest path between ${startNode} and ${endNode}:`, shortestPath.join(' -> '));
} else {
    console.log(`No path found between ${startNode} and ${endNode}`);
}

// Traversing the entire graph starting from a given node
const traversalOrder = graph.traverseGraph(startNode);
console.log(`BFS traversal starting from ${startNode}:`, traversalOrder.join(' -> '));


// In-order traversal:
// Shortest path between A and F: A -> B -> D -> F
// BFS traversal starting from A: A -> B -> C -> D -> E -> F