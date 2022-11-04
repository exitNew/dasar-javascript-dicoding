// class with prototype
// using prototype is more better for allocation memory, because it didnt have to copy to other object

function Mail1(){
	this.from = 'pengirim@dicoding.com';
};

Mail1.prototype.sendMessage = function(msg, to){
	console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail1();
mail1.sendMessage('Hallo', 'penerima@dicoding.com');

// doesnt have own property
let m1 = mail1.hasOwnProperty('sendMessage');
console.log(m1);

// class without prototype
// without using prototype object can be added in new instance

function Mail2(){
	this.from = "pengirim@dicoding.com";
	this.sendMessage = function(msg, to){
		console.log(`you send: ${msg} to ${to} from ${this.from}`);
	}
};

// have own property
const mail2 = new Mail2();
mail2.sendMessage("Hello", "penerima@dicoding.com");

let m2 = mail2.hasOwnProperty('sendMessage');
console.log(m2);

// class with prototype syntatic sugar
class Mail3{
	constructor(){
		this.from = "pengirim@dicoding.com";
	}

	sendMessage(msg, to){
		console.log(`you send: ${msg} to ${to} from ${this.from}`);
	};
}

const mail3 = new Mail3();
mail3.sendMessage("Hello", "penerima@dicoding.com");

let m3 = mail3.hasOwnProperty('sendMessage');
console.log(m3);



