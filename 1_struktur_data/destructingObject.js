// example of destructing object
const profile = {
	firstName: "John",
	lastName: "Doe",
	age: "32",
};
console.log(profile);

// destructing object
//const {firstName, lastName, age} = profile
({firstName, lastName, age} = profile)
console.log(`${firstName} ${lastName} ${age}`);

// or with brackets, javascript read this as destructing object
console.log(firstName);
console.log(lastName);

// assigning default value if not available
({firstName, lastName, gender = 'M'} = profile)
console.log(gender);

// assign with local value
({firstName: localFirstName, lastName: localLastName, gender: localGender = 'M'} = profile)
console.log(localFirstName);
console.log(localLastName);
console.log(localGender);
