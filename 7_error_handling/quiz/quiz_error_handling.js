class ValidationError extends Error {
	constructor(message){
		super(message);
		this.name = "ValidationError";
	}
}


const validateNumberInput = (pertama, kedua, ketiga) => {
	if(typeof(pertama) != 'number'){	
		throw new ValidationError("Argumen pertama harus number");
	} 
	else if(typeof(kedua) != 'number'){ 
		throw new ValidationError("Argumen kedua harus number");
	}
	else if(typeof(ketiga) != 'number'){ 
		throw new ValidationError("Argumen ketiga harus number");
	}
}
	
const detectTriangle = (a, b, c) => {
	// TODO 3
	try {
		validateNumberInput(a,b,c);
		if (a === b && b === c) {
			return 'Segitiga sama sisi';
		}
		if (a === b || a === c || b === c) {
			return 'Segitiga sama kaki';
		}
		return 'Segitiga sembarang';
	} catch (error){
		if(error instanceof ValidationError){
			return error.message;
		}
		else if(error instanceof SyntaxError){
			return error.message;
		}
		else if(error instanceof ReferenceError){
			return error.message;
		}
		else {
			return error.stack();
		}
	}
};

console.log(detectTriangle(1,1,1));
console.log(detectTriangle(1, false, 1));
console.log(detectTriangle('a', 3, 5));
console.log(detectTriangle(12, 2, null));
	


