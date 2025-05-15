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

//

