/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let leftNodes = root.left ? [root.left] : [];
    let rightNodes = root.right ? [root.right] : []; 
    
    
    let leftVals = root.left ? [root.left.val] : [];
    let rightVals = root.right ? [root.right.val] : [];
    
    while (leftNodes.length > 0 || rightNodes.length > 0) {
        // console.log('leftNodes', leftNodes);
        // console.log('rightNodes', rightNodes);
        // console.log('leftVals', leftVals);
        // console.log('rightVals', rightVals);
        if (leftVals.join() !== rightVals.reverse().join()) return false;
        
        leftVals = []; 
        rightVals = [];
        
        tempLeftNodes = [];
        tempRightNodes = [];
        
        leftNodes.forEach(node => {
            if (node.left) {
                tempLeftNodes.push(node.left);
                leftVals.push(node.left.val);
            } else {
                leftVals.push(null);
            }
            if (node.right) {
                tempLeftNodes.push(node.right);
                leftVals.push(node.right.val);
            } else {
                leftVals.push(null)
            }
        })
        
        rightNodes.forEach(node => {
            if (node.left) {
                tempRightNodes.push(node.left);
                rightVals.push(node.left.val);
            } else {
                rightVals.push(null);
            }
            if (node.right) {
                tempRightNodes.push(node.right);
                rightVals.push(node.right.val);
            } else {
                rightVals.push(null);
            }
        })
        
        // console.log('tempLeftNodes', tempLeftNodes);
        // console.log('tempRightNodes', tempRightNodes);
        
        leftNodes = tempLeftNodes;
        rightNodes = tempRightNodes;
    }
    
    return true;
        
};