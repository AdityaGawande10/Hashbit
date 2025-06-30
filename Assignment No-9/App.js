// 1. Scope differences with let, const, and var
function scopeTest() {
  if (true) {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";

    console.log("Inside block:");
    console.log(a); // I am var
    console.log(b); // I am let
    console.log(c); // I am const
  }

  console.log("Outside block:");
  console.log(a); // ✅ Works - var is function scoped
  // console.log(b); ❌ Error - let is block scoped
  // console.log(c); ❌ Error - const is block scoped
}

scopeTest();

/* OUTPUT:
Inside block: var updated in block let inside block const inside block
Outside block: var updated in block let scoped const scoped
*/

// 2. Return second fruit from array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit()); 

// 3. Modify array with push() and pop()
function modifyArray(arr) {
  arr.push("newElement");
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray(["a", "b", "c"]));

// 4. Use map() to square numbers
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(nums) {
  return nums.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));

// 5. Filter out even numbers
function getOddNumbers(nums) {
  return nums.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", getOddNumbers(numbers));

// 6. Object and greeting function
const person = {
  name: "Aditya",
  age: 21,
  occupation: "Developer"
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and I work as a ${p.occupation}.`);
}
greetPerson(person);

// 7. Area of rectangle from object
function calculateArea(rect) {
  return rect.width * rect.height;
}
console.log("Area:", calculateArea({ width: 5, height: 4 })); 

// 8. Get object keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Keys:", getObjectKeys({ a: 1, b: 2, c: 3 }));

// 9. Merge two objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));

// 10. Sum using reduce()
function sumArray(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log("Sum:", sumArray([10, 20, 30, 40]));
