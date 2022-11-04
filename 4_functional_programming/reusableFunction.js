// Array Map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */


// Array Filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */


const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */


// Array Reduce
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);
/**
 * output:
 * 313
 * 
 */


// Array Some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/**
output true
**/

// Array Find
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/


// Array Sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
    Jika, negative maka `a` akan diletakkan sebelum `b`
    Jika, positive maka `b` akan diletakkan sebelum `a`
    Jika, 0 maka tidak ada perubahan posisi.
**/


// Array Every
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

// Array forEach deklarative
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
     
names.forEach((name) => {
	console.log(`Hello, ${name}!`);
});
     
/**
* output:
* Hello, Harry!
* Hello, Ron!
* Hello, Jeff!
* Hello, Thomas!
* 
*/

// Array forEach imperative
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
	console.log(`Hello, ${names[i]}!`);
}
     
/**
* output:
* Hello, Harry!
* Hello, Ron!
* Hello, Jeff!
* Hello, Thomas!
* 
*/



