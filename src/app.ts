// Task 1

let firstname: string = "John";
let age: number = 25;
let isStudent: boolean = true;
let scores: Array<number> = [85, 92, 78];

// Task 2

type student = {
  firstname: string;
  grade: number;
};

const students: Array<student> = [{ firstname: "Ali", grade: 5 }];

// Task 3

const coordinates: [number, number] = [10, 20];

// Task 4

type userInfo = {
  id: number;
  name: string;
  email: string;
};

const user: userInfo = {
  id: 1,
  name: "Jamshidbek",
  email: "jamshidbekmansurov01@gmail.com",
};

// Task 5

type status = "loading" | "success" | "error";

const resStatus: status = "success";

// Task 6

interface IProduct {
  name: string;
  price: number;
  inStock: number;
}

const product: IProduct = {
  name: "laptop",
  price: 599,
  inStock: 10,
};

// Task 7

interface Car {
  brand: string;
  model: string;
  year: number;
}

type Vehicle = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "Chevrolet",
  model: "Monza",
  year: 2023,
};

const myVehicle: Vehicle = {
  brand: "Honda",
  model: "Crider",
  year: 2023,
};

// Task 8

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;

const subtract: MathOperation = (a, b) => a - b;

const multiply: MathOperation = (a, b) => a * b;

const divide: MathOperation = (a, b) => {
  if (b === 0) throw new Error("0 ga bolib bolmaydi");
  return a / b;
};

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// Task 9

function Logger(log: string): void {
  console.log(log);
}

Logger("hello world");

// Task 10

const greeting = (name: string, message?: string): string => {
  return `${message ? message : "Hello"} ${name}`;
};

console.log(greeting("Jamshidbek", "Salom"));

// Task 11

const jsonString = '{"name": "John", "age": 25}';

type Person = {
  name: string;
  age: number;
};

const person = JSON.parse(jsonString) as Person;

console.log(person.name);
console.log(person.age);

// Task 12

const formatValue = (value: number | string): string => {
  return `${value}`;
};

console.log(formatValue(1));
