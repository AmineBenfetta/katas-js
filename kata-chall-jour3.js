// Array plus array

/*function arrayPlusArray(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (let a = 0; a < arr2.length; a++) {
    sum2 += arr2[a];
  }
  return sum1 + sum2;
}*/

// Sum without highest and lowest number

/*function sumArray(array) {
  let sum = 0;
  if (!array || array.length <= 2) return 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  return array == null || array.length <= 2 ? 0 : sum - min - max;
}*/

// Sum Mixed Array

/*function sumMix(x){
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]); 
  }
  return sum;
}*/

// The Feast of Many Beasts

/*function feast(beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}*/

// Get the mean of an array
/*function getAverage(marks){
  let avg = 0; 
  for (let i = 0; i < marks.length; i++) {
    avg += marks[i];
  }
  return Math.floor(avg / marks.length);
}*/

// Double Char
/*function doubleChar(str) {
  return str.split('').map(i => i.repeat(2)).join('');
}*/

// L1: Set Alarm
/*function setAlarm(employed, vacation){
return vacation === true ? false : employed === true && vacation === false ? true : false;
}*/

// Count the Monkeys!

/*function monkeyCount(n) {
  let count = [];
  for (let i = 1; i <= n; i++) {
    count.push(i);
  }
  return count;
}*/

// Do I get a bonus?
/*function bonusTime(salary, bonus) {
  return bonus === true ? '£' + salary *10 : '£' + salary;
}*/

// Removing Elements
/*function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0);
}*/

// Will there be enough space?
/*function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : on + wait - cap;
}*/

// Third Angle of a Triangle
/*function otherAngle(a, b) {
  return 180 - a - b;
}*/

// Keep up the hoop
/*function hoopCount (n) {
   return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";
}*/

// Beginner Series #4 Cockroach
/*function cockroachSpeed(s) {
  return s === 0 ? 0 : Math.floor( s * 100000 / 3600);
}*/

// Grasshopper - Check for factor
/*function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false;
}*/

// All Star Code Challenge #18
/*function strCount(str, letter){  
 let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count ++; 
    }
  }
  return count;
}*/

// Twice as old
/*function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld); 
}*/

// Find the first non-consecutive number
/*function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
  }
}
  return null; 
}*/

// Parse nice int from char problem
/*function getAge(inputString){
 return parseInt(inputString); 
}*/

// Get Planet Name By ID
/* break; */

// Switch it Up!
/*function switchItUp(number){
  return number === 1 ? "One" : number === 2 ? "Two" :number === 3 ? "Three" :number === 4 ? "Four" :number === 5 ? "Five" :number === 6 ? "Six":number === 7 ? "Seven": number === 8 ? "Eight": number === 9 ? "Nine" : "Zero";
}*/

// Correct the mistakes of the character recognition software

/*function correct(string)
{
	return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I');
}*/

// Is it even?
/*function testEven(n) {
  return n % 2 === 0 ? true : false; 
}*/

// Keep Hydrated!
/*function litres(time) {
  let drink = 0.5; 
  return Math.floor(time * drink);
}*/

// Is n divisible by x and y?
/*function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}*/

// Calculate BMI
/*function bmi(weight, height) {
     return weight / (height * height) <= 18.5 ? "Underweight" : weight / (height * height) <= 25.0 ? "Normal" : weight / (height * height) <= 30.0 ? "Overweight": weight / (height * height) > 30 ? "Obese" : null;
}*/

// Thinkful - Logic Drills: Traffic light
/*function updateLight(current) {
  return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : null;
}*/

// Cat years, Dog years
/*var humanYearsCatYearsDogYears = function(humanYears) {
  let dog = 0;
  let cat = 0;
  if (humanYears === 1) {
    cat = 15;
    dog = 15;
  } else if (humanYears === 2){
    cat = 15 + 9;
    dog = 15 + 9;
  } else {
    cat = 24 + 4 * (humanYears - 2);
    dog = 24 + 5 * (humanYears - 2);
  }
  return [humanYears,cat,dog];
}*/

// Is it a palindrome?
/*function isPalindrome(x) {
  let normalized = x.toLowerCase();
  let pal = normalized.split('').reverse().join('');
  if (normalized === pal) {
    return true;
  } else {
    return false;
  }
}*/

// Powers of 2
/*function powersOfTwo(n){
  let tab = [];
  for (let i = 0; i <= n; i++){
    tab.push(Math.pow(2, i));
  }
  return tab;
}*/

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
/*String.prototype.toAlternatingCase = function () {
  return this
  .split('').map(char => {
 if (char === char.toLowerCase()) {
   return char.toUpperCase();
 } else {
   return char.toLowerCase(); 
 }
})
   .join('');
}*/ 

// What is between?
/*function between(a, b) {
  let table = [];
  for (let i = a; i <= b; i++) {
    table.push(i);
    }
  return table; 
  }*/

// Sum The Strings
/*function sumStr(a,b) {
  let aa = Number(a);
  let bb = Number(b);
  let sum = aa + bb;
  return String(sum); 
}*/

// Welcome!
/*function greet(language) {
	let country = {
   english: "Welcome",
   czech: "Vitejte",
   danish: "Velkomst",
   dutch: "Welkom",
   estonian: "Tere tulemast",
   finnish: "Tervetuloa",
   flemish: "Welgekomen",
   french: "Bienvenue",
   german: "Willkommen",
   irish: "Failte",
   italian: "Benvenuto",
   latvian: "Gaidits",
   lithuanian: "Laukiamas",
   polish: "Witamy",
   spanish: "Bienvenido",
   swedish: "Valkommen",
   welsh: "Croeso",
  }
  return country[language] || "Welcome";
}*/

// Student's Final Grade
/*function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}*/

// I love you, a little , a lot, passionately ... not at all
/*function howMuchILoveYou(nbPetals) {
  let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return phrases[(nbPetals - 1) % 6];
}*/

// Grasshopper - Messi goals function
/*function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}*/

// 