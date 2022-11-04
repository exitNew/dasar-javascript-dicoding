// Pure Function

const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Immutability

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */


// Recursive
const countDown = start => {
  console.log(start);
  if(start > 0) countDown(start-1);
};

countDown(10);

// High Order function
const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */



