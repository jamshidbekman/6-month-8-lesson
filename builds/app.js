"use strict";
// Task 1
let firstname = "John";
let age = 25;
let isStudent = true;
let scores = [85, 92, 78];
const students = [{ firstname: "Ali", grade: 5 }];
// Task 3
const coordinates = [10, 20];
const user = {
    id: 1,
    name: "Jamshidbek",
    email: "jamshidbekmansurov01@gmail.com",
};
const resStatus = "success";
const product = {
    name: "laptop",
    price: 599,
    inStock: 10,
};
const myCar = {
    brand: "Chevrolet",
    model: "Monza",
    year: 2023,
};
const myVehicle = {
    brand: "Honda",
    model: "Crider",
    year: 2023,
};
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0)
        throw new Error("0 ga bolib bolmaydi");
    return a / b;
};
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
// Task 9
function Logger(log) {
    console.log(log);
}
Logger("hello world");
// Task 10
const greeting = (name, message) => {
    return `${message ? message : "Hello"} ${name}`;
};
console.log(greeting("Jamshidbek", "Salom"));
// Task 11
const jsonString = '{"name": "John", "age": 25}';
const person = JSON.parse(jsonString);
console.log(person.name);
console.log(person.age);
// Task 12
const formatValue = (value) => {
    return `${value}`;
};
console.log(formatValue(1));
