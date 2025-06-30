// Q1: Remove state names starting with vowels
let states = ['Andhra Pradesh', 'Bihar', 'Odisha', 'Uttar Pradesh', 'Punjab', 'Tamil Nadu', 'Assam', 'Kerala'];
let filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log('Q1:', filteredStates);

// Q2: Reverse the words in a string
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log('Q2:', reversedStr);

// Q3: Use array.splice to convert 'INDIA' to 'INDONESIA'
let string = 'INDIA'.split('');
string.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let outputStr = string.join('');
console.log('Q3:', outputStr);

// Q4: Count vowels and consonants
let sentence = "JavaScript is a powerful language!";
let vowels = 'aeiouAEIOU';
let vowelCount = 0, consonantCount = 0;
for (let char of sentence) {
    if (/[a-zA-Z]/.test(char)) {
        if (vowels.includes(char)) vowelCount++;
        else consonantCount++;
    }
}
console.log('Q4:', `Vowels: ${vowelCount}, Consonants: ${consonantCount}`);

// Q5: Replace wrong word with correct word
function correctfn(str, wrong, correct) {
    return str.replace(wrong, correct);
}
console.log('Q5:', correctfn("I have a pen", "pen", "book"));

// Q6: Filter numbers greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let outputArr = inputArr.filter(num => num > 5);
console.log('Q6:', outputArr);

// Q7: Calculate average using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
let studentAverages = students.map(student => {
    let sum = student.scores.reduce((a, b) => a + b, 0);
    let avg = sum / student.scores.length;
    return { name: student.name, average: avg };
});
console.log('Q7:', studentAverages);

// Q8: Repeated sum of digits until single digit
function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return num;
}
console.log('Q8:', repeatedSum(456));

// Q9: Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log('Q9:', countWords("This is a paragraph with seven total words."));

// Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log('Q10:', reverseString("Hello"));

// Q11: Calculate average marks for students
let input = [
    {
        name: "student1",
        marks: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student2",
        marks: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        name: "student3",
        marks: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

let averages = input.map(student => {
    let values = Object.values(student.marks);
    let avg = values.reduce((a, b) => a + b, 0) / values.length;
    return { [student.name]: { average: avg } };
});
console.log('Q11:', averages);
