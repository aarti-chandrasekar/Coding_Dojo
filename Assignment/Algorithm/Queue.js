/**
 *
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        // Point the tail to the new item
        if (!this.isEmpty()){
            this.tail.next =  item 
        }
        this.tail = item
        // if this is the first item, point the head to the new item
        this.head = (this.isEmpty()) ? item : this.head
        // if this is the second item, point head.next to the new item
        this.head.next = (this.size === 1) ? item : this.head.next
        this.size++

    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        // Empty Q
        if (this.isEmpty()) {
            return undefined
        }
        // Removing the only item in the Q
        if (this.size === 1) {
            this.tail = null
        }

        const first = this.head
        this.head = this.head.next
        this.size--
        return first
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        if (this.isEmpty()){
            return undefined
        }
        return this.head
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.size
    }

    print(){
        let curr = this.head
        console.log("Q --->")
        while (curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
  }
  
  class QueueNode {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    }

const q = new Queue()
q.enqueue(new QueueNode(1))
q.enqueue(new QueueNode(2))
q.enqueue(new QueueNode(3))
q.enqueue(new QueueNode(4))
q.print()

console.log("Q.dequeue() ----> ", q.dequeue().data)
q.print()
console.log("Q.dequeue() ----> ", q.dequeue().data)
q.print()

console.log("Q.front ----> ", q.front().data)
q.print()


console.log("Q.dequeue() ----> ", q.dequeue().data)
console.log("Q.dequeue() ----> ", q.dequeue().data)

console.log("Q is empty ?  ", q.isEmpty())