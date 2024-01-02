class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T, next: Node<T> = null) {
    this.value = value
    this.next = next
  }
}

export class LinkedList<T> {
  headNode: Node<T>
  tailNode: Node<T>
  totalNodes: number

  public addNode(value: T) {
    if (value === null || value === undefined) return false
    if (this.headNode == null) {
      this.headNode = new Node(value)
      this.tailNode = this.headNode
      this.totalNodes = 1
      return true
    } else {
      this.tailNode.next = new Node(value, this.tailNode)
      this.tailNode = this.tailNode.next
      this.totalNodes++
      return true
    }
  }

  public deleteNode(value: T) {
    let currentNode: Node<T> = this.headNode
    let previousNode: Node<T> = null

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (previousNode === null) {
          // If the found value is the head node
          this.headNode = currentNode.next
          if (this.headNode === null) {
            // If the list is now empty, also update the tail node
            this.tailNode = null
          }
        } else {
          previousNode.next = currentNode.next
          if (currentNode === this.tailNode) {
            // If the found value is the tail node, update the tail node
            this.tailNode = previousNode
          }
        }
        this.totalNodes--
        return console.log("Element " + value + " is deleted")
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return console.log("Element " + value + " is not found") // If node is not found
  }

  public searchNode(value: T) {
    let currentNode: Node<T> = this.headNode
    for (let i = 0; i < this.totalNodes; i++) {
      if (currentNode.value === value) return console.log("Found element: " + currentNode.value)
      currentNode = currentNode.next
    }
    return console.log("Element " + value + " not found")
  }

  public showLinkedList() {
    let string = ""
    let currentNode: Node<T> = this.headNode
    for (let i = 0; i < this.totalNodes; i++) {
      switch (i) {
        case 0:
          string += "HEAD -> [" + currentNode.value + "] -> "
          currentNode = currentNode.next
          continue
        case this.totalNodes - 1: // if last node
          string += "[" + currentNode.value + "] -> TAIL"
          currentNode = currentNode.next
          continue
        default:
          string += "[" + currentNode.value + "] -> "
          currentNode = currentNode.next
      }
    }
    if (string) return console.log(string)
    return console.log("Linked List is empty")
  }
  public showHeadNode() {
    if (this.headNode === null) return console.log("Linked List is empty")
    console.log(this.headNode.value)
  }
  public showTailNode() {
    if (this.tailNode === null) return console.log("Linked List is empty")
    console.log(this.tailNode.value)
  }
}
