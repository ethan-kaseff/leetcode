/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    
    if(head == null) return head;
    
    let currentNode = head; 
    let currentChild = new Node(); 
    
    if (currentNode.child != null) currentChild = currentNode.child;

    
    while(currentNode != null && (currentNode.next != null || currentChild != null)) {
        // when current Child 
        if (currentNode.child != null) {
            
            // save hold, currentChild
            let tempHold = currentNode.next;
            currentChild = currentNode.child; 
            
            // remove child
            currentNode.child = null;
            
            // align next row onto main
            currentNode.next = currentChild;
            currentChild.prev = currentNode;
            
            // move through next row
            while(currentChild.next != null) {
                currentChild = currentChild.next;
            }
            
            // at end connect back floating part of main
            if(tempHold != null) {
                currentChild.next = tempHold;
                tempHold.prev = currentChild;
            }
            
            currentNode = currentNode.next;

        } else {
            currentNode = currentNode.next;
        }
        
    }
    
    return head;
    
    
    
    
};