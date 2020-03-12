/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let numArray = [];
    let current = head.val;
    numArray.push(current);
    while (head.next != null) {
        head = head.next;
        current = head.val;
        numArray.push(current);
    }
    let headStr = numArray.join("");
    let decimal = parseInt(headStr, 2);
    return decimal;
};

var input = [1,0,1];
console.log(getDecimalValue(input));