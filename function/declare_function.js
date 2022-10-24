
// funciton with parameter

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

// annonymous function

const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));
