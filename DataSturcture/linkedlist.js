// class Node{
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const firstPage = new Node('google.com')
// console.log(firstPage)

//Another way to create Linked List


class Node{
  constructor(value, next = null)
  {
    this.value = value;
    this.next = next;
  }
}

// const pages = new Node("google.com",
//   new Node("amazon.com",
//     new Node("reddit.com",
//       new Node("youtube.com")
//     )));
                                            
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  findElement(val) {
    let currentNode = this.head;
    while(currentNode){
    if (currentNode.value === val) {
      return true
    }
    else {
      currentNode = currentNode.next;
    }
    }
    return false
  }
  appendElement(val) {
  //  while(currentNode.next){
  //  {
  //     currentNode = currentNode.next;
  //    }
     
    //  }
    let newNode = new Node(val);
    console.log(newNode);
    if (!this.head)
    {
      this.tail = newNode;
      this.head = newNode;
    }
    else{
    this.tail.next = newNode;
      this.tail = newNode;
      }
  }
}


const vichles = new LinkedList()
vichles.appendElement('Train');
vichles.appendElement('Bus');


// history.head = pages;
// history.tail=pages





// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const secondPage = new Node1("google.com",
//   new Node1("amazon.com",
//     new Node1("reddit.com")));

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   traverse() {
//     console.log("DEBUG: Entered traverse");
//     console.log(this.head.value);
//     console.log(this.head.next.value);
//     console.log(this.head.next.next.value);
//   }
// }

// const history = new LinkedList();
// history.head = secondPage;
// history.traverse(); // This will show all 3 logs