const Stack = require('./Stack')
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
        const node = new QueueNode(item)
        // Point the tail to the new item
        if (!this.isEmpty()) {
            this.tail.next = node
        }
        this.tail = node

        // if this is the first item, point the head to the new item
        this.head = (this.isEmpty()) ? node : this.head
        // if this is the second item, point head.next to the new item
        this.head.next = (this.size === 1) ? node : this.head.next
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
        if (this.isEmpty()) {
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
    getSize() {
        return this.size
    }

    print() {
        let curr = this.head
        console.log("Q --->")
        while (curr) {
            console.log(curr.data)
            curr = curr.next
        }
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) {
        let runner = this.head;

        // Till we reach the end of the Q
        while (runner) {
            if (searchVal === runner.data) {
                return true
            }
            runner = runner.next
        }
        return false
    }

    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        vals.forEach(val => this.enqueue(val))
        return this
    }

/**
* Compares this queue to another given queue to see if they are equal.
* Avoid indexing the queue items directly via bracket notation, use the
* queue methods instead for practice.
* Use no extra array or objects.
* The queues should be returned to their original order when done.
* - Time: O(?).
* - Space: O(?).
* @param {Queue} q2 The queue to be compared against this queue.
* @returns {boolean} Whether all the items of the two queues are equal and
*    in the same order.
*/
    compareQueues(q2) {
        if (this.getSize() != q2.getSize()){
            return false
        }

        let curr1 = this.head
        let curr2 = q2.head
        while (curr1){
            if (curr1.data !== curr2.data){
                return false
            }
            curr1 = curr1.next
            curr2 = curr2.next
        }
        return true
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() { 
        const mid = Math.floor(this.getSize()/2)
        const odd = this.getSize() % 2
        let curr1 = this.head
        let curr2 = this.head
        let j=1
        while (j === mid+odd+1){
            curr2 = curr2.next
            j++
        }

        const stack = new Stack()
        while (curr2){
            stack.push(curr2)
            curr2 = curr2.next
        }

        while (curr1){
            if (curr1.data !== stack.pop().data){
                return false
            }
            curr1 = curr1.next
        }
        return true
    }

}

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.print()
console.log("Is 3 present in the Q ? ", q.contains(3))
console.log("Is 9 present in the Q ? ", q.contains(9))

console.log("Q.dequeue() ----> ", q.dequeue().data)
q.print()
console.log("Q.dequeue() ----> ", q.dequeue().data)
q.print()

console.log("Q.front ----> ", q.front().data)
q.print()


console.log("Q.dequeue() ----> ", q.dequeue().data)
console.log("Q.dequeue() ----> ", q.dequeue().data)

console.log("Q is empty ?  ", q.isEmpty())

console.log("Q after adding array [9, 8, 7, 6, 5] ")
q.seed([9, 8, 7, 6, 5]).print()

const q3 = new Queue()
q3.seed([9, 8, 7, 8, 9]).print()

console.log("Is Palindrome ---> ", q3.isPalindrome())