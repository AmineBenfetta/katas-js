// Century From Year

/*function century(year) {
  return Math.ceil(year/100);
}*/

// Beginner - Lost Without a Map

/*function maps(x){
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

console.log(maps([1,2,3]));*/

/* réponse simplifié
function maps(x){
  return x.map(n => n * 2);
}*/

// Convert number to reversed array of digits

/*function digitize(n) {
    let str = String(n);
    let stock = str.split('').reverse();
    return stock.map(Number);
}

console.log(digitize(35231)); 

version simplifié 
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}*/

// Sum Arrays

/*function sum (numbers) {
    let somme = 0;
    for (let i = 0; i < numbers.length; i++) {
            somme += numbers[i];
    }
    return somme;
}*/

// Opposites Attract

/*function lovefunc(flower1, flower2){
  if (flower1 % 2 === 1 && flower2 % 2 === 0) {
    return true;
  } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
    return true;
  } else {
    return false;
  }
  // moment of truth
}

solution simple 
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}*/

// Beginner Series #1 School Paperwork

/*function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}*/

// MakeUpperCase

/*function makeUpperCase(str) {
  return str.toUpperCase(); 
}*/

// Beginner Series #2 Clock

/*function past(h, m, s){
    return s * 1000 + m * 60 * 1000 + h * 60 * 60 * 1000;
}
console.log(past(0,1,1));

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}*/

// Are You Playing Banjo?

/*function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`;
  } else {
  return `${name} does not play banjo`;
}
}*/

//Simple multiplication


/*function simpleMultiplication(number) {
    if ( number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}*/

// Abbreviate a Two Word Name

/*function abbrevName(name){
  return name.split(" ").map((n)=>n[0]).join(".").toUpperCase();
}

console.log(abbrevName("Sam Harris")); */

// A Needle in the Haystack

/*function findNeedle(haystack) {
return 'found the needle at position ' + haystack.indexOf("needle", 0);
}*/

// Invert values

/*function invert(array) {
   return array.map(n => -n);
}*/

// Calculate average

/*function findAverage(array) {
  let sum = 0
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum / array.length;
}*/

// Sentence Smash

/*function smash (words) {
   return words.join(" ");
};*/

// Beginner - Reduce but Grow

/*function grow(x){
  let product = 1;
  for (let i = 0; i < x.length; i++) {
    product *= x[i];
  }
  return product;
}*/

// How good are you really?

/*function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  if (sum / classPoints.length > yourPoints) {
    return false; 
  } else if (sum / classPoints.length < yourPoints) {
    return true; 
  } else {
    return false;
  }
}*/

// 
