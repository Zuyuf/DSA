class SingleLinkedNode<V = any> {
    value: V;
    next: SingleLinkedNode<V> | null;

    constructor(value: V, pointer: SingleLinkedNode | null = null) {
        this.value = value;
        this.next = pointer;
    }
}

class SingleLinkedList<V = any> {
    head: SingleLinkedNode<V> | null = null;
    tail: SingleLinkedNode<V> | null = null;
    length: number = 0;
    
    /**
     * Function used to determine the order of the elements. 
     * It is expected to return a negative value if the first argument is less than the second argument,
     * zero if they're equal, and a positive value otherwise. 
     * If omitted, the elements are sorted in ascending, ASCII character order.
     */
    private _isEqualValueComparer?:(val1: V, val2: V) => number;
    private _isEqualDefault = (val1: any, val2: any) => val1 - val2;

    private isEqual = (val1: V, val2: V) => this._isEqualValueComparer 
        ? this._isEqualValueComparer(val1, val2) 
        : this._isEqualDefault(val1, val2);



    constructor(value: V | null, isEqualValueComparer?: (val1: V, val2: V) => number) {
        if (value) this._createFirstNode(value);

        this._isEqualValueComparer = isEqualValueComparer;
    }

    private _createFirstNode(value: V) {
        this.head = new SingleLinkedNode<V>(value);
        this.tail = this.head;
        this.length = 1;
    }

    private _removeNode(prevNode: SingleLinkedNode<V> | null, removeNode: SingleLinkedNode<V> | null, nextNode: SingleLinkedNode<V> | null) {
        // Head Node 
        if (prevNode === null && removeNode && nextNode) {
            this.head = nextNode;
        } 
        // Middle node
        else if (prevNode && removeNode && nextNode) {
            prevNode.next = nextNode;
        }
        // Tail node
        else if (prevNode && removeNode && nextNode === null) {
            prevNode.next = null;
            this.tail = prevNode;
        }

        this.length--;
        return removeNode;
    }


    printList(shouldConsole = true) {
        const array = [];
        let curNode = this.head;

        while(curNode !== null) {
            array.push(curNode.value);
            curNode = curNode.next;
        }

        if (shouldConsole) console.log(array);
        return array;
    }


    append(value: V) {
        if (this.length === 0) {
            this._createFirstNode(value);
        }
        else {
            const newNode = new SingleLinkedNode<V>(value);
            this.tail!.next = newNode;
            this.length++;
        }

        return this;
    }

    prepend(value: V) {
        if (this.length === 0) {
            this._createFirstNode(value);
        }
        else {
            const newNode = new SingleLinkedNode<V>(value);
            const headRefHolder = this.head;
            
            this.head = newNode;
            this.head!.next = headRefHolder;
            
            this.length++;
        }
    
        return this;
    }

    insert(index: number, value: V) {
        if (index >= this.length) {
            return this.append(value);
        } 
        else if (index < 0) {
            return this.prepend(value);
        } 
        
        //

        const previousNode = this.traverseToIndex(index - 1)!;
        const nextNode = previousNode?.next;

        const newNode = new SingleLinkedNode<V>(value);
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
    
        return this;
    }


    removeByIndex(index: number) {
        if (index < 0 || index >= this.length) {
            return null;
        } 
        else if (this.length === 1 && index === 0) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        //

        const prevNode = this.traverseToIndex(index - 1);
        const removeNode = prevNode ? prevNode?.next : this.traverseToIndex(index);
        const nextNode = removeNode?.next || null;

        this._removeNode(prevNode, removeNode, nextNode);

        return removeNode;
    }

    removeByValue(value: V) {
        if (this.length === 0) {
            return null;
        } 
        else if (this.length === 1 && this.isEqual(this.head!.value, value) === 0) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        //

        const { prevNode, node: removeNode } = this.traverseByValue(value);
        const nextNode = removeNode?.next || null;

        this._removeNode(prevNode, removeNode, nextNode);
        
        return removeNode;
    }
    

    reverse() {
        if (this.length === 1) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first?.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            
            first = second;
            second = temp;
        }

        // first is the last node 
        // while second is null (End)
        this.head = first;
        
        return this.head;
    }


    traverseToIndex(index: number) {
        if (index < 0) return null;
        else if (index >= this.length) return this.tail;

        let counter = 0;
        let curNode = this.head;

        while (counter != index) {
            curNode = curNode!.next;
            counter++;
        }

        return curNode;
    }

    traverseByValue(value: V) {
        let prevNode: SingleLinkedNode<V> | null = null;
        let curNode = this.head;
        let foundValue = false;

        if (curNode?.value === value) foundValue = true;

        while (curNode?.next && !foundValue) {
            prevNode = curNode;
            curNode = curNode!.next;

            if (this.isEqual(curNode!.value, value) === 0) {
                foundValue = true;
            }
        }

        if (!foundValue) curNode = null;

        return { node: curNode, prevNode };
    }
}
