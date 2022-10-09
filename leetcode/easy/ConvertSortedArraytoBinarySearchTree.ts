/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null;

    return getBST(nums, 0, nums.length - 1);
};

function getBST(nums: number[], left: number, right: number) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    const Node = new TreeNode(nums[mid]);
    Node.left = getBST(nums, left, mid - 1);
    Node.right = getBST(nums, mid + 1, right);

    return Node;
}