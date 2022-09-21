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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const startPath = getPath(root, startValue);
    const destPath = getPath(root, destValue);
    
    // Remove common prefix - this is the path to the LCA
    while (startPath[0] === destPath[0]) {
        startPath.shift();
        destPath.shift();
    }
    
    // The path from start to LCA is just "U" the path length times
    const startStr = "U".repeat(startPath.length);
    const destStr = destPath.join("");
    
    return startStr + destStr;
};

function getPath(root, target) {
    const path = [];
    
    const backtrack = node => {
        if (!node) {
            return false;
        }
        
        if (node.val === target) {
            return true;
        }
        
        // Try left subtree
        path.push("L");
        if (backtrack(node.left)) {
            return true;
        }
        path.pop();
        
        // Try right subtree
        path.push("R");
        if (backtrack(node.right)) {
            return true;
        }
        path.pop();
    };
    
    backtrack(root);
    
    return path;
}