// example of object 
const user = {
	firstName: "Luke",
	lastName: "Skywalker",
	age: 19,
  isJedi: true,
	"home world": "Tattooine",
};

// output with string interpolation
console.log(`Hello my name is ${user.firstName} ${user.lastName}`);
console.log(`My home world is ${user["home world"]}`);


// example of modifying object
const spaceship = {
	name: "Millenium Falcon",
	manufacturer: "Corellian Engineering Corporation",
	maxSpeed: 1200,
	color: "Light gray",
};

// changing spaceship object
spaceship.color = "Glossy Red";
spaceship["maxSpeed"]= 1300;
console.log(spaceship);

// this is adding to new object
spaceship.class = "Light freighter"; 
console.log(spaceship);

// delete property on object
delete spaceship.manufacturer;
console.log(spaceship);
