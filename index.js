// my first JS Code!
console.log('Hello World');

let name = 'meggan';


let interestRate = 1.3;
console.log(interestRate);

// the const method allows you to permanently asign a variable
const InterestRate = 1.4

//Primitives VS Reference types

//Primitives
let Name = 'embersunn' //string literal
let age = 20 // Number literal
let isApproved = false; //Boolean literal
let LastName = null; // 

let person = {
    name = 'ember',
    age = '20'
};

// we can change the value of variable with "."
person.name = 'john';

console.log(person.name);

// arrays
let colors = ['red','blue'];
console.log(colors.length); 


//
function greet() {
    console.log("hello world");
}

greet();

// string methods
var first = "Meggan";
let lowercaseName = first.toLowerCase();  //lowercase font
var firstletter = first.charAt(0);   //get first character from variable
var middleOfName = first.substring(2,5);  //getting multiple characters (in this case2-4)

// manipulating integers
var count = 10;
var fixedcount = count.toFixed(2); // convert to decimal and point at 2integers
var hexcount = count.toString(16); // convert to "a"

var  = true;