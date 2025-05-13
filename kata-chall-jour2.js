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
/*function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}*/

// Is he gonna survive?

/*function hero(bullets, dragons){
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

function hero(bullets, dragons){
  return bullets >= dragons * 2;
}*/

// Count of positives / sum of negatives

/*function countPositivesSumNegatives(input) {
  let sum = 0;
  let pos = 0;
  if (input === null || input.length === 0) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    let nb = input[i];
    if (nb > 0) {
      pos++;
    } else if (nb < 0) {
      sum += nb;
    }
  }
  return [pos, sum];
}*/

// DNA to RNA Conversion

/*function DNAtoRNA(dna) {
 return dna.replaceAll("T", "U");
}*/

// Find Maximum and Minimum Values of a List

/*var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}*/

// You only need one - Beginner

/*function check(a, x) {
  return a.includes(x);
}*/

// Fake Binary

/* j'ai utilisé une fonction ternaire pour celui-ci dans .map
function fakeBin(x){
  return x.split('').map((a)=> Number(a) < 5 ? '0' : '1').join('');
}*/

// Convert a string to an array

/*function stringToArray(string){
  return string.split(" ");
}*/

// Count by X

/*function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
   z.push(x * i);
  }
  return z;
}*/

// Reversed sequence

/*const reverseSeq = n => {
  let z = [];
  for (let i = 0; i < n; i++) {
    z.push(n - i);
  }
  return z;
};*/

// Rock Paper Scissors!
/* utilisation d'objets pour mettre une règle en place dans le pierre feuille sciseaux
const rps = (p1, p2) => {
  let rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock", 
  };
  if (p1 === p2) {
    return "Draw!";
  } else if (rules[p1] === p2) {
    return "Player 1 won!" ;
  } else {
    return "Player 2 won!";
  }
};*/

// If you can't sleep, just count sheep!!

/*var countSheep = function (num){
  let count = "";
  for (let i = 1; i <= num; i++) {
    count += `${i} sheep...`;
  }
  return count;
}*/

// Grasshopper - Grade book

/*function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}*/

// Grasshopper - Personalized Message

/*function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}*/

// Transportation on vacation

/*function rentalCarCost(d) {
  let amount = 40 * d;
  return d >= 7 ? amount - 50 : d >= 3 ? amount - 20 : amount;
}*/

// Quarter of the year
/* fonction ternaire = bro-ken
const quarterOf = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}*/

// Remove exclamation marks

/*function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}*/

// Volume of a Cuboid

/*class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}*/

// Total amount of points

/*function points(games) {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    let [x,y] = games[i].split(":");
    x = Number(x);
    y = Number(y);
   total += x > y ? 3 : x === y ? 1 : 0;
  }
  return total;
}*/ 

// Area or Perimeter

/*const areaOrPerimeter = function(l , w) {
  return l === w ? w * l : (l + w) * 2;
};*/

// Training JS #1: create your first JS function and print "Hello World!"

/*function helloWorld() {
  let str = "Hello World!";
  console.log(str);
}*/
// Training JS #2: Basic data types--Number



