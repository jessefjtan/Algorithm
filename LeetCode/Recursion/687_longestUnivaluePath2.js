var straightUnivaluePath = function(node, uniVal) {
    if(!node || node.val !== uniVal) return 0;
    return Math.max(straightUnivaluePath(node.left, uniVal), straightUnivaluePath(node.right, uniVal)) + 1;
}

var longestUnivaluePath = function(root) {
    if(!root) return 0;

    return Math.max(
        longestUnivaluePath(root.left),
        longestUnivaluePath(root.right),
        straightUnivaluePath(root.left, root.val) + straightUnivaluePath(root.right, root.val)
    )
};
