const stock = {
	coffeeBeans: 250,
	water: 1000,
}

const checkStock = () => {
	return new Promise((resolve, reject) => {
		if(stock.coffeeBeans >= 16 && stock.water >=250){
			resolve("Stok Cukup Bisa membuat kopi");
		} else {
			reject("Stok tidak cukup");
		}
	});
};

const handleSuccess = resolve => {
	console.log(resolve);
}

const handleFailure = reject => {
	console.log(reject);
}

checkStock().then(handleSuccess, handleFailure);
