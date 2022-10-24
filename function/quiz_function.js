function minimal(a,b){
	if(a>b){
		return b;
	}
	if(b>a){
		return a;
	}
	if(a==b){
		return a;
	}
}

console.log(minimal(3,3));

let power = (a,b) => {
	return a**b;
}

console.log(power(7,3));
