// Function 2 - squaring an argument

/*function square(arg) {
    return arg * arg;
}*/

// Is the string uppercase?

/*String.prototype.isUpperCase = function() {
  return this == this.toUpperCase(); 
}*/

// Count Odd Numbers below n

/*function oddCount(n){
  return Math.floor(n / 2);
}*/

// Drink about
/*function peopleWithAgeDrink(old) {
  return old < 14 ? "drink toddy" : old < 18 ? "drink coke" : old < 21 ? "drink beer" : "drink whisky";
};*/

// Grasshopper - Messi Goals
/*var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;*/

// Find Multiples of a Number
/*function findMultiples(integer, limit) {
  let arr = []; 
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
}
  return arr;
}*/
// Expressions Matter
/*function expressionMatter(a, b, c) {
  let result = [a + b + c, a * b + c, a + b * c, (a + b) * c, a * (b + c), a * b * c];
  return Math.max(...result);
}*/

//Unfinished Loop - Bug Fixing #1
/*function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number;counter++) {
        newArray.push(counter);
    }
    return newArray;
}*/

// Lario and Muigi Pipe Problem
/*function pipeFix(numbers){
  let arr = [];
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    arr.push(i);
}
  return arr;
}*/

// Grasshopper - Basic Function Fixer
/*function addFive(num) {
  let total = num + 5;
  return total;
}*/

// How many lightsabers do you own?
/*function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}*/

// Grasshopper - If/else syntax debug
/*function checkAlive (health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}*/

// Add Length
/*function addLength(str) {
let words = str.split(" ");
let arr = [];
  for (let i = 0; i < words.length ; i++) {
    arr.push(words[i] + ' ' + words[i].length);
  }
  return arr;
}*/

// Short Long Short
/*function solution(a, b){
  if (a.length < b.length) {
    return a + b + a;
  } else if (b.length < a.length) {
    return b + a + b;
  }
}*/

// Sort and Star
/*function twoSort(s) {
  let alphabet = s.sort();
  let first = alphabet[0].split("");
  return first.join("***");
}*/

//My head is at the wrong end!
/*function fixTheMeerkat(arr) {
 return arr.reverse();
}*/

// get character from ASCII Value
/*function getChar(c){
  return String.fromCharCode(c);
}*/

// Multiplication table for number

/*function multiTable(number) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    result += `${i} * ${number} = ${i * number}\n`;
   } else {
    result += `${i} * ${number} = ${i * number}`;
   }
  }
  return result;
}*/

// Name Shuffler

/*function nameShuffler(str){
  let shuffle = str.split(' ');
  return shuffle.reverse().join(' ');
}*/

// 5 without numbers !!
/*function unusualFive() {
  let five = ['a', 'a', 'a', 'a', 'a'];
  return five.length;
}*/

// Hello, Name or World!

/*function hello(name) {
  if (name === "" || name === undefined) {
    return "Hello, World!"; 
  }
  name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${name}!`;
}*/

// 1st kyu 6! Multiples of 3 or 5

/*function solution(number){
  if (number < 0) {
    return 0;
  }
  let sum = 0;
  let table = [];
  for (let i = 1; i < number; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
  }
  return sum;
}*/

//  How old will I be in 2099?
/*function  calculateAge(birth, count) {  
  let result = count - birth; 
  let unit = (Math.abs(result) === 1) ? "year" : "years";
  if (result === 0) {
    return "You were born this very year!";
  } else if (result < 0) {
    return `You will be born in ${Math.abs(result)} ${unit}.`;
  } else if (result > 0) {
    return `You are ${result} ${unit} old.`;
  }
    
  }*/

// Split Strings

/*function solution(str){
   let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str[i+1] === undefined) {
    arr.push(str[i] + '_');
} else {
  arr.push(str[i] + str[i+1]);
}
}
  return arr;
}*/

// 