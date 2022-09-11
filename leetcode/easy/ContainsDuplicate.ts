function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();
     
     for(const n of nums) {
         if (set.has(n)) return true;
         set.add(n);
     }
 
     return false;
 };



console.time('containsDuplicate1 time');
const containsDuplicate1 = containsDuplicate([1,2,3,1]);
console.timeEnd('containsDuplicate1 time');
console.log('containsDuplicate1 = ', containsDuplicate1, ' => ', containsDuplicate1 === true);

console.time('containsDuplicate2 time');
const containsDuplicate2 = containsDuplicate([1,2,3,4]);
console.timeEnd('containsDuplicate2 time');
console.log('containsDuplicate2 = ', containsDuplicate2, ' => ', containsDuplicate2 === false);

console.time('containsDuplicate3 time');
const containsDuplicate3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
console.timeEnd('containsDuplicate3 time');
console.log('containsDuplicate3 = ', containsDuplicate3, ' => ', containsDuplicate3 === true);


export default { containsDuplicate: containsDuplicate }