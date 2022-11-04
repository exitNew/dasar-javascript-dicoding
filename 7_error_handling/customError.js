const ValidationError = require("./ValidationError");

let json = '{"age": 20}';

try{
	let user = JSON.parse(json);
	
	if(!user.name){
		throw new ValidationError("'Name' is required");
	}

	if(!user.age){
		throw new ValidationError("'Age' is required");
	}

	console.log(user.name);
	console.log(user.age);
} catch(error){
	if(error instanceof SyntaxError){
		console.log(`JSON error: ${error.message}`);
	}
	else if(error instanceof ReferenceError){
		console.log(`Reference error: ${error.message}`);
	}
	else if(error instanceof ValidationError){
		console.log(`Invalid Data: ${error.message}`);
	}
	else{ 
		console.log(error.stack);
	}
}

