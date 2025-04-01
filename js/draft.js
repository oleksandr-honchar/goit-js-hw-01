const age = 10;
let totalPrice = 100.5;
const userName = "Alice";
const message = "hello";
const isOpen = false;
let user = null;
let product;

console.log(typeof product);

// Арифметичні операції

const x = 10;
const y = 5;
const sum = x + y;
const difference = x - y;
const product1 = x * y;
const quotient = x / y;
const remainder = x % y;

console.log(sum);
console.log(difference);
console.log(product1);
console.log(quotient);
console.log(remainder);

// Порівняння

const a = 5;
const b = 10;
const isEqual = a === b;
const isNotEqual = a !== b;
const isGreaterThan = a > b;
const isLessThan = a < b;
const isGreaterOrEqual = a >= b;
const isLessOrEqual = a <= b;

console.log(isEqual);
console.log(isNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGreaterOrEqual);
console.log(isLessOrEqual);

// Логічні операції

const isSunny = true;
const isWarm = true;
const shouldGoOutside = isSunny && isWarm;

console.log(shouldGoOutside);

let students = 100;
students += 50;
console.log(students);

students -= 30;
console.log(students);

students *= 2;
console.log(students);

students /= 4;
console.log(students);

students %= 3;
console.log(students);

const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName1 = `${firstName} ${lastName}`;
console.log(fullName1);

const companyName = "Boston Dynamics";
const repairBots = 150;
const defenceBots = 50;

const msg = `${companyName} has ${repairBots + defenceBots} robots in stock.`;
console.log(msg);

console.log(5 + "3");
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log(5 / 2);
console.log("5" / "2");

console.log(String(5) + String(3));
console.log(Number("5") + Number("3"));
console.log(Number("5") - Number("3"));
console.log(Number("5") * Number("3"));
console.log(Number("5") / Number("2"));
console.log(Number("5") / Number("2"));

console.log(typeof String(5));
console.log(typeof Number("5"));

console.log(typeof String(5 + "3"));
console.log(typeof Number("5" + "3"));
console.log(typeof Number("5" - "3"));
console.log(typeof Number("5" * "3"));
console.log(typeof Number("5" / "2"));
console.log(typeof Number("5" / "2"));

console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log("5" / "2");

console.log("5" + Number("3"));
console.log("5" - Number("3"));
console.log("5" * Number("3"));
console.log("5" / Number("2"));

console.log(Number("5") + String(3));
console.log(Number("5") - String(3));
console.log(Number("5") * String(3));
console.log(Number("5") / String(2));

console.log(Number(true));
console.log(Number(false));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));

const delta = 1000;

const salary = 5000;

console.log(salary);
console.log(delta);

console.log(salary + delta);
console.log(salary - delta);
console.log(salary * delta);
console.log(salary / delta);
console.log(salary % delta);
