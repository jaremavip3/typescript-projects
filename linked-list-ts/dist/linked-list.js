"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    addNode(value) {
        if (value === null || value === undefined)
            return false;
        if (this.headNode == null) {
            this.headNode = new Node(value);
            this.tailNode = this.headNode;
            this.totalNodes = 1;
            return true;
        }
        else {
            this.tailNode.next = new Node(value, this.tailNode);
            this.tailNode = this.tailNode.next;
            this.totalNodes++;
            return true;
        }
    }
    deleteNode(value) {
        let currentNode = this.headNode;
        let previousNode = null;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                if (previousNode === null) {
                    // If the found value is the head node
                    this.headNode = currentNode.next;
                    if (this.headNode === null) {
                        // If the list is now empty, also update the tail node
                        this.tailNode = null;
                    }
                }
                else {
                    previousNode.next = currentNode.next;
                    if (currentNode === this.tailNode) {
                        // If the found value is the tail node, update the tail node
                        this.tailNode = previousNode;
                    }
                }
                this.totalNodes--;
                return console.log("Element " + value + " is deleted");
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return console.log("Element " + value + " is not found"); // If node is not found
    }
    searchNode(value) {
        let currentNode = this.headNode;
        for (let i = 0; i < this.totalNodes; i++) {
            if (currentNode.value === value)
                return console.log("Found element: " + currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log("Element " + value + " not found");
    }
    showLinkedList() {
        let string = "";
        let currentNode = this.headNode;
        for (let i = 0; i < this.totalNodes; i++) {
            switch (i) {
                case 0:
                    string += "HEAD -> [" + currentNode.value + "] -> ";
                    currentNode = currentNode.next;
                    continue;
                case this.totalNodes - 1: // if last node
                    string += "[" + currentNode.value + "] -> TAIL";
                    currentNode = currentNode.next;
                    continue;
                default:
                    string += "[" + currentNode.value + "] -> ";
                    currentNode = currentNode.next;
            }
        }
        if (string)
            return console.log(string);
        return console.log("Linked List is empty");
    }
    showHeadNode() {
        if (this.headNode === null)
            return console.log("Linked List is empty");
        console.log(this.headNode.value);
    }
    showTailNode() {
        if (this.tailNode === null)
            return console.log("Linked List is empty");
        console.log(this.tailNode.value);
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map