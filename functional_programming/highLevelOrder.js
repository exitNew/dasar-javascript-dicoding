const one = name => `${name}`;

console.log(one("budi"));

// high level order of hello

const hello = () => {
	console.log("Hello");
}

const say = (someFunction) => {
	someFunction();
}

const sayHello = () => {
	return () => {
		console.log("hello");
	}
}

hello();
say(hello);
sayHello()();


