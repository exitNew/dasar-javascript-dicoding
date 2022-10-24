//const coffeeStock = require("./state");
//console.log(coffeeStock);

const {coffeeStock, isCoffeeMachineReady} = require("./state");

const makeCoffee = (type, miligrams) => {
	if(coffeeStock[type] <= miligrams) {
		console.log("Kopi habis");
	}
	console.log("Kopi berhasil dibuat");
}

makeCoffee("robusta", 80);

console.log(isCoffeeMachineReady);
