const countThis = number => {
		console.log(number);
		if(number > 0) countThis(number-1);
}

countThis(10);

const array = [1,2,3,4,5];

const even = array.some(element => element % 2 === 0);

console.log(even);
