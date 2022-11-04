const coffeeStock = {
	arabica: 100,
	robusta: 150,
	liberica: 200
};

// jika export hanya satu
//module.exports = coffeeStock;
//console.log(module);

// jika export ada dua atau lebih
const isCoffeeMachineReady = true;

module.exports = {coffeeStock, isCoffeeMachineReady};
