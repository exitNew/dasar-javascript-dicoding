class Animal{
	constructor(name, age, isMammal){
		this.name = name;
		this.age = age;
		this.isMammal = isMammal;
	}
}

class Rabbit extends Animal {
	constructor(name, age){
		let isMammal = true;
		super(name, age, isMammal);
	}
	
	eat(){
		return `${this.name} sedang makan`;
	}
	
}

class Eagle extends Animal {
	constructor(name, age){
		let isMammal = false;
		super(name, age, isMammal);
	}

	fly(){
		return `${this.name} sedang terbang`;
	}
}

//const animal = new Animal("Girrafe", 8, true);
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

//console.log(animal.showAnimal());
console.log(myRabbit.eat());
console.log(myEagle.fly());
