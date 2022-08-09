
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let ptr1: ListNode | null = list1;
    let ptr2: ListNode | null = list2;

    let head: ListNode;
    let tail: ListNode;

    if (ptr1.val < ptr2.val) {
        head = ptr1;
        ptr1 = ptr1.next;
    }
    else{
        head = ptr2;
        ptr2 = ptr2.next;
    }
    tail = head;

    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1.val < ptr2.val) {
            tail.next = ptr1;
            ptr1 = ptr1.next;
        }
        else{
            tail.next = ptr2;
            ptr2 = ptr2.next;
        }

        tail = tail.next;
    }

    if (ptr1 !== null) tail.next = ptr1;
    else tail.next = ptr2;

    return head;
};

const arraryToLinkedList = (arr: any[]) => {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let tail = head;

    for (let i = 1; i < arr.length; i++) {
        tail.next = new ListNode(arr[i]);
        tail = tail.next;
    }
    
    return head;
}

const list1_1 = arraryToLinkedList([1, 2, 4]);
const list1_2 = arraryToLinkedList([1, 3, 4]);
console.time('time1');
const mtl = mergeTwoLists(list1_1, list1_2);
console.timeEnd('time1');
console.log('mergeTwoLists = ', mtl);