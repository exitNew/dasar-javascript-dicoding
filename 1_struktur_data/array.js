// example of array
let myArray  = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

// viewing one array 
console.log(myArray[1]);

// array cannot be view if exceed of array size
console.log(myArray[5]);

// printting array size
console.log(myArray.length);

// adding last array using push
myArray.push("Cookies");
console.log(myArray);

// removing last array using pop
myArray.pop();
console.log(myArray);

// adding first array with unshift
myArray.unshift("Honey");
console.log(myArray);

// removing first array with shift
myArray.shift();
console.log(myArray);

// delete array location with delete keyword
delete myArray[1];
console.log(myArray);

// delete array with splice
myArray.splice(0, 2); // deleting first array to the 2 array
console.log(myArray);
