class Node{
    constructor(val,next=0){
        this.val=val;
        this.next=next;
    }
}

class LinkedList{
    constructor(head=null,tail=null)
    {
        this.head=head;
        this.tail=tail;
        this.size=0;
    }
    add(val){
        if(!this.head){
            const newNode = new Node(val);
            this.head = newNode;  
            this.tail = newNode;
            this.size=1;
        }
        else{
            const newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode
             this.size++;
        }
        return this
    }
    traverse(){
        let currentNode=this.head;
        if(!this.head)
        {
            console.log("There is no list")
        }
        while(currentNode)
        {
            console.log(currentNode.val);
            currentNode=currentNode.next;
        }
    }
    findNode(val){
        let currentNode=this.head;
        while(currentNode)
        {
        if(currentNode.val===val){
            return true;
        }
        else{
            currentNode=currentNode.next;
        }
        }
    
        return false
    }
    
}

const list=new LinkedList();
list.add("A").add("B").add("C").add("D");
console.log(list)
t=list.traverse();
// console.log(t)
find=list.findNode('E')
console.log("FIND ELEMENT",find)
