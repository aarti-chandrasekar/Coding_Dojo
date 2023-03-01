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
    size() {
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
            if (searchVal === runner.data){
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