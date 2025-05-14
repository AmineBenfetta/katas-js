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

