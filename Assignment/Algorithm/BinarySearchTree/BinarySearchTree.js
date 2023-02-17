class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
 * Determines if this tree is empty.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean} Indicates if this tree is empty.
 */
    isEmpty() {
        if (this.root == null) {
            console.log("Tree is empty")
            return true
        } else {
            return false
        }
    }


    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */

    insert(newVal) {
        const newNode = new BSTNode(newVal)
        if (this.isEmpty()) {
            // Inserting ROOT
            console.log(`Inserting ${newVal} as the ROOT`)
            this.root = newNode
        } else {
            let curr = this.root
            // Traverse the list while current node is not null
            while (curr) {
                // Traverse RIGHT
                if (newVal > curr.data) {
                    // console.log("Traversing to the RIGHT of ", curr.data)
                    if (curr.right !== null) {
                        curr = curr.right
                    } else {
                        // Insert RIGHT
                        console.log(`Inserting ${newVal} to the RIGHT of ${curr.data}`)
                        curr.right = newNode
                        break
                    }
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", curr.data)
                    if (curr.left !== null) {
                        curr = curr.left
                    } else {
                        // Insert LEFT
                        console.log(`Inserting ${newVal} to the LEFT of ${curr.data}`)
                        curr.left = newNode
                        break
                    }
                }
            }
        }
        return this
    }

    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()) {
            // Inserting ROOT
            console.log(`Inserting ${newVal} as the ROOT`)
            this.root = new BSTNode(newVal)
        } else {
            if (curr) {
                // Traverse RIGHT
                if (newVal > curr.data) {
                    // console.log("Traversing to the RIGHT of ", curr.data)
                    if (curr.right !== null) {
                        this.insertRecursive(newVal, curr.right)
                    } else {
                        // Insert RIGHT
                        console.log(`Inserting ${newVal} to the RIGHT of ${curr.data}`)
                        curr.right = new BSTNode(newVal)
                    }
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", curr.data)
                    if (curr.left !== null) {
                        this.insertRecursive(newVal, curr.left)
                    } else {
                        // Insert LEFT
                        console.log(`Inserting ${newVal} to the LEFT of ${curr.data}`)
                        curr.left = new BSTNode(newVal)
                    }
                }
            }
        }
        return this
    }

    /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    min(current = this.root) {
        if (current) {
            if (current.left === null) {
                return current.data
            }
            return this.min(current.left)
        } else {
            return NaN
        }
    }

    max(current = this.root) {
        if (current) {
            if (current.right === null) {
                return current.data
            }
            return this.max(current.right)
        } else {
            return NaN
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        if (startNode) {
            return this.max(startNode) - this.min(startNode)
        } else {
            return NaN
        }
    }

    contains(searchVal) {
        if (!this.isEmpty()) {
            let curr = this.root
            // Traverse the list while either left or right is not null
            while (curr) {
                // console.log("CURRENT ************ ", curr.data)
                if (searchVal === curr.data) {
                    return true;
                }
                // Traverse RIGHT
                if (searchVal > curr.data) {
                    // console.log("Traversing to the RIGHT of ", curr.data)
                    curr = curr.right
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", curr.data)
                    curr = curr.left
                }
            }
        }
        return false
    }

    containsRecursive(searchVal, current = this.root) {
        if (this.isEmpty()) {
            return false
        } else {
            // Traverse the list while either left or right is not null
            if (current) {
                // console.log("currentENT ************ ", current.data)
                if (searchVal === current.data) {
                    return true;
                }
                // Traverse RIGHT
                if (searchVal > current.data) {
                    // console.log("Traversing to the RIGHT of ", current.data)
                    return this.containsRecursive(searchVal, current.right)
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", current.data)
                    return this.containsRecursive(searchVal, current.left)
                }
            } else {
                return false
            }
        }

    }

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data)
            this.toArrPreorder(node.left, vals)
            this.toArrPreorder(node.right, vals)
        }
        return vals
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
    */
    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals)
            vals.push(node.data)
            this.toArrInorder(node.right, vals)
        }
        return vals
    } 

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (this.isEmpty()) {
            return null;
        }

        spaceCnt += spaceIncr;
        if (node.right) this.print(node.right, spaceCnt);

        console.log(" ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) + `${node.data}`);

        if (node.left) this.print(node.left, spaceCnt);
    }
}



const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(25)
bst.insert(5)
bst.insert(15)
bst.insert(22)
bst.insert(50)

bst.insert(16)
bst.insert(27)

console.log("The min value in the tree is ", bst.min())
console.log("The max value in the tree is ", bst.max())

console.log("Is 15 present in the tree ? ", bst.contains(15))
console.log("Is 27 present in the tree ? ", bst.contains(27))
console.log("Is 100 present in the tree ? ", bst.contains(100))

console.log("Is 15 present in the tree - RECURSIVE ? ", bst.containsRecursive(15))
console.log("Is 27 present in the tree - RECURSIVE? ", bst.containsRecursive(27))
console.log("Is 100 present in the tree - RECURSIVE? ", bst.containsRecursive(100))

const bst2 = new BinarySearchTree()
bst2.insertRecursive(20)
bst2.insertRecursive(10)
bst2.insertRecursive(25)
bst2.insertRecursive(5)
bst2.insertRecursive(15)
bst2.insertRecursive(22)
bst2.insertRecursive(50)

console.log("The range starting at 20 is ", bst.range())
console.log("The range starting at 50 is ", bst.range(bst.root.right.right))

bst.print()
console.log("DFS Pre-order ---> ", bst.toArrPreorder())
console.log("DFS In-order ---> ", bst.toArrInorder())