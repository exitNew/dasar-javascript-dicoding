// example destructing array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// same as object but using bracket
[firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// if only third food
[,,thirdFood,] = favorites;
console.log(thirdFood);

// default values
const dinnerWithGF = ["Seafood"];
[myFood, herFood = "Salad"] = dinnerWithGF
console.log(myFood);
console.log(herFood);

let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/
