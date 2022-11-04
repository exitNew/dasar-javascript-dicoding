// regular function have declaration and expression

// function declaration
function sayHello(greet) {
	console.log(`${greet}!`);
}

// function expression
const sayNameFD = function (name) {
	console.log(`Nama saya ${name}`)
}

// arrow function only have expression

// function expression
const sayHelloOE = (greet) => {
	console.log(`${greet}!`)
}

const sayNameOE = (name) => {
	console.log(`Nama saya ${name}`)
}


// arrow function if only one argument, parameter doesnt have "("
const sayName = name => {
    console.log(`Nama saya ${name}`)
}

sayName("Leia");

/* output
Nama saya Leia
 */

// arrow function if none argument, parameter must have "()"
const sayHello = () => {
    console.log("Selamat pagi semuanya!")
};

sayHello();

/* output
Selamat pagi semuanya!
 */


// if dont want to use bracket {
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */



