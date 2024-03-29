/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} A new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


/**
* This class keeps track of the start (head) of the list and to store all the
* functionality (methods) that each list should have.
*/
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
    this.last = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    const node = new ListNode(data)

    if (this.isEmpty()) {
      this.head = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
  }

  insertAtFront(data) {
    const node = new ListNode(data)

    if (this.isEmpty()) {
      this.head = node
      this.last = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty. Nothing to remove.")
      return null
    } else {
      const data = this.head.data
      this.head = this.head.next
      console.log(`Removed ${data} from the front of the list`)
      return data
    }
  }

  removeFromBack() {
    if (this.isEmpty()) {
      console.log("List is empty. Nothing to remove.")
      return null
    } else {
      let curr = this.head
      let prev = this.head
      while (curr.next !== null) {
        prev = curr
        curr = curr.next
      }

      const data = curr.data
      this.last = prev
      this.last.next = null
      console.log(`Removed ${data} from the back of the list`)
      return data
    }
  }

  /**
   * 
   * @param {Array<any>} vals 
   * @returns {SinglyLinkedList}
   * insert each value in an array into SLL
  */
  seedFromArr(vals, isFront) {
    vals.forEach(val => isFront ? this.insertAtFront(val) : this.insertAtBack(val))
    return this
  }


  toArr() {
    let newArr = []
    let curr = this.head
    while (curr !== null) {
      newArr.push(curr.data)
      curr = curr.next
    }
    return newArr
  }

  /**
* Creates a new node with the given data and inserts it at the back of
* this list.
* - Time: O(?).
* - Space: O(?).
* @param {any} data The data to be added to the new node.
* @param {?ListNode} runner The current node during the traversal of this list
*    or null when the end of the list has been reached.
* @returns {SinglyLinkedList} This list.
*/
  insertAtBackRecursive(data, runner = this.head) {

    if (this.isEmpty()) {
      const node = new ListNode(data)
      this.head = node
      this.last = node
    } else if (runner.next === null) {
      const node = new ListNode(data)
      runner.next = node
      this.last = node
    } else {
      this.insertAtBackRecursive(data, runner.next)
    }
  }


  printList() {
    if (this.isEmpty()) {
      console.log("Empty List")
      return
    }

    let curr = this.head
    console.log("Current List Values :")
    while (curr !== null) {
      console.log(curr.data)
      curr = curr.next
    }
  }

  contains(val) {
    if (this.isEmpty()) {
      console.log("Empty List")
      return false
    }

    let curr = this.head
    while (curr !== null) {
      if (curr.data === val) {
        return true
      }
      curr = curr.next
    }
    return false
  }


  average() {
    if (this.isEmpty()) {
      console.log("Empty List")
      return NaN
    }

    let curr = this.head
    let cnt = 0
    let sum = 0

    while (curr !== null) {
      cnt++
      sum += curr.data
      curr = curr.next
    }

    return (sum / cnt)
  }

  containsRecursive(val, current = this.head) {
    if (current === null) {
      return false
    }
    if (current.data === val) {
      return true
    }

    return this.containsRecursive(val, current.next)
  }

  getSecondToLast = () => {
    if (this.isEmpty()) {
      console.log("Empty List")
      return null
    }

    let curr = this.head
    let prev = this.head
    while (curr.next !== null) {
      prev = curr
      curr = curr.next
    }

    if (prev === curr) { //Only 1 node, so no second to last
      return null
    } else {
      return prev.data
    }
  }

  removeVal(val) {
    let found = false
    if (this.isEmpty()) {
      console.log("Empty List")
    } else {
      let curr = this.head
      let prev = this.head

      // Till the end of list is reached
      while (curr !== null) {
        if (curr.data === val) {
          found = true
          // If First/Head Node 
          if  (curr === this.head) {
            this.head = curr.next
          } else {
            prev.next = curr.next
          }
        }

        prev = curr
        curr = curr.next
      }
    }
    return found;
  }
}




const sll = new SinglyLinkedList()
sll.insertAtBack(5)
sll.insertAtBack(10)
sll.insertAtBack(3)
console.log("Added values at back/end - 5 10 3")
sll.printList()

sll.insertAtFront(25)
sll.insertAtFront(1)
sll.insertAtFront(43)
console.log("Added values at front/beginning - 25 1 43")
sll.printList()

console.log("Array --->", sll.toArr())

sll.removeFromFront()
console.log("After Removing value at front/beginning ")
sll.printList()

sll.removeFromBack()
console.log("After Removing value at back/end  ")
sll.printList()

console.log("Create a new Linked List from the array (add to front)- [7, 4, 9, 1, 5]")
const sll2 = new SinglyLinkedList()
sll2.seedFromArr([7, 4, 9, 1, 5], true)
sll2.printList()

console.log("Create a new Linked List from the array (add to back)- [7, 4, 9, 1, 5]")
const sll3 = new SinglyLinkedList()
sll3.seedFromArr([7, 4, 9, 1, 5])
sll3.printList()

const sll4 = new SinglyLinkedList()
sll4.insertAtBackRecursive(9)
sll4.insertAtBackRecursive(22)
sll4.insertAtBackRecursive(4)
sll4.insertAtBackRecursive(27)
sll4.insertAtBackRecursive(16)
console.log("Added values at back/end using RECURSION method- 9 22 4 27 16")
sll4.printList()

console.log(`Is 22 present in the list ? `, sll4.contains(22))
console.log(`Is 1 present in the list ? `, sll4.contains(1))

console.log(`Recursion - Is 22 present in the list ? `, sll4.containsRecursive(22))
console.log(`Recursion - Is 1 present in the list ? `, sll4.containsRecursive(1))

console.log("The average of - 9 22 4 27 16 is ", sll4.average())

console.log("Second to Last from [7, 4, 9, 1, 5] - ", sll3.getSecondToLast())

const sll5 = new SinglyLinkedList()
console.log("Second to Last from [] - ", sll5.getSecondToLast())
sll5.insertAtBack(7)
console.log("Second to Last from [7] - ", sll5.getSecondToLast())
sll5.insertAtBack(9)
console.log("Second to Last from [7, 9] - ", sll5.getSecondToLast())

console.log("Create a new Linked List from the array (add to back)- [9, 7, 4, 9, 1, 9, 5, 15, 9]")
const sll6 = new SinglyLinkedList()
// sll6.seedFromArr([9, 9,9,9,9,9,9,9, 9])
// sll6.seedFromArr([9, 15, 9])
sll6.seedFromArr([9, 7, 4, 9, 1, 9, 5, 15, 9])

console.log("After removing 9")
sll6.removeVal(9)
sll6.printList()


