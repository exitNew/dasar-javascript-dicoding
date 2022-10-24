const coffeeStock = {
	arabica: 100,
	robusta: 150,
	liberica: 200
};

// using default for only one type
//export default coffeeStock;


// if multiple type to be exported
const isCoffeeMachineReady = true;

export {coffeeStock, isCoffeeMachineReady};
