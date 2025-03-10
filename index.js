// console.log((5 * 700) / 577 - 6000 * 553);

// const clicked = () => {
//   alert("Clicked");
// };

//data types
// 1. Primitive - string, boolean, number, undefined, null, NaN
// 2. Non-Primitive - Arrays, Objects, Fucntions, Set, Map

// let name = "CSA"; // "CSA" , 'CSA' , `CSA` --> Collection of characters --- ASCII
// let isEmployed = true;
// let age = 200.778444;
// let random;
// let variable = null;
// let calc = 1 + undefined; // type coercison - implicit, explicit
// console.log(typeof calc);

// // Arrays ---> Data Strcuture
// let arr = [1, 2, 4, 6, "truwefwd", true, undefined, null, NaN]; // Collection of mupltlr data/items
// let obj = {
//   name: "CSA",
//   age: 20,
// };
// console.log(typeof obj);

// cases -->
// PascalCase --> React Components
// camelCase ---> JS
// lower_snake_case --> Python, Server side Database
// UPPER_SNAKE_CASE --> API_KEY
// kabab-case ---> CSS class name

// opertors:
// 1. Arthimatic - +/-/*/ / / % /

// let a = 1000;
// let b = 400;

// 2. Comparision operators:
// 1. >
// 2. <
// 3. == , ===
// 4. >=
// 5.<=
// 6. !=, !==

// console.log(10 != "10"); //loose

// 3. Assignemnt operators:
// 1. =
// 2. +=
// 3.-=
// 4. *=
// 5. /=
// 6. %=

// let x = 20;
// console.log(x); //20

// x += 10; // x = x + 10
// console.log(x); //30

// x -= 5; // x = x - 5
// console.log(x); //25

// x *= 3; // x = x * 3
// console.log(x); //75

// x /= 5; // x = x / 5
// console.log(x); //15

// x %= 2; // x = x % 2
// console.log(x); //1

// 4. logical operators:

// 1. &&
// 2. ||
// 3. ! (NOT)

// let condition1 = 2 < 6; //true
// let condition2 = 5 < 10; //true

// console.log(condition1 && condition2); // false

// let condition1 = false; //false
// let condition2 = false; //false

// console.log(!(condition1 || condition2)); //false

// const variable = true;
// console.log(variable);

// type coersions - implicit, explicit

// console.log(1 + true + "1");

// let number = 1000;
// console.log(String(undefined));

// let number = "10.6768678";
// console.log(Number(number));

//pareseInt, parseFloat, Number(), Boolean(), String(), toString() -- one data type to other data type

// falsy - 0, false, "", undefined, null, NaN
// console.log(Boolean(false));

// if (condition) {
//   //code if condition is true
// } else {
//   //code if condition is false
// }

// let age = 14;
// let height = 150;

// if (age >= 18 || height > 160) {
//   console.log("Eligible to Participate");
// } else {
//   console.log("Not Eligible to Participate");
// }

// let time = 18;
// let greeting;

// if (condition1) {
//   //code if condition1 is true
// } else if (condition2) {
//   //code if condition2 is true
// } else {
//   //code if no condition is true (all conditions are failed)
// }

// if (time < 12) {
//   greeting = "Good Morning";
// } else if (time < 16) {
//   greeting = "Good Afternoon";
// } else if (time < 20) {
//   greeting = "Good Evening";
// }

// console.log(greeting);

// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }

// let monthCode = false;
// let day;
// switch (monthCode) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Invalid";
// }
// console.log(day);

// let x = 1;
// x++; //2
// console.log(++x); //3
// console.log(x++); //3
// console.log(x); //4

// console.log(--x); //3
// console.log(x--); //3
// console.log(x); //2

// for(initialization; condition; update){
// // Code if condition is true
// }

// let multplication = 15;

// for (let i = multplication; i <= 1000; i = i + multplication) {
//   console.log(i);
// }

// console.log("Loop terminated");

// 1st iteration:
// i =1 , true ==> loop exceuted, 1 is printed, i = 2

// 2nd iteration:
// i = 2, true, 2 is printed, i = 3

// 3rd iteration:
// i = 3, true, 3 is printed, i = 4

//4th Iteration:
// i = 4, false, loop breaks

// initialization
// while(condition){
//  //execute if condition passes

//  updation
// }

// let i = 1;

// while (i < 4) {
//   console.log(i);
//   i++;
// }

// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j < 4);

// console.log("Loop terminated");

// 1st iteration:
// i =1 , true ==> loop exceuted, 1 is printed, i = 2

// 2nd iteration:
// i = 2, true, 2 is printed, i = 3

// 3rd iteration:
// i = 3, true, 3 is printed, i = 4

//4th Iteration:
// i = 4, false, loop breaks

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// console.log("loop terminated");

// 1st iteration:
// i =100 , true ==> loop exceuted, 100 is printed, i = 99

// 2nd iteration:
// i = 99, true, 99 is printed, i = 98
// .
// .
// .
// .
// 100th iteration:
// i = 0, false,

let string = "My String is Hello world";
// console.log(string[1]); // acess through index
// console.log(string.length);

// for (let i of string) {
//   console.log(i);
// }

// for (let i in string) {
//   console.log(string[i]);
// }

// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }

// let string = "My String is Hello world";

// for (let i of string) {
//   if (i === "s") {
//     console.log("Loop is going to break");
//     break;
//   }
//   console.log(i);
// }

// for (let i of string) {
//   if (i === "y") {
//     console.log("Loop is going to Continue");
//     continue;
//   }
//   console.log(i);
// }

// //1st ---> M
// // 2nd --> LOOPis dvssv,
// //3rd -->

// let angle1 = 30;
// let angle2 = 68;
// let angle3 = 90;

// // Find if given angles form a triangle or not
// // traingle --> Sum of the angles = 180

// if (angle1 + angle2 + angle3 === 180) {
//   console.log("Traingle can be formed");
// } else {
//   console.log("Can't form the triangle with provided angles");
// }

// let side1 = 5;
// let side2 = 4;
// let side3 = 4;

// Find if given sides form a triangle or not
// triangle --> sum of any 2 sides should be greater than third side

// if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//   console.log("Traingle can be formed");

//   if (side1 === side2 && side2 === side3) {
//     console.log("Equi traiangle");
//   } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("Isoceless traiangle");
//   } else {
//     console.log("Scalene traiangle");
//   }
// } else {
//   console.log("Can't form the triangle with provided angles");
// }

// let n = 11;

// if (n % 2 === 1) {
//   console.log("Odd");
// } else {
//   console.log("Even");
// }

// let string = "hello world";

// let count = 0;
// for (let each of string) {
//   if (
//     each === "a" ||
//     each === "e" ||
//     each === "i" ||
//     each === "o" ||
//     each === "u"
//   ) {
//     continue;
//   }

//   console.log(each);
//   count++;
// }

// console.log("No. of Vowels are:", count);

// Arrays - Data structure. Collection of items

// Data strcuture ---> CRUD operations
// C -- Create -- Data creation
// R -- Read -- Data fetching or retrieval
// U -- Update -- Data updation
// D -- Delete -- Data Deletion

// let arr = ["Akhila", "Karthik", "Pavan", "Manasa", "Chandu", "Karthik"];

// console.log(arr.slice(1, 2));
// console.log(arr[5]); // Data retreival -- Read

// arr.push("Chandu");
// arr[8] = "Chandu"

// console.log(arr); // Data creation

// arr[1] = "Karthik";
// console.log(arr); //Data updation

// arr.splice(2, 1);
// console.log(arr); //Data deletion

// console.log(arr.includes("Karthik")); // true / false

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// console.log(arr.length);

// arr.unshift("Aditya");

// let result = arr.pop();
// console.log(result);

// arr.splice(2, 1, "random", "random");
// console.log(arr); // returns deleted items..add or removes from array
// // console.log(arr);

// console.log(arr.shift());

// console.log(arr);

// console.log(arr.lastIndexOf("Karthik"));

// let str = "hello_world_Welcome";

// let newArr = str.split("_");

// console.log(newArr);

// console.log(newArr.join("-"));

// console.log(arr.join("\n"));

// let array = [4, 4, 6, 1, 2, 7, 3, 5, 6, 2, 0];

// arr.sort();

// console.log(arr);

// let arr = [5, 7, 8, 1, 1, 4, 6, 8, 2, 7, 8, 0, 1, 2, 5];

// for (let i of arr) {
//   console.log(i);
// }

// for (let i in arr) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Find sum of elements in array
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// // sum = 0 + 5 = 5
// // sum = 5 + 7 = 12
// // sum = 12 + 8 = 20

// console.log(sum);

// Print even numbers in array:

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//     console.log(arr[i]);
//   }
// }

// console.log(sum);

// let arr = [3, 5, 8, 0, 3, 5];

// let nested = [
//   [1, 2, 3, 5],
//   [4, 5, 6, 8],
//   [7, 8, 9, 7],
// ];

// let rows = nested.length;
// let columns = nested[0].length;

// console.log(nested[2][2]);

// for (let i = 0; i < rows; i++) {
//   //   console.log(nested[i]);
//   for (let j = 0; j < columns; j++) {
//     console.log(nested[i][j]);
//   }
// }

// for (let i = 0; i < 3; i++) {
//   //i = 0
//   for (let j = 0; j < 3; j++) {
//     console.log("i", i);
//     console.log("j", j);
//     console.log(nested[i][j]);
//   }
// }

// Objects: --> DS
// Key-Value Pair

// let obj = {
//   name: "CSA",
//   age: 20,
//   isEmployed: true,
// };

// console.log(obj);
// //CRUD

// //Read
// console.log(obj["full-name"]); // Bracket Notation
// console.log(obj.isEmployed); // Dot Notation

// // Create
// obj.city = "Hyderabad";
// console.log(obj);

// //Update
// obj.name = "Career Sure Academy";
// console.log(obj);

// //Delete
// delete obj.city;
// console.log(obj);

// Obj methods:

// let obj = {
//   name: "CSA",
//   age: 20,
//   isEmployed: true,
// };
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// Object.freeze(obj);
// delete obj.age;
// obj.city = "erger";
// console.log(obj);

// Object.seal(obj);
// delete obj.age;
// obj.city = "Hyd";
// obj.name = "CSAcademy";
// console.log(obj);

// let obj = {
//   obj1: {
//     name: "Name1",
//     age: 20,
//   },
//   obj2: {
//     name: "Name2",
//     age: 30,
//     obj3: {
//       name: "Nested",
//     },
//   },
// };

// console.log(obj);
// obj.obj2.obj3.name = "Nested updated";
// console.log(obj.obj2.obj3.name);

// let arrOfObject = [
//   { student: "S1", age: 20, city: "Hyderabad" },
//   { student: "S2", age: 24, city: "Warangal" },
//   { student: "S3", age: 22, city: "Vijayawada" },
//   { student: "S4", age: 21, city: "Khammam" },
//   { student: "S5", city: "Vizag" },
// ];

// arrOfObject[4].age = 30;

// arrOfObject.splice(1, 1);
// console.log(arrOfObject);

//Array destructuring:
//Swap digits
// let a = 20;
// let b = 40;

// // a = b //a = 40
// // b= a //b = 40
// console.log(a, b);

// //method1
// // let temp = a;
// // a = b; // a = 40
// // b = temp;

// // console.log(a, b);

// //method2
// [a, b] = [b, a];
// console.log(a, b);

//Object destructuring:
// let obj = {
//   name: "CSA",
//   age: 20,
//   city: "Hyderabad",
// };

// let { age, city, name } = obj; // cleaner code, debugging easy, readability
// console.log(age, city, name);
// console.log(obj.age, obj.city);

//Primitive Data types  ---> Immutable -- Number, string, boolean, undefined, null
// let a = "Hello World"; //immutable
// a[0] = "P";
// console.log(a);

//Non-primitive Data types  ---> Mutable
// let arr = [1, 2, 3, 4, 5]; //mutable
// arr[0] = 2;

// console.log(arr);

// let obj = {
//   name: "CSA",
//   age: 20,
//   city: "Hyderabad",
// };

// //1. Pass by value --> All primitive data types

// let a = "Atring";
// let b = a; // b = 20
// a = 40;

// console.log(a, b);

// //2. Pass by reference --> All non primitive data types

// let arrA = [1, 2, 3, 4, 5];
// let arrB = arrA; // Copy of the array created with same reference
// arrA[0] = 2;
// arrB[1] = 3;

// console.log(arrA, arrB);

// Spread operator (...):

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1]; // array created with entirely new reference
// arr1[1] = 0;
// console.log(arr1, arr2);

//Spread operators in Obj:

// let obj1 = {
//   name: "CSA",
//   age: 20,
//   city: "Hyderabad",
// };

// let obj2 = obj1; // same reference
// console.log(obj2);
// obj2.name = "Career Sure";

// console.log(obj1, obj2);

// let obj1 = {
//   name: "CSA",
//   age: 20,
//   city: "Hyderabad",
// };

// let obj2 = { ...obj1, age: 40 };

// console.log(obj1, obj2);

// 3 types of functions:

// function csa() {
//   // function definition
//   console.log("CSA");
//   return "Hello...Welcome to CSA";
// }

// csa(); // this is function call

// console.log(csa());

// let result = csa();
// console.log(result);

//1. function declaration
// let a = 1000;
// let b = 3;
// function add(a) {
//   //scopes - block
//   return a + b;
// }

// console.log(add(100, 200));

//2. function expression
// let add2 = function (a, b) {
//   return a + b;
// };

// console.log(add2(100, 200));
// console.log(add2(106, 100));

//3. Arrow functions
// let add3 = (a, b) => a + b;
// // let add3 = (a, b) => {
// //   console.log("tubgv");
// //   return a + b;
// // };
// console.log(add3(100, 200));
// console.log(add3(106, 100));

//IIFE

// (function () {
//   console.log("Hello World");
// })();

// let a = 30;
// let b = 40;

// let add = (a = 8) => a + b;

// console.log(add());

//REST operator:
// function fun1(a, b) {
//   return a + b;
// }
// console.log(fun1(1, 2)); // 3
// console.log(fun1(1, 2, 3, 4, 5)); // 3

// function fun2(...input) {
//   console.log("Input:", input);
//   let sum = 0;
//   for (let i of input) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(fun2(1, 2)); //3
// console.log(fun2(1, 2, 3)); //6
// console.log(fun2(1, 2, 3, 4, 5)); //15

// function restExample(a, b, ...rest) {
//   console.log(a, b, rest);
// }

// console.log(restExample(1, 2, 6, 7, 8, 9, 2, 7, 89, 232342, 4546, "strimg"));

// let arr = [2, 5, 1, 7, 2, 5, 0, 8, 9];

// arr.sort(function (a, b) {
//   return b - a;
// });
// //merge sort, bubble sort, insertion sort, quick sort

// console.log(arr);

// let mat = [];

// for (let i = 0; i < 6; i++) {
//   let row = [];
//   for (let j = 0; j < 4; j++) {
//     row.push("*");
//   }
//   mat.push(row);
// }

// console.log(mat);

// let x = 6;
// console.log(x);
// // initilization is not necessary while decalration
// // re-initialization is possible
// // re-declaration is not possible
// //hoisting is not possible

// const y = 30;
// console.log(y);
// // initilization is necessary while declaration
// // re-initialization is not possible
// // re-declaration is not possible
// //hoisting is not possible

// var z = 6;
// var z = 10;
// var z = true;
// console.log(z);
// initilization is not necessary while decalration
// re-initialization is possible
// re-declaration is possible
// hoisting is possible - Global scope - Window object

// //1. function declaration --- Supports hoisting
// console.log(add(100, 200)); //300
// function add(a, b) {
//   return a + b;
// }

// // 2. function expression - No Hoisting
// var add2 = function (a, b) {
//   return a + b;
// };
// console.log(add2(100, 200)); //

// // 3. Arrow functions - No Hoisting
// const add3 = (a, b) => a + b;
// console.log(add3(100, 200)); //300

// scopes:

// var abcd = "ertfgyh"; // default - var
// // var abcd = "ertfgyh";
// console.log(window.add(100, 200));
// console.log(abcd);

// scope - global, block, lexical
// if blocks, for loops blocks, function blocks
// let x = 20;
// if (true) {
//   x = 50;
//   let y = 1000;
//   console.log(y); // 50
//   // let x = 40;
//   // console.log(x); //40
// }
// console.log(x); //20
// console.log(y);

//currying

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum); //myDisplayer
// }

// myCalculator(5, 5, myDisplayer);

// higher order functions:
// map, filter, reduce, forEach ---> React

// const arr = [2, 6, 7, 8, 6, 2, 6, 8, 9];
// const newArr = arr.map((each) => each - 2);
// console.log(newArr);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] *= 2;
// }

// console.log(arr);

// function multiplyWithTwo(each, index, mainArr) {
//   // const val = (each * 2) / 3 + (5 % 2);
//   return each - 2;
// }

// const newArr = arr.map(multiplyWithTwo);

// arr -->     [2, 6, 7]
// newArr ---> [4, 12, 14]
// [0,4,5,6,4,0,4,6,7]
//2 --> 2, 0, arr

// const arr = [2, 6, 7, 8, 6, 2, 6, 8, 9];
// const filteredArr = arr.filter((each) => each % 2 === 0);
// console.log(filteredArr);

// const arr2 = ["ertgretgtg", "aertbr", "etg454tebev", "aeacooake"];

// const countOfVowels = arr2.map((each) => {
//   let count = 0;
//   for (let items of each) {
//     if (
//       items === "a" ||
//       items === "e" ||
//       items === "i" ||
//       items === "o" ||
//       items === "u"
//     ) {
//       count++;
//     }
//   }

//   return count;
// });

// console.log(countOfVowels);

// const arr = [2, 6, 7, 8, 6, 2, 6, 8, 9];
// const reducedVal = arr.reduce((acc, each, index, orgArr) => acc + each, 0);
// console.log(reducedVal);

// acc ---> 0
// acc ---> 2
// acc ---> 8

// const arr = [2, 6, 7, 8, 6, 2, 6, 8, 9];

// const newArr = [];
// arr.forEach((each, index) => {
//   newArr.push(each + 2);
// });

// console.log(newArr);

// const str = "This is a string ";

// console.log(str.length);
// console.log(str.includes("thi"));
// console.log(str.toLowerCase());
// console.log(str.lastIndexOf("s"));
// console.log(str.startsWith("is"));
// console.log(str.endsWith("ng"));
// console.log(str.split(" ")); // sentences ---> words
// console.log(str.concat("erferf").concat("Wedwef"));
// console.log(str + "ergref" + "erferfer");
// console.log(str.at(8));
// console.log(str[8]);
// console.log(str[1].charCodeAt());
// console.log(str.slice(0, 3));
// console.log(str.substring(0, 3));

// console.log(
//   "SCII (అమెరికన్ స్టాండర్డ్ కోడ్ ఫర్ ఇన్ఫర్మేషన్ ఇంటర్‌చేంజ్) అనేది కంప్యూటర్లు మరియు ఇంటర్నెట్ కోసం టెక్స్ట్‌ను ఎన్‌కోడ్ చేయడానికి ఒక ప్రామాణిక మార్గం . ఇది టెక్స్ట్ కోసం అత్యంత సాధారణ అక్షర ఎన్‌కోడింగ్ ఫార్మాట్."
// );

// template literals*****

// const obj = {
//   name: "CSA",
//   age: 25,
//   city: "Hyderabad",
// };

// console.log(
//   "Hi My name is " +
//     obj.name +
//     " " +
//     "My age is " +
//     obj.age +
//     " " +
//     "I am from " +
//     obj.city
// );

// console.log(
//   `Hi My name is ${obj.name} My age ${obj.age} is I am from ${obj.city}`
// );

//shallow copy, deep copy:

// const obj1 = {
//   name: "CSA",
//   age: 25,
//   city: "Hyderabad",
// };

// const obj2 = { ...obj1 };
// obj1.age = 30;

// console.log(obj1);
// console.log(obj2);

// const n = 37;

// let isPrime = true;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//    break
//   }
// }

// console.log(isPrime);

// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     count++;
//   }
// }

// console.log(count);

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(n));

// const str = "malayalam";
// const newStr = str.split("").reverse().join("");
// console.log(newStr == str);

// 2 pointer approach
// const str = "madam";
// let left = 0;
// let right = str.length - 1;

// let isPalindrome = true;

// while (left < right) {
//   if (str[left] !== str[right]) {
//     isPalindrome = false;
//     break;
//   }
//   left++;
//   right--;
// }

// console.log(isPalindrome);

//1st iteration
// left = 0, right = 4
// 0 < 4 -->
// m !== m --> false
// left =1 , right =3

//2nd iteration
// a !== a --> false
// left = 2, right = 2

// const fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// recusrion, iteration

// const n = 15;

// const fib = [0, 1];

// for (let i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log(fib);

//recursion --> function calling its own fucntion

// function fibSeries(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fibSeries(n - 1) + fibSeries(n - 2);
// }

// // Dry run
// /// n = 3
// // fib(3)

// // fib(2) + fib(1)
// // = 1 + 1
// // //n = 2
// // fib(1) + fib(0)
// // 1 + 0

// const n = 15;
// const fib = [];

// for (let i = 0; i < n; i++) {
//   fib.push(fibSeries(i));
// }

// console.log(fib);

// function func1() {
//   console.log("func1");
//   func1();
// }

// func1();

// anagrmas:
//race --> acer
//lite --> tile

// const str1 = "silentw"; //{"w": 1, "s":1}
// const str2 = "listen"; //{"s":1}

//approach1: --> sort
// const newStr1 = str1.split("").sort().join("");
// const newStr2 = str2.split("").sort().join("");
// console.log(newStr1 === newStr2);

// approach2: hashmap

//part2:
// console.log(document.head);
// document object model DOM*******
// HTML DOM tree -- ?

// const loginHeadingEl = document.getElementById("login-heading"); // Id is unique
// loginHeadingEl.textContent = "Sign up form";

// const formEl = document.getElementById("form-el");

// const formEl = document.getElementsByClassName("email-label"); // Array with elements of given calss name
// formEl[0].textContent = "erger";
// console.log(formEl);

// formEl.style.backgroundColor = "green"; // in-ine style
// formEl.classList.add("custom-style", "custom-style2");
// formEl.classList.remove("custom-style");

// const inputEls = document.getElementsByTagName("input"); // Array with elements of given tag name

// console.log(inputEls[0].setAttribute("placeholder", "Enter Valid email"));
// console.log(inputEls[0].removeAttribute("placeholder"));

// const label1 = document.querySelector(".email-label"); //single element in first occurance
// const label2 = document.querySelector("#label"); //singel element
// const label3 = document.querySelector("label"); //single element in first occurance

// const label4 = document.querySelectorAll(".email-label"); //single element in first occurance

// console.log(label1, label2, label3);
// console.log(label4);

// const h1El = document.createElement("h1");
// h1El.textContent = "This is created through JS";
// h1El.setAttribute("class", "custom-style");

// const bodyEl = document.querySelector("body");

// bodyEl.appendChild(h1El);

// const divEl = document.createElement("div");
// const h1El = document.createElement("h1");
// const pEl = document.createElement("p");
// const imgEl = document.createElement("img");

// h1El.textContent = "This is h1";
// h1El.classList.add("custom-style");
// pEl.textContent = "This is p";

// imgEl.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357";
// // imgEl.setAttribute(
// //   "src",
// //   "https://images.unsplash.com/photo-1575936123452-b67c3203c357"
// // );
// imgEl.setAttribute("class", "w-25");
// // imgEl.className = "w-25";

// console.log(imgEl);

// divEl.appendChild(h1El);
// divEl.appendChild(pEl);
// divEl.appendChild(imgEl);

// const formCardEl = document.querySelector("#form-card");

// formCardEl.innerHTML = `<form class="border p-3 form-style rounded">
//         <h4 class="m-1" id="login-heading">Login Form</h4>

//         <div class="form-group m-1">
//           <label class="email-label" id="label"> Email</label>
//           <input
//             type="email"
//             class="p-1 w-100 form-control"
//             required
//             placeholder="Enter Email"
//           />
//         </div>
//         <div class="form-group m-1">
//           <label class="email-label"> Password</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             class="p-1 w-100 form-control"
//             required
//           />
//         </div>
//         <div class="m-1">
//           <button type="submit" class="btn btn-primary">Submit</button>
//         </div>
//       </form>`;

// events --> User actions --mouse movement, click, hover, input change, keyboard

// const btnEl = document.getElementById("submit-btn");

// const functionForClick = function (event) {
//   console.log(
//     "Click event is triggered by user on this button. Button is Clicked by User"
//   );
//   console.log(event.target, "yty");
//   // event.stopPropagation();
// };

// const bodyEl = document.getElementById("body");

// bodyEl.addEventListener("click", (event) => {
//   console.log("body triggered", event.target);
// });

// const functionForMouseOut = function () {
//   console.log(
//     "Mouse out event is triggered by user on this button. Button is Hovered by User"
//   );
// };

// const functionForMouseOver = function () {
//   console.log(
//     "Mouse hover event is triggered by user on this button. Button is Hovered by User"
//   );
// };

// btnEl.addEventListener("click", functionForClick);
// btnEl.addEventListener("mouseout", functionForMouseOut);
// btnEl.addEventListener("mouseover", functionForMouseOver);

// const inputEl = document.getElementById("email");

// inputEl.addEventListener("keypress", (event) => {
//   console.log("keyup", event);
// });

// inputEl.addEventListener("change", (event) => {
//   console.log("change", event.target.value);
// });

// inputEl.addEventListener("input", (event) => {
//   console.log("input", event.target.value);
// });

// inputEl.addEventListener("focusin", (event) => {
//   console.log("focus", event.target);

//   inputEl.style.border = "2px solid red";
// });

// inputEl.addEventListener("focusout", (event) => {
//   console.log("focus", event.target);

//   inputEl.style.border = "2px solid white";
// });

const formEl = document.getElementById("form");
const userCards = document.getElementById("user-cards");

const userArray = JSON.parse(localStorage.getItem("users")) || [];

// const data = fetch("https://fakestoreapi.com/products")
//   .then((data) => {
//     console.log(data, "Raw Data");
//     return data.json();
//   })
//   .then((response) => {
//     console.log("Response", response);
//   });

formEl.addEventListener("submit", (event) => {
  event.preventDefault(); //prevents reload

  const obj = {};

  const inputs = document.querySelectorAll("input"); //Array ---3
  const select = document.querySelector("select"); // Single Obj

  for (let items of inputs) {
    obj[items.name] = items.value;
  }
  // obj --> name, age, imageUrl

  obj[select.name] = select.value;
  // obj --> profession

  userArray.push(obj);

  localStorage.setItem("users", JSON.stringify(userArray)); // Create
  displayCards(userArray); //dispalycard with new object added
});

function displayCards(userArray) {
  userCards.innerHTML = "";
  for (let items of userArray) {
    userCards.innerHTML += `
    <div class="user-card">
        <img
          src=${items.imageUrl}
          class="w-50 h-100"
        />
        <div class="p-2">
          <h1><b>Name: ${items.name}</b></h1>
          <p><b>Age:</b> ${items.age}</p>
          <p><b>Profession:</b> ${items.profession}</p>
        </div>
    </div>
    `;
  }
}

displayCards(userArray);

//JSON ---> Java Script Object Notation
// let obj = {
//   name: "CSA",
// };

// localStorage.clear();

//JS ---> JSON ---> Stored in Storage --> JSON.stringify
//JSON ---> JS ---> While fetching the data form Storage ---> JSON.parse

// localStorage.setItem("name", JSON.stringify([1, 2, 4]));
// localStorage.setItem("name", JSON.stringify([1, 2, 4, 5]));
// localStorage.removeItem("name");

// console.log(JSON.parse(localStorage.getItem("name"))); // Read

// sessionStorage.setItem("name", JSON.stringify([1, 2, 4]));
// console.log(JSON.parse(sessionStorage.getItem("name")));
// sessionStorage.removeItem("name");

// console.log(window.localStorage);
// console.log(window.sessionStorage);

// window.document.cookie = "hello";
// console.log(document.cookie);

//THIS CONTEXT
// console.log(this, "Gloabl scope");

// var name = "csa";
// age = 67;
// function add() {
//   console.log(`I am ${this.name}. My age is ${this.age}`, "function scope" );
// }
// add();

// const add2 = () => {
//   console.log(
//     `I am ${this.name}. My age is ${this.age}`,
//     "function scope - ARROW"
//   );
//   console.log(this);
// };

// add2();

// const obj = {
//   name: "CSA",
//   age: 45,
//   greet1: function () {
//     console.log(`I am ${this.name}. My age is ${this.age}`);
//     console.log(this);
//   },
//   greet2: () => {
//     console.log(`I am ${this.name}. My age is ${this.age}`); // points to window obj
//     console.log(this);
//   },
// };

// obj.greet1();
// obj.greet2();
// const arr = [2, 78, 89];
// console.log(typeof arr);
// arr.push(100);

//ES6 ---> 2015 arrows, Spread oerpator, rest operator, JS classes, async/await

// const car = {
//   color: "red",
//   type: "Electric",
//   model: "Tesla",
//   year: "2024",
//   horn: function () {
//     console.log("honk honk");
//   },
//   drive: function () {
//     console.log("Car is moving");
//   },
//   break: function () {
//     console.log("Break applied");
//   },
// };

// const car2 = {
//   color: "blue",
//   type: "Diesel",
//   model: "Benz",
//   year: "2022",
// };

// Simple function
// function vehicle(name, maker, engine) {
//   this.name = name;
//   this.maker = maker;
//   this.engine = engine;
// }

// // New keyword to create an object
// let car1 = new vehicle("GT", "BMW", "1998cc"); // instance of the obj
// let car0 = new vehicle("GT", "Audi", "1998cc"); // instance of the obj
// let car3 = new vehicle("GT", "Ferrari", "1998cc"); // instance of the obj
// let car4 = new vehicle("GT", "BMW", "1998cc"); // instance of the obj

// // Property accessors
// console.log(car1);
// console.log(car1.name);
// console.log(car1.maker);
// console.log(car1["engine"]);

// JS classes --
//
// OOPS:
// 1. Inheritance
// 2. Abstraction
// 3. Encapsulation
// 4. Polymorphism
// 5. Classes

// class Car {
//   constructor(color, type, model, year) {
//     this.color = color;
//     this.type = type;
//     this.model = model;
//     this.year = year;
//   }

//   horn() {
//     console.log(`${this.model} is honking`);
//   }

//   drive() {
//     console.log(`${this.model} is moving`);
//   }

//   break() {
//     console.log(`Break applied by ${this.model}`);
//   }
// }

// let car1 = new Car("red", "Electric", "Tesla", 2024);
// let car2 = new Car("blue", "Diesel", "Audi", 2023);

// console.log(car1); // instance of the Car class object -- instantiation
// console.log(car2); // instance of the Car class object -- instantiation

// car1.drive();
// car2.horn();

// this --> in classes, points to the instance of the calss itself

// class Bank {
//   //Private variables
//   #balance;
//   constructor(type, accountNumber, holder, balance) {
//     this.type = type;
//     this.accountNumber = accountNumber;
//     this.holder = holder;
//     this.#balance = balance;
//   }

//   receiveMoney(amount) {
//     this.#balance += amount;
//     console.log(`Amount of Rs. ${amount} credited to your account`);
//   }

//   sendMoney(amount) {
//     this.#balance -= amount;
//     console.log(`Amount of Rs. ${amount} debited to your account`);
//   }

//   getBalance() {
//     console.log(`Your current balance is ${this.#balance}`);
//   }
// }

// const account1 = new Bank("Savings account", 12345, "Csa", 20000);

// account1.getBalance();

// account1.receiveMoney(1000);
// account1.sendMoney(10000);

// account1.getBalance();

// class Animal {
//   constructor(color, type) {
//     this.color = color;
//     this.type = type;
//   }

//   move() {
//     console.log(`${this.type} is moving`);
//   }
// }

// class Tiger extends Animal {
//   constructor(color, speed, type) {
//     super(color, type);
//     this.runSpeed = speed;
//   }

//   run() {
//     console.log(`${this.type} is running with a speed of ${this.runSpeed}`);
//   }
// }

// class Fish extends Animal {
//   constructor(color, speed, type) {
//     super(color, type);
//     this.swimSpeed = speed;
//   }

//   swim() {
//     console.log(`${this.type} is running with a speed of ${this.swimSpeed}`);
//   }
// }

// class Eagle extends Animal {
//   constructor(color, speed, type) {
//     super(color, type);
//     this.flySpeed = speed;
//   }

//   fly() {
//     console.log(`${this.type} is running with a speed of ${this.flySpeed}`);
//   }
// }

// const tiger1 = new Tiger("Gold", 40, "Tiger");
// const fish1 = new Fish("Black", 50, "Fish");
// const eagle1 = new Eagle("Orange", 60, "Bird");
// console.log(tiger1, fish1, eagle1);

// tiger1.move();
// tiger1.run();

// fish1.move();
// fish1.swim();

// eagle1.move();
// eagle1.fly();

//prototype object:
//prototypal inheritance:

// const arr = [4, 5]; //object ????

// // arr.__proto__ = null;
// arr.push(6);
// console.log(arr);

// console.log(arr.__proto__);
// console.log(Array.prototype);

// console.log(arr.__proto__.__proto__);
// console.log(Object.prototype);

// const obj1 = {
//   name: "Aditya",
//   age: 24,
// };

// const obj2 = {
//   name: "CSA",
//   // toString: function () {
//   //   console.log("Hello World");
//   // },
//   //////////////////
// };

// console.log(obj2.__proto__);
// console.log(Object.prototype);

// obj2.__proto__ = obj1;
// console.log(obj2.city);
// console.log(obj2.toString());

// function fun() {}

// console.log(fun.__proto__);
// console.log(Function.prototype);

// console.log(fun.__proto__.__proto__);
// console.log(Object.prototype);

// const object = { a: 1 };
// console.log(Object.getPrototypeOf(object));

//fetch, setInterval etc..

// let count = 0;
// function callbackFunction1() {
//   count++;
//   console.log(count);
//   if (count == 7) {
//     clearInterval(timerId);
//   }
// }

// const timerId = setInterval(callbackFunction1, 1000);

// function callbackFunction2() {
//   console.log("I am executing after 5 seconds");
// }

// const timerId2 = setTimeout(callbackFunction2, 5000);
// clearTimeout(timerId2);

// setTimeout(() => {
//   console.log("1");
// }, 1000);

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// setTimeout(() => {
//   console.log("0");
// }, 0);

// console.log("Hello");

//Callbacks:
// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// // 4 functions
// // 1 --> 2 ---> 3 ---> 4

// promises (then catch), async await

// class Car {
//   constructor(carName, mileage, fuel) {
//     this.carName = carName;
//   }

//   drive(kms) {
//     this.mileage += kms;

//     const fuelUsed = kms / 15;
//     if (fuelUsed > fuel) {
//       return;
//     }

//     this.fuel -= fuelUsed;
//   }
// }

// console.log("1");

// setTimeout(() => {
//   console.log("Inner");
// }, 10000);

// const data = fetch("https://fakestoreapi.com/products")
//   .then((data) => {
//     return data.json();
//   })
//   .then((response) => console.log(response, "ergerg"))
//   .catch((error) => console.log("error", error));

//Event loop --> webAPI

// console.log("other oeprations");

//Callbacks:
// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User fetched");
//     callback({ id: 1, name: "Alice" }); //user = {id:1, anme:"Alice"}
//   }, 1000);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("Posts fetched for user", userId);
//     callback(["Post 1", "Post 2"]);
//   }, 1000);
// }

// getUser((user) => {
//   getPosts(user.id, (posts) => {
//     console.log(posts);
//   });
// });

// function getComments(post, callback) {
//   setTimeout(() => {
//     console.log("Comments fetched for", post);
//     callback(["Comment 1", "Comment 2"]);
//   }, 1000);
// }

// getUser((user) => {
//   getPosts(user.id, (posts) => {
//     getComments(posts[0], (comments) => {
//       console.log("Final Comments:", comments);
//     });
//   });
// });

// console.log("1");

// const p = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   // resolve("Promise Resolved and data sent", ["1", 4, 6]);
//   //   reject("Error occured while sending data");
//   // }, 2000);

//   if (1 + 1 != 2) {
//     resolve("Promise Resolved and data sent");
//   } else {
//     reject("Promise failed and rejected");
//   }
// });

// p.then((success) => console.log(success)).catch((error) => console.log(error));

// console.log("2");

//Promises:
// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("User fetched");
//       resolve({ id: 1, name: "Alice" });
//     }, 1000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Posts fetched for user", userId);
//       resolve(["Post 1", "Post 2"]);
//       // reject("second promise rejected");
//     }, 1000);
//   });
// }

// function getComments(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Comments fetched for", post);
//       resolve(["Comment 1", "Comment 2"]);
//       // reject("third promise rejected");
//     }, 1000);
//   });
// }

// // Using Promises to avoid Callback Hell
// getUser()
//   .then((user) => getPosts(user.id))
//   .then((posts) => getComments(posts[0]))
//   .then((comments) => console.log("Final Comments:", comments))
//   .catch((err) => console.log("Error:", err));

//async/await:
// async function fetchData() {
//   try {
//     const user = await getUser();
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts[0]);
//     console.log("Final Comments:", comments);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchData();

// console.log("1");

// const data = fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("2");

// ES6 --> Arrow, Asyuc await, spread, import & export, let, classes

// console.log("1");

// async function fetchData() {
//   try {
//     console.log("API call start");
//     const data = await fetch("https://fakestoreapi.com/products");
//     const response = await data.json();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log("Start");

// fetchData();

// console.log("Other operations.,....");

// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 6000, "Queen");
// });

// // Both resolves. Who is faster?
// Promise.any([myPromise1, myPromise2])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((err) => console.log(err));

// console.log("1");
// const data = fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("API call compelted"));

// console.log("data");

// async function fetchData() {
//   try {
//     console.log("API call start");
//     const data = await fetch("https://fakestoreapi.com/produc5hy56y65y6ts");
//     const response = await data.json();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("API call completed");
//   }
// }

// fetchData();

//HTTP Request
//GET --- Read
//POST --- Create
//PUT  --- Update
//DELETE --- Delete
