/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    var helper = function(node) {
        if (!node) {
            return 0;
        }
        var left = helper(node.left);
        var right = helper(node.right);

        if (node.left) {
            left += node.left.val === node.val ? 1 : -left;
        }

        if (node.right) {
            right += node.right.val === node.val ? 1 : -right;
        }

        max = Math.max(max, left + right);

        return Math.max(left, right);
    };

    var max = 0;
    helper(root);
    return max;
};
