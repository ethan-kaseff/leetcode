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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k, hash={}) {
    
    hash[root.val] = root.val;
    
    if (root.left) findTarget(root.left, k, hash);
    if (root.right) findTarget(root.right, k, hash);
    
    for (let key in hash) {
        if (hash[k-key] && hash[k-key] != key) return true;
    }
    return false;
    
    
};