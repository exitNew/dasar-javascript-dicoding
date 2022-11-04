// fine json
//let json = '{"name": "Yoda", "age":20}';

// bad json
//let json = "{bad json}";

/*
try {
	let user = JSON.parse(json);

	console.log(user.name);
	console.log(user.age);
} catch(error){
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}
*/

/*
// half bad json
let json = '{ "age": 20 }';

try {
	let user = JSON.parse(json);

	if(!user.name){
		throw new SyntaxError("Name Required");
	}

	// errorCode;
	
	console.log(user.name);
	console.log(user.age);

} catch(error){
	console.log(`JSON error: ${error.message}`);
}*/


// using instanceof
let json = '{ "age": 20 }';

try {
	let user = JSON.parse(json);

	if(!user.name){
		throw new SyntaxError("Name Required");
	}

	// errorCode;
	
	console.log(user.name);
	console.log(user.age);

} catch(error){
	if (error instanceof SyntaxError){
		console.log(`JSON Error: ${error.message}`);
	}
	if (error instanceof ReferenceError){
		console.log(error.message);
	}
	console.log(error.stack);
}






