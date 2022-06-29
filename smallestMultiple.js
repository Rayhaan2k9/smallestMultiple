const MathGcd = require("./Math.gcd");


function smallestMultiple(num) {
 let answer = 1

 //loop through all numbers up to given number
 for(let i = 1; i <= num; i++) {
     //multiply the current answer by each number in iteration divided by the greatest common divisor using Mathgcd function
     answer *= i/MathGcd(i, answer)
 }
 return answer
}

console.log(smallestMultiple(20));
//returns 232792560

module.exports = smallestMultiple