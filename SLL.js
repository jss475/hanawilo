class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){

        let newNode = new Node(val); 

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        //tail must now be previous
        let currNode = this.head
        let prevNode = currNode
        while(currNode.next !== null){
            prevNode = currNode
            currNode = currNode.next 
            
        }

        if(!this.length) {
            this.head = null;
            this.tail = null;
        }

        this.tail = prevNode;
        this.tail.next = null;
        this.length--;

        if(!this.length) {
            this.head = null;
            this.tail = null;
        }

        return currNode;
    }

    shift(){
        if(!this.head) return undefined;
        let removedNode = this.head;
        this.head = this.head.next
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return removedNode;
    }

    unshift(val){

        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        
        if(index >= this.length || index < 0) return undefined;
        let currIndex = 0;
        let currNode = this.head;
        while(currIndex !== index){
            currIndex++;
            currNode = currNode.next;
        }
        return currNode;
    }

    set(index, value){
        // if(index >= this.length || index < 0) return undefined;
        // let currIndex = 0;
        // let currNode = this.head;

        // while(currIndex !== index){
        //     currNode = currNode.next;
        //     currIndex++;
        // }
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
        }
        return this;
    }

    insert(index, value) {
        
        // if(index === this.length){
        //     this.push(value)
        // }

        // let newNode = new Node(value);

        // let foundNode = this.get(index);
        // let prevNode = this.get(index - 1);

        // if(foundNode){
        //     if(prevNode){
        //         prevNode.next = newNode;
        //         newNode.next = foundNode;
        //     }else{
        //         this.head = newNode;
        //         newNode.next = foundNode;
        //     }
        //     this.length++;
        // }

        // return this;
        if(index < 0 || index >= this.length) return;

        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);

        let newNode = new Node(value);
        let prev = this.get(index-1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;

        this.length++
        return this;
    }

    remove(index){
        if(index < 0 || index >= this.length) return;
        if(index === this.length) return this.pop();
        if(index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;

    }

    sameFrequency(SLL1, SLL2){
        //if lengths are different return false
        if(SLL1.length !== SLL2.length) return false;
        //if lengths are both 0 or 1, return true
        if(SLL1.length === 0 && SLL2.length === 0) return true;
        if(SLL1.length === 1 && SLL2.length === 1) return true;

        //start the current index at 1 since we've already checked if empty or only has one node in both linked lists
        let currIndex = 1;

        while(currIndex !== SLL1.length){
            //check the previous node against current node and see the trend. Whether ascending or descending for both linked lists. 
            //Or if they remain the same
            let prevIndex = currIndex-1;

            if(SLL1.get(prevIndex).value <= SLL1.get(currIndex).value && SLL2.get(prevIndex).value > SLL2.get(currIndex).value){
                return false;
            }else if(SLL1.get(prevIndex).value >= SLL1.get(currIndex).value && SLL2.get(prevIndex).value < SLL2.get(currIndex).value){
                return false;
            }
            currIndex++;
        }
        return true;

    }
}

const newSLL1 = new SLL();
newSLL1.push(1);
newSLL1.push(2);
newSLL1.push(3);

const newSLL2 = new SLL();
newSLL2.push(1);
newSLL2.push(4);
newSLL2.push(9);

const newSLL3 = new SLL();
newSLL3.push(1);
newSLL3.push(2);
newSLL3.push(2);

const newSLL4 = new SLL();
newSLL4.push(1);
newSLL4.push(4);
newSLL4.push(9);

const newSLL5 = new SLL();
newSLL5.push(1);
newSLL5.push(2);

const newSLL6 = new SLL();
newSLL6.push(1);
newSLL6.push(4);
newSLL6.push(9);

// console.log(newSLL1.sameFrequency(newSLL1, newSLL2));
// console.log(newSLL3.sameFrequency(newSLL3, newSLL4));
console.log(newSLL5.sameFrequency(newSLL5, newSLL6));