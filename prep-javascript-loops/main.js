// create your loops here.

// whileLoop1
function whileLoop1() {
  const numArray = [];

  let index = 0;

  while (index < 10) {
    numArray.push(index);

    index++;
  }

  return numArray;
}
const whileLoop1Result = whileLoop1();

console.log(whileLoop1Result);

// whileLoop2
function whileLoop2() {
  const numArray = [];

  let index = 0;

  while (index < 20) {
    numArray.push(index);

    index += 2;
  }

  return numArray;
}
const whileLoop2Result = whileLoop2();

console.log(whileLoop2Result);

// forLoop1
function forLoop1() {
  const numArray = [];

  for (let i = 0; i < 10; i++) {
    numArray.push(i);
  }

  return numArray;
}

const forLoop1Result = forLoop1();

console.log(forLoop1Result);

// forLoop2
function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time to explosion: ', i);
  }
}

forLoop2();

// For In loops
const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

// forInLoop1
function forInLoop1(object) {
  const newArray = [];

  for (const key in person) {
    newArray.push(key);
  }

  return newArray;
}

const forInLoop1Result = forInLoop1();

console.log(forInLoop1Result);

// forInLoop2
function forInLoop2(object) {
  const newArray = [];

  for (const key in person) {
    newArray.push(person[key]);
  }

  return newArray;
}

const forInLoop2Result = forInLoop2();

console.log(forInLoop2Result);
