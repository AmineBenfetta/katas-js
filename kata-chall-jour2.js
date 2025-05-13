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
