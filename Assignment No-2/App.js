// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}


// 2. Function to add, subtract, multiply, divide using switch
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default:
      return 'Invalid operator';
  }
}

// Example usage of calculate function
console.log("Calculate examples:");
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 


// 3. Function to find tax using switch
function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary';
  }

  return salary * taxRate;
}

// Example usage of findTax function
console.log("Tax on salary:");
console.log(findTax(400000));  
console.log(findTax(750000));  
console.log(findTax(1200000)); 
console.log(findTax(1600000)); 


// 4. Function to find sum of products of corresponding digits
function sumOfDigitProducts(n1, n2) {
  const str1 = n1.toString().split('').reverse();
  const str2 = n2.toString().split('').reverse();

  const maxLength = Math.max(str1.length, str2.length);
  let sum = 0;

  for (let i = 0; i < maxLength; i++) {
    const digit1 = parseInt(str1[i] || '0', 10);
    const digit2 = parseInt(str2[i] || '0', 10);
    sum += digit1 * digit2;
  }

  return sum;
}

// Example usage of sumOfDigitProducts function
console.log("Sum of digit products:");
console.log(sumOfDigitProducts(6, 34));  
console.log(sumOfDigitProducts(123, 456)); 
