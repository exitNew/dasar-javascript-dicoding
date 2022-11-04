// Spread operator is for combining array or object into new object variable
// example using array
let favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
// can be iterable
console.log(...favorites);

// combining with new array
const others = ["Cake", "Pie", "Donut"];
const allFavoritesWO = [favorites, others];
console.log(allFavoritesWO);

// after using spreadoperator
const allFavoritesW = [...favorites, ...others];
console.log(allFavoritesW);

// example using object
const obj1 = {firstName: "Obi-wan", age: 30};
const obj2 = {lastName: "Kenobi", gender: "M"};

const newObj = {...obj1, ...obj2};
console.log(newObj);
