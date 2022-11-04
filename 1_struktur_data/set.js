// example of set, set is not indexed and unorderd
const mySet = new Set([
	1, 4, 5, 6, 4, 1
]);

console.log(mySet);

// adding new set
mySet.add(5);
mySet.add(3);
console.log(mySet);

// delete set
mySet.delete(4);
console.log(mySet);

// mengembalikan seluruh set 
console.log(mySet.values());

// has
console.log(mySet.has(4));
