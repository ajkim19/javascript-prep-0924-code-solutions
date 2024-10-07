// addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);

console.log(sum);

// convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(3);

console.log(minutes);

// getGreeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const greeting = getGreeting('Everyone');

// addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(4, 6);

console.log(sumTimesFive);

// multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedByFive = multiplyAndDivideBy5(15, 20);

console.log(productDividedByFive);

// subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(250, 100);

console.log(difference);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const circumference = getCircleCircumference(5);

console.log(circumference);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Aaron', 'Kim');

console.log(fullName);

// cube
function cube(number) {
  return number * number;
}

const cubed = cube(4);

console.log(cubed);
