// example of map, is same as object but has compatible with different type of key
const myMap = new Map([
	['1', "a String key"],
	[2, "a Number key"],
	[true, true],
]);

console.log(myMap);

// using get from map
const capital = new Map([
	["Jakarta", "Indonesia"],
	["London", "England"],
	["Tokyo", "Japan"],
]);

console.log(capital.size);
// get key london
console.log(capital.get("London"));
// set new capital
capital.set("New Dehli", "India");
console.log(capital.size);
console.log(capital.get("New Dehli"));

// example using has
console.log(capital.has("Washington"));

// example of using delete
console.log(capital.delete("Tokyo"));
console.log(capital);

// return of all key
console.log(capital.keys());

// return of all values
console.log(capital.values());
