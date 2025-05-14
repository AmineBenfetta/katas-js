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

//