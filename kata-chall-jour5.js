// Complementary DNA
/*function dnaStrand(dna){
  return dna.split("").map(base => {
    switch(base) {
        case 'A' : return 'T';
        case 'T' : return 'A';
        case 'C' : return 'G';
        case 'G' : return 'C';
    }
  }).join("");
}*/

// Get the Middle Character
/*function getMiddle(s) {
  let len = s.length;
  let mid = Math.floor(len / 2);
  
  if (len % 2 === 0) {
    return s.slice(mid - 1, mid + 1);
  } else {
    return s.charAt(mid);
  }
}*/

// Two to One
/*function longest(s1, s2) {
  let s3 = s1 + s2;
  return [... new Set(s3.split(""))].sort().join("");
}*/

// Sum of a sequence
/*const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
}*/

// Difference of Volumes of Cuboids
/*function findDifference(a, b) {
  let volumeA = a.reduce((acc, val) => acc * val)
    let volumeB = b.reduce((acc, val) => acc * val)

  return Math.abs(volumeA - volumeB);
}*//*function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}*/

// Training JS #7: if..else and ternary operator
/*function saleHotdogs(n){
  return n < 5 ? 100 * n : n >= 10 ? 90 * n : 95 * n;
}*/

// Training JS #4: Basic data types--Array
/*function getLength(arr){
  //return length of arr
  return arr.length;
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length -1];
}
function pushElement(arr){
  //push el to arr
  arr.push(4)
  return arr;
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr;
}
*/

// Training JS #5: Basic data types--Object
/*function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}*/

// Training JS #8: Conditional statement--switch
/*function howManydays(month){
  var days;
  switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days= 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days= 30;
      break;
    case 2:
      days= 28;
      break;
  }
  return days;
}*/

// Is this my tail?

// Training JS #6: Basic data types--Boolean and conditional statements if..else
/*function trueOrFalse(val){ 
  if (!val) {
  return "false"; 
  } else {           
   return "true";
}
}*/  // "!valeur" veux dire falsy 

// 