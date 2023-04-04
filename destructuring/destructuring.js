// Problem 1 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [ , otherRandomCar] = cars
// Predict the output
console.log(randomCar)
    // Output: Tesla
console.log(otherRandomCar)
    // Output: Mercedes

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name: otherName} = employee;
// Predict the ouput
// console.log(name);
   // Output: ReferenceError: name is not defined (because, outside the scope, we changed the value of const employee name to otherName)
console.log(otherName);
    // Output: Elon

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
const {age: personAge} = person;
// Predict the ouput
console.log(password)
    // Output: 12345
console.log(hashedPassword)
    // Ouput: undefined (undefined because there is not value password inside the scope)

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const[,,,second] = numbers;
const[,,,,,,,,third] = numbers;
// Predict the output
console.log(first == second)
    // Output: numbers[1] == numbers[3] = false (2 != 5)
    console.log(first == third)
    // Output: numbers[1] == numbers[8] = true  (2 == 2)

// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [ ,willThisWork] = secondKey;
// Predict the outcome
console.log(key);
    // Output: value
console.log(secondKey);
    // Output: 1,5,1,8,3,3
console.log(secondKey[0]);
    // Output: 1
console.log(willThisWork);
    // Output: 5
