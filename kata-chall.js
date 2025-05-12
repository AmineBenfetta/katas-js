/*function makeNegative(num) {
  if (num >= 1) {
  return -num;
} else {
  return num;
}}

console.log(makeNegative(2424));*/

/*function opposite(number) {
  if (number >= 1) {
    return -number; //your code here
} else if (number = -number) {
  return number;
}
} 

console.log(opposite(-56));*/

/*function boolToWord( bool ){
  if (bool === true) {
  return "Yes"; 
} else if (bool === false){
  return "No";
}
} 
 */
/*function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] > 0) {
    sum += arr[i];
} 
  }
  return sum;
}

console.log(positiveSum([3,4,5,-2,-10]));*/

/*function repeatStr (n, s) {
    return s.repeat(n);
}

console.log(repeatStr(4, "hello"));*/

/*function removeChar(str){
    return str.slice(1, -1);
}

console.log(removeChar("zdqdqzdqzd"));*/

/*function squareSum(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]*numbers[i];
}
  return sum;
}*/

/*function findSmallestInt(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt([2,84,-2,308]));*/

/*const stringToNumber = function(str){
  let num = Number(str);
  return num;
}*/

var summation = function (num) {
  return Math.sumPrecise(num);
}

console.log(summation(40));