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
