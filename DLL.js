class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        // Create a new node with the value passed to the function
        var newNode = new Node(val);
        // If the head property is null set the head and tail to be the newly created node 
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If not, set the next property on the tail to be that node
            this.tail.next = newNode;
            // Set the previous property on the newly created node to be the tail
            // Set the tail to be the newly created node
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        // Increment the length
        this.length++;
        return this;
    }

    pop(){
        // If there is no head, return undefined
        if(!this.head) return undefined;
        // Store the current tail in a variable to return later
        var poppedNode = this.tail;
        // If the length is 1, set the head and tail to be null because the list is now empty
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // Update the tail to be the previous Node.
            // Set the newTail's next to null
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        // Decrement the length
        this.length--;
        return poppedNode;
    }

    shift(){
        // If length is 0, return undefined
        if(this.length === 0) return undefined;
        // Store the current head property in a variable (we'll call it old head)
        var oldHead = this.head;
        // If the length is one
        // set the head to be null
        // set the tail to be null
        // because once you remove it, there is no list
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            // Update the head to be the next of the old head
            this.head = oldHead.next;
            // Set the head's prev property to null
            // Set the old head's next to null
            this.head.prev = null;
            oldHead.next = null;
        }
        // Decrement the length
        this.length--;
        return oldHead;
    }

    unshift(val){
        // Create a new node with the value passed to the function
        var newNode = new Node(val);
        // If the length is 0
        // Set the head to be the new node
        // Set the tail to be the new node
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the prev property on the head of the list to be the new node
            // Set the next property on the new node to be the head property 
            // Update the head to be the new node
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        // Increment the length
        this.length++;
        return this;
    }

    get(index){
        // If the index is less than 0 or greater or equal to the length, return null
        if(index < 0 || index >= this.length) return null;
        let count
        let current;
        // If the index is less than or equal to half the length of the list
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            // Loop through the list starting from the head and loop towards the middle
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            // If the index is greater than half the length of the list
            // ​Loop through the list starting from the tail and loop towards the middle
            // Return the node once it is found 
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        // Return the node once it is found
        return current;
    }

    //update value
    set(index,val) {
        if(index < 0 || index >= this.length) return undefined;

        let currIndex;
        let currNode;
        //check for index less than half of length, start at head
        if(index < this.length/2){
            currIndex = 0
            currNode = this.head
            while(index !== currIndex){
                currNode = currNode.next
                currIndex++
            }
            currNode.val = val
        }else{
            currIndex = this.length - 1
            currNode = this.tail
            while(index !== currIndex){
                currNode = currNode.prev
                currIndex--
            }
        }
        return this;
    }

    //insert value
    insert(index,value){
        if(index < 0 || index > this.length) return undefined;


        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let newNode = new Node(value);
        let foundNode = this.get(index);

        if(foundNode){
            newNode.prev = foundNode.prev
            foundNode.prev.next = newNode
            foundNode.prev = newNode
            newNode.next = foundNode
            this.length++;
        }
        
        return this;
    }

    //remove value
    remove(index){
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let prevNode = this.get(index - 1);

        prevNode.next = removedNode.next
        removedNode.next.prev = prevNode
        removedNode.next = null;
        removedNode.prev = null;
        this.length--

        return removedNode;
    }

    //remove occurrences
    removeOccurences(DLL,x){

        //edge case of no list
        if(!DLL.length) return undefined;

        let count = 0
        
        //while our count is less than length iterate
        while(count < DLL.length){
            //if the value at our index is equal to target, delete
            //remain at same index as our list has shrunk by 1
            if(DLL.get(count).val === x){
                DLL.remove(count);
            }else{
                count++
            }
        }

        return DLL;
    }

    //first pair of numbers that equal to sum called target
    firstPair(DLL,target){
        if(DLL.length < 2) return undefined;

        let currSum = 0;
        let left = 0;
        let right = DLL.length - 1;
       
        //multiple pointers pattern
        while(left < right){
            currSum = DLL.get(left).val + DLL.get(right).val;
            if(currSum === target){
                return [DLL.get(left).val, DLL.get(right).val];
            }else if(currSum > target){
                right--;
            }else{
                left++;
            }
        }
        return -1;
    }
}

let newDLL = new DLL()
// newDLL.push(2)
// newDLL.push(2)
// newDLL.push(10)
// newDLL.push(8)
// newDLL.push(4)
// newDLL.push(2)
// newDLL.push(5)
// newDLL.push(2)
// console.log(newDLL.removeOccurences(newDLL,2))
newDLL.push(1)
newDLL.push(3)
newDLL.push(4)
newDLL.push(5)
newDLL.push(6)
newDLL.push(7)
console.log(newDLL.firstPair(newDLL,1))
